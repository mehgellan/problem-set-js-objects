/*

  Create a function `letterCount` that accepts a string, and finds the number of times each letter
  occurs in the string. For example, given the word "apple", letterCount("apple") should count all
  occurrences of the letters "a", "p", "l" and "e" and then return the following output:

  ```javascript
  {
    "a": 1,
    "p": 2,
    "l": 1,
    "e": 1
  }
  ```

  Bonuses
  - Make sure that lower case letters and upper case letters count for the same character.
  - Ignore spaces, special characters, and punctuation.
  - Instead of just counting letters, calculate their percent-based frequency.
    See: http://www.math.cornell.edu/~mec/2003-2004/cryptography/subs/frequencies.html

    ```javascript
    {
      "a": 0.2, // percent
      "p": 0.4,
      "l": 0.2,
      "e": 0.2
    }
    ```

*/

// YOUR CODE HERE


var letterObject = {};

function letterCount(string) {
  var arrayOfLetters = string.split('');
  var sortedArray = arrayOfLetters.sort();

  var currentLetter = null;
  var letterFreq = 0;
  for (var i = 0; i <= sortedArray.length; i++) {
    if (sortedArray[i] != currentLetter) {
      if (letterFreq > 0) {
        console.log(currentLetter + ' : ' + letterFreq/sortedArray.length);
      }
      currentLetter = sortedArray[i];
      letterFreq = 1;
    } else {
      letterFreq++;
    }
  }


}
