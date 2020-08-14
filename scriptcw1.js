"use strict";

const user = {
    prop1: 200,
    prop2: 'user',
    prop3: {},
    prop4: 300,
}
const values = Object.values(user);
console.log(values);
const propSum = values.reduce((acc, el) => {
    if (typeof el === 'number') {
        return acc + el;
    }
    return acc;
}, 0);
console.log(propSum);

const user2 = {};
const user3 = {};
Object.assign(user2, user);
user2.age = '12';
user2.prop1 = {l: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6};

Object.assign(user3, user2);
user3.prop1.l = 10;

console.log(user);
console.log(user2);
console.log(user3);

