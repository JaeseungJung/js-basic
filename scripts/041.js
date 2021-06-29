// Object Literal Syntax Extension


var firstName = "John";
var lastName = "Doe";

var person = {
    firstName: firstName,
    lastName: lastName
}

var type = "student";
var score = {
    [type]: "John Doe",
    // student: "John Doe"
    score: 95
};

console.log(score[type])