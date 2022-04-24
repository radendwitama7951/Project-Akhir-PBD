from rest_framework import serializers

from simps_backend.api_v2.models.user_model import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'
