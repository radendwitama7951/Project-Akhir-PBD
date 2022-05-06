from django.http.response import Http404
from django.db import connection
from simps_backend.api_v2.models.kencan_model import Kencan, StatusKencan
from simps_backend.settings import SQLSCRIPTS_FOLDER

# Status Kencan
def getAllStatusKencan():
    sql = open(SQLSCRIPTS_FOLDER+'/kencan_scripts/getAllStatusKencan.sql')
    return StatusKencan.objects.raw(sql.read())

# @all()
def getAllKencan():
    sql = open(SQLSCRIPTS_FOLDER+'/kencan_scripts/getAllKencan.sql')
    return Kencan.objects.raw(sql.read())

# @byParams
def getKencanByParams(query_params_list):
    sql = open(SQLSCRIPTS_FOLDER+'/kencan_scripts/getKencanByParams.sql')
    return Kencan.objects.raw(sql.read(), query_params_list)


# @get(id)
def getKencanById(kencan_id):
    sql = open(SQLSCRIPTS_FOLDER+'/kencan_scripts/getKencanById.sql')
    return Kencan.objects.raw(sql.read(), [kencan_id])

# @post(data)
def createKencan(data):
    sql = open(SQLSCRIPTS_FOLDER+'/kencan_scripts/createKencan.sql')
    data = list(data.values())

    with connection.cursor() as cursor:
        cursor.execute(sql.read(), data)
        cursor.fetchone()


# @delete(id)
def deleteKencanById(kencan_id):
    sql = open(SQLSCRIPTS_FOLDER+'/kencan_scripts/deleteKencanById.sql')
    with connection.cursor() as cursor:
        cursor.execute(sql.read(), [kencan_id])
        cursor.fetchone()

# update(id, data)
def updateKencanById(kencan_id, data):
    sql = open(SQLSCRIPTS_FOLDER+'/kencan_scripts/updateKencanById.sql')
    data = list(data.values())
    data.append(kencan_id)

    with connection.cursor() as cursor:
        cursor.execute(sql.read(), data)
        cursor.fetchone()

