from django.contrib import admin
from sockets.views import HomePageView
from django.urls import include, path


urlpatterns = [
    path('', HomePageView.as_view()),
    path('admin/', admin.site.urls),
    path('chat/', include('chat.urls')),

]
