import { Quiz } from './types'

    id: 'js-adv-1',
   
    id: 'js-adv-1',
    topic: 'javascript',
    question: 'What will this closure return?',
    code: `function createCounter() {
  let count = 0;
  return function() {
    return ++count;
  };
}
const counter = createCounter();
console.log(counter(), counter());`,
    options: ['0 0', '1 1', '1 2', 'undefined undefined'],
    correctAnswer: 2,
    explanation: 'Closures maintain access to their outer scope. The count variable persists between calls, so it returns 1 then 2.',
    difficulty: 'hard'
    
  i
    id: 'js-adv-2',
    topic: 'javascript',
    question: 'What is event delegation?',
    code: `document.getElementById('parent').addEventListener('click', (e) => {
  if (e.target.matches('.child')) {
    console.log('Child clicked');
  }
});`,
    options: ['Adding events to all children', 'Using event bubbling to handle events on parent', 'Removing event listeners', 'Preventing default behavior'],
    correctAnswer: 1,
    explanation: 'Event delegation uses event bubbling to handle events at a parent level rather than attaching listeners to each child element.',
    difficulty: 'medium'
  },
  {
    id: 'js-adv-3',
    topic: 'javascript',
    question: 'What does this Promise chain do?',
    code: `Promise.resolve(1)
  .then(x => x + 1)
  .then(x => { throw new Error('oops'); })
  .catch(e => 'error')
  .then(x => console.log(x));`,
    options: ['Logs 2', 'Logs "error"', 'Throws error', 'Logs undefined'],
    correctAnswer: 1,
    explanation: 'The catch handler catches the error and returns "error", which is passed to the final then.',
    difficulty: 'hard'
  },
  {
    id: 'js-adv-4',
    topic: 'javascript',
    question: 'What does this async/await code log?',
    code: `async function test() {
  console.log(1);
  await Promise.resolve();
  console.log(2);
}
console.log(3);
test();
console.log(4);`,
    options: ['1 2 3 4', '3 1 4 2', '1 3 4 2', '3 4 1 2'],
    correctAnswer: 1,
    explanation: 'Synchronous code runs first (3, 1, 4), then the awaited promise resolves and logs 2.',
    difficulty: 'hard'
  },
  {
});`,
    correctAnswer: 1,
    difficulty: 'medium'
  {
    topic: 'javascrip
    code: `console.log
    o
    explanation: 'The Temporal Dead Zone is the period between entering scope and declaration where let/const variables cannot be accessed.',
  },
    id: 'js-adv-7',
    question: 'What is t
  va
}
    options: ['5 10
    explanation: 'var is
  },
    id: 'js-adv-8',
    question
delete obj.a;
    options: ['1', 'u
    explanation: 'The delete operator removes properties from objects. Accessing a deleted property returns undefined.',
  },
    
   
