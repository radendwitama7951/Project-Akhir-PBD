from django.db import models

class User (models.Model):
    user_id = models.AutoField(primary_key=True)
    email = models.EmailField()
    first_name = models.CharField(max_length=32)
    last_name = models.CharField(max_length=32)
    password = models.CharField(max_length=128)
    avatar = models.URLField(default='https://www.petwellnessaz.com/wp-content/uploads/2020/07/blank-profile-picture-973460_640-300x300-1-300x300.png')
    last_login = models.DateTimeField(auto_now_add=True)


    class Meta:
        verbose_name_plural = 'User'
     
    def __str__(self):
        return '%s %s' % (self.first_name, self.last_name)

