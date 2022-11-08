from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator
from django_countries.fields import CountryField
from tinymce.models import HTMLField


class Post(models.Model):
    STATUS = (("published", "published"), ("draft", "draft"))
    ROUTE = (("non-stop", "non-stop"), ("direct", "direct"), ("connecting", "connecting"))

    title = models.CharField(max_length=100, unique=True, null=False, blank=False)
    slug = models.SlugField(null=False, blank=False)
    country = CountryField(blank_label="Country", null=False, blank=False)
    destination = models.CharField(max_length=100, null=False, blank=False)
    start_date = models.DateField(null=False, blank=False)
    end_date = models.DateField(null=False, blank=False)
    airline = models.CharField(max_length=100, null=False, blank=False)
    route_type = models.CharField(choices=ROUTE, max_length=25, null=False, blank=False)
    departure_airport = models.CharField(max_length=100, null=False, blank=False)
    arrival_airport = models.CharField(max_length=100, null=False, blank=False)
    rating = models.PositiveIntegerField(
        default=10,
        validators=[MinValueValidator(1), MaxValueValidator(10)],
        null=False, blank=False
    )
    status = models.CharField(choices=STATUS, max_length=25, null=False, blank=False)
    body = HTMLField(null=False, blank=False)
    views = models.IntegerField(default=0)
    date_created = models.DateTimeField(auto_now_add=True)
    date_updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title
