from django.http.response import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.reverse import reverse

"""
@params APIView
Request dan Response controller

@endpoints /pasangan/
"""
class PasanganView(APIView):
    def get(self, request, format=None):
        return Response({ 'messages': '[GET] Success' }, status=status.HTTP_200_OK)

    def post(self, request, format=None):
        return Response({ 'messages': '[POST] Success' }, status=status.HTTP_201_CREATED)


"""
@params APIView
Request dan Response controller

@endpoints /pasangan/<int>/
"""
class PasanganDetailView(APIView):
    def get_object(self, pk):
        try:
            return Response({'messages':'[GET by ID] Success'})
        except (1):
            raise Http404

    def get(self, request, pk, format=None):
        return Response({'messages':'[GET by ID] Success'})

    def put(self, request, pk, format=None):
        if (0):
            return Response({'messages': '[PUT] Failed'},
                    status=status.HTTP_400_BAD_REQUEST)
        return Response({'messages': '[PUT] Success'})

    def delete(self, request, pk, format=None):
        return Response({'messages': '[DELETE] Success'})








