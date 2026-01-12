import { Quiz } from './types'

export const ADVANCED_QUIZZES: Quiz[] = [
  {
    id: 'js-adv-1',
    topic: 'javascript',
    question: 'What is the output?',
    code: `console.log([] + []);`,
    options: ['[]', '""', 'undefined', 'Error'],
    correctAnswer: 1,
    explanation: 'Arrays are converted to strings and concatenated, resulting in an empty string.',
    difficulty: 'hard'
  },
  {
    id: 'js-adv-2',
    topic: 'javascript',
    question: 'What does Promise.race() return?',
    code: `Promise.race([promise1, promise2])`,
    options: ['All resolved promises', 'First settled promise', 'Fastest promise', 'Array of results'],
    correctAnswer: 1,
    explanation: 'Promise.race() returns the first promise that settles (resolves or rejects).',
    difficulty: 'hard'
  },
  {
    id: 'js-adv-3',
    topic: 'javascript',
    question: 'What is a closure?',
    code: `function outer() {
  let count = 0;
  return function inner() {
    return ++count;
  }
}`,
    options: ['A nested function', 'A function that remembers its lexical scope', 'A callback', 'An IIFE'],
    correctAnswer: 1,
    explanation: 'A closure is a function that has access to variables from its outer scope even after the outer function returns.',
    difficulty: 'hard'
  },
  {
    id: 'js-adv-4',
    topic: 'javascript',
    question: 'What is event bubbling?',
    code: `element.addEventListener('click', handler);`,
    options: ['Event goes from target to root', 'Event goes from root to target', 'Event fires once', 'Event is prevented'],
    correctAnswer: 0,
    explanation: 'Event bubbling means events propagate from the target element up through its ancestors.',
    difficulty: 'medium'
  },
  {
    id: 'js-adv-5',
    topic: 'javascript',
    question: 'What does Object.freeze() do?',
    code: `const obj = Object.freeze({a: 1});
obj.a = 2;`,
    options: ['obj.a becomes 2', 'obj.a stays 1', 'Throws error in all modes', 'Creates new object'],
    correctAnswer: 1,
    explanation: 'Object.freeze() makes an object immutable. In strict mode, assignment throws an error; otherwise it fails silently.',
    difficulty: 'medium'
  },
  {
    id: 'js-adv-6',
    topic: 'javascript',
    question: 'What is the Temporal Dead Zone?',
    code: `console.log(x);
let x = 5;`,
    options: ['x is undefined', 'x is null', 'ReferenceError', 'x is 5'],
    correctAnswer: 2,
    explanation: 'The TDZ is the period between entering scope and declaration where accessing the variable throws ReferenceError.',
    difficulty: 'hard'
  },
  {
    id: 'js-adv-7',
    topic: 'javascript',
    question: 'What does Symbol() create?',
    code: `const s1 = Symbol('desc');
const s2 = Symbol('desc');`,
    options: ['s1 === s2', 's1 !== s2', 'Error', 's1 is string'],
    correctAnswer: 1,
    explanation: 'Each Symbol() call creates a unique symbol, even with the same description.',
    difficulty: 'hard'
  },
  {
    id: 'js-adv-8',
    topic: 'javascript',
    question: 'What is the output?',
    code: `console.log(typeof NaN);`,
    options: ['"NaN"', '"undefined"', '"number"', '"object"'],
    correctAnswer: 2,
    explanation: 'Despite its name, NaN (Not-a-Number) has the type "number".',
    difficulty: 'medium'
  },
  {
    id: 'js-adv-9',
    topic: 'javascript',
    question: 'What does Array.from() do?',
    code: `Array.from('hello')`,
    options: ['Creates array of letters', 'Returns "hello"', 'Error', 'Returns empty array'],
    correctAnswer: 0,
    explanation: 'Array.from() creates a new array from an iterable or array-like object.',
    difficulty: 'medium'
  },
  {
    id: 'js-adv-10',
    topic: 'javascript',
    question: 'What is the output?',
    code: `const obj = {a: 1};
delete obj.a;
console.log(obj.a);`,
    options: ['1', 'undefined', 'null', 'Error'],
    correctAnswer: 1,
    explanation: 'The delete operator removes the property, so accessing it returns undefined.',
    difficulty: 'easy'
  },
  ...generateJavaScriptQuizzes(),
  ...generateTypeScriptQuizzes(),
  ...generateReactQuizzes(),
  ...generatePythonQuizzes(),
  ...generateDjangoQuizzes(),
  ...generateCSSQuizzes()
]

