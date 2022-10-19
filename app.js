console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function printOdds(count){
    for(i = 0; i < count; i++){
        if(i % 2 != 0){
            console.log(i);
        }
        else i++;
    }
}
printOdds(63);
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
function checkAge(userName, age) {
    let drivingAge = "Congrats ${userName}, you can drive!";
    let belowDrivingAge = "Sadly you cannot drive yet, ${userName}.";

    if(age < 16) {
        console.log(belowDrivingAge);
    } else {
        console.log(drivingAge);
    }
}
checkAge(25);

//Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
function whichQuadrant(x, y) {
    if(x==0 && y==0){
        console.log("Point is on the origin.");
    } else if(x == 0) {
        console.log("Point is on the Y axis.");
    } else if(y == 0) {
        console.log("Point is on the X axis.");
    } else if(x > 0 && y > 0) {
        console.log("Point is in Quadrant 1.");
    } else if(x > 0 && y < 0) {
        console.log("Point is in Quadrant 4.");
    } else if(x < 0 && y > 0) {
        console.log("Point is in Quadrant 2.");
    } else if(x < 0 && y < 0) {
        console.log("Point is in Quadrant 3.");
    } else {
        console.log("Invalid");
    }
}
whichQuadrant(2, -2);
//Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");
function isTriangle(a, b, c) {
    if (a == 0 || b == 0 || c == 0) {
        console.log("Does not form a triangle.");
    } else if (a + b >= c && b + c >= a && c + a >= b) {
        console.log("This forms a valid triangle.");
    } else {
        console.log("Does not form a triangle.");
    }
}
isTriangle(2, 4, 6);