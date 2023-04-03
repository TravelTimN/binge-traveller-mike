from django import forms
from django_countries.fields import CountryField
from django_countries.widgets import CountrySelectWidget


class ContactForm(forms.Form):
    """
        Form to allow users to contact the site admin.
    """
    name = forms.CharField(
        label="Your Name",
        min_length=5,
        max_length=75,
        widget=forms.TextInput(),
        required=True
    )
    email = forms.CharField(
        label="Email Address",
        min_length=5,
        max_length=75,
        widget=forms.EmailInput(),
        required=True
    )
    instagram = forms.CharField(
        label="Instagram",
        min_length=4,
        max_length=30,
        widget=forms.TextInput(),
        required=False
    )
    country = CountryField(
        blank_label="select country",
        blank=True,
    ).formfield()
    message = forms.CharField(
        label="Message to Binge Traveller",
        widget=forms.Textarea(attrs={"rows":"5"}),
        required=True
    )

    class Meta:
        fields = "__all__"

    def __init__(self, *args, **kwargs):
        """ Add placeholders to use floating-labels in Bootstrap5 """
        super().__init__(*args, **kwargs)

        # add placeholder for floating-labels, and form-control class
        for field in self.fields:
            this_widget = self.fields[field].widget
            this_widget.attrs["class"] = "form-control"
            if field != "country":
                this_widget.attrs["placeholder"] = field
