from rest_framework import serializers

from simps_backend.api_v2.models.berita_model import Berita

class BeritaSerializer(serializers.ModelSerializer):
    berita_id = serializers.IntegerField(read_only=False)
    class Meta:
        model = Berita
        fields = '__all__'


class BeritaCreateUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Berita
        fields = '__all__'

