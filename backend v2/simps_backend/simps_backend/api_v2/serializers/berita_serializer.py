from rest_framework import serializers

from simps_backend.api_v2.models.berita_model import Berita


class BeritaSerializers(serializers.ModelSerializer):
    class Meta:
        model = Berita
        fields = '__all__'

