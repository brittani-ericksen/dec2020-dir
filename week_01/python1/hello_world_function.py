# def hello_world():
#     response = "Konnichiwa bitches."
#     return response

# print(hello_world())

def hello_world(name):
    response = "Konnichiwa %s" % (name)
    return response

username = input("What is your name? ")
greeting = hello_world(username)

print(greeting)