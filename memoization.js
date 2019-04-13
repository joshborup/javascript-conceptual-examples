function ExpensiveOperation() {
  this.cache = {};
}

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
