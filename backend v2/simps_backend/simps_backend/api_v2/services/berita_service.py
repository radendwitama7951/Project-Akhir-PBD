from django.db import connection
from simps_backend.api_v2.models.berita_model import Berita
from simps_backend.settings import SQLSCRIPTS_FOLDER

# @all()
def getAllBerita():
    sql = open(SQLSCRIPTS_FOLDER+'/berita_scripts/getAllBerita.sql')
    return Berita.objects.raw(sql.read())


# @get(id)
def getBeritaById(berita_id):
    sql = open(SQLSCRIPTS_FOLDER+'/berita_scripts/getBeritaById.sql')
    return Berita.objects.raw(sql.read(), [berita_id])

# @post(data)
def createBerita(data):
    sql = open(SQLSCRIPTS_FOLDER+'/berita_scripts/createBerita.sql')
    data = list(data.values())

    with connection.cursor() as cursor:
        cursor.execute(sql.read(), data)
        cursor.fetchone()


# @delete(id)
def deleteBeritaById(berita_id):
    sql = open(SQLSCRIPTS_FOLDER+'/berita_scripts/deleteBeritaById.sql')
    with connection.cursor() as cursor:
        cursor.execute(sql.read(), [berita_id])
        cursor.fetchone()

# update(id, data)
def updateBeritaById(berita_id, data):
    sql = open(SQLSCRIPTS_FOLDER+'/berita_scripts/updateBeritaById.sql')
    data = list(data.values())
    data.append(berita_id)

    with connection.cursor() as cursor:
        cursor.execute(sql.read(), data)
        cursor.fetchone()

