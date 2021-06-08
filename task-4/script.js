var a = 10;
switch (a) {
    case 0:
        a++;
        console.log(0);
    case 1:
        a++;
        console.log(1);
    case 2:
        a++;
        console.log(2);
    case 3:
        a++;
        console.log(3);
    case 4:
        a++;
        console.log(4);
    case 5:
        a++;
        console.log(5);
    case 6:
        a++;
        console.log(6);
    case 7:
        a++;
        console.log(7);
    case 8:
        a++;
        console.log(8);
    case 9:
        a++;
        console.log(9);
    case 10:
        a++;
        console.log(10);
    case 11:
        a++;
        console.log(11);
    case 12:
        a++;
        console.log(12);
    case 13:
        a++;
        console.log(13);
    case 14:
        a++;
        console.log(14);
    case 15:
        a++;
        console.log(15);
        break;
}

console.log("");

function fun(a) {
    console.log(a);
    if (a == 15) {
        return;
    }
    fun(a + 1);
}

fun(5);