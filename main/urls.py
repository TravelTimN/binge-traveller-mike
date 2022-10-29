import os
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from .views import handler404, handler500

urlpatterns = [
    path(f"{os.environ.get('ADMIN_URL')}/", admin.site.urls),
    path(f"{os.environ.get('AUTH_URL')}/", include("allauth.urls")),
    path("profile/", include("accounts.urls")),
    path("tinymce/", include("tinymce.urls")),
    path("", include("home.urls")),
    path("about/", include("about.urls")),
    path("contact/", include("contact.urls")),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

handler404 = "main.views.handler404"
handler500 = "main.views.handler500"