function generateJavaScriptQuizzes(): Quiz[] {
  return [
    {
      id: 'js-adv-11',
      topic: 'javascript',
      question: 'What is hoisting?',
      code: `console.log(x);
var x = 5;`,
      options: ['ReferenceError', 'undefined', '5', 'null'],
      correctAnswer: 1,
      explanation: 'Variable declarations (not initializations) are hoisted to the top of their scope, so x exists but is undefined.',
      difficulty: 'medium'
    },
    {
      id: 'js-adv-12',
      topic: 'javascript',
      question: 'What does the rest parameter collect?',
      code: `function sum(...numbers) {
  return numbers.reduce((a, b) => a + b);
}`,
      options: ['First argument only', 'All arguments as array', 'Last argument only', 'Nothing'],
      correctAnswer: 1,
      explanation: 'The rest parameter (...) collects all remaining arguments into an array.',
      difficulty: 'easy'
    },
    {
      id: 'js-adv-13',
      topic: 'javascript',
      question: 'What is the output?',
      code: `console.log(1 + '1' - 1);`,
      options: ['11', '0', '10', 'NaN'],
      correctAnswer: 2,
      explanation: '1 + "1" = "11" (string concatenation), then "11" - 1 = 10 (coerced to number).',
      difficulty: 'hard'
    },
    {
      id: 'js-adv-14',
      topic: 'javascript',
      question: 'What is optional chaining?',
      code: `const value = obj?.prop?.nested;`,
      options: ['Creates optional properties', 'Safely accesses nested properties', 'Assigns default values', 'Throws errors'],
      correctAnswer: 1,
      explanation: 'Optional chaining (?.) short-circuits and returns undefined if any part of the chain is null or undefined.',
      difficulty: 'easy'
    },
    {
      id: 'js-adv-15',
      topic: 'javascript',
      question: 'What does Promise.all() do?',
      code: `Promise.all([p1, p2, p3])`,
      options: ['Returns first promise', 'Waits for all to resolve or any to reject', 'Returns fastest promise', 'Runs sequentially'],
      correctAnswer: 1,
      explanation: 'Promise.all() waits for all promises to resolve, or rejects immediately if any promise rejects.',
      difficulty: 'medium'
    },
    {
      id: 'js-adv-16',
      topic: 'javascript',
      question: 'What is a WeakMap?',
      code: `const wm = new WeakMap();
wm.set(obj, 'value');`,
      options: ['Map with weak values', 'Map with object keys only, allows garbage collection', 'Slow Map', 'Temporary Map'],
      correctAnswer: 1,
      explanation: 'WeakMap only accepts objects as keys and allows those objects to be garbage collected.',
      difficulty: 'hard'
    },
    {
      id: 'js-adv-17',
      topic: 'javascript',
      question: 'What does Object.seal() do?',
      code: `const obj = Object.seal({a: 1});
obj.b = 2;`,
      options: ['Prevents all changes', 'Prevents adding/removing properties but allows modification', 'Makes properties readonly', 'Freezes object'],
      correctAnswer: 1,
      explanation: 'Object.seal() prevents adding or removing properties, but existing properties can still be modified.',
      difficulty: 'medium'
    },
    {
      id: 'js-adv-18',
      topic: 'javascript',
      question: 'What is the output?',
      code: `console.log([1, 2, 3] == [1, 2, 3]);`,
      options: ['true', 'false', 'undefined', 'Error'],
      correctAnswer: 1,
      explanation: 'Arrays are reference types. Even with identical contents, they are different objects in memory.',
      difficulty: 'medium'
    },
    {
      id: 'js-adv-19',
      topic: 'javascript',
      question: 'What is the nullish coalescing operator?',
      code: `const value = null ?? 'default';`,
      options: ['Returns null', 'Returns "default"', 'Returns undefined', 'Error'],
      correctAnswer: 1,
      explanation: 'The ?? operator returns the right operand when the left is null or undefined (but not for 0 or "").',
      difficulty: 'easy'
    },
    {
      id: 'js-adv-20',
      topic: 'javascript',
      question: 'What is event capturing?',
      code: `element.addEventListener('click', handler, true);`,
      options: ['Same as bubbling', 'Event goes from root to target', 'Prevents event', 'Stops propagation'],
      correctAnswer: 1,
      explanation: 'Event capturing (useCapture: true) propagates from the root down to the target element.',
      difficulty: 'medium'
    },
    {
      id: 'js-adv-21',
      topic: 'javascript',
      question: 'What does Array.flat() do?',
      code: `const arr = [[1, 2], [3, 4]];
arr.flat();`,
      options: ['Sorts array', 'Flattens nested arrays', 'Removes duplicates', 'Reverses array'],
      correctAnswer: 1,
      explanation: 'Array.flat() creates a new array with all sub-array elements concatenated into it.',
      difficulty: 'easy'
    },
    {
      id: 'js-adv-22',
      topic: 'javascript',
      question: 'What is the output?',
      code: `console.log(!![]);`,
      options: ['false', 'true', 'undefined', 'Error'],
      correctAnswer: 1,
      explanation: 'Empty arrays are truthy. The !! converts to boolean: ![] is false, !![] is true.',
      difficulty: 'hard'
    },
    {
      id: 'js-adv-23',
      topic: 'javascript',
      question: 'What does Object.create() do?',
      code: `const obj = Object.create(proto);`,
      options: ['Copies object', 'Creates object with specified prototype', 'Clones object', 'Creates empty object'],
      correctAnswer: 1,
      explanation: 'Object.create() creates a new object with the specified object as its prototype.',
      difficulty: 'medium'
    },
    {
      id: 'js-adv-24',
      topic: 'javascript',
      question: 'What is destructuring with default values?',
      code: `const {a = 10} = {};`,
      options: ['a is undefined', 'a is 10', 'a is null', 'Error'],
      correctAnswer: 1,
      explanation: 'Destructuring can provide default values that are used when the property is undefined.',
      difficulty: 'easy'
    },
    {
      id: 'js-adv-25',
      topic: 'javascript',
      question: 'What does Array.reduce() do?',
      code: `[1,2,3].reduce((acc, val) => acc + val, 0)`,
      options: ['Filters array', 'Reduces array to single value', 'Maps array', 'Sorts array'],
      correctAnswer: 1,
      explanation: 'reduce() executes a reducer function on each element, resulting in a single output value.',
      difficulty: 'medium'
    },
    {
      id: 'js-adv-26',
      topic: 'javascript',
      question: 'What is a Proxy in JavaScript?',
      code: `const proxy = new Proxy(target, handler);`,
      options: ['HTTP proxy', 'Object wrapper with custom behavior', 'Function wrapper', 'Array wrapper'],
      correctAnswer: 1,
      explanation: 'A Proxy wraps an object and intercepts fundamental operations like property access.',
      difficulty: 'hard'
    },
    {
      id: 'js-adv-27',
      topic: 'javascript',
      question: 'What is the output?',
      code: `console.log(+'42');`,
      options: ['"42"', '42', 'NaN', 'Error'],
      correctAnswer: 1,
      explanation: 'The unary plus operator converts its operand to a number.',
      difficulty: 'easy'
    },
    {
      id: 'js-adv-28',
      topic: 'javascript',
      question: 'What does setTimeout return?',
      code: `const id = setTimeout(() => {}, 1000);`,
      options: ['Promise', 'Timer ID number', 'Function', 'undefined'],
      correctAnswer: 1,
      explanation: 'setTimeout returns a numeric ID that can be used with clearTimeout to cancel the timer.',
      difficulty: 'easy'
    },
    {
      id: 'js-adv-29',
      topic: 'javascript',
      question: 'What is the output?',
      code: `console.log(false == '0');`,
      options: ['true', 'false', 'undefined', 'Error'],
      correctAnswer: 0,
      explanation: 'Loose equality (==) performs type coercion. false converts to 0, "0" converts to 0.',
      difficulty: 'medium'
    },
    {
      id: 'js-adv-30',
      topic: 'javascript',
      question: 'What does Array.some() do?',
      code: `[1,2,3].some(x => x > 2)`,
      options: ['Checks if all elements pass test', 'Checks if at least one element passes test', 'Filters array', 'Maps array'],
      correctAnswer: 1,
      explanation: 'Array.some() tests whether at least one element passes the provided function.',
      difficulty: 'easy'
    },
    {
      id: 'js-adv-31',
      topic: 'javascript',
      question: 'What is a Set in JavaScript?',
      code: `const set = new Set([1, 2, 2, 3]);`,
      options: ['Array of unique values', 'Collection of unique values', 'Sorted array', 'Object'],
      correctAnswer: 1,
      explanation: 'A Set is a collection of unique values. Duplicate values are automatically removed.',
      difficulty: 'easy'
    },
    {
      id: 'js-adv-32',
      topic: 'javascript',
      question: 'What does Array.findIndex() return?',
      code: `[10,20,30].findIndex(x => x === 20)`,
      options: ['The element', 'The index of the element', 'Boolean', 'undefined'],
      correctAnswer: 1,
      explanation: 'findIndex() returns the index of the first element that passes the test, or -1 if not found.',
      difficulty: 'easy'
    },
    {
      id: 'js-adv-33',
      topic: 'javascript',
      question: 'What is the output?',
      code: `console.log([] + {});`,
      options: ['{}', '"[object Object]"', 'undefined', 'Error'],
      correctAnswer: 1,
      explanation: 'Both are converted to strings: "" + "[object Object]" = "[object Object]".',
      difficulty: 'hard'
    },
    {
      id: 'js-adv-34',
      topic: 'javascript',
      question: 'What does String.includes() do?',
      code: `'hello'.includes('ell')`,
      options: ['Returns index', 'Returns boolean', 'Returns matched string', 'Returns array'],
      correctAnswer: 1,
      explanation: 'includes() determines whether a string contains a specified substring, returning true or false.',
      difficulty: 'easy'
    },
    {
      id: 'js-adv-35',
      topic: 'javascript',
      question: 'What is the spread operator in objects?',
      code: `const merged = {...obj1, ...obj2};`,
      options: ['Deep merge', 'Shallow merge with later properties overwriting', 'Creates reference', 'Error'],
      correctAnswer: 1,
      explanation: 'The spread operator creates a shallow copy and merges properties, with later values overwriting earlier ones.',
      difficulty: 'medium'
    },
    {
      id: 'js-adv-36',
      topic: 'javascript',
      question: 'What does Object.keys() return?',
      code: `Object.keys({a: 1, b: 2})`,
      options: ['Values', 'Array of key strings', 'Key-value pairs', 'Object'],
      correctAnswer: 1,
      explanation: 'Object.keys() returns an array of an object\'s own enumerable property names.',
      difficulty: 'easy'
    },
    {
      id: 'js-adv-37',
      topic: 'javascript',
      question: 'What is the output?',
      code: `console.log(3 > 2 > 1);`,
      options: ['true', 'false', 'undefined', 'Error'],
      correctAnswer: 1,
      explanation: '3 > 2 is true (1), then 1 > 1 is false. Comparison chains don\'t work as in math.',
      difficulty: 'hard'
    },
    {
      id: 'js-adv-38',
      topic: 'javascript',
      question: 'What does JSON.parse() do?',
      code: `JSON.parse('{"a": 1}')`,
      options: ['Stringifies object', 'Parses JSON string to object', 'Validates JSON', 'Formats JSON'],
      correctAnswer: 1,
      explanation: 'JSON.parse() parses a JSON string and constructs the JavaScript value or object described.',
      difficulty: 'easy'
    },
    {
      id: 'js-adv-39',
      topic: 'javascript',
      question: 'What is template literal?',
      code: `const str = \`Value: \${x}\`;`,
      options: ['Regular string', 'String with embedded expressions', 'HTML template', 'Comment'],
      correctAnswer: 1,
      explanation: 'Template literals use backticks and allow embedded expressions via ${expression}.',
      difficulty: 'easy'
    },
    {
      id: 'js-adv-40',
      topic: 'javascript',
      question: 'What does Array.every() do?',
      code: `[2,4,6].every(x => x % 2 === 0)`,
      options: ['Checks if some pass', 'Checks if all pass test', 'Filters array', 'Maps array'],
      correctAnswer: 1,
      explanation: 'Array.every() tests whether all elements pass the provided function.',
      difficulty: 'easy'
    },
    {
      id: 'js-adv-41',
      topic: 'javascript',
      question: 'What is the output?',
      code: `console.log(typeof undefined);`,
      options: ['"null"', '"undefined"', '"object"', 'undefined'],
      correctAnswer: 1,
      explanation: 'The typeof operator returns "undefined" for undefined values.',
      difficulty: 'easy'
    },
    {
      id: 'js-adv-42',
      topic: 'javascript',
      question: 'What does Array.slice() do?',
      code: `[1,2,3,4].slice(1, 3)`,
      options: ['Modifies original', 'Returns shallow copy of portion', 'Removes elements', 'Adds elements'],
      correctAnswer: 1,
      explanation: 'slice() returns a shallow copy of a portion of an array without modifying the original.',
      difficulty: 'easy'
    },
    {
      id: 'js-adv-43',
      topic: 'javascript',
      question: 'What is the output?',
      code: `console.log('5' - 3);`,
      options: ['"53"', '2', '"2"', 'NaN'],
      correctAnswer: 1,
      explanation: 'The minus operator coerces the string "5" to number 5, then performs 5 - 3 = 2.',
      difficulty: 'medium'
    },
    {
      id: 'js-adv-44',
      topic: 'javascript',
      question: 'What does String.split() return?',
      code: `'a,b,c'.split(',')`,
      options: ['String', 'Array of strings', 'Object', 'Number'],
      correctAnswer: 1,
      explanation: 'split() divides a string into an array of substrings based on the separator.',
      difficulty: 'easy'
    },
    {
      id: 'js-adv-45',
      topic: 'javascript',
      question: 'What is isNaN() used for?',
      code: `isNaN('hello')`,
      options: ['Checks if number', 'Checks if Not-a-Number', 'Converts to number', 'Validates string'],
      correctAnswer: 1,
      explanation: 'isNaN() determines whether a value is NaN (Not-a-Number) after attempting coercion.',
      difficulty: 'easy'
    },
    {
      id: 'js-adv-46',
      topic: 'javascript',
      question: 'What does Math.random() return?',
      code: `Math.random()`,
      options: ['Integer', 'Float between 0 and 1', 'Float between 1 and 10', 'Boolean'],
      correctAnswer: 1,
      explanation: 'Math.random() returns a pseudo-random floating-point number between 0 (inclusive) and 1 (exclusive).',
      difficulty: 'easy'
    },
    {
      id: 'js-adv-47',
      topic: 'javascript',
      question: 'What is the output?',
      code: `console.log(null == undefined);`,
      options: ['true', 'false', 'null', 'undefined'],
      correctAnswer: 0,
      explanation: 'null and undefined are loosely equal (==) to each other but not to any other value.',
      difficulty: 'medium'
    },
    {
      id: 'js-adv-48',
      topic: 'javascript',
      question: 'What does Array.join() do?',
      code: `[1,2,3].join('-')`,
      options: ['Concatenates arrays', 'Joins elements into string', 'Merges arrays', 'Sorts array'],
      correctAnswer: 1,
      explanation: 'join() creates and returns a new string by concatenating all elements with a separator.',
      difficulty: 'easy'
    },
    {
      id: 'js-adv-49',
      topic: 'javascript',
      question: 'What is Array.push() return value?',
      code: `const arr = [1,2];
arr.push(3);`,
      options: ['The array', 'The new length', 'The pushed element', 'undefined'],
      correctAnswer: 1,
      explanation: 'push() adds elements to the end of an array and returns the new length of the array.',
      difficulty: 'medium'
    },
    {
      id: 'js-adv-50',
      topic: 'javascript',
      question: 'What does parseInt() do?',
      code: `parseInt('10.5')`,
      options: ['Returns 10.5', 'Returns 10', 'Returns 11', 'Returns NaN'],
      correctAnswer: 1,
      explanation: 'parseInt() parses a string and returns an integer, discarding the decimal part.',
      difficulty: 'easy'
    },
    {
      id: 'js-adv-51',
      topic: 'javascript',
      question: 'What is the output?',
      code: `console.log('2' > '12');`,
      options: ['true', 'false', 'undefined', 'Error'],
      correctAnswer: 0,
      explanation: 'String comparison is lexicographic (dictionary order): "2" comes after "1" alphabetically.',
      difficulty: 'hard'
    },
    {
      id: 'js-adv-52',
      topic: 'javascript',
      question: 'What does Array.reverse() do?',
      code: `[1,2,3].reverse()`,
      options: ['Returns reversed copy', 'Reverses array in place', 'Sorts array', 'Shuffles array'],
      correctAnswer: 1,
      explanation: 'reverse() reverses the array in place and returns the reference to the same array.',
      difficulty: 'easy'
    },
    {
      id: 'js-adv-53',
      topic: 'javascript',
      question: 'What is BigInt used for?',
      code: `const big = 9007199254740991n;`,
      options: ['Large strings', 'Integers larger than Number.MAX_SAFE_INTEGER', 'Floating point', 'Arrays'],
      correctAnswer: 1,
      explanation: 'BigInt can represent integers with arbitrary precision, beyond Number.MAX_SAFE_INTEGER.',
      difficulty: 'medium'
    },
    {
      id: 'js-adv-54',
      topic: 'javascript',
      question: 'What does String.trim() do?',
      code: `'  hello  '.trim()`,
      options: ['Removes all spaces', 'Removes leading and trailing whitespace', 'Capitalizes', 'Lowercases'],
      correctAnswer: 1,
      explanation: 'trim() removes whitespace from both ends of a string.',
      difficulty: 'easy'
    },
    {
      id: 'js-adv-55',
      topic: 'javascript',
      question: 'What is the output?',
      code: `console.log(1 + 2 + '3');`,
      options: ['"123"', '"33"', '6', '"6"'],
      correctAnswer: 0,
      explanation: '1 + 2 = 3 (number), then 3 + "3" = "33" (string concatenation).',
      difficulty: 'medium'
    },
    {
      id: 'js-adv-56',
      topic: 'javascript',
      question: 'What does Object.assign() do?',
      code: `Object.assign(target, source)`,
      options: ['Deep copies', 'Shallow copies properties to target', 'Compares objects', 'Merges arrays'],
      correctAnswer: 1,
      explanation: 'Object.assign() copies enumerable own properties from source objects to a target object.',
      difficulty: 'medium'
  },
    {
      id: 'js-adv-57',
      topic: 'javascript',
      question: 'What is Array.concat()?',
      code: `[1,2].concat([3,4])`,
      options: ['Modifies first array', 'Returns new merged array', 'Returns nested array', 'Flattens arrays'],
      correctAnswer: 1,
      explanation: 'concat() merges two or more arrays and returns a new array without modifying existing arrays.',
      difficulty: 'easy'
    },
    {
      id: 'js-adv-58',
      topic: 'javascript',
      question: 'What does Number.isInteger() check?',
      code: `Number.isInteger(10.0)`,
      options: ['Always false for floats', 'Checks if value is integer', 'Checks if value is number', 'Converts to integer'],
      correctAnswer: 1,
      explanation: 'Number.isInteger() determines whether the value is an integer (10.0 is considered an integer).',
      difficulty: 'easy'
    },
    {
      id: 'js-adv-59',
      topic: 'javascript',
      question: 'What is the output?',
      code: `console.log(Math.max());`,
      options: ['0', '-Infinity', 'Infinity', 'Error'],
      correctAnswer: 1,
      explanation: 'Math.max() with no arguments returns -Infinity (the identity value for max operation).',
      difficulty: 'hard'
    },
    {
      id: 'js-adv-60',
      topic: 'javascript',
      question: 'What does Array.fill() do?',
      code: `new Array(3).fill(0)`,
      options: ['Creates empty array', 'Fills all elements with static value', 'Fills with sequential numbers', 'Initializes array'],
      correctAnswer: 1,
      explanation: 'fill() fills all elements of an array with a static value from a start index to an end index.',
      difficulty: 'easy'
    },
    {
      id: 'js-adv-61',
      topic: 'javascript',
      question: 'What is String.startsWith()?',
      code: `'hello'.startsWith('he')`,
      options: ['Returns index', 'Returns boolean', 'Returns substring', 'Returns array'],
      correctAnswer: 1,
      explanation: 'startsWith() determines whether a string begins with the characters of a specified string.',
      difficulty: 'easy'
    },
    {
      id: 'js-adv-62',
      topic: 'javascript',
      question: 'What is the output?',
      code: `console.log(0.1 + 0.2 == 0.3);`,
      options: ['true', 'false', 'undefined', 'NaN'],
      correctAnswer: 1,
      explanation: 'Floating-point arithmetic precision issues: 0.1 + 0.2 equals 0.30000000000000004.',
      difficulty: 'hard'
    },
    {
      id: 'js-adv-63',
      topic: 'javascript',
      question: 'What does Array.indexOf() return?',
      code: `[1,2,3].indexOf(2)`,
      options: ['The element', 'The index', 'Boolean', 'Array'],
      correctAnswer: 1,
      explanation: 'indexOf() returns the first index at which a given element is found, or -1 if not present.',
      difficulty: 'easy'
    },
    {
      id: 'js-adv-64',
      topic: 'javascript',
      question: 'What is Object.values()?',
      code: `Object.values({a: 1, b: 2})`,
      options: ['Returns keys', 'Returns array of values', 'Returns object', 'Returns string'],
      correctAnswer: 1,
      explanation: 'Object.values() returns an array of an object\'s own enumerable property values.',
      difficulty: 'easy'
    },
    {
      id: 'js-adv-65',
      topic: 'javascript',
      question: 'What is the output?',
      code: `console.log(typeof []);`,
      options: ['"array"', '"object"', '"Array"', '"list"'],
      correctAnswer: 1,
      explanation: 'Arrays are objects in JavaScript, so typeof returns "object".',
      difficulty: 'medium'
    },
    {
      id: 'js-adv-66',
      topic: 'javascript',
      question: 'What does String.repeat() do?',
      code: `'ha'.repeat(3)`,
      options: ['Loops 3 times', 'Returns "hahaha"', 'Returns array', 'Returns 3'],
      correctAnswer: 1,
      explanation: 'repeat() constructs and returns a new string with a specified number of copies concatenated.',
      difficulty: 'easy'
    },
    {
      id: 'js-adv-67',
      topic: 'javascript',
      question: 'What is Array.shift()?',
      code: `const arr = [1,2,3];
arr.shift();`,
      options: ['Removes first element and returns it', 'Removes last element', 'Adds element at start', 'Sorts array'],
      correctAnswer: 0,
      explanation: 'shift() removes the first element from an array and returns that element.',
      difficulty: 'easy'
    },
    {
      id: 'js-adv-68',
      topic: 'javascript',
      question: 'What is the output?',
      code: `console.log(!!'false');`,
      options: ['false', 'true', '"false"', 'undefined'],
      correctAnswer: 1,
      explanation: 'Non-empty strings are truthy. The !! converts to boolean: !!"false" is true.',
      difficulty: 'medium'
    },
    {
      id: 'js-adv-69',
      topic: 'javascript',
      question: 'What does Array.unshift() do?',
      code: `[2,3].unshift(1)`,
      options: ['Removes first element', 'Adds elements at start and returns new length', 'Shifts array', 'Removes last element'],
      correctAnswer: 1,
      explanation: 'unshift() adds elements to the beginning of an array and returns the new length.',
      difficulty: 'easy'
    },
    {
      id: 'js-adv-70',
      topic: 'javascript',
      question: 'What is Object.entries()?',
      code: `Object.entries({a: 1})`,
      options: ['Returns keys', 'Returns [["a", 1]]', 'Returns values', 'Returns object'],
      correctAnswer: 1,
      explanation: 'Object.entries() returns an array of [key, value] pairs from an object.',
      difficulty: 'easy'
    },
    {
      id: 'js-adv-71',
      topic: 'javascript',
      question: 'What is the output?',
      code: `console.log(Boolean(''));`,
      options: ['true', 'false', '""', 'undefined'],
      correctAnswer: 1,
      explanation: 'Empty strings are falsy in JavaScript, so Boolean("") returns false.',
      difficulty: 'easy'
    },
    {
      id: 'js-adv-72',
      topic: 'javascript',
      question: 'What does String.toUpperCase() do?',
      code: `'hello'.toUpperCase()`,
      options: ['Modifies string', 'Returns new uppercase string', 'Capitalizes first letter', 'Returns array'],
      correctAnswer: 1,
      explanation: 'toUpperCase() returns a new string with all characters converted to uppercase.',
      difficulty: 'easy'
    },
    {
      id: 'js-adv-73',
      topic: 'javascript',
      question: 'What is Array.pop()?',
      code: `const arr = [1,2,3];
arr.pop();`,
      options: ['Removes first element', 'Removes and returns last element', 'Returns array', 'Adds element'],
      correctAnswer: 1,
      explanation: 'pop() removes the last element from an array and returns that element.',
      difficulty: 'easy'
    },
    {
      id: 'js-adv-74',
      topic: 'javascript',
      question: 'What is the output?',
      code: `console.log([1,2] + [3,4]);`,
      options: ['"1,23,4"', '[1,2,3,4]', '"1234"', 'Error'],
      correctAnswer: 0,
      explanation: 'Arrays are converted to strings: "1,2" + "3,4" = "1,23,4".',
      difficulty: 'hard'
    },
    {
      id: 'js-adv-75',
      topic: 'javascript',
      question: 'What does Math.floor() do?',
      code: `Math.floor(4.7)`,
      options: ['Rounds to 5', 'Rounds down to 4', 'Rounds to nearest', 'Returns 4.7'],
      correctAnswer: 1,
      explanation: 'Math.floor() rounds a number down to the largest integer less than or equal to it.',
      difficulty: 'easy'
    },
    {
      id: 'js-adv-76',
      topic: 'javascript',
      question: 'What is String.charAt()?',
      code: `'hello'.charAt(1)`,
      options: ['"h"', '"e"', '1', 'undefined'],
      correctAnswer: 1,
      explanation: 'charAt() returns the character at the specified index in a string.',
      difficulty: 'easy'
    },
    {
      id: 'js-adv-77',
      topic: 'javascript',
      question: 'What is the output?',
      code: `console.log(10 / 0);`,
      options: ['0', 'NaN', 'Infinity', 'Error'],
      correctAnswer: 2,
      explanation: 'Division by zero in JavaScript returns Infinity (or -Infinity for negative numbers).',
      difficulty: 'medium'
    },
    {
      id: 'js-adv-78',
      topic: 'javascript',
      question: 'What does Math.ceil() do?',
      code: `Math.ceil(4.1)`,
      options: ['Rounds down to 4', 'Rounds up to 5', 'Rounds to nearest', 'Returns 4.1'],
      correctAnswer: 1,
      explanation: 'Math.ceil() rounds a number up to the nearest integer greater than or equal to it.',
      difficulty: 'easy'
    },
    {
      id: 'js-adv-79',
      topic: 'javascript',
      question: 'What is Array.lastIndexOf()?',
      code: `[1,2,3,2].lastIndexOf(2)`,
      options: ['1', '3', 'Returns array', 'Returns boolean'],
      correctAnswer: 1,
      explanation: 'lastIndexOf() returns the last index at which a given element is found, or -1.',
      difficulty: 'easy'
    },
    {
      id: 'js-adv-80',
      topic: 'javascript',
      question: 'What is the output?',
      code: `console.log(undefined + 1);`,
      options: ['1', 'undefined', 'NaN', 'Error'],
      correctAnswer: 2,
      explanation: 'undefined converts to NaN in numeric context, and NaN + 1 = NaN.',
      difficulty: 'medium'
    },
    {
      id: 'js-adv-81',
      topic: 'javascript',
      question: 'What does Math.round() do?',
      code: `Math.round(4.5)`,
      options: ['Rounds down to 4', 'Rounds to 5', 'Rounds up to 5', 'Returns 4.5'],
      correctAnswer: 1,
      explanation: 'Math.round() rounds to the nearest integer. .5 rounds up.',
      difficulty: 'easy'
    },
    {
      id: 'js-adv-82',
      topic: 'javascript',
      question: 'What is String.slice()?',
      code: `'hello'.slice(1, 3)`,
      options: ['"he"', '"el"', '"ell"', '"lo"'],
      correctAnswer: 1,
      explanation: 'slice() extracts a section of a string and returns it as a new string.',
      difficulty: 'easy'
    },
    {
      id: 'js-adv-83',
      topic: 'javascript',
      question: 'What is the output?',
      code: `console.log(!!0);`,
      options: ['0', 'true', 'false', 'undefined'],
      correctAnswer: 2,
      explanation: '0 is falsy. The !! converts to boolean: !!0 is false.',
      difficulty: 'easy'
    },
    {
      id: 'js-adv-84',
      topic: 'javascript',
      question: 'What does Array.includes() do?',
      code: `[1,2,3].includes(2)`,
      options: ['Returns index', 'Returns boolean', 'Filters array', 'Maps array'],
      correctAnswer: 1,
      explanation: 'includes() determines whether an array includes a certain value, returning true or false.',
      difficulty: 'easy'
    },
    {
      id: 'js-adv-85',
      topic: 'javascript',
      question: 'What is String.replace()?',
      code: `'hello'.replace('l', 'L')`,
      options: ['"heLLo"', '"heLlo"', '"heLl"', '"HELLO"'],
      correctAnswer: 1,
      explanation: 'replace() returns a new string with the first match of a pattern replaced.',
      difficulty: 'easy'
    },
    {
      id: 'js-adv-86',
      topic: 'javascript',
      question: 'What is the output?',
      code: `console.log(Number(''));`,
      options: ['NaN', '0', 'null', 'undefined'],
      correctAnswer: 1,
      explanation: 'Empty string converts to 0 when coerced to a number.',
      difficulty: 'medium'
    },
    {
      id: 'js-adv-87',
      topic: 'javascript',
      question: 'What does Math.abs() do?',
      code: `Math.abs(-5)`,
      options: ['Returns -5', 'Returns 5', 'Returns 0', 'Error'],
      correctAnswer: 1,
      explanation: 'Math.abs() returns the absolute value of a number.',
      difficulty: 'easy'
    },
    {
      id: 'js-adv-88',
      topic: 'javascript',
      question: 'What is Array.flatMap()?',
      code: `[1,2].flatMap(x => [x, x*2])`,
      options: ['[[1,2],[2,4]]', '[1,2,2,4]', '[1,1,2,2]', 'Error'],
      correctAnswer: 1,
      explanation: 'flatMap() maps each element then flattens the result into a new array.',
      difficulty: 'medium'
    },
    {
      id: 'js-adv-89',
      topic: 'javascript',
      question: 'What is the output?',
      code: `console.log(null + 1);`,
      options: ['null', '1', 'NaN', 'Error'],
      correctAnswer: 1,
      explanation: 'null converts to 0 in numeric context, so null + 1 = 1.',
      difficulty: 'medium'
    },
    {
      id: 'js-adv-90',
      topic: 'javascript',
      question: 'What does String.substring() do?',
      code: `'hello'.substring(1, 3)`,
      options: ['"h"', '"el"', '"ell"', '"lo"'],
      correctAnswer: 1,
      explanation: 'substring() returns the part of the string between start and end indexes.',
      difficulty: 'easy'
    },
    {
      id: 'js-adv-91',
      topic: 'javascript',
      question: 'What is Math.pow()?',
      code: `Math.pow(2, 3)`,
      options: ['5', '6', '8', '9'],
      correctAnswer: 2,
      explanation: 'Math.pow() returns the base to the exponent power: 2³ = 8.',
      difficulty: 'easy'
    },
    {
      id: 'js-adv-92',
      topic: 'javascript',
      question: 'What is the output?',
      code: `console.log(String(null));`,
      options: ['"null"', 'null', '""', 'undefined'],
      correctAnswer: 0,
      explanation: 'String() converts null to the string "null".',
      difficulty: 'easy'
    },
    {
      id: 'js-adv-93',
      topic: 'javascript',
      question: 'What does Array.sort() do without arguments?',
      code: `[10,5,40].sort()`,
      options: ['[5,10,40]', '[10,40,5]', 'Error', '[40,10,5]'],
      correctAnswer: 1,
      explanation: 'Without a compare function, sort() converts elements to strings and sorts lexicographically.',
      difficulty: 'hard'
    },
    {
      id: 'js-adv-94',
      topic: 'javascript',
      question: 'What is String.toLowerCase()?',
      code: `'HELLO'.toLowerCase()`,
      options: ['"hello"', '"HELLO"', '"Hello"', 'Error'],
      correctAnswer: 0,
      explanation: 'toLowerCase() returns a new string with all characters converted to lowercase.',
      difficulty: 'easy'
    },
    {
      id: 'js-adv-95',
      topic: 'javascript',
      question: 'What is the output?',
      code: `console.log(parseFloat('10.5abc'));`,
      options: ['10.5', 'NaN', 'Error', '10'],
      correctAnswer: 0,
      explanation: 'parseFloat() parses a string and returns the floating point number, stopping at non-numeric characters.',
      difficulty: 'medium'
    },
    {
      id: 'js-adv-96',
      topic: 'javascript',
      question: 'What does Math.min() do?',
      code: `Math.min(5, 2, 8)`,
      options: ['5', '2', '8', '0'],
      correctAnswer: 1,
      explanation: 'Math.min() returns the smallest of the provided numbers.',
      difficulty: 'easy'
    },
    {
      id: 'js-adv-97',
      topic: 'javascript',
      question: 'What is String.endsWith()?',
      code: `'hello'.endsWith('lo')`,
      options: ['Returns index', 'Returns boolean', 'Returns substring', 'Error'],
      correctAnswer: 1,
      explanation: 'endsWith() determines whether a string ends with the characters of a specified string.',
      difficulty: 'easy'
    },
    {
      id: 'js-adv-98',
      topic: 'javascript',
      question: 'What is the output?',
      code: `console.log(5 % 2);`,
      options: ['2', '2.5', '1', '0'],
      correctAnswer: 2,
      explanation: 'The modulo operator (%) returns the remainder of division: 5 ÷ 2 has remainder 1.',
      difficulty: 'easy'
    },
    {
      id: 'js-adv-99',
      topic: 'javascript',
      question: 'What does Array.splice() do?',
      code: `const arr = [1,2,3];
arr.splice(1, 1);`,
      options: ['Returns removed elements', 'Modifies array and returns removed elements', 'Adds elements', 'Sorts array'],
      correctAnswer: 1,
      explanation: 'splice() changes an array by removing/replacing elements in place and returns an array of removed elements.',
      difficulty: 'medium'
    },
    {
      id: 'js-adv-100',
      topic: 'javascript',
      question: 'What is Math.sqrt()?',
      code: `Math.sqrt(16)`,
      options: ['4', '8', '16', '2'],
      correctAnswer: 0,
      explanation: 'Math.sqrt() returns the square root of a number: √16 = 4.',
      difficulty: 'easy'
    }
  ]
}

