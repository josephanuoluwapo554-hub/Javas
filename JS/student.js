function checkResult() {
    let english = Number(prompt("Enter English score"));
    let maths = Number(prompt("Enter Maths score"));
    let science = Number(prompt("Enter Science score"));
    let computer = Number(prompt("Enter Computer score"));

    let total = english + maths + science + computer;
    let average = total / 4;

    let grade = "";
    let feedback = "";


    if (average >= 70) {
        grade = "A";
        feedback = "Excellent! You Passed.";
    }

    else if (average >= 60) {
        grade = "B";
        feedback = "Very Good! You Passed.";
    }

    else if (average >= 50) {
        grade = "C";
        feedback = "Good! You Passed.";
    }

    else if (average >= 45) {
        grade = "D";
        feedback = "Fair! You Passed.";
    }

    else if (average >= 40) {
        grade = "E";
        feedback = "Poor! Try Harder.";
    }

    else {
        grade = "F";
        feedback = "Failed!";
    }

    
    alert("Your Average is " + average);

    
    document.getElementById("result").innerHTML =
        `
        <h2>Result</h2>
        <p><strong>Total Score:</strong> ${total}</p>
        <p><strong>Average:</strong> ${average}</p>
        <p><strong>Grade:</strong> ${grade}</p>
        <p><strong>Feedback:</strong> ${feedback}</p>
        `;
}