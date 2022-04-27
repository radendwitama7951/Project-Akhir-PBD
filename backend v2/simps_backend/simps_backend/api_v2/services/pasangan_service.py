from django.db import connection
from simps_backend.api_v2.models.pasangan_model import Pasangan, StatusPasangan
from simps_backend.settings import SQLSCRIPTS_FOLDER

# Status Pasangan
def getAllStatusPasangan():
    sql = open(SQLSCRIPTS_FOLDER+'/pasangan_scripts/getAllStatusPasangan.sql')
    return StatusPasangan.objects.raw(sql.read())

# @all()
def getAllPasangan():
    sql = open(SQLSCRIPTS_FOLDER+'/pasangan_scripts/getAllPasangan.sql')
    return Pasangan.objects.raw(sql.read())


# @get(id)
def getPasanganById(pasangan_id):
    sql = open(SQLSCRIPTS_FOLDER+'/pasangan_scripts/getPasanganById.sql')
    return Pasangan.objects.raw(sql.read(), [pasangan_id])

# @post(data)
def createPasangan(data):
    sql = open(SQLSCRIPTS_FOLDER+'/pasangan_scripts/createPasangan.sql')
    
    data = list(data.values())

    with connection.cursor() as cursor:
        cursor.execute(sql.read(), data)
        cursor.fetchone()


# @delete(id)
def deletePasanganById(pasangan_id):
    sql = open(SQLSCRIPTS_FOLDER+'/pasangan_scripts/deletePasanganById.sql')
    with connection.cursor() as cursor:
        cursor.execute(sql.read(), [pasangan_id])
        cursor.fetchone()

# update(id, data)
def updatePasanganById(pasangan_id, data):
    sql = open(SQLSCRIPTS_FOLDER+'/pasangan_scripts/updatePasanganById.sql')
    data = list(data.values())
    data.append(pasangan_id)

    with connection.cursor() as cursor:
        cursor.execute(sql.read(), data)
        cursor.fetchone()


