import { Quiz } from './types'

    id: 'js-adv-1',
   
    id: 'js-adv-1',
    topic: 'javascript',
    question: 'What is a closure?',
    code: `function outer() {
}`,
    correctAnswer: 1,
    difficulty: 'ha
  {
   
    code: `Promise.race([promise1, promise2, promise3])`,
    correctAnswer: 1,
    difficulty: 'hard'
  {
    
   
    correctAnswer: 
    difficulty: 'medium'
  {
    topic: 'javascript',
    code: `element.addEventListener('click', handler);`,
    correctAnswer: 0,
    difficulty: 'medium'
  {
    
   
    options: ['obj.
    explanation: 'Object
  },
    code: `Array.from('hello')`,
    options: ['Creates array of letters', 'Returns "hello"', 'Error', 'Returns empty array'],
    correctAnswer: 0,
    explanation: 'Array.from() creates a new array from an iterable or array-like object.',
    difficulty: 'medium'
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
    id: 'js-
    question: 'What is the output?',
delete obj.a;
    options: ['1', 'undefined', 'null', 'Error'],
    explanation: 'The 
  },
   
    question: 'What
var x = 5;`,
    correctAnswer: 1,
    difficulty: 'medium'
  ...generateJavaScriptQuizz
  ...generateReactQuizzes(),
  ...generateDjangoQu
]
function generateJavaS
    
   
      code: `functi
}`,
      correctAnswer: 1,
      difficulty: 'easy'
    {
      topic: 'javascr
      code: `console.log(1 + '1' - 1);`,
      correctAnswer: 2,
    
   
      topic: 'javas
      code: `const value
      correctAnswer: 1,
      difficulty: 'easy'
    {
      topic: 'javascr
      code: `Promise.all([p1, p2, p3])`,
      correctAnswer: 
      difficulty: 'medium'
    {
    
   
      options: ['Map
      explanation: 'Weak
    },
      id: 'js-adv-16',
      questi
obj.b = 2;`,
      correctAnswer: 
      difficulty: 'medium'
    {
    
      code: `console.log([1, 2, 3
      correctAnswer: 1,
      difficulty: 'medium'
    {
      topic: 'javascript',
      code: `const value 
 

    {
      topi
     
      correctAnswer: 1
      difficulty: 'medium'
    {
      topic: 'javascript',
      code: `const arr = [[1, 2], [3, 4]]
   
      explanation: 'Array.flat() creates a new array with all sub-array elements concatenated into
    },
      id: 'js-adv-21',
      question: 'What is
      
     
    },
      id: 'js-adv-22',
      question: 'What does Object.crea
      options: ['Copies object', 'Create
      explanation: 'Object.create() crea
    },
      id: 'js-adv-23',
      question: 'What is
      
     
    },
      id: 'js-adv-24',
      question: 'What does Array.reduce() do?
      options: ['Filters array', 'Reduces array
      explanation: 'reduce() executes a reducer function on each element, resulting in a single output value.',
    },
      id: 'js-adv-25',
      question: 'What is
      
     
    },
      id: 'js-adv-26',
      question: 'What is the output?',
      options: ['"42"', '42', 'NaN', 'Er
      explanation: 'The unary plus operator converts its operand to a number.',
    },
      id: 'js-adv-27',
      question: 'What does
      
     
    },
      id: 'js-adv-28',
      question: 'What is the output?'
      options: ['true', 'false', 'unde
      explanation: 'Loo
    },
      id: 'js-adv-29',
      question: 'What does Array.some() do?',
      options: ['Checks 
      
    }
      id: 'js-adv-30',
      question: 'What is a
      options: ['Array of unique values', 'Col
      explanation: 'A Set is a collection of 
    },
      id: 'js-adv-31',
      question: 'What d
      options: ['The element', 'The index of the element', 'Boolean', 'undefined'],
      explanation: 'findIn
    },
     
      question: 'What 
      options: ['{}', '"[o
      explanation: 'Both are converted
    },
      id: 'js-adv-33',
      question: 'What d
      options: ['Returns index', 'Returns boolean', 'Returns matched string', 'Returns array'],
      explanation: 'includ
    },
     
      question: 'What 
      options: ['Deep merg
      explanation: 'The spread operator creates a shallow c
    },
      id: 'js-adv-35',
      question: 'What d
      options: ['Values', 'Array of key strings', 'Key-value pairs', 'Object'],
      explanation: 'Obje
    },
     
      question: 'What 
      options: ['true', 'f
      explanation: '3 > 2 is true (1), then
    },
      id: 'js-adv-37',
      question: 'What d
      options: ['Stringifies object', 'Parses JSON string to object', 'Validates JSON', 'Formats JSON'],
      explanation: 'JSON.p
    },
     
      question: 'What 
      options: ['Regular s
      explanation: 'Template literals use bac
    },
      id: 'js
      question: 'What does Array.every() do?',
      options: ['Checks
      explanation: 'Array.every() tests whether all elements pass the provided function.',
    },
      
     
      options: ['"null
      explanation: 'The ty
    },
      id: 'js-adv-41',
      question: 'What does Array.slice() do?',
      options: ['Modifi
      explanation: 'slice() returns a shallow copy of a portion of an array without modifying the orig
    },
      
     
      options: ['"53"'
      explanation: 'The mi
    },
      id: 'js-adv-43',
      question: 'What does String.split() return?',
      options: ['String
      explanation: 'split() divides a string into an array of substrings based on the separator.',
    },
      
     
      options: ['Check
      explanation: 'isNaN(
    },
      id: 'js-adv-45',
      question: 'What does Math.random() return?',
      options: ['Intege
      explanation: 'Math.random() returns a pseudo-random floating-point number between 0 (inclusive) and 1 
    },
      
     
      options: ['true'
      explanation: 'null a
    },
      id: 'js-adv-47',
      question: 'What does Array.join() do?',
      options: ['Concat
      explanation: 'join() creates and returns a new string by concatenating all elements with a separator.',
    },
      
     
      options: ['Retur
      explanation: 'revers
    },
      id: 'js-adv-49',
      question: 'What is BigInt?',
      options: ['Regula
      explanation: 'BigInt allows representation of integers larger than Number.MAX_SAFE_INTEGER.',
    },
      
     
      options: ['Remov
      explanation: 'trim()
    },
      id: 'js-adv-51',
      question: 'What is the output?',
      options: ['"33"',
      explanation: '1 + 2 = 3, then 3 + "3" = "33" (number coerced to string fo
    },
      
     
      options: ['Deep 
      explanation: 'Object
    },
      id: 'js-adv-53',
      question: 'What does Array.concat() do?',
      options: ['Modifi
      explanation: 'concat() merges arrays and returns a new array without modifying the originals.',
    },
      
     
      options: ['Retur
      explanation: 'Number
    },
      id: 'js-adv-55',
      question: 'What is the output?',
      options: ['0', '-
      explanation: 'Math.max() without arguments returns -Infinity (the identity element for max).',
    },
      
     
      options: ['Creat
      explanation: 'fill()
    },
      id: 'js-adv-57',
      question: 'What does String.startsWith() do?',
      options: ['Return
      explanation: 'startsWith() determines whether a string begins with the specified characters.'
    },
      
     
      options: ['true'
      explanation: 'Floati
    },
      id: 'js-adv-59',
      question: 'What does Array.indexOf() do?',
      options: ['Return
      explanation: 'indexOf() returns the first index at which an element is found, or -1 if not found.',
    },
      
     
      options: ['Keys'
      explanation: 'Object
    },
      id: 'js-adv-61',
      question: 'What is the output?',
      options: ['"array
      explanation: 'Arrays are objects in JavaScript, so typeof returns "object".',
    },
      
     
      options: ['"ha"'
      explanation: 'repeat
    },
      id: 'js-adv-63',
      question: 'What does Array.shift() do?',
