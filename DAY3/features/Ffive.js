function checkLeapYear(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0 && year % 400 === 0) {
      console.log(`this ${year} is leap year`);
    } else {
      console.log("its not a leap year ");
    }
  }
}
checkLeapYear(1900);
