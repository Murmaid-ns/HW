"use strict"

for (let i = 0; i < 5; i++) {
    let star = '*';
    for (let j = 0; j < i; j++) {
        star += '*';
    }
    console.log(star);
}

for (let i = 0; i < 4; i++) {
    let star = '*';
    for (let j = 3; j > i; j--) {
        star += '*';
    }
    console.log(star);
}
