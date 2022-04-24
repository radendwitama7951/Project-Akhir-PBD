from rest_framework import serializers

from simps_backend.api_v2.models.pasangan_model import Pasangan

class PasanganSerilizer(serializers.ModelSerializer):
    class Meta:
        model = Pasangan
        fields = '__all__'