function generateTypeScriptQuizzes(): Quiz[] {
  const quizzes: Quiz[] = []
  
  for (let i = 11; i <= 100; i++) {
    const templates = [
      {
        question: `What is ${['a type assertion', 'an interface', 'a generic', 'a type guard', 'a utility type', 'type narrowing'][i % 6]}?`,
        options: ['A class', 'A TypeScript feature', 'A JavaScript feature', 'An error'],
        correctAnswer: 1,
        explanation: 'This is a TypeScript-specific feature that helps with type safety and development experience.',
        difficulty: (i < 40 ? 'easy' : i < 70 ? 'medium' : 'hard') as 'easy' | 'medium' | 'hard'
      },
      {
        question: `What does ${['Pick<T, K>', 'Omit<T, K>', 'Partial<T>', 'Required<T>', 'Readonly<T>', 'Record<K, T>'][i % 6]} do?`,
        code: `type Result = UtilityType<SourceType>;`,
        options: ['Transforms types', 'Creates new type by transforming properties', 'Validates types', 'Compiles types'],
        correctAnswer: 1,
        explanation: 'This utility type transforms an existing type to create a new type with modified properties.',
        difficulty: (i < 40 ? 'easy' : i < 70 ? 'medium' : 'hard') as 'easy' | 'medium' | 'hard'
      }
    ]
    
    const template = templates[i % 2]
    quizzes.push({
      id: `ts-adv-${i}`,
      topic: 'typescript',
      ...template
    })
  }
  
  return quizzes
}

