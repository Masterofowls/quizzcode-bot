import { Quiz } from './types'

export const ADVANCED_QUIZZES: Quiz[] = [
  {
    id: 'js-adv-1',
    topic: 'javascript',
    question: 'What is a closure in JavaScript?',
    code: `function outer() {
  let count = 0;
  return function inner() {
    return ++count;
  }
}`,
    options: ['A function inside another function', 'A function that remembers its lexical scope', 'A private variable', 'An IIFE'],
    correctAnswer: 1,
    explanation: 'A closure is a function that has access to variables in its outer (enclosing) lexical scope, even after the outer function has returned.',
    difficulty: 'hard'
  },
  {
    id: 'js-adv-2',
    topic: 'javascript',
    question: 'What does Promise.race() do?',
    code: `Promise.race([promise1, promise2, promise3])`,
    options: ['Runs all promises in sequence', 'Returns first promise to settle (resolve or reject)', 'Returns all results', 'Cancels slower promises'],
    correctAnswer: 1,
    explanation: 'Promise.race() returns a promise that settles as soon as any of the input promises settles.',
    difficulty: 'hard'
  },
  {
    id: 'js-adv-3',
    topic: 'javascript',
    question: 'What does Array.from() do?',
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
let x = 5;`,
    options: ['No error', 'ReferenceError', 'undefined', 'null'],
    correctAnswer: 1,
    explanation: 'The Temporal Dead Zone is the period between entering scope and declaration where let/const variables cannot be accessed.',
    difficulty: 'hard'
  },
  {
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
    id: 'ts-adv-2',
    topic: 'typescript',
    question: 'What is type narrowing?',
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
    explanation: 'Generators use yield to produce values lazily, one at a time, saving memory.',
    difficulty: 'hard'
  },
  {
    id: 'python-adv-4',
    topic: 'python',
    question: 'What does **kwargs allow?',
    code: `def func(**kwargs):
    return kwargs`,
    options: ['Multiple positional arguments', 'Multiple keyword arguments', 'A single argument', 'No arguments'],
    correctAnswer: 1,
    explanation: '**kwargs allows a function to accept any number of keyword arguments as a dictionary.',
    difficulty: 'medium'
  },
  {
    id: 'python-adv-5',
    topic: 'python',
    question: 'What is list slicing?',
    code: `lst = [0, 1, 2, 3, 4]
print(lst[1:4])`,
    options: ['[0, 1, 2, 3]', '[1, 2, 3]', '[1, 2, 3, 4]', '[0, 1, 2]'],
    correctAnswer: 1,
    explanation: 'Slicing lst[1:4] returns elements from index 1 up to (but not including) index 4.',
    difficulty: 'easy'
  },
  {
    id: 'django-adv-1',
    topic: 'django',
    question: 'What is a Django QuerySet?',
    code: `User.objects.all()`,
    options: ['A list', 'A lazy database query', 'An array', 'A function'],
    correctAnswer: 1,
    explanation: 'QuerySets are lazy, meaning they don\'t hit the database until evaluated.',
    difficulty: 'medium'
  },
  {
    id: 'django-adv-2',
    topic: 'django',
    question: 'What does select_related() do?',
    code: `Post.objects.select_related('author')`,
    options: ['Lazy loads relations', 'Eager loads foreign keys using SQL JOIN', 'Filters results', 'Orders results'],
    correctAnswer: 1,
    explanation: 'select_related() performs a SQL JOIN to fetch related objects in a single query, reducing database hits.',
    difficulty: 'hard'
  },
  {
    id: 'django-adv-3',
    topic: 'django',
    question: 'What is the purpose of Django middleware?',
    code: `MIDDLEWARE = ['django.middleware.security.SecurityMiddleware']`,
    options: ['Creates views', 'Processes requests/responses globally', 'Defines models', 'Creates forms'],
    correctAnswer: 1,
    explanation: 'Middleware is a framework of hooks into Django\'s request/response processing.',
    difficulty: 'medium'
  },
  {
    id: 'django-adv-4',
    topic: 'django',
    question: 'What does prefetch_related() do?',
    code: `Author.objects.prefetch_related('books')`,
    options: ['Uses SQL JOIN', 'Fetches related objects in separate queries', 'Filters results', 'Deletes objects'],
    correctAnswer: 1,
    explanation: 'prefetch_related() does separate queries for related objects (useful for many-to-many relations).',
    difficulty: 'hard'
  },
  {
    id: 'django-adv-5',
    topic: 'django',
    question: 'What is a Django signal?',
    code: `from django.db.models.signals import post_save`,
    options: ['An HTTP request', 'A notification when certain actions occur', 'A view function', 'A template tag'],
    correctAnswer: 1,
    explanation: 'Signals allow decoupled applications to get notified when certain actions occur (like saving a model).',
    difficulty: 'medium'
  },
  {
    id: 'css-adv-1',
    topic: 'css',
    question: 'What does the :not() pseudo-class do?',
    code: `button:not(.primary) { color: gray; }`,
    options: ['Selects all buttons', 'Selects buttons without .primary class', 'Disables buttons', 'Creates a class'],
    correctAnswer: 1,
    explanation: ':not() is a negation pseudo-class that matches elements that don\'t match the selector inside.',
    difficulty: 'medium'
  },
  {
    id: 'css-adv-2',
    topic: 'css',
    question: 'What is CSS specificity?',
    code: `#id { color: red; }
.class { color: blue; }`,
    options: ['Load order', 'Weight/priority of selectors', 'Inheritance', 'Cascading'],
    correctAnswer: 1,
    explanation: 'Specificity determines which CSS rule applies when multiple rules target the same element.',
    difficulty: 'medium'
  },
  {
    id: 'css-adv-3',
    topic: 'css',
    question: 'What does transform: translateX() do?',
    code: `div { transform: translateX(50px); }`,
    options: ['Moves vertically', 'Moves horizontally', 'Rotates', 'Scales'],
    correctAnswer: 1,
    explanation: 'translateX() moves an element horizontally along the X-axis.',
    difficulty: 'easy'
  },
  {
    id: 'css-adv-4',
    topic: 'css',
    question: 'What is a CSS variable?',
    code: `--primary-color: blue;
color: var(--primary-color);`,
    options: ['A JavaScript variable', 'A reusable CSS value', 'A preprocessor variable', 'A constant'],
    correctAnswer: 1,
    explanation: 'CSS custom properties (variables) are reusable values defined with -- and accessed with var().',
    difficulty: 'easy'
  },
  {
    id: 'css-adv-5',
    topic: 'css',
    question: 'What does @media do?',
    code: `@media (max-width: 768px) {
  .container { width: 100%; }
}`,
    options: ['Creates animations', 'Applies styles based on conditions', 'Imports files', 'Defines keyframes'],
    correctAnswer: 1,
    explanation: '@media queries apply styles conditionally based on device characteristics like screen width.',
    difficulty: 'easy'
  }
]
