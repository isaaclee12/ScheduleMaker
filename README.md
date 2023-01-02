# ScheduleMaker

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

## TODO: 

- Bugs to fix:
  - DatePicker and Fontawesome symbols appearing over NavBar

- PHASE 1: CRUD App Completion
  - Upload basic CRUD App to Cyclic

- PHASE 2: Dates + Glow Up
  - Refactor the code to have better code patterns.
  - Create dummy data for future weeks so the app just works.
  - Add date-fns features to have a front page that stays at the current week.
  - Add ability to go between weeks
  - Aesthetics:
    - Mobile responsiveness
    - Better CSS please!
  - Deploy to cyclic

- PHASE 3: Authentication & Data Cleaning
  - Implement Basic JWT Authentication for a single account
  - Add change password/change email system
  - Add Roles System
  - Have one admin account and a few employee accounts
  - Have schedules displayed based on who's logged in
  - Document the whole thing down to the last line, for your own reference later when you make another CRUD app
  - Deploy to Cyclic - THIS IS MVP


- Phase 4: (Optional) Add availability, time off, and other features
  - Add availability (2 weeks out, for employees, any for managers)
  - Add time off (2 weeks out, for employees, any for managers)
  - Add other features in notebook


## About the Data:

- id (int): ID of row 
- day_of_week (string): Day of the week the shift occurs, e.g. Monday, Tuesday, etc. 
- date (date): The date the shift occurs in ISO 8601 format, e.g. 2000-01-01
- name (string): The name of the employee who is working the shift
- position (string): The position that the employee will be working in
- location (string): The location of the store. Useful if a business has multiple locations.
- start_time (string): The starting time of the shift.
- end_time (string): The ending time of the shift.
- total_hours (int): The duration of the shift in hours. Should equal the time between start_time and  end_time.
