from django.http.response import Http404
from django.db import connection
from simps_backend.api_v2.models.utils_model import *
from simps_backend.settings import SQLSCRIPTS_FOLDER



# TanggalPenting
def getAllTanggalPenting():
    sql = open(SQLSCRIPTS_FOLDER+'/utils_scripts/getAllTanggalPenting.sql')

    res = []


    with connection.cursor() as cursor:
        cursor.callproc('get_tanggal_penting')
        res = cursor.fetchall()

    res = [TanggalPenting(
            tanggal=tanggal, 
            tipe=tipe,
            deskripsi=deskripsi) 
            for tanggal,tipe,deskripsi in res]

    return res
