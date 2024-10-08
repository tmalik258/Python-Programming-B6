def hello_decorator(func):
    def inner1():
        print("-----------------------")
        func()
        print("-----------------------")
    
    return inner1

@hello_decorator
def function_to_be_used():
    print("Hello World!")

# updated_func = hello_decorator(function_to_be_used)

function_to_be_used()

# print('\n\n')

# updated_func()

