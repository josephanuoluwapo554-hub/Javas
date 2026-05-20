// FUNCTION
function checkDays() {

  // Ask user for month
  let month = prompt("Enter month name:");

  // Convert month to lowercase
  month = month.toLowerCase();


  // CONDITIONS
  if (
    month === "january" ||
    month === "march" ||
    month === "may" ||
    month === "july" ||
    month === "august" ||
    month === "october" ||
    month === "december"
  ) {

    console.log(month + " has 31 days");

  }

  else if (
    month === "april" ||
    month === "june" ||
    month === "september" ||
    month === "november"
  ) {

    console.log(month + " has 30 days");

  }

  else if (month === "february") {

    console.log("February has 28 or 29 days");

  }

  else {

    console.log("Invalid month");

  }

}