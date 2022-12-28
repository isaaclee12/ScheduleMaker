from django.shortcuts import render
from django.views.decorators.cache import cache_control, never_cache
from django.utils.decorators import method_decorator

from rest_framework import viewsets, status
from rest_framework.parsers import JSONParser 
from rest_framework.response import Response

from .models import Shifts
from .serializers import ShiftsSerializer

from django.db import connection

# Viewset for taking in form data and adding it to the MySQL DB
       
class ShiftsViewSet(viewsets.ModelViewSet):

    # Query all entries from DB
    queryset = Shifts.objects.all()

    serializer = ShiftsSerializer(queryset, many=True)

    # Below code: on get request, return the queryWeek var
    http_method_names = ['get', 'post', 'delete']

    def list(self, request):
        # Return to front end
        return Response(self.serializer.data)

    @method_decorator(never_cache) 
    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()

        # filter out the row with the same id
        # self.queryset.filter(id=instance.id).delete()
        # instance.delete()
        # print(s.data)

        self.perform_destroy(instance)

        # .refresh_from_db() # Refresh model from sql database

        return Response(status=status.HTTP_204_NO_CONTENT)
        
    # @cache_control(no_cache=True) 
    def create(self, request):
        data_to_add = JSONParser().parse(request)
        serializer = ShiftsSerializer(data=data_to_add)
        # serializer = ShiftsSerializer(data=request.data)

        # print(request.body)
        print("got data:", serializer.initial_data)

        # print("Post", serializer.is_valid())
        if not serializer.is_valid():
            print("Errors", serializer.errors)
   
        if serializer.is_valid():
            serializer.save()
            print("Success")
            return Response("Success")

        return Response("Failure")        


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
    
    # Below code: on get request, return the queryWeek var
    http_method_names = ['get']

    def list(self, request):

        # NOTE TO SELF: These declarations need to be INSIDE this function BECAUSE we
        # Want it to run on EVERY get request so the data stays up to date
        queryset = Shifts.objects.filter(day_of_week__exact="Monday")

        serializer = ShiftsSerializer(queryset, many=True)

        print(serializer)

        # Return to front end
        return Response(serializer.data)

        
class TuesdayViewSet(viewsets.ModelViewSet):
    
    # Below code: on get request, return the queryWeek var
    http_method_names = ['get']

    def list(self, request):

        queryset = Shifts.objects.filter(day_of_week__exact="Tuesday")

        serializer = ShiftsSerializer(queryset, many=True)

        # Return to front end
        return Response(serializer.data)


class WednesdayViewSet(viewsets.ModelViewSet):
    
    # Below code: on get request, return the queryWeek var
    http_method_names = ['get']

    def list(self, request):

        queryset = Shifts.objects.filter(day_of_week__exact="Wednesday")

        serializer = ShiftsSerializer(queryset, many=True)

        # Return to front end
        return Response(serializer.data)


class ThursdayViewSet(viewsets.ModelViewSet):
    
    # Below code: on get request, return the queryWeek var
    http_method_names = ['get']

    def list(self, request):

        queryset = Shifts.objects.filter(day_of_week__exact="Thursday")

        serializer = ShiftsSerializer(queryset, many=True)

        # Return to front end
        return Response(serializer.data)


class FridayViewSet(viewsets.ModelViewSet):
    
    # Below code: on get request, return the queryWeek var
    http_method_names = ['get']

    def list(self, request):

        queryset = Shifts.objects.filter(day_of_week__exact="Friday")

        serializer = ShiftsSerializer(queryset, many=True)

        # Return to front end
        return Response(serializer.data)


class SaturdayViewSet(viewsets.ModelViewSet):
    
    # Below code: on get request, return the queryWeek var
    http_method_names = ['get']

    def list(self, request):

        queryset = Shifts.objects.filter(day_of_week__exact="Saturday")

        serializer = ShiftsSerializer(queryset, many=True)

        # Return to front end
        return Response(serializer.data)


class SundayViewSet(viewsets.ModelViewSet):

    # Below code: on get request, return the queryWeek var
    http_method_names = ['get']

    def list(self, request):

        queryset = Shifts.objects.filter(day_of_week__exact="Sunday")

        serializer = ShiftsSerializer(queryset, many=True)

        # Return to front end
        return Response(serializer.data)


