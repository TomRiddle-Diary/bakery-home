from django.shortcuts import render

def index(request):
    return render(request, 'bakery/index.html')

def menu(request):
    return render(request, 'bakery/menu.html')

def access(request):
    return render(request, 'bakery/access.html')