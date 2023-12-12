from sentence_transformers import SentenceTransformer, util
import pandas as pd
import pinecone
import openai


class Rag:
    def __init__(self):
        guideFiles = [
            {"eng": "baemin", "kor": "배민"},
            {"eng": "kakao", "kor": "카톡"},
        ]
        self.guide = self.getGuide(guideFiles)
        self.embedder = SentenceTransformer("BM-K/KoSimCSE-roberta-multitask")
        self.embed_guide = self.embedder.encode(self.guide).tolist()
        self.keys = self.getKeys()
        pinecone.init(api_key=self.keys["pinecone"], environment="gcp-starter")
        self.index = pinecone.Index("stepstones-db")
        openai.api_key = self.keys["openai"]

    # guides 폴더에 있는 가이드들을 태그 달아서 하나의 리스트로 가져옴
    def getGuide(self, fileList):
        guide = []
        for file in fileList:
            tmp = pd.read_csv(
                f"./guides/{file['eng']}.txt",
                sep="\n\n",
                names=["text"],
                engine="python",
            )
            tmp["text"] = tmp["text"].apply(lambda x: f"[{file['kor']}] " + x)
            guide += tmp["text"].to_list()
        return guide

    # keys.csv에 저장된 key들을 딕셔너리로 가져옴
    def getKeys(self):
        df = pd.read_csv("./codes/keys.csv")
        keys = {}
        for _, row in df.iterrows():
            keys[row["module"]] = row["key"]
        return keys

    # query에 대해 guide에서 가장 유사한 질문 5개와 prompt 만들어서 리턴
    def makePrompt(self, query, k):
        prompt = """아래 정보들을 참고해서 질문에 대한 답을 알려줘. 정보 부분의 숫자는 질문과 얼마나 유사한지를 나타내는 지표고, 대괄호 안의 단어는 어플 이름이야. 질문과 관련 없는 어플 이름은 사용하지 말고, 질문에 대해 필요한 정보만 사용해. 질문에 대한 답변만 알려 주고, 질문에 대한 적절한 답이 없다면 답변이 불가하다고 답해.\n\n### 질문 ###\n"""

        prompt += query
        for num, sent in enumerate(self.get_sim_topk(query, k)):
            prompt += f'\n\n### 정보{num + 1} ###\n{"%.2f"%sent[0]}\n{sent[1]}'
        return prompt

    # VectorDB로부터 query와 가장 유사한 k개 문장과 score 리턴
    def get_sim_topk(self, query, k):
        query_em = self.embedder.encode(query).tolist()
        result = self.index.query(vector=query_em, top_k=k, include_values=True).matches
        return [[re.score, self.guide[int(re.id)]] for re in result]

    # guide를 VectorDB에 추가, 로직 수정 필요
    def addToVectorDB(self):
        guide_embedding_li = []

        # 항상 전체 삭제하고 만들거나 현재 저장된 벡터 갯수 가져와서 index 부여해야 할 것 같다. idx가 의미가 있는 지 확인 필요.
        for idx, guide in enumerate(self.guide):
            guide_embedding_li.append(
                (
                    str(idx),
                    self.embedder.encode(guide).tolist(),
                    {"info": guide.split(":")[0]},
                )
            )

        self.index.upsert(guide_embedding_li)

    # query와 가장 유사한 k개 문장으로 prompt 만들어서 GPT한테 물어보고 결과 리턴
    def getAnswer(self, query, k):
        prompt = self.makePrompt(query, k)
        response = openai.chat.completions.create(
            # 사용 모델
            model="gpt-3.5-turbo",
            # 전달 메세지
            messages=[{"role": "user", "content": prompt}],
        )
        return response.choices[0].message.content
