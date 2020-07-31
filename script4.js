"use strict";

let randomNumber = null;
let yourNumber = null;
while (yourNumber !== Math.round(randomNumber)) {
    randomNumber = Math.random() * 5;
    yourNumber = prompt('Chose number from 0 to 5');
    console.log(Math.round(randomNumber));
    console.log(yourNumber);
    if (yourNumber == null) {
        alert('Have a nice day!');
        break;
    }
    if (yourNumber == Math.round(randomNumber)) {
        alert('God job!');
        break;
    } else {
        alert('Another try');
    }

}