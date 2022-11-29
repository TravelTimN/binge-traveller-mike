from django import forms
from django.forms.widgets import (
    EmailInput, NumberInput, PasswordInput, TextInput, URLInput
)
from tinymce.widgets import TinyMCE
from .models import Post


class DateInput(forms.DateInput):
    input_type = "date"


class PostForm(forms.ModelForm):
    """
        Form to allow admins to manage Posts.
    """
    class Meta:
        model = Post
        widgets = {
            "start_date": DateInput(),
            "end_date": DateInput(),
            "body": TinyMCE(),
        }
        fields = "__all__"
        exclude = ("views", "date_created", "date_updated",)

    def __init__(self, *args, **kwargs):
        # https://stackoverflow.com/a/72025478
        super().__init__(*args, **kwargs)

        # hide slug by default (auto-generated from title)
        self.fields["slug"].widget = forms.HiddenInput()

        # empty/blank labels (ignore "----------")
        self.fields["route_type"].choices = [("", "Select Route"),] + list(self.fields["route_type"].choices)[1:]
        self.fields["status"].choices = [("", "Select Status"),] + list(self.fields["status"].choices)[1:]

        # rating range/slider
        self.fields["rating"].widget = forms.NumberInput(
            attrs={
                "type": "range",
                "step": "1",
                "min": "1",
                "max": "10",
            }
        )

        # add placeholder for floating-label functionality
        # (email, number, password, search, tel, text, url)
        valid_types = (EmailInput, NumberInput, PasswordInput, TextInput, URLInput)
        for field in self.fields:
            this_widget = self.fields[field].widget
            if isinstance(this_widget, valid_types):
                this_widget.attrs["placeholder"] = field
            if field == "end_date":
                this_widget.attrs["disabled"] = True
            if field == "rating":
                this_widget.attrs["class"] = "form-control form-range"  # range slider
            else:
                this_widget.attrs["class"] = "form-control"
            if field == "body":
                this_widget.attrs["placeholder"] = "Blog Post Content"
