from django.http.response import Http404
from django.db import connection
from simps_backend.api_v2.models.laporan_model import Laporan
from simps_backend.settings import SQLSCRIPTS_FOLDER

# @all()
def getAllLaporan():
    sql = open(SQLSCRIPTS_FOLDER+'/laporan_scripts/getAllLaporan.sql')
    return Laporan.objects.raw(sql.read())


# @get(id)
def getLaporanById(laporan_id):
    sql = open(SQLSCRIPTS_FOLDER+'/laporan_scripts/getLaporanById.sql')
    return Laporan.objects.raw(sql.read(), [laporan_id])

# @post(data)
def createLaporan(data):
    sql = open(SQLSCRIPTS_FOLDER+'/laporan_scripts/createLaporan.sql')
    data = list(data.values())

    with connection.cursor() as cursor:
        cursor.execute(sql.read(), data)
        cursor.fetchone()


# @delete(id)
def deleteLaporanById(laporan_id):
    sql = open(SQLSCRIPTS_FOLDER+'/laporan_scripts/deleteLaporanById.sql')
    with connection.cursor() as cursor:
        cursor.execute(sql.read(), [laporan_id])
        cursor.fetchone()

# update(id, data)
def updateLaporanById(laporan_id, data):
    sql = open(SQLSCRIPTS_FOLDER+'/laporan_scripts/updateLaporanById.sql')
    data = list(data.values())
    data.append(laporan_id)
    print(data)

    with connection.cursor() as cursor:
        cursor.execute(sql.read(), data)
        cursor.fetchone()

