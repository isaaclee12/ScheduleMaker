from django.shortcuts import render

from rest_framework import viewsets
from rest_framework.response import Response

from .models import Shifts
from .serializers import ShiftsSerializer

from django.db import connection


class ShiftsViewSet(viewsets.ModelViewSet):

    # Query all entries from DB
    queryset = Shifts.objects.all()

    # Query pairs of {date, [list of shifts on that date] for each day of the week from Mon thru Sun}
    def queryDayOfWeek(query):
        date = ShiftsSerializer(query, many=True).data[0]['date']
        shiftsOnDate = ShiftsSerializer(query, many=True).data
        return {'date': date, 'shifts': shiftsOnDate}

    # Call that function
    queryMonday = queryDayOfWeek(queryset.filter(day_of_week__exact="Monday"))
    queryTuesday = queryDayOfWeek(queryset.filter(day_of_week__exact="Tuesday"))
    queryWednesday = queryDayOfWeek(queryset.filter(day_of_week__exact="Wednesday"))
    queryThursday = queryDayOfWeek(queryset.filter(day_of_week__exact="Thursday"))
    queryFriday = queryDayOfWeek(queryset.filter(day_of_week__exact="Friday"))
    querySaturday = queryDayOfWeek(queryset.filter(day_of_week__exact="Saturday"))
    querySunday = queryDayOfWeek(queryset.filter(day_of_week__exact="Sunday"))

    # Create a list of all those date-shifts pairs
    queryWeek = [queryMonday, queryTuesday, queryWednesday, queryThursday, queryFriday, querySaturday, querySunday]

    # Debug print
    # for item in queryWeek:
        # print("\nITEM:", item)
    
    # Below code: on get request, return the queryWeek var
    http_method_names = ['get']

    def list(self, request):

        # Return to front end
        return Response(self.queryWeek)