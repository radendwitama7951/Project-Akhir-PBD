from rest_framework import serializers

from simps_backend.api_v2.models.user_model import User


class UserSerializer(serializers.ModelSerializer):
    user_id = serializers.IntegerField(read_only=False)
    last_login = serializers.DateTimeField(read_only=False)
    class Meta:
        model = User
        fields = '__all__'

class UserCreateUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'
