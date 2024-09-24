from django.http import HttpResponse
from django.views.generic import TemplateView

# Create your views here

# def homeView(request):
# 	message = 'hello world!'

# 	return HttpResponse(message) # returning and httpresponse object

class HomeView(TemplateView):
    template_name = 'index.html'
    

def aboutView(request):
    message = 'this is about section of our project'
    
    return HttpResponse(message)