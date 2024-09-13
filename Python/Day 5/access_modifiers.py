# private - can only be accessed inside it's class i.e., where property or method is defined

# protected - can't be access by objects

# public - can be accessible inside class, child class or by any object of that class or it's child classes objects

class Vehicle():
    model = 'm5'
    company = 'BMW'
    year = '1996'
    _engine_no = '54687fsda54687'
    __tyres = 4

    def method(self):
        print(self._engine_no)
        return self._engine_no

class Car(Vehicle):
    def xyz(self):
        return self._engine_no

v = Vehicle()
