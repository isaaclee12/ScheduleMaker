from django.shortcuts import render

from rest_framework import viewsets
from rest_framework.response import Response

from .models import Shifts
from .serializers import ShiftsSerializer

from django.db import connection


class ShiftsViewSet(viewsets.ModelViewSet):

    queryset = Shifts.objects.all()

    http_method_names = ['get']

    def list(self, request):

        serializer = ShiftsSerializer(self.queryset, many=True)

        # Return to front end
        return Response(serializer.data)