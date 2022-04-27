from django.http.response import Http404
from django.db import connection
from django.views.decorators.csrf import csrf_exempt
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import viewsets

from simps_backend.api_v2.models.user_model import User
from simps_backend.api_v2.serializers.user_serializer import UserCreateUpdateSerializer,UserSerializer
from simps_backend.api_v2.services.user_service import createUser, deleteUserById, getAllUser, getUserById, updateUserById


"""
@params APIView
Request dan Response controller

@endpoints /users/
"""
class UserView(APIView):
    def get(self, request, format=None):
        try :
            query = getAllUser() 
            serializer = UserSerializer(query, many=True)
        except :
            raise Http404
       
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = UserCreateUpdateSerializer(data=request.data)
        
        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


        createUser(serializer.data)

        return Response(serializer.data, status=status.HTTP_201_CREATED)


"""
@params APIView
Request dan Response controller

@endpoints /user/<int>/
"""
class UserDetailView(APIView):
    def get(self, request, pk, format=None):
        try :
            query = getUserById(pk)
            serializer = UserSerializer(data=query[0].__dict__)
        except IndexError:
            raise Http404


        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_404_NOT_FOUND)


        return Response(serializer.data, status=status.HTTP_200_OK)
            

    def delete(self, request, pk, format=None):
        try :
            deleteUserById(pk)
        except IndexError:
            raise Http404

        return Response(status=status.HTTP_204_NO_CONTENT)

    def put(self, request, pk, format=None):
        serializer = UserCreateUpdateSerializer(data=request.data)

        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        try:
            updateUserById(pk, serializer.data)
        except IndexError:
            raise Http404

        return Response(serializer.data)




        
