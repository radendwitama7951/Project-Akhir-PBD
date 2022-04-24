from django.db import models
from django.conf import settings

class StatusPasangan (models.Model):
    status_pasangan_id = models.IntegerField(primary_key=True)
    keterangan = models.CharField(max_length=32)

    def __str__(self):
        return self.status_pasangan_id

class Pasangan(models.Model):

    pasangan_id = models.AutoField(primary_key=True)
    first_name = models.CharField(max_length=32)
    last_name = models.CharField(max_length=32)
    special_name = models.CharField(max_length=32)
    avatar = models.URLField()
    kencan_terakhir = models.DateField()
    status_pasangan = models.ForeignKey(
            StatusPasangan, 
            on_delete=models.CASCADE,
            verbose_name='Relasi ke tabel StatusPasangan'
    )

    def __str__(self):
        return self.pasangan_id


