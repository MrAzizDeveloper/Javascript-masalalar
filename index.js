
// 1
function formThreeDigitNumber(a, b, c) {
    if (a <= 0 || b <= 0 || c <= 0) {
      console.log(0);
    } else {
      var threeDigitNumber = parseInt(a.toString() + b.toString() + c.toString());
      console.log(threeDigitNumber);
    }
  }
  
  // Example :
  formThreeDigitNumber(2, 7, 9); // Output: 279
  formThreeDigitNumber(0, 0, 2); // Output: 0

//   2
function determineDayOfWeek(number) {
    switch (number) {
      case 1:
        console.log('Monday');
        break;
      case 2:
        console.log('Tuesday');
        break;
      case 3:
        console.log('Wednesday');
        break;
      case 4:
        console.log('Thursday');
        break;
      case 5:
        console.log('Friday');
        break;
      case 6:
        console.log('Saturday');
        break;
      case 7:
        console.log('Sunday');
        break;
      default:
        console.log('none');
        break;
    }
  }
  
  // Example :
  determineDayOfWeek(1); // Output: Monday
  determineDayOfWeek(4); // Output: Thursday
  determineDayOfWeek(9); // Output: none
  
//   3
function isKabisaYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      return true;
    } else {
      return false;
    }
  }
  
  // Example :
  console.log(isKabisaYear(2023)); // Output: false
  console.log(isKabisaYear(2024)); // Output: true
  
//   4
function getNumberOfDigits(a) {
    if (a >= 1 && a <= 9) {
      return 1;
    } else if (a >= 10 && a <= 99) {
      return 2;
    } else if (a >= 100 && a <= 999) {
      return 3;
    }
  }
  
  // Example :
  console.log(getNumberOfDigits(5)); // Output: 1
  console.log(getNumberOfDigits(55)); // Output: 2
  console.log(getNumberOfDigits(555)); // Output: 3

//   5
function checkPositiveNumbers(a, b, c, d) {
    if (a > 0 && b > 0 && c > 0 && d > 0) {
      console.log(true);
    } else {
      console.log(false);
    }
  }
  
  // Example :
  checkPositiveNumbers(5, 10, 3, 7); // Output: true
  checkPositiveNumbers(-2, 8, 10, 12); // Output: false
  checkPositiveNumbers(1, 2, 3, -4); // Output: false

//   6
function calculateSum(a) {
    let sum = 0;
    for (let i = 0; i <= a; i++) {
      sum += i;
    }
    console.log(sum);
  }
  
  // Example :
  calculateSum(5); // Output: 15 (0 + 1 + 2 + 3 + 4 + 5 = 15)
  calculateSum(10); // Output: 55 (0 + 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55)
  calculateSum(3); // Output: 6 (0 + 1 + 2 + 3 = 6)

//   7
function isPerfectNumber(number) {
    let sum = 0;
  
    for (let i = 1; i < number; i++) {
      if (number % i === 0) {
        sum += i;
      }
    }
  
    return sum === number;
  }
  
  // Example :
  const a = 6;
  const isPerfect = isPerfectNumber(a);
  console.log(isPerfect); // Output: true

//   8
function countDigits(number) {
    const digitCount = String(number).length;
    return digitCount;
  }
  
  // Example :
  const n = 123;
  const numberOfDigits = countDigits(n);
  console.log('Number of digits:', numberOfDigits); // Output: Number of digits: 3

//   9
function isPalindrome(number) {
    const numString = String(number);
    const length = numString.length;
  
    for (let i = 0; i < length / 2; i++) {
      if (numString[i] !== numString[length - 1 - i]) {
        return false;
      }
    }
  
    return true;
  }
  
  // Example :
  const n1 = 12321;
  const isPalindromic = isPalindrome(n1);
  console.log(isPalindromic); // Output: true

//   10
function sumOfDigits(n) {
    let sum = 0;
    while (n > 0) {
      sum += n % 10;
      n = Math.floor(n / 10);
    }
    return sum;
  }
  
  // Example 
  const number = 12345;
  const sum = sumOfDigits(number);
  console.log("Sum of digits:", sum);

//   11
const originalArray = [1, 2, 3, 4, 5];
const reversedArray = originalArray.reverse();

console.log(reversedArray);

//   12
function countOccurrences(n, array) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] === n) {
        count++;
      }
    }
    return count;
  }
  
  // Example :
  const n2 = 4;
  const array = [2, 4, 6, 4];
  const occurrenceCount = countOccurrences(n2, array);
  console.log("There are", occurrenceCount, n2 + "'s in the array.");

