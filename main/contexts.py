from django.conf import settings
from urllib.parse import urlencode


# leaflet map api
def map_url_api(request):
    return {"map_url": settings.MAP_URL}


# get current page args
def get_args(request):
    args = request.GET.copy()
    if "page" in args:
        del args["page"]
    return {"get_args": "&{0}".format(args.urlencode())}
