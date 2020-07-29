const firstNumber = +prompt('Введите первоё число');

if (firstNumber.isInteger) {
} else {
    alert('Ошибка, вы ввели символ. \nВведите число.');
}

const arithmeticOperations = prompt('Введите арифметическое действие(+,-,/,*)');

const secondNumber = +prompt('Введите второе число');

if (secondNumber.isInteger) {
} else {
    alert('Ошибка, вы ввели символ. \nВведите число.');
}

let answer = Number;

if (arithmeticOperations === '+') {
    answer = firstNumber + secondNumber;
    alert('Ответ: ' + (answer));
} else if (arithmeticOperations === '-') {
    answer = firstNumber - secondNumber;
    alert('Ответ: ' + (answer));
} else if (arithmeticOperations === '/') {
    answer = firstNumber / secondNumber;
    alert('Ответ: ' + (answer));
} else if (arithmeticOperations === '*') {
    answer = firstNumber * secondNumber;
    alert('Ответ: ' + (answer));
} else {
    alert('Ошибка! \nНеверное арифметическое действие.')
}
