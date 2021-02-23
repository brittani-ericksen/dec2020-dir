# appending to list

power_rangers = []

power_rangers.append("Jason")
power_rangers.append("Trini")
power_rangers.append("Billy")
power_rangers.append("Zack")
power_rangers.append("Kim")

print(power_rangers)

##############################
# while loop

power_rangers = []

power_rangers.append("Jason")
power_rangers.append("Trini")
power_rangers.append("Billy")
power_rangers.append("Zack")
power_rangers.append("Kim")

index = 0

while index < len(power_rangers):
    print(power_rangers[index])
    index += 1

##############################
# for loop

power_rangers = ['Jason', 'Trini', 'Billy', 'Zack', 'Kim']

for ranger in power_rangers:
    print(ranger)
    
##############################

power_rangers = ['Jason', 'Trini', 'Billy', 'Zack', 'Kim']
print(power_rangers)

# add tommy
power_rangers.append("Tommy")
print(power_rangers)

# remove tommy
power_rangers.remove("Tommy")
print(power_rangers)