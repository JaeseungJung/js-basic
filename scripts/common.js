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