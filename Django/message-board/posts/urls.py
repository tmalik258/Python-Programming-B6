from django.urls import path

from posts.views import homeView

urlpatterns = [
    path('', homeView, name='index'),
]