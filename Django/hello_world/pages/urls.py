from django.urls import path

from pages.views import HomeView, aboutView

urlpatterns = [
 path('', HomeView.as_view(), name='index'),
 path('about/', aboutView, name='about'),
]