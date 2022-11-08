from django.contrib import admin
from .models import Post


@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display = ("title", "destination", "country", "start_date", "end_date", "status",)
    prepopulated_fields = {"slug": ("title",)}
