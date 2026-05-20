let isRaining = true;

console.log(typeof isRaining);

if (isRaining) console.log("Carry an umbrella");

let eng = 40;
let maths = 60;
let bio = 30;
let chem = 85;

let averageper = (eng + maths + bio + chem) / 4;
console.log(averageper);

if (averageper >= 70) {
  console.log(`Your grade is A because you scored ${averageper}`);
  
}

// switch

let weather = "rainy";

switch (weather) {
    case "rainy":
        console.log("it is rainy today");

        break;

        case "cloudy":
            console.log("it will probably rain");

            break;

            case "sunny":
                console.log("the sun is shinning");

                break;

                default:
                    console.log("it's a great weather")
}
// tenary operator
let isGoing = true

isGoing ? console.log("is going o") : console.log("it's not going ")


// let number = prompt("Enter a number:");
// if (number % 2 === 0) {
//   console.log(number + " is an Even number");
// }else if (number % 2 !== 0) {
//   console.log(number + " is an Odd number");
// }