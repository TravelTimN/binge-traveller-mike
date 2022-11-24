from django.shortcuts import get_object_or_404, render, redirect, reverse
from django.contrib import messages
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from django_countries import countries as countrylist
from .models import Post, PostImage


def get_country_list(posts):
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
    return countries


def get_archive_months(posts):
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
    return months


def blog(request):
    """ A view to return the blog page """
    # grab only published blog posts
    posts = Post.objects.filter(status="published")

    # sidebar menus
    countries = get_country_list(posts)
    months = get_archive_months(posts)

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


def blog_post(request, country, year, month, day, id, slug):
    """ A view to return a specific blog post details """
    # grab only the specific blog post
    post = get_object_or_404(Post, id=id)
    if post.status != "published":
        messages.error(request, "Oops! That blog post is not available.")
        return redirect(reverse("blog"))

    # grab images related to this blog post
    images = PostImage.objects.filter(post=post)

    # grab only published blog posts
    posts = Post.objects.filter(status="published")
    # sidebar menus
    countries = get_country_list(posts)
    months = get_archive_months(posts)

    template = "blog/blog_post.html"
    context = {
        "post": post,
        "images": images,
        "countries": countries,
        "months": months,
    }
    return render(request, template, context)
