from simps_backend.api_v2.models.pasangan_model import Pasangan
from simps_backend.settings import SQLSCRIPTS_FOLDER

# @all()
def getAllPasangan():
    sql = open(SQLSCRIPTS_FOLDER+'/pasangan_scripts/getAllPasangan.sql')
    result = []
    for pasangan in Pasangan.objects.raw(sql.read()):
        result.append(pasangan)
    return result

# @get(id)
def getPasanganById(pasangan_id):
    sql = open(SQLSCRIPTS_FOLDER+'/pasangan_scripts/getPasanganById.sql')
    return Pasangan.objects.raw(sql.read())

# @post(data)
def createPasangan(data):
    sql = open(SQLSCRIPTS_FOLDER+'/pasangan_scripts/createPasangan.sql')
    return Pasangan.objects.raw(sql.read())

# @delete(id)
def deletePasanganById(pasangan_id):
    sql = open(SQLSCRIPTS_FOLDER+'/pasangan_scripts/deletePasanganById.sql')
    return Pasangan.objects.raw(sql.read())

# @update(id, data)
def updatePasanganById(pasangan_id, data):
    sql = open(SQLSCRIPTS_FOLDER+'/pasangan_scripts/updatePasanganById.sql')
    return Pasangan.objects.raw(sql.read())


