from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader

# Create your views here.
def index(request):

    context = {

    }


    return HttpResponse("epic")
    # return render(request, "polls/index.html",context)


def other(request):
    return HttpResponse("not epic")