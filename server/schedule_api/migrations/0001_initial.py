# Generated by Django 4.1.3 on 2022-11-09 15:10

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Shifts',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('day_of_week', models.CharField(max_length=15)),
                ('date', models.DateField()),
                ('name', models.CharField(max_length=100)),
                ('position', models.CharField(max_length=100)),
                ('location', models.CharField(max_length=100)),
                ('start_time', models.TimeField()),
                ('end_time', models.TimeField()),
                ('total_hours', models.PositiveSmallIntegerField()),
            ],
        ),
    ]
