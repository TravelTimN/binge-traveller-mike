from django.shortcuts import render


def blog(request):
    """ A view to return the blog page """
    template = "blog/blog.html"
    context = {}
    return render(request, template, context)
