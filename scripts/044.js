// Array Destructuring

function getScores() {
    return [70, 21, 100];
}

var [scores] = getScores();
var [x, y, ...args] = getScores();
scores[0];

function GeolocationCoordinates() {
    return [12.3466, 54.3344];
}

// [경도, 위도];
var coordinates = GeolocationCoordinates(); //경도 위도
coordinates[0]; // 경도
coordinates[1]; // 위도

// => 어레이 디스트럭쳐링
var [longitude, latitude] = GeolocationCoordinates(); //경도 위도