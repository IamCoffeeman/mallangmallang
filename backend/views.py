from codes.Rag import Rag
from django.http import HttpResponse
rag = Rag()

def answer(request):
    qes = request.GET.get("qes")
    re = rag.getAnswer(qes, 5)
    print(re)
    return HttpResponse(re)

# str(re.split("\n"))[2:-2]