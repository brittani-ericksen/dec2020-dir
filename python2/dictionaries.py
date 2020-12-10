########## 1 ##########

meal = {
    "drink": "gin and tonic",
    "appetizer": "fried pickles",
    "entree": "mr. peanut burger",
    "dessert": "ice cream"
}

# if "dessert" in meal:
#     print("I'm having %s to drink and %s for dessert" %(meal["drink"], meal["dessert"]))
# else:
#     print("I'm having a %s to drink" %(meal["drink"]))

########## 2 ##########

# meal["water"] = "fizzy"
# print(meal)

########## 3 ########## 

print(meal)

meal["drink"] = "green tea"

if "dessert" in meal:
    del meal["dessert"]
print(meal)
