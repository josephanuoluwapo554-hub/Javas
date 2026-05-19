// Ask user for month
let month = prompt("Enter month name:");

// Ask user for year
let year = prompt("Enter year:");

// Convert month to lowercase
month = month.toLowerCase();


// Check the month
if (
  month === "january" ||
  month === "march" ||
  month === "may" ||
  month === "july" ||
  month === "august" ||
  month === "october" ||
  month === "december"
) {

  alert(month + " has 31 days");

}

else if (
  month === "april" ||
  month === "june" ||
  month === "september" ||
  month === "november"
) {

  alert(month + " has 30 days");

}

else if (month === "february") {

  // Leap year condition
  if (
    (year % 4 === 0 && year % 100 !== 0) ||
    year % 400 === 0
  ) {

    alert("February has 29 days");

  }

  else {

    alert("February has 28 days");

  }

}

else {

  alert("Invalid month");

}