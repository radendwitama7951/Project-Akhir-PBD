from django.http.response import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.reverse import reverse


"""
@params APIView
Request dan Response controller

@endpoints /laporan/
"""
class LaporanView(APIView):
    def get(self, request, format=None):
        return Response({ 'messages': '[GET] Success' }, status=status.HTTP_200_OK)


"""
@params APIView
Request dan Response controller

@endpoints /laporan/<int>/
"""
class LaporanDetailView(APIView):
    def get_object(self, pk):
        try:
            return Response({'messages':'[GET by ID] Success'})
        except (1):
            raise Http404

    def get(self, request, pk, format=None):
        return Response({'messages':'[GET by ID] Success'})


    def delete(self, request, pk, format=None):
        return Response({'messages': '[DELETE] Success'})








