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

    serializer_class = ShiftsSerializer(queryset, many=True)

    # Below code: on get request, return the queryWeek var
    http_method_names = ['get', 'post', 'patch', 'delete']

    # GET
    @method_decorator(never_cache) 
    def list(self, request):

        # Get the data from the backend, serialize it, and return it as JSON
        queryset = Shifts.objects.all()

        # TODO: This.
        # Pseudocode:
        # filter query set by each day of week
        # have those query sets returned in one big json
        # also create a json of distinct dates for each day of week
        
        serializer = ShiftsSerializer(queryset, many=True)



        # Return to front end
        return Response(serializer.data)

    # DELETE
    @method_decorator(never_cache) 
    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)
        
    # POST
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

    # PUT
    def partial_update(self, request, pk):

        # Consume data from API request
        data_to_add = JSONParser().parse(request)

        print("PK IN:", int(pk))
        print("DATA IN:", data_to_add)

        # Get data at that id (which was sent in via the request url)
        shift_to_update = self.get_object()

        serializer = ShiftsSerializer(shift_to_update, data=data_to_add, partial=True) # set partial=True to update a data partially

        print("serialized it.")
        if serializer.is_valid():
            updated_data = serializer.save()
            updated_data = ShiftsSerializer(updated_data)
            # print("UPDATED DATA:", updated_data)
            return Response(updated_data.data, status=status.HTTP_200_OK)
        return Response(status=status.HTTP_400_BAD_REQUEST)


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


