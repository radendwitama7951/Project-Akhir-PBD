from django.db import models

class StatusPasangan (models.Model):
    status_pasangan_id = models.IntegerField(primary_key=True)
    keterangan = models.CharField(max_length=32)

    def __str__(self):
        return self.status_pasangan

class Pasangan(models.Model):

    pasangan_id = models.AutoField(primary_key=True)
    first_name = models.CharField(max_length=32)
    last_name = models.CharField(max_length=32)
    special_name = models.CharField(max_length=32)
    avatar = models.URLField()
    ulang_tahun =  models.DateField(null=True, blank=True)
    tanggal_jadian =  models.DateField(null=True, blank=True)
    kencan_terakhir = models.DateField(null=True, blank=True, default=None)
    status_pasangan_id = models.IntegerField(db_column="status_pasangan_id", null=True)

    status_pasangan = models.CharField(max_length=32, default=None)
    """
    status_pasangan = models.ForeignKey(
            'StatusPasangan', 
            related_name='ketarangan',
            on_delete=models.CASCADE,
            verbose_name='Relasi ke tabel StatusPasangan'
    )
    """


    class Meta:
        verbose_name_plural = 'Pasangan'

    def __str__(self):
        return '%s %s' % (self.first_name, self.last_name)


