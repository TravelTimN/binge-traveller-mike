from django.shortcuts import render


def home(request):
    """ A view to return the home page """
    template = "home/index.html"
    context = {}
    return render(request, template, context)
