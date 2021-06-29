// Object Destructuring

function getPerson() {
    return {
        firstName: "John",
        lastName: "Doe",
        age: "37",
        email: "john@gmail.com"
        city: "Jeju-si"
        country: "Republic of korea"
    };
}


var person = getPerson();
// console.log(person.firstName);
// console.log(person.lastName);

// 실무에서 자주 사용됨. 오브젝트 디스트럭쳐링
var {
    firstName,
    lastName
} = getPerson();
console.log(person.firstName);
console.log(person.lastName);