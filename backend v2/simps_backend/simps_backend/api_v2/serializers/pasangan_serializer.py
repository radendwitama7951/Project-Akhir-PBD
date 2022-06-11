from rest_framework import serializers

from simps_backend.api_v2.models.pasangan_model import Pasangan, StatusPasangan

class StatusPasanganSerializer(serializers.ModelSerializer):
    status_pasangan_id = serializers.IntegerField(read_only=False, min_value=0, max_value=2)
    class Meta:
        model = StatusPasangan
        fields = '__all__'


class PasanganSerializer(serializers.ModelSerializer):
    pasangan_id = serializers.IntegerField(read_only=False)
    #kencan_terakhir = serializers.DateField(read_only=False, allow_null=True)
    status_pasangan = serializers.CharField(max_length=32, required=False, allow_null=True)
    class Meta:
        model = Pasangan
        fields = '__all__'


class PasanganCreateUpdateSerializer(serializers.ModelSerializer):
    # kencan_terakhir = serializers.DateField(read_only=True)
    status_pasangan = serializers.CharField(max_length=32, read_only=True)

    class Meta:
        model = Pasangan
        fields = '__all__'

