# Schedulemaker

## A webtool designed to help your small business keep track of your employee's schedules!
#### For custom builds, please email the developer at: isaac.wonha.lee@outlook.com


Made with Typescript, React, Django, and MySQL.


---

# How to Run:

Clone the repository, open a command line instance within the folder:


## Front End Initialization:

- `cd app`
- `cd client`
- `npm install`
- `npm start`

## Back End Initialization:


- `cd app`
- `pip install -r requirements.txt`
- `python manage.py runserver`

---

TODO: Add a section on how to do the django migrations

## About the Data:

id (int): ID of row 
day_of_week (string): Day of the week the shift occurs, e.g. Monday, Tuesday, etc. 
date (date): The date the shift occurs in ISO 8601 format, e.g. 2000-01-01
name (string): The name of the employee who is working the shift
position (string): The position that the employee will be working in
location (string): The location of the store. Useful if a business has multiple locations.
start_time (string): The starting time of the shift.
end_time (string): The ending time of the shift.
total_hours (int): The duration of the shift in hours. Should equal the time between start_time and  end_time.
