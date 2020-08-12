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
        if(isTrueEl){
            newFilteredArr.push(arr[i]);

        }
    }
    return newFilteredArr;

}


const newFilteredArr = filter(arr2, (el) => el !== null);
console.log(arr2);
console.log('изначальный массив', arr2);
console.log('Новый массив числел без null', newFilteredArr);

///////////////////////////////////////////////////////////////////////////////////////////////////

const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function reduce(arr3, initialValue) {
    for (let i = 0; i < arr3.length; i++) {
        initialValue = arr3[i] + initialValue;


    }
    return initialValue;
}

const sum = reduce(arr3, 0)
console.log(sum, ' Сумма чисел массива ', arr3);


//TODO: доделать адекватный вывод
// Закоментировал так как не работал вывод через return.
// Находилось в цикле for{  func(initialValue, i);  }
// const sum = reduce(arr3, 0, (value, index) => {
//     for (let j = 0; j <= index; j++) {
//         value = arr3[j] + value;
//     }
//     console.log('value',value);
//     return value;
// });

