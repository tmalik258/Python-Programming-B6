# Object Oriented Programming

# Four Pillars of OOP

# Encapsulation
# Inheritance
# Polymorphism
# Abstraction

class Cat: # blueprint/class of Cat
    # constructor
    def __init__(self, l, t):
        self.legs = l
        self.tail = t

    def meow(self): # method of Cat class
        print('meow meow')

    def play(self): # method of Cat class
        print('playing')

cat1 = Cat(4, False) # object of Cat class
cat2 = Cat(3, True)
cat3 = Cat()

print(cat1.legs)
print(cat1.tail)

cat1.play()
cat2.play()

# student class
# properties: name, age, st_id, marks, class/subject
# methods: study(), attend_school(), intro()

# circle class
# properties:
# methods: area()