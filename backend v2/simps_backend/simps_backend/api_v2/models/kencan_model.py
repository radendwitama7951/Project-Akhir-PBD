from django.db import models
from django.conf import settings

from simps_backend.api_v2.models.pasangan_model import Pasangan

class StatusKencan(models.Model):
    status_kencan_id = models.IntegerField(primary_key=True)
    keterangan = models.CharField(max_length=32)

    def __str__(self):
        return self.status_kencan_id

class Kencan(models.Model): 
    kencan_id = models.AutoField(primary_key=True)
    tanggal = models.DateField()
    jam = models.TimeField(auto_now_add=False, auto_now=False)
    tempat = models.TextField()
    pasangan = models.ForeignKey(
            Pasangan,
            on_delete=models.CASCADE,
            verbose_name="Relasi banyak ke satu dengan id pasangan"
    )

    biaya = models.IntegerField()
    status_kencan = models.ForeignKey(
            StatusKencan,
            on_delete=models.CASCADE,
            verbose_name="Relasi satu banyak ke satu"
    )

    def __str__(self):
        return '%d' % (self.kencan_id)




