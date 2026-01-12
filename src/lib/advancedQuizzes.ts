import { Quiz } from './types'

    id: 'js-adv-1',
   
    options: ['[]',
    explanation: 'Arrays
  },
    id: 'js-adv-2',
    question: 'What does Promise.race() return?'
    options: ['All re
    explanation: 'Promise.race() returns the first promise that settles (resolves or rejects).',
  },
    
   
  let count = 0;
    return ++count;
}`,
    correctAnswer: 1,
    difficulty: 'hard'
  {
    topic: 'javascript',
    code: `element.add
    
   
  {
    topic: 'javascript',
    code: `const obj = Object.freez
    options: ['obj.a becomes 
    explanation:
  },
    id: 'js-adv-6',
   
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
      code: `[1,2,3].reverse()`,
      correctAnswer: 1,
      difficul
    {
      topic: 'javascrip
      code: `const big = 9007199254740991n;`,
      correctAnswer: 1,
      
    {
      topic: 'javascri
      code: `'  hello  '.t
      correctAnswer: 1,
      difficulty: 'easy'
    {
      topic: 'javascrip
      code: `console.log(1 + 2 + '3');`,
      correctAnswer: 0,
      
    {
      topic: 'javascri
      code: `Object.assign
      correctAnswer: 1,
      difficulty: 'medium'
    {
      topic: 'javascrip
      code: `[1,2].concat([3,4])`,
      correctAnswer: 1,
      
    {
      topic: 'javascri
      code: `Number.isInte
      correctAnswer: 1,
      difficulty: 'easy'
    {
      topic: 'javascrip
      code: `console.log(Math.max());`,
      correctAnswer: 1,
      
    {
      topic: 'javascri
      code: `new Array(3).
      correctAnswer: 1,
      difficulty: 'easy'
    {
      topic: 'javascrip
      code: `'hello'.startsWith('he')`,
      correctAnswer: 1,
      
    {
      topic: 'javascri
      code: `console.log(0
      correctAnswer: 1,
      difficulty: 'hard'
    {
      topic: 'javascrip
      code: `[1,2,3].indexOf(2)`,
      correctAnswer: 1,
      
    {
      topic: 'javascri
      code: `Object.values
      correctAnswer: 1,
      difficulty: 'easy'
    {
      topic: 'javascrip
      code: `console.log(typeof []);`,
      correctAnswer: 1,
      
    {
      topic: 'javascri
      code: `'ha'.repeat(3
      correctAnswer: 1,
      difficulty: 'easy'
    {
      topic: 'javascrip
      code: `const arr = [1,2,3];
      options: ['Removes f
    
    }
      id: 'js-adv-68',
      question: 'What is t
      options: ['false', 'true', '"false"'
      explanation: 'Non-empty stri
    },
      id: 'js-adv-69',
      question: 'What does Array.unshift() do?',
      options: ['Removes
      
    }
      id: 'js-adv-70',
      question: 'What is O
      options: ['Returns keys', 'Returns [["a", 1]]', 
      explanation: 'Object.entries() 
    },
      id: 'js-adv-71',
      question: 'What is the output?',
      options: ['true', 
      
    }
      id: 'js-adv-72',
      question: 'What does
      options: ['Modifies string', 'Re
      explanation: 'toUpperCase() retur
    },
      id: 'js-adv-73',
      question: 'What is Array.pop()?',
arr.pop();`,
      
     
    {
      topic: 'javascript',
      code: `console.log([1,2] + [3,4]);`,
      correctAnswer: 0,
      difficulty: 'hard'
    {
      topic: 'javascript',
      code: `Math.floor(
      
     
    {
      topic: 'javascript',
      code: `'hello'.charAt(1)`,
      correctAnswer: 1,
      difficulty: 'easy'
    {
      topic: 'javascript',
      code: `console.log
      
     
    {
      topic: 'javascript',
      code: `Math.ceil(4.1)`,
      correctAnswer: 1,
      difficulty: 'easy'
    {
      topic: 'javascript',
      code: `[1,2,3,2].l
      
     
    {
      topic: 'javascript',
      code: `console.log(undefined + 1);`,
      correctAnswer: 2,
      difficulty: 'medium'
    {
      topic: 'javascript',
      code: `Math.round(
      
     
    {
      topic: 'javascript',
      code: `'hello'.slice(1, 3)`,
      correctAnswer: 1,
      difficulty: 'easy'
    {
      topic: 'javascript',
      code: `console.log
      
     
    {
      topic: 'javascript',
      code: `[1,2,3].includes(2)`,
      correctAnswer: 1,
      difficulty: 'easy'
    {
      topic: 'javascript',
      code: `'hello'.repla
      
     
    {
      topic: 'javascript',
      code: `console.log(Number(''));`,
      correctAnswer: 1,
      difficulty: 'medium'
    {
      topic: 'javascript',
      code: `Math.abs(-5
      
     
    {
      topic: 'javascript',
      code: `[1,2].flatMap(x => [x, x*2])
      correctAnswer: 1,
      difficul
    {
      topic: 'javascrip
      code: `console.log(null + 1);`,
      correctAnswer: 1,
      
    {
      topic: 'javascri
      code: `'hello'.subst
      correctAnswer: 1,
      difficulty: 'easy'
    {
      topic: 'javascrip
      code: `Math.pow(2, 3)`,
      correctAnswer: 2,
      
    {
      topic: 'javascri
      code: `console.log(S
      correctAnswer: 0,
      difficulty: 'easy'
    {
      topic: 'javascrip
      code: `[10,5,40].sort()`,
      correctAnswer: 1,
      
    {
      topic: 'javascri
      code: `'HELLO'.toLow
      correctAnswer: 0,
      difficulty: 'easy'
    {
      topic: 'javascrip
      code: `console.log(parseFloat('10.5abc'));`,
      correctAnswer: 0,
      
    {
      topic: 'javascri
      code: `Math.min(5, 2
      correctAnswer: 1,
      difficulty: 'easy'
    {
      topic: 'javascrip
      code: `'hello'.endsWith('lo')`,
      correctAnswer: 1,
      
    {
      topic: 'javascri
      code: `console.log(5
      correctAnswer: 2,
      difficulty: 'easy'
    {
      topic: 'javascrip
      code: `const arr = [1,2,3];
      options: ['Returns
      
    }
      id: 'js-adv-100'
      question: 'What is M
      options: ['4', '8', '16', '2'],
      explanation: 'Math.sqrt() r
    }
}
function generateTypeSc
  
    const templates = [
      
     
        difficulty: (i
      {
        code: `type Result = UtilityTy
        correctAnswer: 1,
        difficulty: (i < 40 ? 'easy' : i < 70 ? 'medium' : '
    ]
    const template = templates[i % 2]
      id: `ts-adv-${i}`,
      
  }
  return quizzes

  const quizzes: Quiz[] = []
  for (let i = 11; i <= 100; i
      {
        code: `const va
        correctAnswer: 1,
        difficulty: (i <
      
     
        explanation: '
      }
    
    quizzes.push({
      topic: 'react',
    })
  
}
functi
  
    const templates = 
        question: `What do
        options: ['Creates functions',
        explanation: 'This is a Pyt
      },
        question: `What
        options: ['A variable', 'Python syntax for specific functionality', 'An import', 'A module'],
        explanation: 'This
      
    
    quizzes.push({
      topic: 'python',
    })
  
}
function generateDjango
  
    const templates = [
      
     
        explanation: '
      },
        question: `What does ${['filter()', 'se
        options: ['Deletes data', 'Quer
        explanation: 'This is a Django ORM method that helps q
      }
    
    quizzes.push({
      
    }
  
}
function generateCSSQuizzes(): Quiz[] 
  
    const templates = [
        question: `What
        options: ['A CSS property', 'A CSS concept', 'A JavaScript feature', 'An HTML 
        explanation: 'This
      
     
        options: ['Add
        explanation: 'This
      }
    
    quizzes.push({
      topic: 'css',
    })
  
}






















































































































































































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
