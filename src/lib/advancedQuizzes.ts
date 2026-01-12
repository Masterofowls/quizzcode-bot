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
  }
}
const counter = createCounter();
console.log(counter());
console.log(counter());`,
    options: ['0, 0', '1, 1', '1, 2', 'undefined, undefined'],
    correctAnswer: 2,
    explanation: 'The closure maintains access to the count variable, which persists between calls and increments each time.',
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
    question: 'What is hoisting?',
    code: `console.log(x);
var x = 5;`,
    options: ['Error', 'undefined', '5', 'null'],
    correctAnswer: 1,
    explanation: 'Variable declarations are hoisted to the top, but not their assignments. So x is declared but undefined.',
    difficulty: 'medium'
  },
  {
    id: 'js-adv-5',
    topic: 'javascript',
    question: 'What does let do in a for loop?',
    code: `for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}`,
    options: ['Logs 0, 1, 2', 'Logs 3, 3, 3', 'Logs 2, 2, 2', 'Error'],
    correctAnswer: 1,
    explanation: 'var creates a single binding shared across all iterations. Using let would create a new binding for each iteration.',
    difficulty: 'medium'
  },
  {
    id: 'js-adv-6',
    topic: 'javascript',
    question: 'What is destructuring?',
    code: `const obj = { a: 1, b: 2 };
const { a, b } = obj;
console.log(a);`,
    options: ['undefined', '1', 'obj.a', 'Error'],
    correctAnswer: 1,
    explanation: 'Destructuring extracts properties from objects into variables.',
    difficulty: 'easy'
  },
  {
    id: 'ts-adv-1',
    topic: 'typescript',
    question: 'What are union types?',
    code: `type StringOrNumber = string | number;
let value: StringOrNumber = "hello";`,
    options: ['Type intersection', 'Type union', 'Type alias', 'Type assertion'],
    correctAnswer: 1,
    explanation: 'Union types allow a value to be one of several types using the | operator.',
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
    options: ['Type casting', 'Refining types based on conditions', 'Type widening', 'Type assertion'],
    correctAnswer: 1,
    explanation: 'Type narrowing is when TypeScript refines types based on control flow analysis.',
    difficulty: 'medium'
  },
  {
    id: 'ts-adv-3',
    topic: 'typescript',
    question: 'What does the keyof operator do?',
    code: `type User = { name: string; age: number };
type UserKeys = keyof User;`,
    options: ['Gets object values', 'Gets property names as union type', 'Creates new type', 'Checks key existence'],
    correctAnswer: 1,
    explanation: 'keyof creates a union type of all property names in an object type.',
    difficulty: 'medium'
  },
  {
    id: 'ts-adv-4',
    topic: 'typescript',
    question: 'What are generics?',
    code: `function identity<T>(arg: T): T {
  return arg;
}`,
    options: ['Type inference', 'Reusable type parameters', 'Type guards', 'Type assertions'],
    correctAnswer: 1,
    explanation: 'Generics allow you to write reusable code that works with multiple types.',
    difficulty: 'medium'
  },
  {
    id: 'ts-adv-5',
    topic: 'typescript',
    question: 'What does Pick do?',
    code: `type User = { name: string; age: number; email: string };
