"use strict"
let arrowLength = +prompt('Введите длину стрелки');
for (let i = 0; i < arrowLength; i++) {
    let star = '*';
    for (let j = 0; j < i; j++) {
        star += '*';
    }
    console.log(star);
}

for (let i = 0; i < arrowLength-1; i++) {
    let star = '*';
    for (let j = arrowLength-2; j > i; j--) {
        star += '*';
    }
    console.log(star);
}
