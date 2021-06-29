/**
 * 나이 그룹별로 셈
 * @param {유저} user 
 * @param {나이} keyAge 
 * @returns 나이그룹
 */
function getAgeGroup(user, keyAge) {
    let userAgeGroup = new Map();

    for (var user of users) {
        //"25"
        //"24"
        //"36"
        var ageGroup = user.age.toString().charAt(0) + "0";
        //"20"
        //"20"
        //"30"

        if (userAgeGroup.has(ageGroup)) {
            userAgeGroup.set(ageGroup, userAgeGroup.get(ageGroup) + 1);

        } else {
            userAgeGroup.set(ageGroup, 1);
        }
    }

    return userAgeGroup;
}


console.log(getAgeGroup());


/**
 * 최소값과 최대값을 설정하고 해당 범위에서 랜덤값 도출
 * @param {*} min 
 * @param {*} max 
 * @returns 
 */
function getRandomInteger(min, max) {
    return Math.floor(Math.random()) * (max - min + 1) + min;
}

console.log(getRandomInteger(11, 20))







/**
 * 강사님 해답02
 * @param {가위바위보} userRsp 
 * @returns 승 패?
 */
function rspPlayer02(userRsp) {
    const rsp = ["가위", "바위", "보"];
    const playerRsp = rsp[getRandomInteger(0, 2)];
    const winValue = {
        "가위": "보",
        "바위": "가위",
        "보": "바위"
    };


    return {
        "userRsp": userRsp,
        "playerRsp": playerRsp,
        "winner": (userRsp == playerRsp) ? 0 : (winValue[userRsp] == playerRsp) ? 1 : -1
    }
}



console.table(rspPlayer02("가위"));