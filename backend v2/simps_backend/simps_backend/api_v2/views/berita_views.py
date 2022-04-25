from django.http.response import Http404
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from simps_backend.api_v2.serializers.berita_serializer import BeritaCreateUpdateSerializer,BeritaSerializer
from simps_backend.api_v2.services.berita_service import createBerita, deleteBeritaById, getAllBerita, getBeritaById, updateBeritaById


"""
@params APIView
Request dan Response controller

@endpoints /berita/
"""
class BeritaView(APIView):
    def get(self, request, format=None):
        try :
            query = getAllBerita() 
            serializer = BeritaSerializer(query, many=True)
        except :
            raise Http404
       
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = BeritaCreateUpdateSerializer(data=request.data)
        
        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        createBerita(serializer.data)

        return Response(serializer.data, status=status.HTTP_201_CREATED)


"""
@params APIView
Request dan Response controller

@endpoints /berita/<int>/
"""
class BeritaDetailView(APIView):
    def get(self, request, pk, format=None):
        try :
            query = getBeritaById(pk)
            serializer = BeritaSerializer(data=query[0].__dict__)
        except IndexError:
            raise Http404


        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_404_NOT_FOUND)

        print(serializer)
        return Response(serializer.data, status=status.HTTP_200_OK)
            

    def delete(self, request, pk, format=None):
        try :
            deleteBeritaById(pk)
        except IndexError:
            raise Http404

        return Response(status=status.HTTP_204_NO_CONTENT)

    def put(self, request, pk, format=None):
        serializer = BeritaCreateUpdateSerializer(data=request.data)

        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        try:
            updateBeritaById(pk, serializer.data)
        except IndexError:
            raise Http404

        return Response(serializer.data)




        
