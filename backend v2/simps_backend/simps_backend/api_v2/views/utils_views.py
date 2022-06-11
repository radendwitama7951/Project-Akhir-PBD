from django.http.response import Http404
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from simps_backend.api_v2.serializers.utils_serializer import *
from simps_backend.api_v2.services.utils_service import *


"""
@params APIView
Request dan Response controller

@endpoints /tanggal-penting/
"""
class TanggalPentingView(APIView):
    def get(self, request, format=None):
        query = getAllTanggalPenting() 
        serializer = TanggalPentingSerializer(query, many=True)

       
        return Response(serializer.data)
