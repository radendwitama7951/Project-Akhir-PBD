from django.db import models
from django.conf import settings


class Berita (models.Model):
    berita_id = models.AutoField(primary_key=True)
    judul = models.CharField(max_length=128)
    tanggal = models.DateField(auto_now=True)
    deskripsi = models.TextField()
    url = models.URLField()
    thumbnail = models.URLField(verbose_name="Url thumbnail")

    def __str__(self):
        return '%s' % (self.judul)
