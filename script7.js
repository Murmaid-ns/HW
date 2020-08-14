const arr = [1, 2, 3, 10, 22, 11, 23, 2, 5, 6];

function map(arr, callback) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(callback(arr[i]))
    }
    return newArr;
}

const newArr = map(arr, (el) => el + 1);

console.log('изначальный массив', arr);
console.log('Новый массив числел увеличенных на 1', newArr);

///////////////////////////////////////////////////////////////////////////////////////////////////

const arr2 = [1, 2, null, 3, 4, false, 5, 6, null, 7, 8, 9, null, null, 10, 11, null, 13];

function filter(arr2, funcFilter) {
    const newFilteredArr = [];
    for (let i = 0; i < arr2.length; i++) {
        const isTrueEl = funcFilter(arr2[i], i)
        if (isTrueEl) {
            newFilteredArr.push(arr2[i]);
        }
    }
    return newFilteredArr;
}


const newFilteredArr = filter(arr2, (el) => el !== null && el !== undefined && el !== false);
console.log('изначальный массив', arr2);
console.log('Новый массив числел без null', newFilteredArr);

///////////////////////////////////////////////////////////////////////////////////////////////////

const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function reduce(arr3, callback, initialValue) {
    let result = initialValue;
    for (let i = 0; i < arr3.length; i++) {
        result = callback(result, arr3[i], i);
    }
    return result;
}

const sum = reduce(arr3, (prevIterationValue, el) => prevIterationValue + el, 0)
console.log(sum, ' Сумма чисел массива ', arr3);

