'use strict'


let userNum = +prompt('')

function sum(userNum) {
    return userNum === 1 ? 1 : userNum + sum(userNum - 1);

}

console.log('Recursion', sum(userNum));

//////////////////////////////////////////////////////////////////////

let result = 0;
for (let i = 0; i <= userNum; i++) {
    result += i;
}

console.log('Cycle', result);