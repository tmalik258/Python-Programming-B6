
class Circle:
    PI = 3.1416

    def __init__(self, r):
        self.radius = r

    def area(self):
        print(self.PI * self.radius ** 2)

c = Circle(12)

c.area()

c_2 = Circle(7)

c_2.area()