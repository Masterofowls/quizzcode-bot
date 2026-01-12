import { Quiz } from './types'

export const advancedQuizzes: Quiz[] = [
  {
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
  },
  {
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
    id: 'js-adv-5',
    topic: 'javascript',
    question: 'What is the Temporal Dead Zone?',
    code: `console.log(x);
let x = 5;`,
    options: ['Variable hoisting', 'Period between scope entry and declaration', 'Memory leak', 'Closure behavior'],
    correctAnswer: 1,
    explanation: 'The Temporal Dead Zone is the period between entering scope and declaration where let/const variables cannot be accessed.',
    difficulty: 'medium'
  },
  {
    id: 'js-adv-6',
    topic: 'javascript',
    question: 'What is the difference between var and let?',
    code: `for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log(j), 100);
}`,
    options: ['3 3 3, then 0 1 2', '0 1 2, then 3 3 3', 'Both log 3 3 3', 'Both log 0 1 2'],
    correctAnswer: 0,
    explanation: 'var is function-scoped and shared across iterations. let is block-scoped, creating a new binding per iteration.',
    difficulty: 'hard'
  },
  {
    id: 'js-adv-7',
    topic: 'javascript',
    question: 'What does the delete operator do?',
    code: `const obj = { a: 1, b: 2 };
delete obj.a;
console.log(obj.a);`,
    options: ['1', 'undefined', 'null', 'Error'],
    correctAnswer: 1,
    explanation: 'The delete operator removes properties from objects. Accessing a deleted property returns undefined.',
    difficulty: 'easy'
  },
  {
    id: 'js-adv-8',
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
    id: 'js-adv-9',
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
    options: ['Creates state', 'Creates a mutable reference', 'Creates side effects', 'Memoizes values'],
    correctAnswer: 1,
    explanation: 'useRef creates a mutable reference that persists across renders without causing re-renders.',
    difficulty: 'easy'
  },
  {
    id: 'python-adv-1',
    topic: 'python',
    question: 'What is a generator?',
    code: `def gen():
    yield 1
    yield 2`,
    options: ['A function that returns a list', 'A function that yields values one at a time', 'A class', 'A decorator'],
    correctAnswer: 1,
    explanation: 'Generators are functions that use yield to produce values lazily, one at a time.',
    difficulty: 'medium'
  },
  {
    id: 'python-adv-2',
    topic: 'python',
    question: 'What is list comprehension?',
    code: `squares = [x**2 for x in range(5)]`,
    options: ['A loop', 'Concise syntax for creating lists', 'A function', 'An iterator'],
    correctAnswer: 1,
    explanation: 'List comprehension provides a concise way to create lists based on existing sequences.',
    difficulty: 'easy'
  },
  {
    id: 'python-adv-3',
    topic: 'python',
    question: 'What does *args do?',
    code: `def func(*args):
    print(args)`,
    options: ['Creates a list', 'Accepts variable number of positional arguments', 'Creates a dictionary', 'Creates a tuple'],
    correctAnswer: 1,
    explanation: '*args allows a function to accept any number of positional arguments as a tuple.',
    difficulty: 'medium'
  },
  {
    id: 'django-adv-1',
    topic: 'django',
    question: 'What is a QuerySet?',
    code: `User.objects.filter(age__gte=18)`,
    options: ['A database', 'A lazy database lookup', 'A model', 'A view'],
    correctAnswer: 1,
    explanation: 'QuerySets are lazy database lookups that are only executed when evaluated.',
    difficulty: 'medium'
  },
  {
    id: 'django-adv-2',
    topic: 'django',
    question: 'What does select_related do?',
    code: `Book.objects.select_related('author').all()`,
    options: ['Filters results', 'Performs SQL JOIN to reduce queries', 'Orders results', 'Creates a queryset'],
    correctAnswer: 1,
    explanation: 'select_related performs a SQL JOIN to fetch related objects in a single query, reducing database hits.',
    difficulty: 'hard'
  },
  {
    id: 'django-adv-3',
    topic: 'django',
    question: 'What are Django migrations?',
    code: `python manage.py makemigrations`,
    options: ['Handles routing', 'Propagates model changes to database schema', 'Creates views', 'Manages static files'],
    correctAnswer: 1,
    explanation: 'Migrations are how Django propagates changes to models into the database schema.',
    difficulty: 'easy'
  },
  {
    id: 'django-adv-4',
    topic: 'django',
    question: 'What are Django signals?',
    code: `post_save.connect(my_handler, sender=User)`,
    options: ['HTTP requests', 'Decoupled event notifications', 'Database queries', 'Template tags'],
    correctAnswer: 1,
    explanation: 'Signals allow decoupled applications to get notified when certain actions occur elsewhere in the framework.',
    difficulty: 'hard'
  },
  {
    id: 'css-adv-1',
    topic: 'css',
    question: 'What does the :not() pseudo-class do?',
    code: `div:not(.special) { color: red; }`,
    options: ['Selects all elements', 'Excludes elements matching selector', 'Selects parent elements', 'Creates animations'],
    correctAnswer: 1,
    explanation: ':not() pseudo-class excludes elements that match the given selector.',
    difficulty: 'medium'
  },
  {
    id: 'css-adv-2',
    topic: 'css',
    question: 'What is CSS specificity?',
    code: `#id { color: red; }
.class { color: blue; }`,
    options: ['Animation timing', 'Priority calculation for conflicting styles', 'Layout algorithm', 'Color scheme'],
    correctAnswer: 1,
    explanation: 'Specificity determines which CSS rule applies when multiple rules target the same element.',
    difficulty: 'medium'
  },
  {
    id: 'css-adv-3',
    topic: 'css',
    question: 'What does transform do?',
    code: `div { transform: translate(50px, 100px); }`,
    options: ['Changes color', 'Applies 2D/3D transformations', 'Creates animations', 'Changes font'],
    correctAnswer: 1,
    explanation: 'The transform property applies 2D or 3D transformations to elements.',
    difficulty: 'easy'
  },
  {
    id: 'css-adv-4',
    topic: 'css',
    question: 'What are CSS custom properties?',
    code: `--primary-color: #3498db;
color: var(--primary-color);`,
    options: ['A JavaScript feature', 'CSS variables for reusable values', 'Browser settings', 'Preprocessor syntax'],
    correctAnswer: 1,
    explanation: 'CSS custom properties (variables) allow you to store and reuse values throughout your stylesheet.',
    difficulty: 'medium'
  },
  {
    id: 'css-adv-5',
    topic: 'css',
    question: 'What do media queries do?',
    code: `@media (max-width: 768px) {
  .container { width: 100%; }
}`,
    options: ['Creates animations', 'Applies styles conditionally based on device characteristics', 'Imports fonts', 'Defines variables'],
    correctAnswer: 1,
    explanation: '@media queries apply styles conditionally based on device characteristics like screen width.',
    difficulty: 'easy'
  }
]
