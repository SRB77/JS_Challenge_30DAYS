function compareNumbers(a,b){
    const same = a===b;
    const notSame = a!=b ; 
    const greaterThan = a>b;
    const lessThan = a<b;
    const greaterThanOrEqual = a>=b;
    const lessThanOrEqual = a<=b;

    const bothPossitive = a>0 && b>0;
    const eitherNegative = a<0 || b<0 ;
    const exactlyOneZero = (a === 0) !== (b===0); 

    console.log(`a === b : ${same}`);
    console.log(`a !== b: ${notSame}`);
    console.log(`a > b: ${greaterThan}`);
    console.log(`a < b: ${lessThan}`);
    console.log(`a >= b: ${greaterThanOrEqual}`);
    console.log(`a <= b: ${lessThanOrEqual}`);

    console.log(`Both positive: ${bothPositive}`);
    console.log(`Either negative: ${eitherNegative}`);
    console.log(`Exactly one zero: ${exactlyOneZero}`);
}