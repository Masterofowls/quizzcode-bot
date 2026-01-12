import { Quiz } from './types'

export const ADVANCED_QUIZZES: Quiz[] = [
  {
    id: 'js-adv-1',
    topic: 'javascript',
    question: 'What will this closure return?',
    code: `function createCounter() {
  let count = 0;
  return function() {
    return count++;
  }
}
const counter = createCounter();
console.log(counter());
console.log(counter());`,
    options: ['0, 0', '0, 1', '1, 2', 'undefined, undefined'],
    correctAnswer: 1,
    explanation: 'The closure maintains access to the count variable. First call returns 0 then increments, second call returns 1 then increments.',
    difficulty: 'medium'
  },
  {
    id: 'js-adv-2',
    topic: 'javascript',
    question: 'What is event delegation?',
    code: `document.querySelector('.parent').addEventListener('click', (e) => {
  if (e.target.matches('.child')) {
    console.log('Child clicked');
  }
});`,
    options: ['Adding multiple listeners', 'Using parent to handle child events', 'Removing events', 'Creating custom events'],
    correctAnswer: 1,
    explanation: 'Event delegation uses event bubbling to handle events at a parent level rather than attaching listeners to each child.',
    difficulty: 'medium'
  },
  {
    id: 'js-adv-3',
    topic: 'javascript',
    question: 'What will this promise chain log?',
    code: `Promise.reject(1)
  .then(x => x + 1)
  .catch(e => 'error')
  .then(x => console.log(x));`,
    options: ['Logs 2', 'Logs "error"', 'Throws error', 'Logs 1'],
    correctAnswer: 1,
    explanation: 'The catch handler catches the error and returns "error", which is passed to the next then handler.',
    difficulty: 'hard'
  },
  {
    id: 'js-adv-4',
    topic: 'javascript',
    question: 'What is hoisting?',
    code: `console.log(x);
var x = 5;`,
    options: ['Error', 'undefined', '5', 'null'],
    correctAnswer: 1,
    explanation: 'Variable declarations are hoisted to the top of their scope, but not their assignments.',
    difficulty: 'medium'
  },
  {
    id: 'js-adv-5',
    topic: 'javascript',
    question: 'What is destructuring?',
    code: `const obj = { a: 1, b: 2 };
const { a, b } = obj;
console.log(a);`,
    options: ['Error', '1', 'undefined', '{a: 1}'],
    correctAnswer: 1,
    explanation: 'Destructuring extracts properties from objects into distinct variables.',
    difficulty: 'easy'
  },
  {
    id: 'ts-adv-1',
    topic: 'typescript',
    question: 'What is a union type?',
    code: `type StringOrNumber = string | number;
function process(value: StringOrNumber) {
  return value;
}`,
    options: ['Type intersection', 'Type that can be one of several types', 'Type alias', 'Generic type'],
    correctAnswer: 1,
    explanation: 'Union types allow a value to be one of several types, denoted with the | operator.',
    difficulty: 'easy'
  },
  {
    id: 'ts-adv-2',
    topic: 'typescript',
    question: 'What is type narrowing?',
    code: `function process(value: string | number) {
  if (typeof value === 'string') {
    return value.toUpperCase();
  }
  return value * 2;
}`,
    options: ['Type casting', 'Refining types within conditional blocks', 'Type assertion', 'Generic constraint'],
    correctAnswer: 1,
    explanation: 'Type narrowing refines union types to more specific types within conditional blocks.',
    difficulty: 'medium'
  },
  {
    id: 'ts-adv-3',
    topic: 'typescript',
    question: 'What is the keyof operator?',
    code: `type Point = { x: number; y: number };
type PointKeys = keyof Point;`,
    options: ['Creates new keys', 'Gets union of all keys', 'Deletes keys', 'Renames keys'],
    correctAnswer: 1,
    explanation: 'keyof creates a union type of all keys in an object type.',
    difficulty: 'medium'
  },
  {
    id: 'ts-adv-4',
    topic: 'typescript',
    question: 'What are generics?',
    code: `function identity<T>(arg: T): T {
  return arg;
}`,
    options: ['Type variables', 'Reusable type parameters', 'Class inheritance', 'Interface extension'],
    correctAnswer: 1,
    explanation: 'Generics allow you to write reusable code that works with multiple types.',
    difficulty: 'medium'
  },
  {
    id: 'ts-adv-5',
    topic: 'typescript',
    question: 'What does the Partial utility type do?',
    code: `type User = { name: string; age: number };
type PartialUser = Partial<User>;`,
    options: ['Makes all properties required', 'Makes all properties optional', 'Removes properties', 'Adds properties'],
    correctAnswer: 1,
    explanation: 'Partial makes all properties of a type optional.',
    difficulty: 'medium'
  },
  {
    id: 'react-adv-1',
    topic: 'react',
    question: 'What is useCallback used for?',
    code: `const handleClick = useCallback(() => {
  console.log(count);
}, [count]);`,
    options: ['Memoizing state', 'Memoizing callback functions', 'Creating refs', 'Managing effects'],
    correctAnswer: 1,
    explanation: 'useCallback memoizes callback functions to prevent unnecessary re-renders.',
    difficulty: 'medium'
  },
  {
    id: 'react-adv-2',
    topic: 'react',
    question: 'What is useMemo used for?',
    code: `const value = useMemo(() => {
  return expensiveCalculation(a, b);
}, [a, b]);`,
    options: ['Memoizing callbacks', 'Memoizing computed values', 'Creating state', 'Managing side effects'],
    correctAnswer: 1,
    explanation: 'useMemo memoizes computed values to avoid expensive recalculations on every render.',
    difficulty: 'medium'
  },
  {
    id: 'react-adv-3',
    topic: 'react',
    question: 'What does useRef do?',
    code: `const inputRef = useRef(null);
<input ref={inputRef} />`,
    options: ['Creates state', 'Creates a mutable reference', 'Manages effects', 'Memoizes values'],
    correctAnswer: 1,
    explanation: 'useRef creates a mutable reference that persists across renders without causing re-renders.',
    difficulty: 'easy'
  },
  {
    id: 'react-adv-4',
    topic: 'react',
    question: 'What is the virtual DOM?',
    code: ``,
    options: ['Browser DOM', 'In-memory representation of DOM', 'Database', 'API'],
    correctAnswer: 1,
    explanation: 'The virtual DOM is an in-memory representation that React uses to efficiently update the actual DOM.',
    difficulty: 'easy'
  },
  {
    id: 'react-adv-5',
    topic: 'react',
    question: 'What is prop drilling?',
    code: ``,
    options: ['State management', 'Passing props through multiple levels', 'Component lifecycle', 'Event handling'],
    correctAnswer: 1,
    explanation: 'Prop drilling is passing data through multiple component layers to reach deeply nested components.',
    difficulty: 'easy'
  },
  {
    id: 'python-adv-1',
    topic: 'python',
    question: 'What is a generator?',
    code: `def counter():
    i = 0
    while i < 3:
        yield i
        i += 1`,
    options: ['Creates lists', 'Function that yields values lazily', 'Class method', 'Module'],
    correctAnswer: 1,
    explanation: 'Generators are functions that yield values one at a time, saving memory for large sequences.',
    difficulty: 'medium'
  },
  {
    id: 'python-adv-2',
    topic: 'python',
    question: 'What is list comprehension?',
    code: `squares = [x**2 for x in range(5)]`,
    options: ['Loop syntax', 'Concise way to create lists', 'Function definition', 'Class attribute'],
    correctAnswer: 1,
    explanation: 'List comprehensions provide a concise syntax for creating lists based on existing sequences.',
    difficulty: 'easy'
  },
  {
    id: 'python-adv-3',
    topic: 'python',
    question: 'What does *args do?',
    code: `def func(*args):
    print(args)
func(1, 2, 3)`,
    options: ['Named arguments', 'Variable number of positional arguments', 'Keyword arguments', 'Default arguments'],
    correctAnswer: 1,
    explanation: '*args allows a function to accept any number of positional arguments as a tuple.',
    difficulty: 'easy'
  },
  {
    id: 'python-adv-4',
    topic: 'python',
    question: 'What is a decorator?',
    code: `@timer
def slow_function():
    pass`,
    options: ['Class inheritance', 'Function that modifies another function', 'Loop construct', 'Error handler'],
    correctAnswer: 1,
    explanation: 'Decorators are functions that modify the behavior of other functions.',
    difficulty: 'medium'
  },
  {
    id: 'python-adv-5',
    topic: 'python',
    question: 'What is the difference between == and is?',
    code: `a = [1, 2]
b = [1, 2]
print(a == b, a is b)`,
    options: ['No difference', '== checks value, is checks identity', 'is checks value, == checks identity', 'Both check value'],
    correctAnswer: 1,
    explanation: '== compares values while is compares object identity (memory location).',
    difficulty: 'easy'
  },
  {
    id: 'django-adv-1',
    topic: 'django',
    question: 'What is an ORM?',
    code: `User.objects.all()`,
    options: ['Database driver', 'Object-Relational Mapping', 'API framework', 'Template engine'],
    correctAnswer: 1,
    explanation: 'ORM maps Python objects to database tables, allowing database operations using Python code.',
    difficulty: 'medium'
  },
  {
    id: 'django-adv-2',
    topic: 'django',
    question: 'What does select_related do?',
    code: `Book.objects.select_related('author')`,
    options: ['Filters results', 'Performs SQL JOIN for ForeignKey', 'Creates relationship', 'Deletes records'],
    correctAnswer: 1,
    explanation: 'select_related performs a SQL JOIN to fetch related objects in a single query, reducing database hits.',
    difficulty: 'hard'
  },
  {
    id: 'django-adv-3',
    topic: 'django',
    question: 'What is a QuerySet?',
    code: `User.objects.filter(active=True)`,
    options: ['Database table', 'Lazy database query collection', 'Model instance', 'View function'],
    correctAnswer: 1,
    explanation: 'QuerySets are lazy collections that represent database queries, executed only when needed.',
    difficulty: 'easy'
  },
  {
    id: 'django-adv-4',
    topic: 'django',
    question: 'What is a middleware?',
    code: `MIDDLEWARE = [
    'django.middleware.common.CommonMiddleware',
]`,
    options: ['Database layer', 'Request/response processing hook', 'URL router', 'Template tag'],
    correctAnswer: 1,
    explanation: 'Middleware processes requests and responses globally before they reach views or after they leave.',
    difficulty: 'hard'
  },
  {
    id: 'django-adv-5',
    topic: 'django',
    question: 'What is prefetch_related for?',
    code: `Author.objects.prefetch_related('books')`,
    options: ['Caching', 'Fetching ManyToMany relations efficiently', 'Database indexing', 'Query filtering'],
    correctAnswer: 1,
    explanation: 'prefetch_related performs separate queries for ManyToMany and reverse ForeignKey relationships.',
    difficulty: 'hard'
  },
  {
    id: 'css-adv-1',
    topic: 'css',
    question: 'What does :not() do?',
    code: `div:not(.special) { color: red; }`,
    options: ['Negates class', 'Selects elements not matching selector', 'Creates new class', 'Removes element'],
    correctAnswer: 1,
    explanation: 'The :not() pseudo-class selects elements that do not match the given selector.',
    difficulty: 'medium'
  },
  {
    id: 'css-adv-2',
    topic: 'css',
    question: 'What is flexbox?',
    code: `display: flex;
justify-content: center;`,
    options: ['Grid layout', 'One-dimensional layout model', 'Absolute positioning', 'Float layout'],
    correctAnswer: 1,
    explanation: 'Flexbox is a one-dimensional layout method for arranging items in rows or columns.',
    difficulty: 'easy'
  },
  {
    id: 'css-adv-3',
    topic: 'css',
    question: 'What does transform do?',
    code: `transform: rotate(45deg) scale(1.5);`,
    options: ['Animates elements', 'Applies 2D/3D transformations', 'Changes color', 'Modifies text'],
    correctAnswer: 1,
    explanation: 'The transform property applies 2D or 3D transformations to elements.',
    difficulty: 'medium'
  },
  {
    id: 'css-adv-4',
    topic: 'css',
    question: 'What are CSS variables?',
    code: `--main-color: blue;
color: var(--main-color);`,
    options: ['JavaScript variables', 'Custom properties for reusable values', 'Class names', 'Media queries'],
    correctAnswer: 1,
    explanation: 'CSS custom properties (variables) store reusable values throughout the stylesheet.',
    difficulty: 'medium'
  },
  {
    id: 'css-adv-5',
    topic: 'css',
    question: 'What are media queries?',
    code: `@media (max-width: 768px) {
  .container { width: 100%; }
}`,
    options: ['JavaScript functions', 'Conditional CSS for different devices', 'Animation keyframes', 'Color schemes'],
    correctAnswer: 1,
    explanation: 'Media queries apply CSS rules based on device characteristics like screen width.',
    difficulty: 'easy'
  }
]
