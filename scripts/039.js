// Arrow Function - 화살표 함수

//함수 선언식
// function add() {

// }

//함수 표현식
// var add = function (x1, x2) {
//     return x1 + x2;
// };

// Arrow Function - 화살표 함수
var add = (x1, x2) => x1 + x2; // 한줄일 경우 return 생략, 중괄호 생략 // 정식은 (x1,x2) => {return x1,x2}
var multifly = (x1, x2) => x1 * x2;


console.log(add(4, 6));
console.log(multifly(4, 6));


var say = (messagge) => {};

// 비어있을 경우
function myFunction() {

};
var myFunction = () => {};