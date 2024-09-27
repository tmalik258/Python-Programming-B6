from django.db import models

# Create your models here.

class Post(models.Model):
    title = models.TextField(max_length=500)
    body = models.TextField(max_length=500)

    def __str__(self):
        return self.body