import json
from django.http.response import Http404
from rest_framework.response import Response
from rest_framework.views import APIView
from datetime import datetime
import calendar


from simps_backend.api_v2.services.laporan_service import getLaporanByParams


"""
@params APIView
Request dan Response controller

@endpoints /laporan/
"""
class LaporanView(APIView):
    def get(self, request, format=None):
        today = datetime.today()
        user_id = None
        from_tanggal = today.strftime('%Y-%m-01')
        to_tanggal = today.strftime('%Y-%m-'+str(calendar.monthrange(today.year, today.month)[1]))


        try :
            user_id = int(request.query_params['user_id']);
            from_tanggal = request.query_params['from_tanggal']
            to_tanggal = request.query_params['to_tanggal']
        except :
            if user_id is None:
                raise Http404


        laporan = getLaporanByParams([user_id, from_tanggal, to_tanggal])

        



        while laporan is not None:
            return Response(json.loads(laporan[0]))
            
