from django.views import static
from django.views.generic import TemplateView


# Serves the index page
class HomePageView(TemplateView):
    def get(self, request, **kwargs):
        return static.serve(request, 'index.html', 'staticfiles')
