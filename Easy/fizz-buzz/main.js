// Given an integer n, return a string array answer (1-indexed) where:

// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i (as a string) if none of the above conditions are true.

function fizzBuzz(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return "FizzBuzz";
  } else if (num % 3 === 0) {
    return "Fizz";
  } else if (num % 5 === 0) {
    return "Buzz";
  } else {
    return `${num}`;
  }
}

function fizzBuzzSwitch(num) {
  switch (true) {
    case num % 5 === 0 && num % 3 === 0: {
      return "FizzBuzz";
    }
    case num % 3: {
      return "Fizz";
    }
    case num % 5: {
      return "Buzz";
    }
    default:
      return `${num}`;
  }
}
