from datetime import datetime, timedelta

# This code generates dummy data from 
# Ran on 1/16/2023 to generate data that goes until the year 2099

with open("dummyData.txt", "w") as outfile:
    current_day = datetime.now()

    for i in range(0, 4000):
        current_weekday = current_day.isoweekday()
        dates_of_week = []
        for i in range(1, 7 + 1):
            day_to_add = current_day + timedelta(days = (i - current_weekday))
            dates_of_week.append(str(day_to_add.date()))
            # print(str(day_to_add.date()))

        outfile.write(f"('Monday', '{dates_of_week[0]}','Isaac','Server','Main St','3:00PM','10:00PM',7),\n")
        outfile.write(f"('Monday', '{dates_of_week[0]}','Kevin','Server','Main St','3:00PM','10:00PM',7),\n")
        outfile.write(f"('Tuesday', '{dates_of_week[1]}','Isaac','Server','Main St','3:00PM','10:00PM',7),\n")
        outfile.write(f"('Tuesday', '{dates_of_week[1]}','Kevin','Server','Main St','3:00PM','10:00PM',7),\n")
        outfile.write(f"('Wednesday', '{dates_of_week[2]}','Isaac','Server','Main St','3:00PM','10:00PM',7),\n")
        outfile.write(f"('Wednesday', '{dates_of_week[2]}','Kevin','Server','Main St','3:00PM','10:00PM',7),\n")
        outfile.write(f"('Thursday', '{dates_of_week[3]}','Isaac','Server','Main St','3:00PM','10:00PM',7),\n")
        outfile.write(f"('Thursday', '{dates_of_week[3]}','Kevin','Server','Main St','3:00PM','10:00PM',7),\n")
        outfile.write(f"('Friday', '{dates_of_week[4]}','Isaac','Server','Main St','3:00PM','10:00PM',7),\n")
        outfile.write(f"('Friday', '{dates_of_week[4]}','Kevin','Server','Main St','3:00PM','10:00PM',7),\n")
        outfile.write(f"('Saturday', '{dates_of_week[5]}','Becky','Server','Main St','3:00PM','10:00PM',7),\n")
        outfile.write(f"('Saturday', '{dates_of_week[5]}','Carla','Server','Main St','3:00PM','10:00PM',7),\n")
        outfile.write(f"('Sunday', '{dates_of_week[6]}','Becky','Server','Main St','3:00PM','10:00PM',7),\n")
        outfile.write(f"('Sunday', '{dates_of_week[6]}','Carla','Server','Main St','3:00PM','10:00PM',7),\n")


        current_day += timedelta(days=7)

