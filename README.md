# _Mr. Roboger's Neighborhood_

#### _A seemingly innocent web page that counts to a user inputted number, 8/21/2020_

#### By _**Joseph Karnafel**_

## Description

_This project takes the user's inputted name and a number. It outputs a list that counts from 0 to the user's number with regard to a specific pattern that is mapped out in the specs. This project utilizes a for loop to build an array that counts from 0 to the user's inputted number._

#### **Important:** 
  _There is an easter egg to this web page. If you would like to find it your self, skip to the installation instructions now._

* _If you press the enter button, you will find a very small text in the bottom left of the screen which says, "i see you."_
* _Type these exact words, "i see you" into the input box under "What's your name?"_
* _Press enter_

#### Specs

* Spec: The program returns a list of numbers from 0 to n
* Input: 3
* Output: 0, 1, 2, 3

* Spec: The program will replace any element containing the number "3" with "Won't you be my neighbor?"
* Input: 4
* Output: 0, 1, 2, Wont you be my neighbor?, 4

* Spec: After checking if an element includes the number "3", the program with replace any element containing the number "2" and replace it with "Boop!"
* Input: 4
* Output: 0, 1, Boop!, Wont you be my neighbor?, 4

* Spec: After checking if an element includes the number "3" and the number "2", the program with replace any element containing the number "1" and replace it with "Beep!"
* Input: 4
* Output: 0, Beep!, Boop!, Wont you be my neighbor?, 4

* Spec: Instead of returning "Won't you be my neighbor?", the program will take the user's name as input and return "Won't you be my neighbor, {name}?"
* Input: Joseph Karnafel, 4
* Output: 0, Beep!, Boop!, Wont you be my neighbor, Joseph Karnafel?, 4

* Spec: Program checks if the user has inputted a value for their name. If not, the program returns "Won't you be my neighbor?" instead of "Won't you be my neighbor, {name?}"
* Input: null, 4
* Output: 0, Beep!, Boop!, Wont you be my neighbor?, 4

* Spec: If the user does not enter enter one of the specified fields, Mr. Robogers will return a snarky message telling the user to fill all fields.
* Input: Joseph Karnafel, null
* Output: I can't count to nothing

* Spec: If the user enters "i see you" in the name field, the background color turns dark red
* Input: i see you
* Output: {bg color changes to red and robot animation changes}

## Setup/Installation Requirements

* _open terminal_
* _type "cd desktop", then press enter_
* _type "git clone https://github.com/Joebenitus/robogers-neighborhood", then press enter_
* _locate and open folder on desktop named "robogers-neighborhood"_
* _open the file named "index.html"_

Click here for the gh-pages live site: https://joebenitus.github.io/robogers-neighborhood

## Known Bugs

_There are no known bugs at this time._

## Support and contact details

_If you have any questions or ideas on how to improve this project, feel free to contact me at josephkarnafel@gmail.com_

## Technologies Used

* _HTML_
* _CSS_
* _Bootstrap_
* _jQuery_
* _JavaScript_

### License

*This project is licensed under an MIT license.*

Copyright (c) 2020 **_Joseph Karnafel_**