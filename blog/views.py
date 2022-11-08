from django.shortcuts import render
from django_countries import countries as countrylist
from .models import Post


def blog(request):
    """ A view to return the blog page """
    # grab only published blog posts
    posts = Post.objects.filter(status="published")

    # grab unique list of published countries
    published_countries = posts.order_by().values("country").distinct()
    countries = []
    for country in published_countries:
        countries.append(dict(countrylist)[country["country"]])

    # grab unique list of published months
    published_months = posts.datetimes("date_created", "month", order="DESC")
    months = []
    for month in published_months:
        months.append({"full": month.strftime("%B %Y"), "short": month.strftime("%m/%y")})

    template = "blog/blog.html"
    context = {
        "posts": posts,
        "countries": countries,
        "months": months,
    }
    return render(request, template, context)
