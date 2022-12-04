from django.shortcuts import render
from blog.models import Post


def home(request):
    """ A view to return the home page """
    posts = Post.objects.filter(status="published").order_by("country").distinct("country")  # noqa
    template = "home/index.html"
    context = {
        "posts": posts,
    }
    return render(request, template, context)
