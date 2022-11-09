from django.shortcuts import render
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
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
        countries.append(
            {
                "iso": country["country"],
                "full": dict(countrylist)[country["country"]]
            }
        )

    # grab unique list of published months
    published_months = posts.datetimes("date_created", "month", order="DESC")
    months = []
    for month in published_months:
        months.append(
            {
                "full": month.strftime("%B %Y"),
                "short": month.strftime("%Y-%m")
            }
        )

    # filtering (country or date)
    country = None
    date = None
    if request.GET:
        # country
        if "country" in request.GET:
            country = request.GET["country"]
            posts = posts.filter(country=country)

        # date
        if "date" in request.GET:
            year = request.GET["date"].split("-")[0]
            month = request.GET["date"].split("-")[1]
            posts = posts.filter(
                date_created__year=year, date_created__month=month
            )

    # pagination
    page = request.GET.get("page", 1)
    paginator = Paginator(posts, 10)  # number of posts per paginated page
    try:
        posts = paginator.page(page)
    except PageNotAnInteger:
        posts = paginator.page(1)
    except EmptyPage:
        posts = paginator.page(paginator.num_pages)

    template = "blog/blog.html"
    context = {
        "posts": posts,
        "countries": countries,
        "months": months,
    }
    return render(request, template, context)
