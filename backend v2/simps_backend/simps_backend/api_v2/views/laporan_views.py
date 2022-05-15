import json
from django.http.response import Http404
from rest_framework.response import Response
from rest_framework.views import APIView

from simps_backend.api_v2.services.laporan_service import getLaporanByParams


"""
@params APIView
Request dan Response controller

@endpoints /laporan/
"""
class LaporanView(APIView):
    def get(self, request, format=None):
        try :
            user_id = int(request.query_params['user_id']);
            from_tanggal = request.query_params['from_tanggal']
            to_tanggal = request.query_params['to_tanggal']
            laporan = getLaporanByParams([user_id, from_tanggal, to_tanggal])


        except :
            raise Http404

        while laporan is not None:
            return Response(json.loads(laporan[0]))
            
