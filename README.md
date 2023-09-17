## Start
Project:
Password Security

A client has asked us to check their company's cybersecurity system.
Let's create a program that checks the strength of the client's password. 
We should also check how long it could take for a hacker to hack into their 
account if they knew the characters, but not the order, to the password.

I: Start by creating a program that assesses the strength of a password by
checking the of possible permutations.
## Permutations are the number of possible configurations of the password characters.
The strength of a password is dependent on the number of characters it contains.

Some variables to check for total number of permutations
## password_length 
is the length of the password
## counter 
is to check the number of times we enter the loop
## permutations 
is to check the number of possible combinations of the characters

The max number of password unlocking attempts is the total number of permutations.
The client shared that the account has a locking mechanism to prevent hacking. 
The account will be locked for some time after every 5 wrong attempts

Some variables to check how long the account maybe locked for:
## attempts 
is the number of attempts needed to unlock the account
## max_lock 
is the maximum number of times the account maybe locked for
## locks 
is the number of times the account gets locked
## total_lock_time 
is the total duration of the account is locked for
## lock_time_multiplier 
use this variable to calculate the lock duration each time the account is locked.

Time to test the program! Let's simulate a hacker attempting to guess the password 
too many times and the account being locked.

We simulated the account being locked and the program seems to be working. Finally, 
let's notify the client how long the account was locked.

## End