import { Quiz } from './types'

export const ADVANCED_QUIZZES: Quiz[] = [
  {
    id: 'js-adv-1',
    topic: 'javascript',
    question: 'What will be logged by this closure?',
    code: `function counter() {
  let count = 0;
  return function() {
    return ++count;
  };
}
const c = counter();
console.log(c());
console.log(c());`,
    options: ['0, 0', '1, 2', '1, 1', 'undefined'],
    correctAnswer: 1,
    explanation: 'The closure maintains access to the count variable. First call returns 1, second returns 2.',
    difficulty: 'hard'
  },
  {
    id: 'js-adv-2',
    topic: 'javascript',
    question: 'What is event delegation?',
    code: `parent.addEventListener('click', (e) => {
  if (e.target.matches('.child')) {
    console.log('Child clicked');
  }
});`,
    options: ['Adding events to all children', 'Using a parent listener to handle child events', 'Preventing default behavior', 'Event bubbling'],
    correctAnswer: 1,
    explanation: 'Event delegation uses a single parent listener to handle events from multiple children efficiently.',
    difficulty: 'medium'
  },
  {
    id: 'js-adv-3',
    topic: 'javascript',
    question: 'What does hoisting do to this code?',
    code: `console.log(x);
var x = 5;`,
    options: ['Error', 'undefined', '5', 'null'],
    correctAnswer: 1,
    explanation: 'Variable declarations are hoisted to the top but not their assignments, so x is undefined when logged.',
    difficulty: 'medium'
  },
  {
    id: 'js-adv-4',
    topic: 'javascript',
    question: 'What will be logged when trying to modify a frozen object?',
    code: `const obj = Object.freeze({ a: 1 });
obj.a = 2;
console.log(obj.a);`,
    options: ['2', '1', 'Error', 'undefined'],
    correctAnswer: 1,
    explanation: 'Object.freeze() prevents modification of existing properties. The assignment fails silently in non-strict mode.',
    difficulty: 'hard'
  },
  {
    id: 'ts-adv-1',
    topic: 'typescript',
    question: 'What is a union type?',
    code: `type StringOrNumber = string | number;
function process(value: StringOrNumber) {
  console.log(value);
}`,
    options: ['A type that can be one of several types', 'A type combining properties', 'An interface', 'A generic type'],
    correctAnswer: 0,
    explanation: 'Union types allow a value to be one of several types, indicated by the | operator.',
    difficulty: 'easy'
  },
  {
    id: 'ts-adv-2',
    topic: 'typescript',
    question: 'What is the keyof operator?',
    code: `type Point = { x: number; y: number };
type PointKeys = keyof Point;`,
    options: ['Gets property names as union type', 'Gets property values', 'Creates an object', 'Checks key existence'],
    correctAnswer: 0,
    explanation: 'The keyof operator creates a union type of all property names in the given type.',
    difficulty: 'medium'
  },
  {
    id: 'python-adv-1',
    topic: 'python',
    question: 'What is a decorator?',
    code: `@my_decorator
def my_function():
    pass`,
    options: ['A function that modifies another function', 'A class decorator', 'An annotation', 'A comment'],
    correctAnswer: 0,
    explanation: 'Decorators are functions that modify or enhance other functions or classes.',
    difficulty: 'hard'
  },
  {
    id: 'python-adv-2',
    topic: 'python',
    question: 'What is list comprehension?',
    code: `squares = [x**2 for x in range(10)]`,
    options: ['A way to create lists from iterables', 'A loop type', 'A function', 'An import statement'],
    correctAnswer: 0,
    explanation: 'List comprehensions provide a concise way to create lists based on existing iterables.',
    difficulty: 'medium'
  },
  {
    id: 'django-adv-1',
    topic: 'django',
    question: 'What is a QuerySet?',
    code: `objects = MyModel.objects.filter(status='active')`,
    options: ['A list', 'A lazy database query object', 'A dictionary', 'A tuple'],
    correctAnswer: 1,
    explanation: 'QuerySets are lazy database queries that are not executed until evaluated.',
    difficulty: 'medium'
  },
  {
    id: 'django-adv-2',
    topic: 'django',
    question: 'What does select_related do?',
    code: `MyModel.objects.select_related('foreign_key_field')`,
    options: ['Filters results', 'Performs SQL JOIN to reduce queries', 'Orders results', 'Limits results'],
    correctAnswer: 1,
    explanation: 'select_related performs a SQL JOIN to fetch related objects in a single query.',
    difficulty: 'hard'
  },
  {
    id: 'django-adv-3',
    topic: 'django',
    question: 'What is middleware in Django?',
    code: `MIDDLEWARE = [
    'django.middleware.common.CommonMiddleware',
]`,
    options: ['A database layer', 'A processing layer between request and response', 'A view decorator', 'A template tag'],
    correctAnswer: 1,
    explanation: 'Middleware processes requests before they reach views and responses before they reach the client.',
    difficulty: 'medium'
  },
  {
    id: 'django-adv-4',
    topic: 'django',
    question: 'What does prefetch_related do?',
    code: `MyModel.objects.prefetch_related('many_to_many_field')`,
    options: ['Performs JOIN', 'Performs separate queries and joins in Python', 'Caches results', 'Filters results'],
    correctAnswer: 1,
    explanation: 'prefetch_related performs separate queries for related objects and joins them in Python.',
    difficulty: 'hard'
  },
  {
    id: 'css-adv-1',
    topic: 'css',
    question: 'What is the CSS Grid?',
    code: `display: grid;
grid-template-columns: repeat(3, 1fr);`,
    options: ['A table layout', 'A two-dimensional layout system', 'A flexbox alternative', 'A positioning method'],
    correctAnswer: 1,
    explanation: 'CSS Grid is a powerful two-dimensional layout system for creating complex layouts.',
    difficulty: 'medium'
  },
  {
    id: 'css-adv-2',
    topic: 'css',
    question: 'What is the flexbox gap property?',
    code: `.container {
  display: flex;
  gap: 1rem;
}`,
    options: ['Margin between items', 'Space between flex items', 'Padding inside items', 'Border width'],
    correctAnswer: 1,
    explanation: 'The gap property creates space between flex items without needing margins.',
    difficulty: 'easy'
  },
  {
    id: 'css-adv-3',
    topic: 'css',
    question: 'What does this transform do?',
    code: `transform: rotate(45deg);`,
    options: ['Scales element', 'Rotates element 45 degrees', 'Skews element', 'Translates element'],
    correctAnswer: 1,
    explanation: 'The rotate transform function rotates an element by the specified angle.',
    difficulty: 'easy'
  },
  {
    id: 'css-adv-4',
    topic: 'css',
    question: 'What are CSS custom properties?',
    code: `--primary-color: blue;
color: var(--primary-color);`,
    options: ['Comments', 'CSS variables', 'Preprocessor variables', 'Class names'],
    correctAnswer: 1,
    explanation: 'CSS custom properties (variables) allow you to store and reuse values throughout your stylesheet.',
    difficulty: 'medium'
  },
  {
    id: 'css-adv-5',
    topic: 'css',
    question: 'What is a media query?',
    code: `@media (max-width: 768px) {
  .container { width: 100%; }
}`,
    options: ['A CSS function', 'A responsive design technique', 'A selector', 'An animation'],
    correctAnswer: 1,
    explanation: 'Media queries allow you to apply CSS styles based on device characteristics like screen size.',
    difficulty: 'easy'
  },
  {
    id: 'react-adv-1',
    topic: 'react',
    question: 'What is the useEffect hook?',
    code: `useEffect(() => {
  console.log('Effect ran');
}, []);`,
    options: ['State management', 'Side effects in components', 'Event handling', 'Rendering'],
    correctAnswer: 1,
    explanation: 'useEffect is used for side effects like data fetching, subscriptions, or DOM manipulation.',
    difficulty: 'medium'
  },
  {
    id: 'react-adv-2',
    topic: 'react',
    question: 'What does useMemo do?',
    code: `const result = useMemo(() => {
  return expensiveCalculation(a, b);
}, [a, b]);`,
    options: ['Memoizes function', 'Memoizes computed value', 'Creates state', 'Handles effects'],
    correctAnswer: 1,
    explanation: 'useMemo memoizes a computed value to avoid expensive recalculations on every render.',
    difficulty: 'hard'
  }
]