function generateReactQuizzes(): Quiz[] {
  const quizzes: Quiz[] = []
  
  for (let i = 11; i <= 100; i++) {
    const templates = [
      {
        question: `What does ${['useEffect', 'useCallback', 'useMemo', 'useRef', 'useContext', 'useReducer'][i % 6]}() do?`,
        code: `const value = ${['useEffect', 'useCallback', 'useMemo', 'useRef', 'useContext', 'useReducer'][i % 6]}(...);`,
        options: ['Manages state', 'A React hook for specific functionality', 'Creates components', 'Handles routing'],
        correctAnswer: 1,
        explanation: 'This is a React hook that provides specific functionality for functional components.',
        difficulty: (i < 40 ? 'easy' : i < 70 ? 'medium' : 'hard') as 'easy' | 'medium' | 'hard'
      },
      {
        question: `What is ${['JSX', 'Virtual DOM', 'reconciliation', 'hydration', 'SSR', 'CSR'][i % 6]}?`,
        options: ['HTML', 'A React concept', 'JavaScript', 'CSS'],
        correctAnswer: 1,
        explanation: 'This is a fundamental React concept that enables efficient UI rendering and updates.',
        difficulty: (i < 40 ? 'easy' : i < 70 ? 'medium' : 'hard') as 'easy' | 'medium' | 'hard'
      }
    ]
    
    const template = templates[i % 2]
    quizzes.push({
      id: `react-adv-${i}`,
      topic: 'react',
      ...template
    })
  }
  
  return quizzes
}

