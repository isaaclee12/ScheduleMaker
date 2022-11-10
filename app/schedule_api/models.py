from django.db import models

# Create your models here.
class Shifts(models.Model):
    day_of_week = models.CharField(max_length=15)
    date = models.DateField()
    name = models.CharField(max_length=100)
    position = models.CharField(max_length=100)
    location = models.CharField(max_length=100)
    start_time = models.CharField(max_length=7)
    end_time = models.CharField(max_length=7)
    total_hours = models.PositiveSmallIntegerField()

# TODO: Add an employee table with a one-to-many relationship to the Shifts table
    
