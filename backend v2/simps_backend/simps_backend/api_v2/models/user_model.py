from django.db import models
from django.conf import settings

class User (models.Model):
    user_id = models.AutoField(primary_key=True)
    email = models.EmailField()
    first_name = models.CharField(max_length=32)
    last_name = models.CharField(max_length=32)
    password = models.CharField(max_length=128)
    last_login = models.DateTimeField(auto_now_add=True)
     
    def __str__(self):
        return '%s %s' % (self.first_name, self.last_name)

