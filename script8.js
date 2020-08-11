'use strict'

const arr = [-246, 753, -468, 475, -683, 476, -583, 746, -581];
console.log('Часть 1')
console.log('Исходный массив', arr)

const filteredArr = arr.filter(element => element < 0);
console.log('1.Новый массив  из отрицательных элементов', filteredArr);

const reversedArr = arr.concat().reverse();
console.log('2.Массив развернутый в обратном порядке', reversedArr)

const dividedByTwoArr = arr.map(element => {
    element = element / 2;
    return element;
});
console.log('3.Массив из элементов деленных на 2', dividedByTwoArr);

const sumOfNegativeNumber = arr.reduce((sum, element) => {
    if (element < 0)
        sum = sum + element
    return sum
}, 0);
console.log('4.Сумма нечётных чисел', sumOfNegativeNumber);


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////


console.log('Часть 2')

const users = [
    {name: 'John', age: 21,},
    {name: 'Mary', age: 15,},
    {name: 'Alex', age: 27,},
    {name: 'John', age: 18,},
];
console.log('Пользователи', users);

const maxAge = users.reduce((prevAge, curAge) => {
    return curAge.age > prevAge.age ? curAge : prevAge;
}, {age: null});
console.log('1.Самый старший пользователь', maxAge);

let sortedUsers = users.sort((prevName, curName,) => {
    return prevName.name > curName.name ? 1 : -1;
});


//  sortedUsers = users.sort((curAge, prevAge) => {
//     return prevAge.age > curAge.age ? 1 : -1;
// })
console.log(sortedUsers);
