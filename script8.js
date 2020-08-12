'use strict'

const arr = [-246, 753, -468, 475, -683, 476, -583, 746, -581];
console.log('Часть 1')
console.log('Исходный массив', arr)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const filteredArr = arr.filter(element => element < 0);
console.log('1.Новый массив  из отрицательных элементов', filteredArr);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const reversedArr = arr.concat().reverse();
console.log('2.Массив развернутый в обратном порядке', reversedArr)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const dividedByTwoArr = arr.map(element => {
    element = element / 2;
    return element;
});
console.log('3.Массив из элементов деленных на 2', dividedByTwoArr);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const sumOfNegativeNumber = arr.reduce((sum, element) => {
    if (element % 2)
        sum = sum + element
    return sum
}, 0);
console.log('4.Сумма нечётных чисел', sumOfNegativeNumber);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


console.log('Часть 2')

const users = [
    {name: 'John', age: 21,},
    {name: 'Mary', age: 15,},
    {name: 'Alex', age: 27,},
    {name: 'John', age: 18,},
];
console.log('Пользователи', users);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const maxAge = users.reduce((prevAge, curAge) => {
    return curAge.age > prevAge.age ? curAge : prevAge;
}, {age: null});
console.log('1.Самый старший пользователь', maxAge);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const sortedUsers = users.sort((prevUser, curUser) => {
    if (prevUser.name === curUser.name) {
        return prevUser.name.localeCompare(curUser);
    } else {
        return (prevUser.age < curUser.age) - (prevUser.age > curUser.age);
    }
});
console.log('2. Сортировка по имени и возрасту', sortedUsers);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let meanArithmeticAge = users.reduce((sum, curAge) => {
    return sum + curAge.age;
}, 0);
meanArithmeticAge = meanArithmeticAge / users.length
console.log('3. Средней возвраст пользователей', meanArithmeticAge);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const adultUsers = users.filter(curAge => curAge.age >= 18);
console.log('4. Пользователи старше 18 лет', adultUsers);
