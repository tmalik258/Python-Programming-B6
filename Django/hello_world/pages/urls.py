from django.urls import path

from pages.views import HomeView, aboutView

urlpatterns = [
 path('home/', HomeView.as_view()),
 path('about/', aboutView),
]