from django.http.response import Http404
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from simps_backend.api_v2.serializers.pasangan_serializer import PasanganCreateUpdateSerializer, PasanganSerialiazer
from simps_backend.api_v2.services.pasangan_service import createPasangan, deletePasanganById, getAllPasangan, getPasanganById, getPasanganById, updatePasanganById


"""
@params APIView
Request dan Response controller

@endpoints /pasangan/
"""
class PasanganView(APIView):
    def get(self, request, format=None):
        try :
            query = getAllPasangan() 
            serializer = PasanganSerialiazer(query, many=True)
        except :
            raise Http404
       
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = PasanganCreateUpdateSerializer(data=request.data)
        
        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        createPasangan(serializer.data)

        return Response(serializer.data, status=status.HTTP_201_CREATED)


"""
@params APIView
Request dan Response controller

@endpoints /pasangan/<int>/
"""
class PasanganDetailView(APIView):
    def get(self, request, pk, format=None):
        try :
            query = getPasanganById(pk)
            serializer = PasanganSerialiazer(data=query[0].__dict__)
        except IndexError:
            raise Http404


        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_404_NOT_FOUND)


        return Response(serializer.data, status=status.HTTP_200_OK)
            

    def delete(self, request, pk, format=None):
        try :
            deletePasanganById(pk)
        except IndexError:
            raise Http404

        return Response(status=status.HTTP_204_NO_CONTENT)

    def put(self, request, pk, format=None):
        serializer = PasanganCreateUpdateSerializer(data=request.data)

        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        try:
            updatePasanganById(pk, serializer.data)
        except IndexError:
            raise Http404

        return Response(serializer.data)




        
