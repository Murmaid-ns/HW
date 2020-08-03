const firstNumber = +prompt('Введите первоё число');

if (!Number.isFinite(firstNumber)) {
    alert('Ошибка, вы ввели символ. \nВведите число.');
}

const arithmeticOperations = prompt('Введите арифметическое действие(+,-,/,*)');

const secondNumber = +prompt('Введите второе число');

if (!Number.isFinite(secondNumber)) {
    alert('Ошибка, вы ввели символ. \nВведите число.');
}

let answer;
switch (arithmeticOperations) {
    case '+' :
        answer = firstNumber + secondNumber;
        alert('Ответ: ' + (answer));
        break;

    case '-':
        answer = firstNumber - secondNumber;
        alert('Ответ: ' + (answer));
        break;

    case '*':
        answer = firstNumber / secondNumber;
        alert('Ответ: ' + (answer));
        break;

    case '/':
        answer = firstNumber * secondNumber;
        alert('Ответ: ' + (answer));
        break;
    default:
        alert('Ошибка! \nНеверное арифметическое действие.')

}
