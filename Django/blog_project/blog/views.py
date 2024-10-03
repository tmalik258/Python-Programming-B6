from django.shortcuts import render, redirect

from .models import Post
from .forms import CreatePostForm

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


def createView(request):
    if request.method == 'POST':
        form = CreatePostForm(request.POST)
        print('method is post or form is submitted')
        
        if form.is_valid():
            form_obj = form.save(commit=False)   
            form_obj.author = request.user
            form_obj.save()
            
            return redirect(form_obj.get_absolute_url())
        else:
            print('form is not valid')

    else:
        print('form is not submitted')
        form = CreatePostForm()

        # for initial/default values
        # form = CreatePostForm(initial={
        #     "title": post_obj.title,
        #     'body': post_obj.body
        # })

    return render(request, 'blog/create.html', {
        "form": form
    })