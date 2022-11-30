import os
import datetime
from slugify import slugify
from django.db import models
from django.conf import settings
from django.core.validators import MinValueValidator, MaxValueValidator
from django_countries.fields import CountryField
from tinymce.models import HTMLField
from PIL import Image, ImageOps

REPLACEMENT_FILE = True
LOCATION_CHANGED = False


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
    max_images = models.PositiveIntegerField(
        default=20,
        validators=[MinValueValidator(0), MaxValueValidator(20)],
        null=False, blank=False
    )
    views = models.IntegerField(default=0)
    date_created = models.DateTimeField(auto_now_add=True)
    date_updated = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["-date_created"]

    def __str__(self):
        return self.title


def upload_to(instance, filename):
    """
        Slugify country/destination-YYMMDD-HHMMSS-ms.webp
    """
    country_slug = slugify(instance.post.country.name)
    destination_slug = slugify(instance.post.destination)
    now = datetime.datetime.now().strftime("%y%m%d-%H%M%S-%f")
    # set the Model instance of the image
    new_filename = f"uploads/{country_slug}/{destination_slug}-{now}.webp"
    instance.image = new_filename
    return new_filename

class PostImage(models.Model):
    post = models.ForeignKey(Post, on_delete=models.CASCADE, null=False, blank=False)
    image = models.ImageField(
        default="no-image.png", upload_to=upload_to, blank=False, null=False
    )

    def image_preview(self):
        from django.utils.html import format_html
        return format_html(f"<img src='{self.image.url}' height='150'>")

    class Meta:
        ordering = ["post__country", "post__title", "image"]

    def __str__(self):
        return self.post.title

    def replace_file(self, boolean):
        global REPLACEMENT_FILE
        REPLACEMENT_FILE = boolean

    def change_location(self, boolean):
        global LOCATION_CHANGED
        LOCATION_CHANGED = boolean

    def save(self, *args, **kwargs):
        """
        - installed 'django-cleanup' to auto-remove old image.
        - installed 'pillow' to compress image sizes.
        - above does not apply to .gif files.
        """
        super(PostImage, self).save(*args, **kwargs)
        if REPLACEMENT_FILE or LOCATION_CHANGED:
            img = Image.open(self.image)
            # continue if image format is not .gif
            if img.format.lower() != "gif":

                # https://github.com/python-pillow/Pillow/issues/4703#issuecomment-645219973
                img = ImageOps.exif_transpose(img)  # prevent auto-rotate 90°

                # https://stackoverflow.com/a/53644302
                img = img.convert("RGB")  # required for .webp

                # get image file size
                img_size = int(os.stat(self.image.path).st_size)

                # generate upload_to file-location (if updating image)
                img_name = upload_to(self, self.image)
                img_path = f"{settings.MEDIA_ROOT}/{img_name}"
                country = img_name.split("/")[1]
                img_dir = f"{settings.MEDIA_ROOT}/uploads/{country}"

                # check if country/ dir already exists; create it, if not
                if not os.path.exists(img_dir):
                    os.mkdir(img_dir)
                mib = 1048576  # 1MiB = 1048576 bytes

                # save PostImage model instance and image
                if img_size > mib:
                    # if filesize >1MiB, compress image and save
                    img.save(img_path, img.format, quality=50, optimize=True)
                else:
                    # no compression, but save original quality
                    img.save(img_path, img.format)

                super(PostImage, self).save(*args, **kwargs)