type UserPreview = Pick<User, 'name' | 'age'>;`,
    options: ['Removes properties', 'Selects specific properties', 'Adds properties', 'Makes properties optional'],
    correctAnswer: 1,
    explanation: 'Pick<T, K> constructs a type by picking specific properties from another type.',
    difficulty: 'medium'
  },
  {
    id: 'react-adv-1',
    topic: 'react',
    question: 'What does useCallback do?',
    code: `const handleClick = useCallback(() => {
  console.log(count);
}, [count]);`,
    options: ['Memoizes values', 'Memoizes functions', 'Creates effects', 'Manages state'],
    correctAnswer: 1,
    explanation: 'useCallback returns a memoized version of the callback that only changes if dependencies change.',
    difficulty: 'medium'
  },
  {
    id: 'react-adv-2',
    topic: 'react',
    question: 'What is the purpose of useMemo?',
    code: `const value = useMemo(() => {
  return computeExpensiveValue(a, b);
}, [a, b]);`,
    options: ['Memoizes functions', 'Memoizes computed values', 'Creates side effects', 'Manages state'],
    correctAnswer: 1,
    explanation: 'useMemo memoizes the result of a computation and only recalculates when dependencies change.',
    difficulty: 'medium'
  },
  {
    id: 'react-adv-3',
    topic: 'react',
    question: 'What does useRef do?',
    code: `const inputRef = useRef(null);
inputRef.current.focus();`,
    options: ['Creates state', 'Creates mutable reference', 'Creates effect', 'Creates context'],
    correctAnswer: 1,
    explanation: 'useRef creates a mutable reference that persists across renders without causing re-renders.',
    difficulty: 'easy'
  },
  {
    id: 'python-adv-1',
    topic: 'python',
    question: 'What is a generator?',
    code: `def count_up_to(n):
    i = 1
    while i <= n:
        yield i
        i += 1`,
    options: ['Creates lists', 'Produces values lazily with yield', 'Creates dictionaries', 'Handles exceptions'],
    correctAnswer: 1,
    explanation: 'Generators are functions that use yield to produce values lazily, one at a time.',
    difficulty: 'medium'
  },
  {
    id: 'python-adv-2',
    topic: 'python',
    question: 'What is list comprehension?',
    code: `squares = [x**2 for x in range(10)]`,
    options: ['Loop syntax', 'Concise way to create lists', 'Function definition', 'Class method'],
    correctAnswer: 1,
    explanation: 'List comprehensions provide a concise way to create lists based on existing iterables.',
    difficulty: 'easy'
  },
  {
    id: 'python-adv-3',
    topic: 'python',
    question: 'What does *args do?',
    code: `def func(*args):
    print(args)`,
    options: ['Passes single argument', 'Accepts variable arguments as tuple', 'Creates list', 'Unpacks dictionary'],
    correctAnswer: 1,
    explanation: '*args allows a function to accept any number of positional arguments as a tuple.',
    difficulty: 'medium'
  },
  {
    id: 'django-adv-1',
    topic: 'django',
    question: 'What is a QuerySet?',
    code: `User.objects.filter(age__gte=18)`,
    options: ['Database table', 'Lazy database query', 'Model instance', 'SQL string'],
    correctAnswer: 1,
    explanation: 'QuerySets are lazy - they only hit the database when evaluated.',
    difficulty: 'medium'
  },
  {
    id: 'django-adv-2',
    topic: 'django',
    question: 'What does select_related do?',
    code: `Book.objects.select_related('author')`,
    options: ['Filters results', 'Performs SQL JOIN for ForeignKey', 'Creates new relation', 'Deletes relation'],
    correctAnswer: 1,
    explanation: 'select_related performs a SQL JOIN to reduce database queries for ForeignKey relationships.',
    difficulty: 'hard'
  },
  {
    id: 'django-adv-3',
    topic: 'django',
    question: 'What is a migration?',
    code: `python manage.py makemigrations`,
    options: ['Database backup', 'Version control for database schema', 'Data export', 'Server deployment'],
    correctAnswer: 1,
    explanation: 'Migrations are version control for your database schema, tracking changes over time.',
    difficulty: 'easy'
  },
  {
    id: 'django-adv-4',
    topic: 'django',
    question: 'What are signals?',
    code: `post_save.connect(handler, sender=User)`,
    options: ['HTTP requests', 'Event notifications in Django', 'Database queries', 'Template tags'],
    correctAnswer: 1,
    explanation: 'Signals allow decoupled applications to get notified when actions occur elsewhere in the framework.',
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