var x = 5;`,
    correctAnswer: 1,
    difficulty: 'medium'
  {
    topic: '
    code: `[1
 
    difficulty: 'eas
  {
    topic: 'typescrip
    code: `type User = { name: string; age: number };
    options: ['Makes all
    
  }
    id: 'ts-adv-2',
    question: 'What is t
  if (typeof x === 'string') {
  }
    options: 
    explanation: 'Typ
  },
    id: 'ts-adv-3',
    explanation: 'The delete operator removes properties from objects. Accessing a deleted property returns undefined.',
    difficulty: 'easy'
  },
  {
    id: 'js-adv-9',
    topic: 'javascript',
    question: 'What is hoisting?',
    code: `console.log(x);
var x = 5;`,
    options: ['5', 'undefined', 'Error', 'null'],
    correctAnswer: 1,
    explanation: 'Hoisting moves variable declarations to the top of their scope. var x is hoisted but not its value, so it logs undefined.',
    difficulty: 'medium'
  },
  {
    id: 'js-adv-10',
    topic: 'javascript',
    question: 'What does Array.map() return?',
    code: `[1, 2, 3].map(x => x * 2)`,
    options: ['[1, 2, 3]', '[2, 4, 6]', '6', 'undefined'],
    correctAnswer: 1,
    explanation: 'map() creates a new array by applying a function to each element.',
    difficulty: 'easy'
  },
  {
    id: 'ts-adv-1',
    topic: 'typescript',
    question: 'What does the Partial<T> utility type do?',
    code: `type User = { name: string; age: number };
type PartialUser = Partial<User>;`,
    options: ['Makes all properties required', 'Makes all properties optional', 'Removes properties', 'Makes properties readonly'],
    correctAnswer: 1,
    explanation: 'Partial<T> constructs a type with all properties of T set to optional.',
    difficulty: 'medium'
  },
  {
    id: 'ts-adv-2',
    topic: 'typescript',
    question: 'What is type narrowing?',
    code: `function process(x: string | number) {
  if (typeof x === 'string') {
    x.toUpperCase();
  }
}`,
    options: ['Type casting', 'Refining types within conditional blocks', 'Creating new types', 'Type assertion'],
    correctAnswer: 1,
    explanation: 'Type narrowing is when TypeScript refines a type to a more specific type based on conditions.',
    difficulty: 'hard'
  },
  {
    id: 'ts-adv-3',
    topic: 'typescript',
    question: 'What does the keyof operator do?',
    code: `type User = { name: string; age: number };
type UserKeys = keyof User;`,
    options: ['Returns object keys', 'Creates a union of property names', 'Returns property values', 'Creates an array'],
    correctAnswer: 1,
    explanation: 'keyof creates a union type of all property names (literal types) of a given type.',
    difficulty: 'medium'
  },
  {
    id: 'ts-adv-4',
    topic: 'typescript',
    question: 'What is a type guard?',
    code: `function isString(x: unknown): x is string {
  return typeof x === 'string';
}`,
    options: ['A runtime check', 'A function that narrows types', 'A type assertion', 'A decorator'],
    correctAnswer: 1,
    explanation: 'Type guards are functions that perform runtime checks and help TypeScript narrow types.',
    difficulty: 'hard'
  },
  {
    id: 'ts-adv-5',
    topic: 'typescript',
    question: 'What does Pick<T, K> do?',
    code: `type User = { name: string; age: number; email: string };
type NameAndAge = Pick<User, 'name' | 'age'>;`,
    options: ['Removes properties', 'Selects specific properties', 'Makes properties optional', 'Creates a union'],
    correctAnswer: 1,
    explanation: 'Pick<T, K> constructs a type by picking specific properties K from type T.',
    difficulty: 'medium'
  },
  {
    id: 'react-adv-1',
    topic: 'react',
    question: 'What does useCallback do?',
    code: `const handleClick = useCallback(() => {
  console.log(count);
}, [count]);`,
    options: ['Memoizes values', 'Memoizes functions', 'Creates refs', 'Manages state'],
    correctAnswer: 1,
    explanation: 'useCallback returns a memoized version of the callback that only changes if dependencies change.',
    difficulty: 'medium'
  },
  {
    id: 'react-adv-2',
    topic: 'react',
    question: 'What is the purpose of useMemo?',
    code: `const expensive = useMemo(() => {
  return computeExpensive(a, b);
}, [a, b]);`,
    options: ['Memoizes functions', 'Memoizes computed values', 'Creates side effects', 'Manages state'],
    correctAnswer: 1,
    explanation: 'useMemo memoizes the result of expensive computations and only recalculates when dependencies change.',
    difficulty: 'medium'
  },
  {
    id: 'react-adv-3',
    topic: 'react',
    question: 'What does useRef do?',
    code: `const inputRef = useRef(null);`,
  {
    topic: 'python',
    code: `def gen():
    yield 2`,
    
   
  {
    topic: 'python'
    code: `squares = [x**2 for x in ran
    correctAnswer: 1,
    difficulty: 'easy'
  {
    topic: 
    code: `def f
    options: ['Creates a list', 'Accepts variable number of positional arguments', 'Creates a dictionary
    explanation: '*ar
  },
    id: 'django-adv-1'
    
   
    explanation: 'Quer
  },
    id: 'django-adv-2',
    question: 'What does select_related do?',
    options: ['Filters results', 'Performs SQL JOIN to reduce queries', 'Orders results', 'Creates
    explanation: 'sel
  },
    id: 'django-adv-3'
    
   
    options: ['Handles 
    explanation: 'Mi
  },
    id: 'django-adv-4
    question: '
    option
    explanation: 'Signals allow decoupled applications to get notified when certain actions occur elsewhere
  },
    id: 'django-adv-5',
    question: 'What is
    
   
  },
    id: 'css-adv-1',
    question: 'What does the :not() pseudo-class 
    options: ['Selects all elements', 
    explanation: ':no
  },
    id: 'css-adv-2',
    question: 'What is CSS specificity?',
.class { color: blue; }`
    
   
  {
    topic: 'css',
    code: `div { transform: translate
    correctAnswer: 1,
    difficu
  {
    topic: 'css',
    code: `--primary-
    options: ['A JavaScript feature', 'CSS variables for reusable values', 'Browser settings', 'Preprocessor syntax'],
    explanation: 'CSS 
  },
   
    question: 'What do 
  .container { width
    options: ['Creates animations', 'Applies
    explanation: '@media queries apply styles c
  }


























































































































