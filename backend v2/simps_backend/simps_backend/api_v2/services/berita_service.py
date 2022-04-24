from simps_backend.api_v2.models.berita_model import Berita
from simps_backend.settings import SQLSCRIPTS_FOLDER


def getAllBerita():
    sql = open(SQLSCRIPTS_FOLDER+'/berita_scripts/getAllBerita.sql')
    return Berita.objects.raw(sql.read())

def getBeritaById(berita_id):
    sql = open(SQLSCRIPTS_FOLDER+'/berita_scripts/getBeritaById.sql')
    return Berita.objects.raw(sql.read())


