from django.shortcuts import render


def about(request):
    """ A view to return the about page """
    template = "about/about.html"
    context = {}
    return render(request, template, context)
