// In computing, memoization or memoisation is an optimization technique used primarily to speed up computer programs by storing the results of expensive function calls and returning the cached result when the same inputs occur again.

function ExpensiveOperation() {
  // the cache where the results will be stored
  this.cache = {};
}

// this can be a time consuming and expensive operation and the function has no way of remembering if the same inputs have been passed multiple times, thus it will run the logic every time. Running an expensive function with the exact same inputs mulitple times will result in a waste time and resources.
ExpensiveOperation.prototype.doThing = function(num) {
  let result = 1;
  for (let i = 0; i < num; i++) {
    result *= num;
    for (let e = 0; e < num; e++) {
      if (result % 2 === 1) {
        result /= result;
      }
      result *= num;
    }
  }
  return result;
};

// when the memoized function is called with specific inputs, we store the inputs and results in our cache, if the function is called again with those same inputs we check the cache first for matching inputs and return the result rather than running the expensive logic again
ExpensiveOperation.prototype.doThingMemoized = function(num) {
  if (this.cache.hasOwnProperty(num)) {
    return this.cache[num];
  } else {
    let result = 1;
    for (let i = 0; i < num; i++) {
      result *= num;
      for (let e = 0; e < num; e++) {
        if (result % 2 === 1) {
          result /= result;
        }
        result *= num;
      }
    }
    this.cache[num] = result;
    return result;
  }
};

// Example:
const test = new ExpensiveOperation();
console.time("not memoized function time");

console.log("not memoized function");
console.log(test.doThing(9999));
console.log(test.doThing(9999));
console.log(test.doThing(9999));
console.log(test.doThing(9999));

console.timeEnd("not memoized function time");
console.log("memoized function");
console.time("memoized function time");
console.log(test.doThingMemoized(9999));
console.log(test.doThingMemoized(9999));
console.log(test.doThingMemoized(9999));
console.log(test.doThingMemoized(9999));
console.timeEnd("memoized function time");
