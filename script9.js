"use strict";

const userInfo = [
    {name: 'John', gender: 'male', yearOfBirth: 1990},
    {name: 'Helen', gender: 'female', yearOfBirth: 1984},
    {name: 'Anna', gender: 'female', yearOfBirth: 1994},
    {name: 'Ivan', gender: 'male', yearOfBirth: 2002},
    {name: 'Mark', gender: 'male', yearOfBirth: 1999},
    {name: 'Maria', gender: 'female', yearOfBirth: 1989},
    {name: 'Igor', gender: 'male', yearOfBirth: 2000},
    {name: 'John', gender: 'male', yearOfBirth: 1995}
];

userInfo.forEach((element, i) => element.index = i);
console.log(userInfo);

function genderCount() {
    const countObj = userInfo.reduce((counter, user) => {
        const increaseField = user.gender;
        if (counter.hasOwnProperty(increaseField)) {
            counter[increaseField]++;

        } else {
            counter[increaseField] = 1;
        }
        return counter;
    }, {
        male: 0,
        female: 0
    });
    return countObj.female > countObj.male ? 'female' : 'male';
}


console.log('More is', genderCount(userInfo), 'gender');


const arr = ['ololo', 'anna', 'red', 'ololo', 'qwe', 'anna', 'ololo'];
const counterElements = arr.reduce((count, element, index) => {
    if (count.hasOwnProperty(element)) {
        count[element]++;
    } else {
        count[element] = 1;
    }
    return count;
}, {});
console.log(counterElements);


const user = {
    name: 'Alex',
    age: 21,
};

const reverseUser = Object.entries(user).reduce((reversed, entries) => {
    const key = entries[0];
    const value = entries[1];
    reversed[value] = key;
    return reversed;
}, {});
console.log(reverseUser);
