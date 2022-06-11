from rest_framework import serializers

from simps_backend.api_v2.models.utils_model import *

class TanggalPentingSerializer(serializers.ModelSerializer):
    class Meta:
        model = TanggalPenting
        fields = '__all__'



