class Cat:
    # class attribute - applies to all cats
    species = "Mammal"

    # instance attributes - different for each instance of cat
    def __init__(self, name, age):
        super().__init__()
        self.name = name
        self.age = age

    # instance method - different for each instance of cat
    def description(self):
        return "{} is {} years old.".format(self.name, self.age )

gus = Cat("Gus", 10)
bean = Cat("Beans", 11)

