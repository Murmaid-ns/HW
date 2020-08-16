"use strict";

const userInfo = [
    {name: 'John', gender: 'male', yearOfBirth: 1990},
    {name: 'Helen', gender: 'female', yearOfBirth: 1984},
    {name: 'Anna', gender: 'female', yearOfBirth: 1994},
    {name: 'Ivan', gender: 'male', yearOfBirth: 2002},
    {name: 'Mark', gender: 'male', yearOfBirth: 1999},
    {name: 'Maria', gender: 'female', yearOfBirth: 1989},
    {name: 'Igor', gender: 'male', yearOfBirth: 2000},
    {name: 'John', gender: 'male', yearOfBirth: 1995},
];

function addIndexInOdj(userInfo) {
    for (let i = 0; i < userInfo.length; i++) {
        userInfo[i].index = i;
    }
    return userInfo;
}

console.log(addIndexInOdj(userInfo));

const whichGenderIsMore = userInfo.reduce((curGender, prevGender) => {
    return curGender.gender > prevGender.gender ? curGender : prevGender.gender;
}, {gender: ''});

console.log('More is', whichGenderIsMore, 'gender');
//todo: доделать
// const arr = ['ololo', 'anna', 'red', 'ololo', 'qwe', 'anna', 'ololo'];
// const newObj = arr.reduce((accumulator, curElement) => {
//     const element = new Object(curElement);
//     return element;
// }, 0);
// console.log(newObj);