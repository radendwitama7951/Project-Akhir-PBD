from django.http.response import Http404
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from simps_backend.api_v2.models.user_model import User
from simps_backend.api_v2.serializers.user_serializer import UserSerializer
from simps_backend.api_v2.services.user_service import createUser, getAllUser, getUserById


class UserView(APIView):
    def get(self, request, format=None):
        query = getAllUser()
        serializer = UserSerializer(query, many=True)


        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = UserSerializer(data=request.data)
        
        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        print('This is the data:', serializer.validated_data) 
        print('This is valid:', serializer.is_valid())
        # createUser(serializer.data);
        return Response(serializer.data, status=status.HTTP_200_OK)


class UserDetailView(APIView):
    def get_object(self, pk):
        try:
            return getUserById(pk)
        except IndexError:
            raise Http404

    def get(self, request, pk, format=None):
        query = self.get_object(pk)
        serializer = UserSerializer(query)

        return Response(serializer.data, status=status.HTTP_200_OK)
            



        
