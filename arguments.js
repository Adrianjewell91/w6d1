// const sum = function (...args) {
//   return args.reduce( function (acc, ele) {
//     return acc + ele;
//   }
// );
// };

const sum = function () {
  const arr = Array.prototype.slice.call(arguments);
  return arr.reduce( function (acc, ele) {
    return acc + ele;
  }
);
};

Function.prototype.myBind = function myBind() {
  const outArgs = Array.prototype.slice.call(arguments);
  const context = outArgs[0];

  return (...callArgs) => {
    // const innerArgs = Array.prototype.slice.call(arguments);
    const args = outArgs.slice(1).concat(callArgs);
    return this.apply(context, args); };
};

//Test myBind
class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}

const markov = new Cat("Markov");
const breakfast = new Cat("Breakfast");

// markov.says("meow", "Ned");
// // Markov says meow to Ned!
// // true
//
// // bind time args are "meow" and "Kush", no call time args
// markov.says.myBind(breakfast, "meow", "Kush")();
// // Breakfast says meow to Kush!
// // true
//
// // no bind time args (other than context), call time args are "meow" and "me"
// markov.says.myBind(breakfast)("meow", "a tree");
// // Breakfast says meow to a tree!
// // true
//
// // bind time arg is "meow", call time arg is "Markov"
// markov.says.myBind(breakfast, "meow")("Markov");
// // Breakfast says meow to Markov!
// // true
//
// // no bind time args (other than context), call time args are "meow" and "me"
// const notMarkovSays = markov.says.myBind(breakfast);
// notMarkovSays("meow", "me");
// // Breakfast says meow to me!
// // true

//Curried Sum
const curriedSum = function curriedSum(numArgs) {
  const numbers = [];
  return function _curriedSum(num) {
    numbers.push(num);
    if (numbers.length === numArgs) {
      return numbers.reduce( function (acc, ele) {
        return acc + ele;
      });
    } else {
      return _curriedSum;
    }
  };
};

const sumNum = curriedSum(3);
console.log(sumNum(5)(30)(4));

//
Function.prototype.curry = function curry(numArgs) {
  const args = [];
  // const fn = this; // also good.
  return function _curry(arg) {
    args.push(arg);
    if (args.length === numArgs) {
      return this(...args);
    } else {
      return _curry;
    }
  }.bind(this);
};

Function.prototype.curryFA = function curryFA(numArgs) {
  const args = [];
  // const fn = this; // also good.
   const _curry = (arg) => {
    args.push(arg);
    if (args.length === numArgs) {
      return this(...args);
    } else {
      return _curry;
    }
  };
  return _curry;
};

Function.prototype.curryWithApply = function curryWithApply(numArgs) {
  const args = [];
  return function _curry(arg) {
    args.push(arg);
    if (args.length === numArgs) {
      // return Function.prototype.apply(this, args);
      return this.apply(null, args);
    } else {
      return _curry;
    }
  }.bind(this);
};

const addFunction = function addFunction(num) {
  return num + 10;
};