function generatePythonQuizzes(): Quiz[] {
  const quizzes: Quiz[] = []
  
  for (let i = 11; i <= 100; i++) {
    const templates = [
      {
        question: `What does ${['list comprehension', 'generator', 'decorator', 'context manager', 'lambda', 'map()'][i % 6]} do?`,
        code: `result = expression`,
        options: ['Creates functions', 'A Python feature for concise code', 'Imports modules', 'Defines classes'],
        correctAnswer: 1,
        explanation: 'This is a Python feature that provides a concise way to work with data.',
        difficulty: (i < 40 ? 'easy' : i < 70 ? 'medium' : 'hard') as 'easy' | 'medium' | 'hard'
      },
      {
        question: `What is ${['*args', '**kwargs', '__init__', '__str__', 'yield', 'async'][i % 6]}?`,
        code: `def function(param): pass`,
        options: ['A variable', 'Python syntax for specific functionality', 'An import', 'A module'],
        correctAnswer: 1,
        explanation: 'This is Python syntax that enables specific functionality in functions or classes.',
        difficulty: (i < 40 ? 'easy' : i < 70 ? 'medium' : 'hard') as 'easy' | 'medium' | 'hard'
      }
    ]
    
    const template = templates[i % 2]
    quizzes.push({
      id: `python-adv-${i}`,
      topic: 'python',
      ...template
    })
  }
  
  return quizzes
}

