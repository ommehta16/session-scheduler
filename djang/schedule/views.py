from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
context = {
        "lol": "a"
}
# Create your views here.
def index(request):
    context["lol"] += 'b'

    return render(request,"schedule/index.html", context)