
from rest_framework import serializers

from simps_backend.api_v2.models.kencan_model import Kencan


class KencanSerializer(serializers.ModelSerializer):
    kencan_id = serializers.IntegerField(read_only=False)
    class Meta:
        model = Kencan
        fields = '__all__'


class KencanCreateUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Kencan
        fields = '__all__'

