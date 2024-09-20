from django.http import HttpResponse

# Create your views here

def homeView(request):
	message = 'hello world!'

	return HttpResponse(message) # returning and httpresponse object

def aboutView(request):
    message = 'this is about section of our project'
    
    return HttpResponse(message)