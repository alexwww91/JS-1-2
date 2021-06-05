console.log(0 < null); //false
console.log(0 > null); //false
console.log(0 == null); //false
console.log(0 != null); //true
console.log(null >= 0); //true
console.log(null <= 0); //true

//Сравнения преобразуют null в число, рассматривая его как 0, в отличии от равенства, поэтому выражения типа null >= 0 будет истинно