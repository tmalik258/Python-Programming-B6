class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def intro(self):
        print(f'My name is {self.name} and age is {self.age}')

person = Person('Talha', 22)

person.intro()