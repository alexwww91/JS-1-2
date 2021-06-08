function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case '-':
            console.log(arg1 - arg2);
            break;
        case '*':
            console.log(arg1 * arg2);
            break;
        case '/':
            console.log(arg1 / arg2);
            break;
        case '+':
            console.log(arg1 + arg2);
            break;
        default:
            console.log('Неверное значение операции')
    }
}

mathOperation(4, 2, '454');