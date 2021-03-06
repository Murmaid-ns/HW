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

const dividedByTwoArr = arr.map(element => element / 2);
console.log('3.Массив из элементов деленных на 2', dividedByTwoArr);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const sumOfNegativeNumber = arr.reduce((sum, element) => {
    if (element % 2) {
        sum = sum + element
    }
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

users.push({name: 'Boris', age: 30});
users.push({name: 'Valera', age: 48});
users.push({name: 'John', age: 70});

console.log('Пользователи', users);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const maxAge = users.reduce((prevAge, curAge) => {
    return curAge.age > prevAge.age ? curAge : prevAge;
}, {age: null});
console.log('1.Самый старший пользователь', maxAge);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
users.sort((prevUser, curUser) => {
    const nameCompare = prevUser.name.localeCompare(curUser.name);
    // const ageCompare = (prevUser.age < curUser.age) - (prevUser.age > curUser.age);
    const ageCompare = curUser.age - prevUser.age;
    return nameCompare || ageCompare;
});

console.log('2. Сортировка по имени и возрасту', users);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const sumOfUsersAge = users.reduce((sum, curAge) => sum + curAge.age, 0);
const meanArithmeticAge = sumOfUsersAge / users.length;

console.log('3. Средней возвраст пользователей', meanArithmeticAge);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const adultUsers = users.filter(curAge => curAge.age >= 18);
console.log('4. Пользователи старше 18 лет', adultUsers);
console.log(users)
