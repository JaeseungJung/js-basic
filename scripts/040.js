// Template Literals
//  Hello Jeremy. Welcome!

// function hello(naem) {
//     console.log("Hello" + name + ".Welcome!");
// }

function hello2(name) {
    console.log(`Hello ${name}. Welcome!`); // `` BackTick 안에 넣습니다.
}

hello2("Jeremy");




// 템플릿 리터럴 복습 - 백틱 활용.

function happyBirthday(userName) {
    console.log(`Happy Birthday!! ${userName}. Congraturations!!!`);
}

// 백틱``은 템플릿 안에 패러미터 값으로 넣어줄 것은 $(parameter)라고 해주면 된다.
happyBirthday("Trump");