# Password Security: Check for total number of permutations
password_length = 15 
counter = 1 
permutations = 1 
while counter <= password_length:
  permutations *= counter
  counter += 1
print(f"The possible combination of a {password_length}-character password is: \
{permutations}")

# Check how long the account may be locked for when the wrong password is entered 5 times
attempts = 5
max_lock = int(permutations / attempts)
print(f"The maximum number of times the account might be locked is {max_lock} times.")

# Check how many times the account is locked and for how long
locks = 0
total_lock_time = 0
lock_time_multiplier = 5
for attempt in range(max_lock):
  locks += 1
  total_lock_time += locks * lock_time_multiplier
  print(f"Your account is locked for {lock_time_multiplier*locks} minutes")

print(f"Assuming the hacker only got the password right with the last possible combination, \
your account would have been locked for {total_lock_time} minutes in total.")