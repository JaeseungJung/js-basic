// Rest Parameter

// function add(x1, x2, x3) {
//     return x1 + x2 + x3;

// }


function add(...nums) {
    var sum = 0;
    for (var n of nums) {
        sum += n;
    }
    return sum;
}

console.log(add(2, 3, 5, 6, 7, 8, 9, 0, 10));


// Terminal - node 038.js
//입력하면 실행됨.