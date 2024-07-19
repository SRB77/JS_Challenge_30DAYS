function checkIt(digit) {
  if (digit === 0) {
    console.log("number is zero");
  } else if (digit < 0) {
    console.log("number is Negative");
  } else {
    console.log("number is Positive");
  }
}
checkIt(-23); //TASK 1.

function checkForVote(age) {
  if (age >= 18) {
    console.log("eligible for vote.");
  } else {
    console.log("not eligible for vote");
  }
}
checkForVote(34); //TAASK 2.

// -------------------- NESTED IF ELSE STATEMENT--------------------------------//
function threeDigit(one, two, three) {
  let greatest;
  if (one > two) {
    if (one > three) {
      greatest = one;
    } else {
      greatest = three;
    }
  } else {
    if (two > three) {
      greatest = two;
    } else {
      greatest = three;
    }
  }
  console.log(greatest);
}
threeDigit(75, 24, 56);

// ---------------------------- SWITCH CASE--------------------------------------//
function daysInWeek(day) {
  switch (day) {
    case 1:
      console.log("Monday");
      break;
    case 2:
      console.log("Tuesday");
      break;
    case 3:
      console.log("wednessday");
      break;
    case 4:
      console.log("Thursday");
      break;
    case 5:
      console.log("Friday");
      break;
    case 6:
      console.log("Saturday");
      break;
    case 7:
      console.log("Sunday");
      break;
    default:
      console.log("Invalid day");
      break;
  }
}
daysInWeek(2);

// -------------------------------------SWITCH CASE 2 -------------------------------------
function assignGrade(score) {
  let grade;
switch (true) {
    case score >= 90:
      grade = "A";
      break;
    case score >= 80:
      grade = "B";
      break;
    case score >= 70:
      grade = "C";
      break;
    case score >= 60:
      grade = "D";
      break;
    case score >= 50:
      grade = "E";
      break;
    default:
      grade = "F";
}
  return grade;
}
assignGrade(45);

// -------------------------------Ternary Operator --------------------------------------

function numToCheck(num){
    const checkOddOrEven = num%2===0 ? "number is even":"number is odd";
    console.log(checkOddOrEven);
}
numToCheck(24);    

// ---------------------------------Combining Condition----------------------------------

function checkLeapYear(year){
    if (year%4 === 0){
      if (year%100 === 0 && year%400 === 0){
        console.log(`this ${year} is leap year`);
      }
      else{
        console.log("its not a leap year ");
      }
    }
}
checkLeapYear(1900);

