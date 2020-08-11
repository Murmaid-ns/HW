'use strict'

const arr = [16, -37, 54, -4, 72, -56, 47, 4, -16];

//1 найти сумму положительных элементов массива и посчитать их количество

function findPositive(arr) {
    let positiveNumberCount = 0;
    let sumPositiveElements = 0;
    for (let i = 0; i < arr.length; i++) {
        const el = arr[i];
        if (el > 0) {
            positiveNumberCount++;
            sumPositiveElements += el;
        }
    }
    return [sumPositiveElements, positiveNumberCount];
}

console.log(findPositive(arr));

// 2 Найти минимальный элемент массива и его порядковый номер

function findMinIndex(arr) {
    if (!arr.length) {
        return null;
    }
    let minValue = arr[0];
    let minValueIndex = 0;
    for (let i = 1; i < arr.length; i++) {
        const el = arr[i];
        if (minValue > el) {
            minValue = el;
            minValueIndex = i;
        }
    }
    return [minValue, minValueIndex];
}

console.log(findMinIndex(arr));

// Найти сумму чётных положительных элеметов

const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function findPositive1(arr2) {
    let positiveNumberCount = 0;
    let sumEvenPositiveElements = 0;
    for (let i = 0; i < arr2.length; i++) {
        const el = arr2[i];

        const isElementPositive = el > 0;
        const isElementEven = el % 2 === 0;

        if (isElementPositive && isElementEven) {
            positiveNumberCount++;
            sumEvenPositiveElements += el;
        }
    }
    return [sumEvenPositiveElements, positiveNumberCount];
}

console.log(findPositive1(arr2));

console.log('');
const arr3 =[1,2,3,4];
arr3.map(el => el + 1).forEach(el => console.log(el));

console.log('');
const arr4 = [1,2,3];
 arr4.reduce((prevValue, el) => {
    console.log(prevValue);
    console.log(el);
    return el;
}, 0);