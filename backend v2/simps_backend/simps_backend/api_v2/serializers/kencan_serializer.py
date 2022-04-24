
from rest_framework import serializers

from simps_backend.api_v2.models.kencan_model import Kencan


class KencanSerializer(serializers.ModelSerializer):
    class Meta:
        model = Kencan
        fields = '__all__'

