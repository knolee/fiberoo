const fib = () => {
  const sequence = [0, 1]; // initialized with first 2 values of fibonacci sequence
  for (let i = 1; i < 49; i++) { // return first 50 (0-49)
    sequence.push(sequence[i - 1] + sequence[i]);
  }
  return sequence;
};

console.log(fib());

const numsToStrings = (array) => _.map(array, String);
console.log(numsToStrings(fib()));

const nums = (array) => _.filter(array, (el) => el % 2 === 0);
console.log(nums(fib()));
