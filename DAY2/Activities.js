// ---------TASK1-------------//
const num1 = 3456789;
const num2 = 4567890;
const resultOfSum = num1 + num2;
console.log(resultOfSum);

// --------TASK2------------//
const num3 = 3456789;
const num4 = 4567890;
const resultOfSub = num1 - num2;
console.log(resultOfSub);

// -----------TASK3-------------//
const num5 = 3456789;
const num6 = 4567890;
const resultOfMul = num1 * num2;
console.log(resultOfMul);

// -------------TASK4------------- //
const num7 = 3456789;
const num8 = 4567890;
const resultOfdiv = num1 / num2;
console.log(resultOfdiv);

// -------------TASK5------------- //
const num9 = 3456789;
const num10 = 4567890;
const resultOfRemainder = num1 % num2;
console.log(resultOfRemainder);

// ===========ACTIVITY2=============//
let digit = 209;
digit += 35;
console.log(digit); //TASK6.

let digit2 = 209;
digit2 -= 9;
console.log(digit2); //Task7.


// ==============Activity3====================//
let some1 = 56 ;
let some2 = 67 ;
let some3 = 67;
let some4 = false;
let some5 = 0;
console.log(some1<some2);   //task8
console.log(some1>some2);
console.log(some1>=some2);
console.log(some1<=some2);
console.log(some2 <= some3);   //task9

console.log(some4 == some5);    //TASK10
console.log(some4===some5);


const first = true;
const second = false;
const result1 = first && second;
const result2 = first || second;
const result3 = !second;

console.log("Logical and",result1);   //TASK 11 ,12,13.
console.log("Logical OR",result2);
console.log("Logical negation",result3);


function canAccess (age){
    const shouldAccess = age>=18?"Yes":"No";
    console.log(shouldAccess);
}
canAccess(10)    //TASK 14.