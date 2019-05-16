class MyClass {
  constructor(name) {
    this.name = name;
    this.myArrowFunc = () => this;
    this.myRegFunc = function() {
      return this;
    };
  }
}

let myInvokedClass = new MyClass("josh");
console.log("The object created with the name josh", myInvokedClass);
console.log(
  "should return the object it was declared in",
  myInvokedClass.myArrowFunc()
);
console.log("=============================");
const myCustomObj = {
  name: "zach",
  newRegFunc: myInvokedClass.myRegFunc,
  newArrowFunc: myInvokedClass.myArrowFunc
};
console.log("=============================");
console.log("reg function return this", myCustomObj.newRegFunc());
console.log("=============================");
console.log("arrow function return this", myCustomObj.newArrowFunc());