arr.shift();`,
      correctAnswer: 0,
      difficulty: 'easy'
    {
     
      code: `console.l
      correctAnswer: 1,
      difficulty: 'medium'
    {
      topic: 'javascript',
      code: `arr.unshif
      correctAnswer: 1,
      difficulty: 'easy'
    {
     
      code: `Object.en
      correctAnswer: 1,
      difficulty: 'easy'
    {
      topic: 'javascript',
      code: `console.lo
      correctAnswer: 1,
      difficulty: 'easy'
    {
     
      code: `'hello'.t
      correctAnswer: 1,
      difficulty: 'easy'
    {
      topic: 'javascript',
      code: `const arr 
      options: ['Removes and returns last element', 'Removes first element', 'Adds element', 'Clear
      explanation: 'pop(
    },
     
      question: 'What 
      options: ['"1,23,4"'
      explanation: 'Arrays are convert
    },
      id: 'js-adv-71',
      question: 'What d
      options: ['5', '4', '4.9', '5.0'],
      explanation: 'Math
    },
     
      question: 'What 
      options: ['"h"', '"e
      explanation: 'charAt() returns the char
    },
      id: 'js-adv-73',
      question: 'What i
      options: ['2', 'true', '"truetrue"', 'Error'],
      explanation: 'Bool
    },
     
      question: 'What 
      options: ['4', '5', 
      explanation: 'Math.ceil() rounds a num
    },
      id: 'js-adv-75',
      question: 'What d
      options: ['1', '3', '2', '-1'],
      explanation: 'last
    },
     
      question: 'What 
      options: ['1', 'unde
      explanation: 'undefined coerces to NaN, 
    },
      id: 'js-adv-77',
      question: 'What d
      options: ['4', '5', '4.5', 'Error'],
      explanation: 'Math
    },
     
      question: 'What 
      options: ['"h"', '"e
      explanation: 'slice() extracts a
    },
      id: 'js-adv-79',
      question: 'What i
      options: ['true', 'false', '""', 'undefined'],
      explanation: 'Empt
    },
     
      question: 'What 
      options: ['Returns i
      explanation: 'includes() determines whet
    },
      id: 'js-adv-81',
      question: 'What d
      options: ['"heLLo"', '"heLlo"', '"hello"', '"HELLO"'],
      explanation: 'repl
    },
     
      question: 'What 
      options: ['NaN', '0'
      explanation: 'Empty string conve
    },
      id: 'js-adv-83',
      question: 'What d
      options: ['-5', '5', '0', 'Error'],
      explanation: 'Math.a
    },
     
      question: 'What 
      options: ['[[1,2],[2
      explanation: 'flatMap() maps and flattens the
    },
      id: 'js-adv-85',
      question: 'What i
      options: ['null', '1', 'NaN', 'Error'],
      explanation: 'null
    },
     
      question: 'What 
      options: ['"h"', '"e
      explanation: 'substring() returns the 
    },
      id: 'js-adv-87',
      question: 'What d
      options: ['6', '5', '8', '9'],
      explanation: 'Math
    },
     
      question: 'What 
      options: ['"null"', 
      explanation: 'String() converts null to the 
    },
      id: 'js-adv-89',
      question: 'What d
      options: ['[5,10,40]', '[10,40,5]', '[40,10,5]', '[5,40,10]'],
      explanation: 'sort
    },
     
      question: 'What 
      options: ['"hello"',
      explanation: 'toLowerCase() retu
    },
      id: 'js-adv-91',
      question: 'What d
      options: ['10.5', 'NaN', '10', 'Error'],
      explanation: 'parseF
    },
     
      question: 'What 
      options: ['5', '2', 
      explanation: 'Math.min() returns the sm
    },
      id: 'js-adv-93',
      question: 'What d
      options: ['false', 'true', '"lo"', 'Error'],
      explanation: 'ends
    },
     
      question: 'What 
      options: ['0', 'NaN'
      explanation: 'Division by zero in JavaScri
    },
      id: 'js-adv-95',
      question: 'What d
arr.push(4);`,
      correctAnswer: 1,
      
    {
      topic: 'javascri
      code: `Math.sqrt(16)
      correctAnswer: 0,
      difficulty: 'easy'
  ]

  const quizzes: Quiz[] = []
  for (let i = 11; i <= 10
      
     
        explanation: '
      },
        question: `What does ${['Pick<T, K>', 
        options: ['Transforms typ
        explanation: 'This utility type transforms an existing type to create a new type with modified properties.',
      }
    
    quizzes.push({
      
    }
  
}
function generateReactQuizzes(): Quiz[
  
    const templates = [
        question: `What
        options: ['Manages state', 'A React hook for specific functionality', 'Creates components'
        explanation: 'This
      
     
        correctAnswer:
        difficulty: (i < 4
    ]
    const template = templates[i % 2]
      id: `react-adv-${i}`,
      ...template
  }
  return quizzes

  con
  for (let i = 11; i <
      {
        code: `result = expression`,
        correctAnswer: 1,
        difficulty: (i < 40 ? 'easy' : i < 70 ? 'medium' : 'hard') as 'easy' | 'medium' | 'hard'
      {
        code: `def function(param): pass`,
        correctAnswer: 1
      
    ]
    const template = t
      id: `python-adv-${i}
      ...template
  }
  return quizzes

  const quizzes: Quiz[] = []
  for (let i = 11; i <= 
      
     
        correctAnswer:
        difficulty: (i < 4
      {
        code: `Model.objects.method()`,
        correctAnswer: 1,
        difficulty: (i 
    ]
    const template = tem
      
     
  }
  return quizzes

  const quizzes: Quiz[] = []
  for (let i = 11; i <= 100; i++) {
      {
        code: `.selector { property: value; }`,
        correctAnswer: 1
      
     
        code: `.elemen
        correctAnswer: 1,
        difficulty: (i < 40 ? 'easy' : i < 70 ? 'med
    ]
    const template = templates[i % 2]
      id: `css-adv-${i}
      ...template
  }
  retu



















































































































































































































































































































































































































































































































































































