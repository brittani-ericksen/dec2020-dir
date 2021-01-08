# Day 5 Exercises

## Exercise 1 (Small/Medium)

### Be Santa!

Write a program that simulates a visit to Santa,

* Ask the user what they want for Christmas (can be any number of items)
* Ask if they've been bad or good this year.
* Based on their response, return the appropriate statement:
  * If they've been good, list the presents they'll receive.
  * If they've been bad, tell them they can expect a lump of coal.

### Hints

* Start with just a single item and make the script work. Then add more.
* Use `input` to ask the user what they want, and assign the values to variables.
* Use `input` to ask if they've been bad or good.
* Use a conditional statement, `if ... else`, to determine the response.

#### Bonus

* Involve Krampus!!
* Add functions!

---

## Exercise 2 (Large)

### Hotel Manager

Imagine that you're running a hotel, and you want to keep track of guests by floor and room number.
Start with the following dictionary:

```python
 hotel = {
  '1': {
    '101': ['George Jefferson', 'Wheezy Jefferson'],
  },
  '2': {
    '237': ['Jack Torrance', 'Wendy Torrance'],
  },
  '3': {
    '333': ['Neo', 'Trinity', 'Morpheus']
  }
}
```

Write a program that does the following:

* Display a menu asking whether to check in or check out.
* Prompt the user for a floor number, then a room number.
  * If checking in, ask for the number of occupants and what their names are.
  * If checking out, remove the occupants from that room.
* After checking in or out, display a list of all the occupants and their rooms.

Additional Rules:

* Do not allow anyone to check into a room that is _already occupied_!
* Do not allow checking out of a room that _isn't occupied_!

### Hints

* Start by writing down (_analog style, pen & paper, or in a text file_) all the steps you think a user will need to go through.
* Use `input` to ask the user for their status (checking in/out), number of occupants, floor, and room numbers.
* Use functions to break up your programs behaviors based on the responses.
  * Functions should encapsulate the steps you outlined earlier.
  * Examples _might_ include:
    * Checking In
    * Checking Out
    * Assigning a room and floor during check in
    * Clearing a room after check out
* Use `while` loops and conditionals, `if...else` to determine if a room is available or not.
  * For example `while occupants > 0 ...`
* Start with just adding a single occupant to a room, _then_ add more.
* A combination of a `for` loop and the `range()` function might be helpful when collecting a list of occupants names. [https://pynative.com/python-range-function/](https://pynative.com/python-range-function/)

#### Bonus

* Limit the max number of occupants in a room to 6.
* Loop the program so that it goes back to the first question after displaying a list of all the occupants.
* Import Python's `pprint` module for printing out the list of occupants. [https://docs.python.org/3/library/pprint.html](https://docs.python.org/3/library/pprint.html)