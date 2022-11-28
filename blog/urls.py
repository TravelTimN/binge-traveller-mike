from django.urls import path
from . import views

urlpatterns = [
    path("", views.blog, name="blog"),
    path(
        "<slug:country>/<int:year>/<int:month>/<int:day>/<int:id>/<slug:slug>/",  # noqa
        views.post, name="post"
    ),
    path("post/new/", views.post_new, name="post_new"),
    path("post/new/submit/", views.post_submit, name="post_submit"),
    path("post/edit/<int:id>/", views.post_edit, name="post_edit"),
]
