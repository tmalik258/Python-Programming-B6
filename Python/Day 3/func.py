# Functional Programming

# Higher Order Functions

def apply_twice(func, x):
    return func(func(x))

def add_five(x):
    return x + 5


result = apply_twice(add_five, 2)
print(result)


def test(func, arg):
    return func(func(func(func(arg))))

def mult(x):
    return x * x

result = test(mult, 2)
print(result)


# pure functions
def sum(a, b):
    return a + b

result = sum(2, 3)

# impure functions
students = []

def add_name (arg):
    students.append(arg)

add_name('mohaid')

# is this impure or pure
def func(x):
    y = x**2
    z = x + y
    return z

func(2)


# lambdas or anonymous functions

result = (lambda x: x + 2)(23)

print(result)


def my_func(f, arg):
    return f(arg)


my_func(lambda x: 2*x*x, 5)

###################
def my_func(f, arg):
    return (lambda x: 2*f(f(x) + f(x)))(arg)

def multiply(y):
    return y*2

my_func(multiply, 5)