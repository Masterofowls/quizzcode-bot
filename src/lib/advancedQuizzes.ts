import { Quiz } from './types'

export const ADVANCED_QUIZZES: Quiz[] = [
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
    question: 'What is the difference between event.preventDefault() and event.stopPropagation()?',
    code: `element.addEventListener('click', (e) => {
  e.preventDefault();
  e.stopPropagation();
});`,
    options: ['They do the same thing', 'preventDefault stops default action, stopPropagation stops bubbling', 'They both stop bubbling', 'They both prevent default'],
    correctAnswer: 1,
    explanation: 'preventDefault() stops the default browser behavior, while stopPropagation() prevents the event from bubbling up.',
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
    explanation: 'Generators are functions that yield values one at a time, allowing lazy evaluation and memory efficiency.',
    difficulty: 'hard'
  },
  {
    id: 'python-adv-4',
    topic: 'python',
    question: 'What is list comprehension?',
    code: `squares = [x**2 for x in range(5)]`,
    options: ['A loop', 'A concise way to create lists', 'A function', 'A class'],
    correctAnswer: 1,
    explanation: 'List comprehensions provide a concise syntax for creating lists based on existing iterables.',
    difficulty: 'easy'
  },
  {
    id: 'python-adv-5',
    topic: 'python',
    question: 'What does *args do?',
    code: `def func(*args):
    print(args)`,
    options: ['Creates a list', 'Accepts variable number of positional arguments', 'Creates a dictionary', 'Accepts keyword arguments'],
    correctAnswer: 1,
    explanation: '*args allows a function to accept any number of positional arguments as a tuple.',
    difficulty: 'medium'
  },
  {
    id: 'django-adv-1',
    topic: 'django',
    question: 'What is a Django QuerySet?',
    code: `users = User.objects.filter(is_active=True)`,
    options: ['A list', 'A lazy database query', 'A dictionary', 'A function'],
    correctAnswer: 1,
    explanation: 'QuerySets are lazy - they only execute database queries when evaluated.',
    difficulty: 'medium'
  },
  {
    id: 'django-adv-2',
    topic: 'django',
    question: 'What does select_related do?',
    code: `Book.objects.select_related('author')`,
    options: ['Filters results', 'Performs SQL JOIN to reduce queries', 'Orders results', 'Creates relationships'],
    correctAnswer: 1,
    explanation: 'select_related performs a SQL JOIN to fetch related objects in a single query, reducing database hits.',
    difficulty: 'hard'
  },
  {
    id: 'django-adv-3',
    topic: 'django',
    question: 'What is the purpose of Django middleware?',
    code: `MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
]`,
    options: ['Handles templates', 'Processes requests/responses globally', 'Manages static files', 'Creates models'],
    correctAnswer: 1,
    explanation: 'Middleware processes requests before they reach views and responses before they reach the client.',
    difficulty: 'medium'
  },
  {
    id: 'django-adv-4',
    topic: 'django',
    question: 'What are Django signals?',
    code: `post_save.connect(my_handler, sender=User)`,
    options: ['Database indexes', 'Event notifications for model actions', 'URL patterns', 'Template tags'],
    correctAnswer: 1,
    explanation: 'Signals allow decoupled applications to get notified when certain actions occur elsewhere in the framework.',
    difficulty: 'hard'
  },
  {
    id: 'django-adv-5',
    topic: 'django',
    question: 'What is Django ORM?',
    code: `User.objects.create(username='john')`,
    options: ['A template engine', 'Object-Relational Mapping for database operations', 'A web server', 'A testing framework'],
    correctAnswer: 1,
    explanation: 'ORM allows you to interact with databases using Python objects instead of writing SQL.',
    difficulty: 'easy'
  },
  {
    id: 'css-adv-1',
    topic: 'css',
    question: 'What does the :not() pseudo-class do?',
    code: `li:not(.active) { color: gray; }`,
    options: ['Selects all elements', 'Selects elements that do not match selector', 'Inverts colors', 'Hides elements'],
    correctAnswer: 1,
    explanation: ':not() pseudo-class selects elements that do not match the given selector.',
    difficulty: 'medium'
  },
  {
    id: 'css-adv-2',
    topic: 'css',
    question: 'What is CSS specificity?',
    code: `#id { color: red; }
.class { color: blue; }`,
    options: ['File order', 'Weight determining which styles apply', 'Browser preference', 'Random selection'],
    correctAnswer: 1,
    explanation: 'Specificity determines which CSS rules apply when multiple rules target the same element. IDs have higher specificity than classes.',
    difficulty: 'medium'
  },
  {
    id: 'css-adv-3',
    topic: 'css',
    question: 'What does transform do?',
    code: `div { transform: translateX(50px) rotate(45deg); }`,
    options: ['Changes HTML', 'Applies 2D/3D transformations', 'Changes colors', 'Animates automatically'],
    correctAnswer: 1,
    explanation: 'The transform property applies 2D or 3D transformations like translate, rotate, scale, and skew.',
    difficulty: 'easy'
  },
  {
    id: 'css-adv-4',
    topic: 'css',
    question: 'What are CSS custom properties?',
    code: `--primary-color: blue;
color: var(--primary-color);`,
    options: ['A JavaScript feature', 'CSS variables for reusable values', 'Browser settings', 'Preprocessor syntax'],
    correctAnswer: 1,
    explanation: 'CSS custom properties (variables) allow you to store and reuse values throughout your stylesheet.',
    difficulty: 'easy'
  },
  {
    id: 'css-adv-5',
    topic: 'css',
    question: 'What do media queries do?',
    code: `@media (max-width: 768px) {
  .container { width: 100%; }
}`,
    options: ['Creates animations', 'Applies styles based on device characteristics', 'Loads images', 'Defines fonts'],
    correctAnswer: 1,
    explanation: '@media queries apply styles conditionally based on device characteristics like screen width.',
    difficulty: 'easy'
  }
]
