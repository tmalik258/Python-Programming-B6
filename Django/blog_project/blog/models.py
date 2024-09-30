from django.db import models
# from django.contrib.auth.models import User       # how to import User model

# from core import settings
from django.conf import settings        # recommended


class Post(models.Model):
    # author = models.ForeignKey("auth.User")           # another way to link Models
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    body = models.TextField()
    

# models.CASCADE            # on deletion of User/Parent object, Product/Child objects will also be deleted with an alert message
# models.PROTECT            # can't delete Parent or Foreign Object cuz of relation with Product Model
# models.SET_NULL           # on deletion of User/Parent object, author field will have null value
