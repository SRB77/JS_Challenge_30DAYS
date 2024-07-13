let assignOne = "something different";
console.log(assignOne);
assignOne = 3456724250555675;
console.log(assignOne);

const constVar = "kuchh v";
console.log(constVar);
try {
  constVar = 500;
} catch (ERROR) {
  console.log(ERROR); // TypeError: Assignment to constant variable.
}


