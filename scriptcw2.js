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

//Реверснутый массив объектов
function reverseObj(obj) {
    const reversedObj = Object.entries(obj).reduce((reversed, [key, value]) => {
        reversed[value] = key;
        return reversed;
    }, {});
    return reversedObj;
}

const reverseUsers = userInfo.map((userInfo) => reverseObj(userInfo), []);
console.log(reverseUsers);