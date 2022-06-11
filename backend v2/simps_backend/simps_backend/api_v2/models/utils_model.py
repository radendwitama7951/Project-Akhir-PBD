from django.db import models

# Many2Many
class TanggalPenting(models.Model):
    tanggal = models.DateField(null=True)
    tipe = models.CharField(max_length=32)
    deskripsi = models.TextField(null=True, blank=True)


    



