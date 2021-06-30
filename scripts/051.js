// date 객체


var d = new Date();


console.log(d);

// JSON에서는 GMT 00 시간으로 출력됩니다.
//    HTML 에서는 GMT +9 시간으로 출력됩니다. => local

var year = d.getFullYear();
console.log(year);

var month = d.getMonth(); + 1;
console.log(month);

var day = d.getDate();
console.log(day);

console.log(year + "-" + month.toString().padStart(0) + "-" + day)
// month는 숫자이므로 padStart를 쓰려면 문자열로 바꿔줍니다. - toString

console.log(d.getTime())

var d2 = new Date(d.getTime() - (3 * 60 * 60 * 24 * 1000));
console.log(d2);


function getIntervalDate(day) {
    var now = new Date;

    return new Date(now.getTime() + (60 * 60 * 24 * 1000));
}

console.log(getIntervalDate(-9));