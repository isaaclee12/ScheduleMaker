# python file to generate lines of code with iterating numbers

file = open('times.txt', 'w')

for i in range (1, 13):
    i = str(i)
    file.write("<option value=\""+i+":00AM\">"+i+":00AM</option>\n")

for i in range (1, 13):
    i = str(i)
    file.write("<option value=\""+i+":00AM\">"+i+":00PM</option>\n")

file.close()