from django.contrib.auth.models import User
from .models import Shifts
from rest_framework import serializers

class ShiftsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Shifts
        fields = (
            "id",
            "day_of_week",
            "date",
            "name",
            "position",
            "location",
            "start_time",
            "end_time",
            "total_hours"
        )