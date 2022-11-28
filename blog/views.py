import random
from django.shortcuts import get_object_or_404, render, redirect, reverse
from django.contrib import messages
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from django_countries import countries as countrylist
from .models import Post, PostImage
from .forms import PostForm
from main.decorators import validate_user


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

    post_list = []
    # grab a random post image
    for post in posts:
        # grab a random image from each post, if available
        imgs = list(PostImage.objects.filter(post=post))
        img = None
        if len(imgs) > 0:
            # image found
            random_img = random.sample(imgs, 1)
            img = random.sample(imgs, 1)[0]
        else:
            # no image found
            img = None
        post_list.append({
            "post": post,
            "img": img,
        })

    # pagination
    page = request.GET.get("page", 1)
    paginator = Paginator(post_list, 10)  # number of posts per paginated page
    try:
        post_list = paginator.page(page)
    except PageNotAnInteger:
        post_list = paginator.page(1)
    except EmptyPage:
        post_list = paginator.page(paginator.num_pages)

    template = "blog/blog.html"
    context = {
        "posts": post_list,
        "countries": countries,
        "months": months,
    }
    return render(request, template, context)


def post(request, country, year, month, day, id, slug):
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

    # increment page views
    post.views += 1
    post.save()

    template = "blog/post.html"
    context = {
        "post": post,
        "images": images,
        "countries": countries,
        "months": months,
    }
    return render(request, template, context)


@validate_user()
def post_new(request):
    """ A view to add a new blog post """
    post_form = PostForm(request.POST or None, request.FILES or None)
    if request.method == "POST":
        if post_form.is_valid():
            # save the post form data
            imgs_length = request.POST.get("length")
            new_post = post_form.save()

            # grab new post data for redirect url
            country = new_post.country
            year = new_post.start_date.strftime("%Y")
            month = new_post.start_date.strftime("%m")
            day = new_post.start_date.strftime("%d")
            post_id = new_post.pk
            slug = new_post.slug

            # get each image submitted as well
            # (partial inspiration from YouTube - The Pylot)
            images = []
            for n in range(0, int(imgs_length)):
                images.append(PostImage(
                    post=new_post,
                    image=request.FILES.get(f"image-{n}")
                ))
            PostImage.objects.bulk_create(images)
            messages.success(request, f"{new_post.title} added!")
            return redirect(post, country, year, month, day, post_id, slug)
        messages.error(request, "Error: Please Try Again.")
    template = "blog/post_new.html"
    context = {
        "post_form": post_form,
    }
    return render(request, template, context)


@validate_user()
def post_submit(request):
    """ A view to get the most recently submitted blog post """
    last_post = Post.objects.order_by("id").last()
    # grab post data for redirect url
    country = last_post.country
    year = last_post.start_date.strftime("%Y")
    month = last_post.start_date.strftime("%m")
    day = last_post.start_date.strftime("%d")
    post_id = last_post.id
    slug = last_post.slug
    return redirect(post, country, year, month, day, post_id, slug)


@validate_user()
def post_edit(request, id):
    """ A view to edit an existing blog post """
    get_post = get_object_or_404(Post, id=id)
    post_form = PostForm(request.POST or None, request.FILES or None, instance=get_post)
    if request.method == "POST":
        if post_form.is_valid():
            # save the post form data
            # imgs_length = request.POST.get("length")
            existing_post = post_form.save()

            # grab new post data for redirect url
            country = existing_post.country
            year = existing_post.start_date.strftime("%Y")
            month = existing_post.start_date.strftime("%m")
            day = existing_post.start_date.strftime("%d")
            post_id = existing_post.pk
            slug = existing_post.slug

            # # get each image submitted as well
            # # (partial inspiration from YouTube - The Pylot)
            # images = []
            # for n in range(0, int(imgs_length)):
            #     images.append(PostImage(
            #         post=existing_post,
            #         image=request.FILES.get(f"image-{n}")
            #     ))
            # PostImage.objects.bulk_create(images)
            messages.success(request, f"{existing_post.title} updated!")
            print(f"{existing_post.title} updated!")
            return redirect(post, country, year, month, day, post_id, slug)
        messages.error(request, "Error: Please Try Again.")
    template = "blog/post_edit.html"
    context = {
        "post": get_post,
        "post_form": post_form,
    }
    return render(request, template, context)
