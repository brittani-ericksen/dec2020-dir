count = 0
user_input = input("How high should we count? ")

try:
    MAX = int(user_input)
    while(count < MAX):
        print(count)
        count += 1
except ValueError:
    print("Please try again with a number.")
    