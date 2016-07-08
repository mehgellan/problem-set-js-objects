/*

  Create a function `daysUntilDate` that accepts a string (with the format `"mm/dd/yyyy"`) and
  returns the number of days (integer) between today and that date. Please use the built in
  Javascript `Date` type in your solution.

  See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

  Next, create a function `birthdayReminder` that accepts an array of objects, containing a person's
  date of birth (dob), and returns an array of reminder messages (strings).

  ```javascript
  birthdayReminder([
    {
      name: "Jack",
      dob: "10/31/2013"
    },
    {
      name: "Jill",
      dob: "4/01/1975"
    }
  ]);

  //=> [
  //      "Jack's birthday is in 75 days",
  //      "Jill's birthday is in 305 days"
  //    ]
  ```

  Bonuses
  - Will your function still work tomorrow when the date is different? Is it future proofed?
  - To make your output more relevant, can you sort by days remaining (ascending)?

*/

// YOUR CODE HERE

function daysBetweenDate(string) {
  var dateToCheck = new Date(string);
  var currentDate = new Date();
  var diff = Math.floor((currentDate - dateToCheck)/86400000);
  return diff;
}

function birthdayReminder(arrayOfObjects) {
  // var days = Math.floor(start.getTime() - now.getTime()/86400000);

  arrayOfObjects.forEach(function(element) {
    var bday = new Date(element.dob);
    var bdayTime = bday.getTime();
    console.log("bdayTime= " + bdayTime);
    var now = new Date();
    var nowTime = now.getTime();
    console.log("nowTime= " + nowTime);
    var days = Math.floor(bdayTime - nowTime/86400000);
    console.log("days= " + days);
    var daysLeft = days/365;
    console.log("daysLeft= " + daysLeft);
    var statement = element.name + "'s birthday is in " + daysLeft + " days";
    console.log(statement);
    // console.log(element.dob);
  });
}
