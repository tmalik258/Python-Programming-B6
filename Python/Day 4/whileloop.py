seats = 5 # initial number of seats

while seats > 0: # seats available?
    print('your seat is booked') # ticket sold
    seats = seats - 1 # number of seats available

print('seats are not available anymore') # all tickets sold


# infinite loop but ends on a condition specified in the body of while loop
i = 0
while True:
    if i > 5:
        break
    print('hello', i)
    i = i + 1


j = 0

while True:
    if j > 10:
        break

    print(j)
    if j % 2 == 0:
        j = j + 3
        continue

    j = j + 1
