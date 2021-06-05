var a = -4, b = -4;
if (a % 2 == 0 && b % 2 == 0 && a != 0 && b != 0) {
    console.log(a - b);
} else if (a % 2 == 1 && b % 2 == 1 && a != 0 && b != 0) {
    console.log(a * b);
} else if (a != b && a != 0 && b != 0) {
    console.log(a + b);
} else {
    console.log('a и b = 0');
}