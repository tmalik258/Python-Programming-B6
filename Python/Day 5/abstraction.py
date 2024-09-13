# abstraction - to hide implementation or complexity from the objects/users
class Car:
    @staticmethod
    def checkFuel():
        print('fuel is full')

    @staticmethod
    def checkEngine():
        print('Engine is Okay')

    # this is method for the user
    def start(self):
        self.checkEngine()
        self.checkFuel()

c = Car()
c.start()

Car.checkFuel()
Car.checkEngine()