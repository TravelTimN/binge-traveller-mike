import datetime
from django.shortcuts import render, redirect, reverse
from django.conf import settings
from django.contrib import messages
from django.core.mail import send_mail
from django.template.loader import render_to_string
from django_countries.data import COUNTRIES
from .forms import ContactForm


def contact(request):
    """ A view to return the contact page """
    contact_form = ContactForm(request.POST or None)
    if request.method == "POST":
        if contact_form.is_valid():
            messages.success(
                request,
                "Cheers! I'll get back to you soon!"
            )

            # convert instagram and country responses, if available
            instagram = request.POST.get("instagram") if request.POST.get("instagram") else "N/A"
            if instagram != "N/A":
                instagram = f"https://www.instagram.com/{instagram}"
            country = request.POST.get("country") if request.POST.get("country") else "N/A"
            if country != "N/A":
                country = COUNTRIES[country]

            # form data collection
            form_context = {
                "name": request.POST.get("name"),
                "email": request.POST.get("email"),
                "instagram": instagram,
                "country": country,
                "message": request.POST.get("message"),
            }

            # send email
            send_mail(
                "New Message from Binge Traveller website",
                render_to_string(
                    "contact/emails/email_to_mike.txt",
                    {"form_context": form_context}
                ),
                settings.DEFAULT_FROM_EMAIL,
                [settings.DEFAULT_OWNER_EMAIL],  # to Mike
                # [settings.DEFAULT_FROM_EMAIL],  # to us
            )

            return redirect(reverse("home"))
    template = "contact/contact.html"
    context = {
        "contact_form": contact_form,
    }
    return render(request, template, context)
