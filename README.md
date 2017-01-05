# _Roman Numeral Converter_
###_Epicodus Pair Project , 9.18.2016_

#### By _Katrina Hirsch and Seth Kendall_

## Description
* This program converts numerical input to roman numeral format.
## Specifications
* The program does not accept non-numerical input.
Example Input: hey
Example Output:

* Roman numeral notation covers only positive integers from 1 to 3999
Example Input: 4000
Example Output: "Error: Invalid Number"

* In Roman numeral notation symbols are correlated to point values.
  The symbol/value pairings are as follows:
  * I = 1
  * V = 5
  * X = 10
  * L = 50
  * C = 100
  * D = 500
  * M = 1000
Example Input: 1
Example Output: I

* Ones, tens, hundreds and thousands must be kept separate from one another.
Example Input: 99
Example Output: XCIX (not IC)

* The value of a roman numeral expression is calculated by summing the values of all its component numerals.
Example Input: 16
Example Output: XVI

* No more than 3 consecutive instances of the same character are allowed. When a fourth character of the same type is added the program places 1 instance of the character to the left of the next character tier up. In this, and only this case, value is calculated by subtracting the value of the smaller numeral from the larger.
Example Input: 19
Example Output: XIX

## Setup/Installation Requirements

* _Copy the repository from GitHub_
* _Open the index.html file a browser of your choice_
* _Open the console to confirm that javascript and jQuery are running_

## Known Bugs
No known bugs.

## Contact Information
Contact me at sethpkendall@gmail.com

## Licensing

*This product can be used in accordance with the provisions under its MIT license.*

copyright (c) 2016 **_Katrina Hirsch and Seth Kendall_**
