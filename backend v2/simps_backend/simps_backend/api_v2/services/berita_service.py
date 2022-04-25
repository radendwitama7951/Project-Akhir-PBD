from simps_backend.api_v2.models.berita_model import Berita
from simps_backend.settings import SQLSCRIPTS_FOLDER

# @all()
def getAllBerita():
    sql = open(SQLSCRIPTS_FOLDER+'/berita_scripts/getAllBerita.sql')
    result = []
    for berita in Berita.objects.raw(sql.read()):
        result.append(berita)
    return result

# @get(id)
def getBeritaById(berita_id):
    sql = open(SQLSCRIPTS_FOLDER+'/berita_scripts/getBeritaById.sql')
    return Berita.objects.raw(sql.read())

# @post(data)
def createBerita(data):
    sql = open(SQLSCRIPTS_FOLDER+'/berita_scripts/createBeritaById.sql')
    return Berita.objects.raw(sql.read())

# @delete(id)
def deleteBeritaById(berita_id):
    sql = open(SQLSCRIPTS_FOLDER+'/berita_scripts/deleteBeritaById.sql')
    return Berita.objects.raw(sql.read())

# @update(id, data)
def updateBeritaById(berita_id, data):
    sql = open(SQLSCRIPTS_FOLDER+'/berita_scripts/updateBeritaById.sql')
    return Berita.objects.raw(sql.read())


