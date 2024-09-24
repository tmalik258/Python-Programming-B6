
from django.shortcuts import render
from django.views.generic.base import TemplateView


# def homeView(request):
# 	message = 'hello world!'

# 	return HttpResponse(message) # returning and httpresponse object

class HomeView(TemplateView): # pascal case
    template_name = 'index.html' # snake case

def aboutView(request):
    return render(request, 'about.html')

# def aboutView(request): # camel case
#     message = 'this is about section of our project'
    
#     return HttpResponse(message)

