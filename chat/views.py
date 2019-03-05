from rest_framework.decorators import api_view
from rest_framework.response import Response
import random
from django.conf import settings


@api_view()
def home(request):
    rand_int = random.randint(1, 100)
    env = settings.ENV
    msg = "This is a secret message. Random int: {}. Current environment: {}".format(rand_int, env)
    return Response({"message": msg, "int": rand_int}, content_type="application/json")
