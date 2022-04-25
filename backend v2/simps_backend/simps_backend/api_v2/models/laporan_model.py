from django.db import models


class Laporan (models.Model):
    laporan_id = models.AutoField(primary_key=True)
    judul = models.CharField(max_length=128)
    deskripsi = models.TextField()
    # labels = models.CharField(validators=validators.int_list_validator) # Array of labels


    def __str__(self):
        return '%s' % (self.judul)
