var str = "Hello Typescript";
console.log(str);
//Type 'number' is not assignable to type 'string'
// str = 12;
str = "Hi";
console.log(str);
var num = 100;
console.log(num);
//Type 'string' is not assignable to type 'number'.
// num = "Hello";
num = 101;
console.log(num);
var circle = function (diameter) {
    return diameter * Math.PI;
};
console.log(circle("Hello")); // output NaN
var circle2 = function (diameter) {
    return diameter * Math.PI;
};
//Argument of type 'string' is not assignable to parameter of type 'number'
// console.log(circle2("Hello"))
console.log(circle2(10));
