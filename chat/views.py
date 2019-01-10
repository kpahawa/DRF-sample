from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import ConfigModel


@api_view(http_method_names=['GET'])
def get_backend_url(request):
    config_type = request.GET.get('type', 'local')
    configs = ConfigModel.objects.filter(config_type=config_type)
    if len(list(configs)) > 1:
        raise RuntimeError("too many or too few configs returned for "
                           "config type {}. # of configs returned: {}".format(config_type, len(list(configs))))
    obj = configs[0]  # type: ConfigModel
    x = obj.__dict__
    if x.get('_state'):
        del x['_state']
    return Response(x, content_type="application/json")
