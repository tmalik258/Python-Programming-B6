# inheritance

class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def intro(self):
        print(f'My name is {self.name} and age is {self.age}')

person = Person('Talha', 22)

# person.intro()

class Student(Person):
    def __init__(self, n, a, r, m):
        super().__init__(n, a)
        self.rollno = r
        self.marks = m


s = Student('Ahmed', 19, 80, 99.99)

s.intro()
print(s.name, s.age, s.marks, s.rollno)

# a = '9832748919'
# show = '879' # a[1:10:3]

# task 1
## Create a base class called Animal with a method speak() that prints "Animal speaks".
## Then, create a derived class Dog that inherits from Animal and overrides the speak() method to print "Dog barks".
## Create an object of Dog and call the speak() method.

# task 2
## Create a class Vehicle with attributes speed and a method drive().
## Then, create two classes Car and Bike that inherit from Vehicle. The Car class should have a method air_condition() and the Bike class should have a method wheelie().
## Implement these methods and create objects of both Car and Bike to demonstrate inheritance.