# IP ADDRESS VALIDATOR KATA

## Source

http://www.tddbuddy.com/katas/IP%20Validator.pdf

## The Kata

Create a class with one method called **ValidateIpv4Address**. The method takes a string and return true if it is valid host assignable IP address and false if not.  
IPv4 addresses are 32 bits long and grouped into 4 one byte blocks separated by dotted-decimal notation. E.g. 192.168.1.1.  
Most IP addresses ending in 0 represent the entire network segment and cannot be used as host addresses. And most IP addresses ending in 255 represent a broadcast address and cannot be used as a host address. There are exceptions, when using subnets, for the sake of this Kata any address ending in 0 or 255 is not a valid host address.  
DO NOT USE REGULAR EXPRESSIONS TO SOLVE THIS KATA.

Examples

| IP Address      | Result |
|-----------------|--------|
| 1.1.1.1         | true   |
| 192.168.1.1     | true   |
| 10.0.0.1        | true   |
| 127.0.0.1       | true   |
| 0.0.0.0         | false  |
| 255.255.255.255 | false  |
| 1.1.1.0         | false  |
| 10.0.1          | false  |
