present = input("What do you want for christmas?: ")
good_bad = input("Have you been good this year? y/n ")

if good_bad == "y" or good_bad == "Y":
    print("You will receive " + present)
elif good_bad == "n" or good_bad == "N":
    print("You get NOTHING. You LOSE. GOOD DAY.")
else:
    print("That wasn't an option. Try again.")

# add while True to loop