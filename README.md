Project
Password Security
A client has asked us to check their company's cybersecurity system.

Let's create a program that checks the strength of the client's password. 
We should also check how long it could take for a hacker to hack into their 
account if they knew the characters, but not the order, to the password.

I: Start by creating a program that assesses the strength of a password by
checking the of possible permutations.
## Permutations are the number of possible configurations of the password characters.##
The strength of a password is dependent on the number of characters it contains.

Some variables:
password_length is the length of the password
counter is to check the number of times we enter the loop
permutations is to check the number of possible combinations of the characters

Number of needed permutations is can be found with a while loop 