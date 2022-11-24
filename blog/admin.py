from django.contrib import admin
from .models import Post, PostImage


class PostImageAdmin(admin.StackedInline):
    model = PostImage

@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    inlines = [PostImageAdmin]
    list_display = ("title", "destination", "country", "start_date", "end_date", "status",)
    prepopulated_fields = {"slug": ("title",)}


@admin.register(PostImage)
class PostImageAdmin(admin.ModelAdmin):
    list_display = ("id", "country", "destination", "title", "image_url", "image_preview",)

    @admin.display()
    def image_url(self, response):
        return response.image.name

    def country(self, response):
        return response.post.country.name

    def destination(self, response):
        return response.post.destination

    def title(self, response):
        return response.post.title
