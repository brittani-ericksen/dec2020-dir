day_of_week = int(input("What day of the week (0-6)? "))

sleep = False

if day_of_week == 0 or day_of_week == 6:
    sleep = True

if sleep:
    print("Sleep in!")
else:
    print("Go to work :(")

