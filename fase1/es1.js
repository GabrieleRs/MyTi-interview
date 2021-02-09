const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

function fibonacci(digits) {
  let currentDigits = 1;
  let i = 1;
  let next = BigInt(0);
  let current = BigInt(1);
  let prev = BigInt(0);
  while (currentDigits < digits) {
    next = current + prev;
    prev = current;
    current = next;
    currentDigits = current.toString().length;
    i++;
  }
  return { current,i };
};

readline.question('Hello there, at how many digits should the program stop?', digits => {
  console.log(`the first number in the fibonacci sequence that has ${digits} digits is the ${fibonacci(digits).i}th`);
  process.exit()
});