from django.shortcuts import render
from django.views.decorators.cache import cache_control, never_cache
from django.utils.decorators import method_decorator

from rest_framework import viewsets, status
from rest_framework.parsers import JSONParser 
from rest_framework.response import Response

from .models import Shifts
from .serializers import ShiftsSerializer

from django.db import connection

from datetime import datetime, timedelta


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
        queryset = Shifts.objects

        # TODO: 
        # Json structure:
        """
        Dates In Week: {}
        Monday Shifts: {}
        Tuesday Shifts: {}
        ... etc
        """

        this_weeks_shifts = []

        # get date for today
        today = datetime.now()

        # get distinct dates for each day of week from monday to sunday
        current_weekday = today.isoweekday()
        dates_of_week = []
        for i in range(1, 7 + 1):
            day_to_add = today + timedelta(days = (i - current_weekday))
            dates_of_week.append(day_to_add.date())

        # print(str(dates_of_week[0]))

        this_weeks_shifts.append(dates_of_week)

        # filter query set by each day of week
        for i in range(0, 7):
            queryset = Shifts.objects.filter(date__exact=str(dates_of_week[i]))
            weekdays_shifts = ShiftsSerializer(queryset, many=True)
            # print(f"\n\n{i}:",weekdays_shifts.data)
            this_weeks_shifts.append(weekdays_shifts.data)

        # for item in this_weeks_shifts:
        #     print(item)
        
        # have those query sets returned in one big json
        return Response(this_weeks_shifts)

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

        print("got data:", serializer.initial_data) # Debug

        if not serializer.is_valid():
            print("Errors", serializer.errors)
   
        if serializer.is_valid():
            serializer.save()
            print("Success")
            return Response(status=status.HTTP_201_CREATED)

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