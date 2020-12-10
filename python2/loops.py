title = "Green Lantern Corp"
STOP = 10
counter = 0

while counter < STOP:
    print(counter)
    counter += 1

##############################

title = "Green Lantern Corp"
counter = 0

while counter < len(title):
    print(counter)
    counter += 1

##############################

title = "Green Lantern Corp"
counter = 0

while counter < len(title):
    print(title[counter], end="")
    counter += 1

##############################

title = "Green Lantern Corp"
counter = 0

while counter < len(title):
    if (counter % 2 == 0 and title[counter] != " "):
        print(title[counter])
    counter += 1