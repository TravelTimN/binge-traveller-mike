from django.urls import path
from . import views

urlpatterns = [
    path("", views.blog, name="blog"),
    path(
        "<slug:country>/<int:year>/<int:month>/<int:day>/<int:id>/<slug:slug>/",  # noqa
        views.blog_post, name="blog_post"
    ),
]
