from rest_framework import serializers

from simps_backend.api_v2.models.kencan_model import Kencan, StatusKencan

class StatusKencanSerializer(serializers.ModelSerializer):
    status_kencan_id = serializers.IntegerField(read_only=False)
    class Meta:
        model = StatusKencan
        fields = '__all__'


class KencanSerializer(serializers.ModelSerializer):
    kencan_id = serializers.IntegerField(read_only=False)
    pasangan_id = serializers.IntegerField(read_only=False)
    status_kencan_id = serializers.IntegerField(read_only=False)
    class Meta:
        model = Kencan
        fields = '__all__'


class KencanCreateUpdateSerializer(serializers.ModelSerializer):
    pasangan = serializers.IntegerField(read_only=True)
    status_kencan = serializers.IntegerField(read_only=True)
    class Meta:
        model = Kencan
        fields = '__all__'

