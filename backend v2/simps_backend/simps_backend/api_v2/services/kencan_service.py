from simps_backend.api_v2.models.kencan_model import Kencan
from simps_backend.settings import SQLSCRIPTS_FOLDER

# @all()
def getAllKencan():
    sql = open(SQLSCRIPTS_FOLDER+'/kencan_scripts/getAllKencan.sql')
    result = []
    for kencan in Kencan.objects.raw(sql.read()):
        result.append(kencan)
    return result

# @get(id)
def getKencanById(kencan_id):
    sql = open(SQLSCRIPTS_FOLDER+'/kencan_scripts/getKencanById.sql')
    return Kencan.objects.raw(sql.read())

# @post(data)
def createKencan(data):
    sql = open(SQLSCRIPTS_FOLDER+'/kencan_scripts/createKencanById.sql')
    return Kencan.objects.raw(sql.read())

# @delete(id)
def deleteKencanById(kencan_id):
    sql = open(SQLSCRIPTS_FOLDER+'/kencan_scripts/deleteKencanById.sql')
    return Kencan.objects.raw(sql.read())

# @update(id, data)
def updateKencanById(kencan_id, data):
    sql = open(SQLSCRIPTS_FOLDER+'/kencan_scripts/updateKencanById.sql')
    return Kencan.objects.raw(sql.read())


