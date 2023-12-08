from django.http import HttpResponse
# Create your views here.

def answer(request):
    return HttpResponse("test")