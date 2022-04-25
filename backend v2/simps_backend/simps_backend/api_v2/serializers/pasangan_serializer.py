from rest_framework import serializers

from simps_backend.api_v2.models.pasangan_model import Pasangan


class PasanganSerialiazer(serializers.ModelSerializer):
    pasangan_id = serializers.IntegerField(read_only=False)
    kencan_terakhir = serializers.DateField(read_only=False)
    class Meta:
        model = Pasangan
        fields = '__all__'


class PasanganCreateUpdateSerializer(serializers.ModelSerializer):
    status_pasangan = serializers.IntegerField()
    class Meta:
        model = Pasangan
        fields = '__all__'

