from rest_framework import serializers

from simps_backend.api_v2.models.laporan_model import Laporan

class LaporanSerializer(serializers.ModelSerializer):
    laporan_id = serializers.IntegerField(read_only=False)
    class Meta:
        model = Laporan
        fields = '__all__'

class LaporanCreateUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Laporan
        fields = '__all__'
