from django.urls import path

from . import views

urlpatterns = [
    path('', views.homeView, name='index'),
    path('details/<int:post_id>/', views.detailView, name='details'),
    path('create/', views.createView, name='create')
]