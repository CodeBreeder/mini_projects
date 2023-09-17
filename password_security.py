password_length = 8 
counter = 1 
permutations = 1 

#Check for number of permutations
while counter <= password_length:
  permutations *= counter
  counter += 1
print(f"The possible combination of a {password_length}-character password is: \
  {permutations}")