from django.shortcuts import render

from rest_framework import viewsets
from rest_framework.response import Response

from .models import Shifts
from .serializers import ShiftsSerializer

from django.db import connection

# Viewset for taking in form data and adding it to the MySQL DB
class AddScheduleViewSet(viewsets.ModelViewSet):

    queryset = Shifts.objects.all()

    http_method_names = ['post']

    def create(self, request):

        serializer = ShiftsSerializer(data=request.body)

        if serializer.is_valid():
            serializer.save()
            return Response("Success")
        return Response("Failure")




        

        """
        validate the data for the row
        with several sequential independent "if" statements
        if invalid at any point
        return response "error: ..."

        as a non-if case at the bottom
        pass it to the SQL
        return Response successfully submitted form data

        and later, have the responses print on screen
        """

        # get body from the request
        return Response(request.META.get('body'))
        
class ShiftsViewSet(viewsets.ModelViewSet):

    # Query all entries from DB
    queryset = Shifts.objects.all()

    serializer = ShiftsSerializer(queryset, many=True)

    # Below code: on get request, return the queryWeek var
    http_method_names = ['get']

    def list(self, request):

        # Return to front end
        return Response(self.serializer.data)


class DateViewSet(viewsets.ModelViewSet):

    # Query all entries from DB
    queryset = Shifts.objects.all().values_list('date').distinct()

    http_method_names = ['get']

    def list(self, request):

        # serializer = ShiftsSerializer(self.queryset, many=True)

        # Return to front end
        return Response(self.queryset)


# Day of week viewsets
class MondayViewSet(viewsets.ModelViewSet):
    
    queryset = Shifts.objects.filter(day_of_week__exact="Monday")

    serializer = ShiftsSerializer(queryset, many=True)

    # Below code: on get request, return the queryWeek var
    http_method_names = ['get']

    def list(self, request):

        # Return to front end
        return Response(self.serializer.data)

        
class TuesdayViewSet(viewsets.ModelViewSet):
    
    queryset = Shifts.objects.filter(day_of_week__exact="Tuesday")

    serializer = ShiftsSerializer(queryset, many=True)

    # Below code: on get request, return the queryWeek var
    http_method_names = ['get']

    def list(self, request):

        # Return to front end
        return Response(self.serializer.data)


class WednesdayViewSet(viewsets.ModelViewSet):
    
    queryset = Shifts.objects.filter(day_of_week__exact="Wednesday")

    serializer = ShiftsSerializer(queryset, many=True)

    # Below code: on get request, return the queryWeek var
    http_method_names = ['get']

    def list(self, request):

        # Return to front end
        return Response(self.serializer.data)


class ThursdayViewSet(viewsets.ModelViewSet):
    
    queryset = Shifts.objects.filter(day_of_week__exact="Thursday")

    serializer = ShiftsSerializer(queryset, many=True)

    # Below code: on get request, return the queryWeek var
    http_method_names = ['get']

    def list(self, request):

        # Return to front end
        return Response(self.serializer.data)


class FridayViewSet(viewsets.ModelViewSet):
    
    queryset = Shifts.objects.filter(day_of_week__exact="Friday")

    serializer = ShiftsSerializer(queryset, many=True)

    # Below code: on get request, return the queryWeek var
    http_method_names = ['get']

    def list(self, request):

        # Return to front end
        return Response(self.serializer.data)


class SaturdayViewSet(viewsets.ModelViewSet):
    
    queryset = Shifts.objects.filter(day_of_week__exact="Saturday")

    serializer = ShiftsSerializer(queryset, many=True)

    # Below code: on get request, return the queryWeek var
    http_method_names = ['get']

    def list(self, request):

        # Return to front end
        return Response(self.serializer.data)


class SundayViewSet(viewsets.ModelViewSet):
    
    queryset = Shifts.objects.filter(day_of_week__exact="Sunday")

    serializer = ShiftsSerializer(queryset, many=True)

    # Below code: on get request, return the queryWeek var
    http_method_names = ['get']

    def list(self, request):

        # Return to front end
        return Response(self.serializer.data)


