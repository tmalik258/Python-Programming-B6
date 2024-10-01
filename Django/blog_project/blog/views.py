from django.shortcuts import render

from .models import Post

# Create your views here.
def homeView(request):
    post_list = Post.objects.all()

    context = {
        "posts": post_list
    }

    return render(request, 'blog/index.html', context)


def detailView(request, post_id):
    post = Post.objects.get(id=post_id)         # pk=post_id 

    return render(request, 'blog/details.html', {
        "post": post
    })