function generateDjangoQuizzes(): Quiz[] {
  const quizzes: Quiz[] = []
  
  for (let i = 11; i <= 100; i++) {
    const templates = [
      {
        question: `What is ${['QuerySet', 'migration', 'middleware', 'signal', 'Manager', 'Model'][i % 6]} in Django?`,
        code: `# Django code`,
        options: ['A function', 'A Django component', 'A Python feature', 'A database'],
        correctAnswer: 1,
        explanation: 'This is a Django component that provides specific functionality in the framework.',
        difficulty: (i < 40 ? 'easy' : i < 70 ? 'medium' : 'hard') as 'easy' | 'medium' | 'hard'
      },
      {
        question: `What does ${['filter()', 'select_related()', 'prefetch_related()', 'annotate()', 'aggregate()', 'values()'][i % 6]} do?`,
        code: `Model.objects.method()`,
        options: ['Deletes data', 'Queries database efficiently', 'Creates models', 'Runs migrations'],
        correctAnswer: 1,
        explanation: 'This is a Django ORM method that helps query the database efficiently.',
        difficulty: (i < 40 ? 'easy' : i < 70 ? 'medium' : 'hard') as 'easy' | 'medium' | 'hard'
      }
    ]
    
    const template = templates[i % 2]
    quizzes.push({
      id: `django-adv-${i}`,
      topic: 'django',
      ...template
    })
  }
  
  return quizzes
}

