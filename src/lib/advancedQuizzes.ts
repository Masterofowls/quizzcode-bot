import { Quiz } from './types'

export const ADVANCED_QUIZZES: Quiz[] = [
  {
    question: 'What
  let count = 0;
    return ++count;
}`,
    correctAnswe
    difficulty: 'hard'
  {
   
   
    correctAnswer: 1,
    difficulty: 'hard
  {
    topic: 'javascript
    
   
    difficulty: 'me
  {
    topic: 'javascript',
    code: `element.addEventListener('click', handler);`,
    correctAnswer: 0,
    difficulty: 'medi
  {
    topic: 'javascript
    
   
    explanation: 'O
  },
    id: 'js-adv-6',
    question: 'What is the Tempo
let x = 5;`,
    correctAnswer: 1,
    difficulty: 'hard'
  {
    
   
  let y = 10;
console.log(x, y);`,
    correctAnswer: 1,
    difficulty: 'medium'
  {
    topic: 'javascrip
    code: `const obj = {a: 1};
console.log(obj.a);`,
    
   
  {
    topic: 'javascript',
    code: `console.log(x);
    options: ['5', 'undefined', 'Error', 'nul
    explanat
  },
    id: 'js-adv-10',
    question: 'What does Array.map() return?',
    options: ['[1, 2, 3]
    
  }
    id: 'ts-adv-1',
    question: 'What does
type PartialUser = Partial<User>;`,
    correctAnswer: 1,
let x = 5;`,
    options: ['No error', 'ReferenceError', 'undefined', 'null'],
    correctAnswer: 1,
    explanation: 'The Temporal Dead Zone is the period between entering scope and declaration where let/const variables cannot be accessed.',
    difficulty: 'hard'
  },
   
    id: 'js-adv-7',
    topic: 'javascript',
    question: 'What is the difference between var and let?',
    code: `if (true) {
  var x = 5;
  let y = 10;
}
console.log(x, y);`,
    options: ['5 10', '5 error', 'error error', 'undefined undefined'],
    correctAnswer: 1,
    explanation: 'var is function-scoped and hoisted, let is block-scoped. y is not accessible outside the if block.',
    difficulty: 'medium'
  },
  {
    id: 'js-adv-8',
    topic: 'javascript',
    question: 'What does the delete operator do?',
    code: `const obj = {a: 1};
delete obj.a;
console.log(obj.a);`,
    options: ['1', 'undefined', 'null', 'Error'],
    correctAnswer: 1,
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
}, [a, b]);`,
    correctAnswer: 1,
    difficulty: 'medium'
    code: `if (typeof x === 'string') {
  x.toUpperCase();
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
    options: ['Creates state', 'Creates a mutable reference', 'Creates side effects', 'Memoizes values'],
    correctAnswer: 1,
    explanation: 'useRef creates a mutable reference that persists across renders without causing re-renders.',
    difficulty: 'easy'
  },
  {
    id: 'react-adv-4',
    topic: 'react',
    question: 'What is prop drilling?',
    code: `<GrandParent>
  <Parent data={data}>
    <Child data={data} />
  </Parent>
</GrandParent>`,
    options: ['Passing props through multiple levels', 'Using context', 'Using Redux', 'Creating HOCs'],
    correctAnswer: 0,
    explanation: 'Prop drilling is passing props through multiple component levels to reach deeply nested components.',
    difficulty: 'easy'
  },
  {
    id: 'react-adv-5',
    topic: 'react',
    question: 'What does useContext do?',
    code: `const value = useContext(MyContext);`,
    options: ['Creates context', 'Consumes context value', 'Provides context', 'Updates context'],
    correctAnswer: 1,
    explanation: 'useContext allows a component to consume the value from a React context.',
    difficulty: 'easy'
  },
  {
    id: 'python-adv-1',
    topic: 'python',
    question: 'What is a decorator?',
    code: `@decorator
def function():
    pass`,
    options: ['A comment', 'A function that modifies another function', 'A class method', 'An annotation'],
    correctAnswer: 1,
    explanation: 'Decorators are functions that modify the behavior of other functions or classes.',
    difficulty: 'hard'
  },
  {
    id: 'python-adv-2',
    topic: 'python',
    question: 'What does the with statement do?',
    code: `with open('file.txt') as f:
    data = f.read()`,
    options: ['Opens files only', 'Manages context and ensures cleanup', 'Creates a loop', 'Handles exceptions'],
    correctAnswer: 1,
    explanation: 'The with statement ensures proper acquisition and release of resources (context management).',
    difficulty: 'medium'
  },
  {
    id: 'python-adv-3',
    topic: 'python',
    question: 'What is a generator?',
    code: `def gen():
    yield 1
    yield 2`,
    options: ['A function that returns once', 'A function that yields values lazily', 'A class', 'A decorator'],
    correctAnswer: 1,
    id: 'django-adv-5',
    question: 'What is
    
   
  },
    id: 'css-adv-1',
    question: 'What does the :not() pseudo
    options: ['Selects all but
    explanation: ':
  },
    id: 'css-adv-2',
    question: 'What is CSS specificity?',
.class { color: blue; }`
    
   
  {
    topic: 'css',
    code: `div { transform: translateX
    correctAnswer: 1,
    difficulty: '
  {
    topic: 'css',
    code: `--primary-color: blue;
    options: ['A JavaS
    
  }
    id: 'css-adv-5',
    question: 'What 
  .container { width: 100%; }
    options: ['Creates animatio
    explanation: '@media queries apply styles conditionally based on device
  }


































































































