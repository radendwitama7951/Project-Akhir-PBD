from django.http.response import Http404
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from simps_backend.api_v2.serializers.laporan_serializer import LaporanCreateUpdateSerializer,LaporanSerializer
from simps_backend.api_v2.services.laporan_service import createLaporan, deleteLaporanById, getAllLaporan, getLaporanById, updateLaporanById


"""
@params APIView
Request dan Response controller

@endpoints /laporan/
"""
class LaporanView(APIView):
    def get(self, request, format=None):
        try :
            query = getAllLaporan() 
            serializer = LaporanSerializer(query, many=True)
        except :
            raise Http404
       
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = LaporanCreateUpdateSerializer(data=request.data)
        
        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        createLaporan(serializer.data)

        return Response(serializer.data, status=status.HTTP_201_CREATED)


"""
@params APIView
Request dan Response controller

@endpoints /laporan/<int>/
"""
class LaporanDetailView(APIView):
    def get(self, request, pk, format=None):
        try :
            query = getLaporanById(pk)
            serializer = LaporanSerializer(data=query[0].__dict__)
        except IndexError:
            raise Http404


        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_404_NOT_FOUND)


        return Response(serializer.data, status=status.HTTP_200_OK)
            

    def delete(self, request, pk, format=None):
        try :
            deleteLaporanById(pk)
        except IndexError:
            raise Http404

        return Response(status=status.HTTP_204_NO_CONTENT)

    def put(self, request, pk, format=None):
        serializer = LaporanCreateUpdateSerializer(data=request.data)

        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        try:
            updateLaporanById(pk, serializer.data)
        except IndexError:
            raise Http404

        return Response(serializer.data)




        
