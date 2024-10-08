from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required

from .models import Post
from .forms import PostForm

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


@login_required
def createView(request):
    # if not request.user.is_authenticated:
    #     return redirect('index')

    if request.method == 'POST':
        form = PostForm(request.POST)
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
        form = PostForm()

        # for initial/default values
        # form = PostForm(initial={
        #     "title": post_obj.title,
        #     'body': post_obj.body
        # })

    return render(request, 'blog/create.html', {
        "form": form
    })


@login_required
def updateView(request, post_id):
    post = Post.objects.get(pk=post_id)

    if request.method == 'POST':
        print('form is submitted')
        form = PostForm(request.POST, instance=post)
        if form.is_valid():
            form.save()
            return redirect(post.get_absolute_url())
    else:
        print('form is rendered')  
        form = PostForm(instance=post)

        return render(request, 'blog/create.html', {
            "form": form
        })


@login_required
def deleteView(request, post_id):
    # error handling
    try:
        post = Post.objects.get(pk=post_id)
        
    except Post.DoesNotExist:
        return redirect('index')
    
    if request.method == 'POST':
        post.delete()
        return redirect('index')
    
    return render(request, 'blog/delete.html', {
        "post": post
        })