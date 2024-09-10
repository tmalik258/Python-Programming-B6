PI = 3.1614
radius = 12

print(radius)

area = PI * radius ** 2

print(area)


int
float
str # immutable
bool
list # array [], mutable
dict # dictionary, objects {}, mutable
set # collection of elements
tuple # similar to list but can't be changed, immutable

# immutable
# mutable

students = ['ahmed', 'usman']

print(students)

students[0] = 'junaid'


print(students[0])

teachers = ('Talha', 'Noman') # parenthesis

print(teachers[0])

# teachers[0] = 'Umer'      # can't assign value

# f strings or template literals == literal string in js

text = f'this {teachers} is ksdjflkdsjf'

print(text)

print(text[3])

text[3] = 'a'

# sets
integers = { False, 1, 'abdul rehman', 'rafay', 23, 45}

# dict
student = {
    "name": "mohaid",
    "age": 17,
    "occupation": "python developer", 
}
