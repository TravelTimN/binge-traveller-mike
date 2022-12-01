from django.urls import path
from . import views

urlpatterns = [
    path("", views.blog, name="blog"),
    path(
        "<slug:country>/<int:year>/<int:month>/<int:day>/<int:id>/<slug:slug>/",  # noqa
        views.post, name="post"
    ),
    path("post/new/", views.post_new, name="post_new"),
    path(
        "post/new/images/<int:id>/",
        views.post_new_images, name="post_new_images"
    ),
    path("post/edit/<int:id>/", views.post_edit, name="post_edit"),
]
