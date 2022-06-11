from django.db import connection
from simps_backend.api_v2.models.laporan_model import Laporan
from simps_backend.settings import SQLSCRIPTS_FOLDER

# @Params
def getLaporanByParams(params):
    # sql = open(SQLSCRIPTS_FOLDER+'/laporan_scripts/getLaporanByParams.sql')


    laporan = None

    with connection.cursor() as cursor:
        cursor.callproc('get_laporan', params)
        laporan = cursor.fetchone()


    return laporan

