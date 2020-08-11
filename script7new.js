'use strict'
// todo правки для дз 7 тут)
// const arr = [1, 2, false, 3, null, 4, null, undefined, 5, 6, null, false]
//
// function filter(arr, callback) {
//     const filteredArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         const el = arr[i]
//         const isTrueElement = callback(el, i);
//         if (isTrueElement) {
//             filteredArr.push(el);
//         }
//     }
//     return filteredArr;
// }
//
// const filteredArr = filter(arr, (el, index) => el !== null && el !== undefined && el !== false);
// console.log('reduce ',filteredArr);



//////////////////////////////////////////////////////////////////////////////////////////////////////////////


// todo: map
// function map(arr, callback) {
//     const newArray = [];
//
//     for (let i = 0; i < arr.length; i++) {
//         const newE1 = callback(arr[i], i);
//         newArray.push(newE1);
//     }
//     return newArray;
// }
//
// const mappedArr = map([1, 2, 3], (el) => el + 1);
//
// console.log('map',mappedArr);


//////////////////////////////////////////////////////////////////////////////////////////////////////////////



const arr =[1,2,3,4,5,6,7,8,9,10];
function reduce(arr, callback, initialValue) {
    let callbackResult = initialValue;
    for (let i = 0; i < arr.length; i++) {
       const value = callback(callbackResult, arr[i], i);
       callbackResult = value;
    }
    return callbackResult;
}

const reduceCallback = (prevIterationValue, el) => prevIterationValue + el;
const sum = reduce(arr, reduceCallback, 0);

console.log('reduce', sum);