from codes.Rag import Rag
from django.http import HttpResponse
rag = Rag()

def answer(request):
    qes = request.GET.getlist("qes")[0]
    re = rag.getAnswer(qes, 5).split("\n")
    print(re)
    return HttpResponse(re)