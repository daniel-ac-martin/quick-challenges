'use strict';

// First function that returns a promise
const parseInt = s => new Promise((resolve, reject) => { switch(s) {
  case 'zero':
    resolve(0);
    break;
  case 'one':
    resolve(1);
    break;
  case 'two':
    resolve(2);
    break;
  default:
    reject('error');
    break;
}});

// Second function that returns a promise
const int2Bool = i => new Promise((resolve, reject) => { switch(i) {
  case 0:
    resolve(false);
    break;
  case 1:
    resolve(true);
    break;
  default:
    reject('error');
    break;
}});

// Third function to chain together the first two functions, itself returning a promise
// IMPLEMENT ME!
const chain = undefined;

// Convenience functions for pretty printing
const logResult = input => output => console.log(`chain('${input}'): ${output}`);
const chainAndLog = s => chain(s).then(logResult(s)).catch(logResult(s));

// Pretty print calls to chain()
// (Correct output is in the line-comment)
// Note: These probably won't appear in order
chainAndLog("zero"); // chain('zero'): false
chainAndLog("one");  // chain('one'): true
chainAndLog("two");  // chain('two'): error
chainAndLog("xxx");  // chain('xxx'): error
