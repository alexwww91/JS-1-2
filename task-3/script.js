var a = -3, b = 4;
if (a == 0 || b == 0) {
    console.log('a и b = 0');
} else {
    if (a % 2 == 0 && b % 2 == 0) {
        console.log(a - b);
    } else if (a % 2 == 1 || a % 2 == -1 && b % 2 == 1 || b % 2 == -1) {
        console.log(a * b);
    } else if (a != b) {
        console.log(a + b);
    }
}