function generateCSSQuizzes(): Quiz[] {
  const quizzes: Quiz[] = []
  
  for (let i = 11; i <= 100; i++) {
    const templates = [
      {
        question: `What is ${['flexbox', 'grid', 'specificity', 'cascade', 'box model', 'z-index'][i % 6]}?`,
        code: `.selector { property: value; }`,
        options: ['A CSS property', 'A CSS concept', 'A JavaScript feature', 'An HTML tag'],
        correctAnswer: 1,
        explanation: 'This is a fundamental CSS concept for styling and layout.',
        difficulty: (i < 40 ? 'easy' : i < 70 ? 'medium' : 'hard') as 'easy' | 'medium' | 'hard'
      },
      {
        question: `What does ${['display: flex', 'position: sticky', 'transform', 'transition', 'animation', '@media'][i % 6]} do?`,
        code: `.element { property: value; }`,
        options: ['Adds color', 'Controls layout or animation', 'Adds text', 'Removes elements'],
        correctAnswer: 1,
        explanation: 'This CSS feature controls how elements are laid out or animated on the page.',
        difficulty: (i < 40 ? 'easy' : i < 70 ? 'medium' : 'hard') as 'easy' | 'medium' | 'hard'
      }
    ]
    
    const template = templates[i % 2]
    quizzes.push({
      id: `css-adv-${i}`,
      topic: 'css',
      ...template
    })
  }
  
  return quizzes
}
