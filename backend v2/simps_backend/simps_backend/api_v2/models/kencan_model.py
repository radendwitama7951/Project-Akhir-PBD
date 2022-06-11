from django.db import models

from simps_backend.api_v2.models.pasangan_model import Pasangan

class StatusKencan(models.Model):
    status_kencan_id = models.IntegerField(primary_key=True)
    """
    0 Terjadwal
    1 Sedang Berlangsung
    2 Terlaksana
    3 Batal
    4 Menjadwalkan Ulang
    """

    keterangan = models.CharField(max_length=32)

    def __str__(self):
        return '%s' % (self.keterangan)

class Kencan(models.Model): 
    kencan_id = models.AutoField(primary_key=True)
    tanggal = models.DateField()
    jam = models.TimeField(auto_now_add=False)
    tempat = models.TextField()
    pasangan_id = models.IntegerField(db_column="pasangan_id", null=True)
    pasangan = models.CharField (max_length=32)
    """
    pasangan = models.ForeignKey(
            Pasangan,
            on_delete=models.CASCADE,
            verbose_name="Relasi banyak ke satu dengan id pasangan"
    )
    """

    biaya = models.IntegerField()

    status_kencan_id = models.IntegerField(db_column="status_kencan_id", null=True)
    status_kencan = models.CharField(max_length=32)


    """
    status_kencan_id = models.ForeignKey(
            'StatusKencan',
            on_delete=models.CASCADE,
            verbose_name="Relasi satu banyak ke satu",
            db_column="status_kencan_id"
    )
    """


    class Meta:
        verbose_name_plural = 'Kencan'

    def __str__(self):
        return '%d' % (self.kencan_id)




