import { Quiz } from './types'

export const ADVANCED_QUIZZES: Quiz[] = [
  {
    id: 'js-adv-1',
    topic: 'javascript',
    question: 'What will this closure return?',
    code: `function createCounter() {
  let count = 0;
  return () => ++count;
}
const counter = createCounter();
console.log(counter());
console.log(counter());`,
    options: ['0, 0', '1, 1', '1, 2', 'undefined, undefined'],
    correctAnswer: 2,
    explanation: 'The closure maintains access to the count variable, incrementing it with each call.',
    difficulty: 'medium'
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
    options: ['Adding multiple listeners', 'Using event bubbling to handle child events', 'Creating custom events', 'Preventing default behavior'],
    correctAnswer: 1,
    explanation: 'Event delegation uses event bubbling to handle events on child elements from a parent listener.',
    difficulty: 'hard'
  },
  {
    id: 'js-adv-3',
    topic: 'javascript',
    question: 'What will this output?',
    code: `const promise = new Promise((resolve) => {
  console.log(1);
  resolve();
}).then(() => {
  console.log(2);
});
console.log(3);`,
    options: ['1, 2, 3', '1, 3, 2', '3, 1, 2', '2, 1, 3'],
    correctAnswer: 1,
    explanation: 'Promise executor runs synchronously, then 3 is logged, and finally the then callback in the microtask queue.',
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
    explanation: 'Variable declarations are hoisted to the top but not their assignments, so x is undefined.',
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
    options: ['Makes all properties required', 'Makes all properties optional', 'Removes all properties', 'Duplicates the type'],
    correctAnswer: 1,
    explanation: 'Partial<T> creates a type with all properties of T set to optional.',
    difficulty: 'medium'
  },
  {
    id: 'react-adv-1',
    topic: 'react',
    question: 'What is useCallback used for?',
    code: `const memoizedCallback = useCallback(
  () => {
    doSomething(a, b);
  },
  [a, b]
);`,
    options: ['Memoize values', 'Memoize callback functions', 'Handle side effects', 'Manage state'],
    correctAnswer: 1,
    explanation: 'useCallback memoizes callback functions to prevent unnecessary re-renders.',
    difficulty: 'medium'
  },
  {
    id: 'react-adv-2',
    topic: 'react',
    question: 'What does useMemo do?',
    code: `const expensiveValue = useMemo(() => {
  return computeExpensiveValue(a, b);
}, [a, b]);`,
    options: ['Memoizes callbacks', 'Memoizes computed values', 'Handles effects', 'Creates refs'],
    correctAnswer: 1,
    explanation: 'useMemo memoizes expensive computed values to avoid recalculation on every render.',
    difficulty: 'medium'
  },
  {
    id: 'python-adv-1',
    topic: 'python',
    question: 'What are generators?',
    code: `def counter():
    i = 0
    while True:
        yield i
        i += 1`,
    options: ['Functions that return lists', 'Functions that return iterators', 'Class methods', 'Lambda functions'],
    correctAnswer: 1,
    explanation: 'Generators use yield to return iterators that produce values lazily.',
    difficulty: 'hard'
  },
  {
    id: 'python-adv-2',
    topic: 'python',
    question: 'What is a decorator?',
    code: `@my_decorator
def my_function():
    pass`,
    options: ['A comment', 'A function that modifies another function', 'A class method', 'An import statement'],
    correctAnswer: 1,
    explanation: 'Decorators are functions that modify or enhance other functions or classes.',
    difficulty: 'hard'
  },
  {
    id: 'django-adv-1',
    topic: 'django',
    question: 'What is a Django signal?',
    code: `from django.db.models.signals import post_save
post_save.connect(my_handler, sender=MyModel)`,
    options: ['Database query', 'Event notification system', 'URL pattern', 'Template tag'],
    correctAnswer: 1,
    explanation: 'Signals allow decoupled applications to get notified when actions occur elsewhere in the framework.',
    difficulty: 'hard'
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
