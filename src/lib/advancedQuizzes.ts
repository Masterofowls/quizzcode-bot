import { Quiz } from './types'

export const ADVANCED_QUIZZES: Quiz[] = [
  {
    id: 'js-adv-1',
    topic: 'javascript',
    question: 'What will this closure code output?',
    code: `function createCounter() {
  let count = 0;
  return () => ++count;
}
const counter = createCounter();
console.log(counter(), counter());`,
    options: ['0, 0', '1, 1', '1, 2', 'undefined, undefined'],
    correctAnswer: 2,
    explanation: 'The closure maintains access to the count variable, incrementing it with each call. First call returns 1, second returns 2.',
    difficulty: 'hard'
  },
  {
    id: 'js-adv-2',
    topic: 'javascript',
    question: 'What is event delegation in JavaScript?',
    code: `document.getElementById('parent').addEventListener('click', (e) => {
  if (e.target.matches('.child')) {
    console.log('Child clicked');
  }
});`,
    options: ['Adding events to all children', 'Using a parent listener to handle child events', 'Preventing event bubbling', 'Creating custom events'],
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
    id: 'js-adv-5',
    topic: 'javascript',
    question: 'What does the async/await syntax do?',
    code: `async function fetchData() {
  const response = await fetch('/api');
  return response.json();
}`,
    options: ['Creates a promise', 'Makes asynchronous code look synchronous', 'Runs code in parallel', 'Caches API responses'],
    correctAnswer: 1,
    explanation: 'async/await is syntactic sugar over promises that makes asynchronous code easier to read and write.',
    difficulty: 'medium'
  },
  {
    id: 'ts-adv-1',
    topic: 'typescript',
    question: 'What is a union type in TypeScript?',
    code: `type StringOrNumber = string | number;
let value: StringOrNumber = "hello";
value = 42;`,
    options: ['A type that combines properties', 'A type that can be one of several types', 'An enum', 'A generic type'],
    correctAnswer: 1,
    explanation: 'Union types allow a variable to hold values of different specified types using the | operator.',
    difficulty: 'medium'
  },
  {
    id: 'ts-adv-2',
    topic: 'typescript',
    question: 'What does the "never" type represent?',
    code: `function throwError(msg: string): never {
  throw new Error(msg);
}`,
    options: ['A null value', 'A value that never occurs', 'An undefined value', 'An empty type'],
    correctAnswer: 1,
    explanation: 'The never type represents values that never occur, like functions that always throw or never return.',
    difficulty: 'hard'
  },
  {
    id: 'ts-adv-3',
    topic: 'typescript',
    question: 'What is type narrowing in TypeScript?',
    code: `function process(value: string | number) {
  if (typeof value === "string") {
    return value.toUpperCase();
  }
  return value.toFixed(2);
}`,
    options: ['Type conversion', 'Refining types within conditional blocks', 'Type casting', 'Type inference'],
    correctAnswer: 1,
    explanation: 'Type narrowing is when TypeScript refines a type to a more specific type based on runtime checks.',
    difficulty: 'hard'
  },
  {
    id: 'react-adv-1',
    topic: 'react',
    question: 'What is the useEffect cleanup function?',
    code: `useEffect(() => {
  const subscription = subscribe();
  return () => subscription.unsubscribe();
}, []);`,
    options: ['Error handler', 'Cleanup function that runs on unmount', 'State initializer', 'Async function'],
    correctAnswer: 1,
    explanation: 'The function returned from useEffect runs when the component unmounts or before the effect runs again.',
    difficulty: 'medium'
  },
  {
    id: 'react-adv-2',
    topic: 'react',
    question: 'What does useMemo do?',
    code: `const value = useMemo(() => {
  return expensiveCalculation(a, b);
}, [a, b]);`,
    options: ['Memoizes a callback', 'Memoizes a computed value', 'Creates state', 'Handles side effects'],
    correctAnswer: 1,
    explanation: 'useMemo memoizes the result of a computation and only recalculates when dependencies change.',
    difficulty: 'medium'
  },
  {
    id: 'react-adv-3',
    topic: 'react',
    question: 'What does useCallback do?',
    code: `const handleClick = useCallback(() => {
  doSomething(a, b);
}, [a, b]);`,
    options: ['Memoizes a value', 'Memoizes a function', 'Creates an effect', 'Handles events'],
    correctAnswer: 1,
    explanation: 'useCallback returns a memoized version of the callback that only changes if dependencies change.',
    difficulty: 'medium'
  },
  {
    id: 'react-adv-4',
    topic: 'react',
    question: 'What is the Context API used for?',
    code: `const ThemeContext = React.createContext('light');`,
    options: ['Local state', 'Global state sharing without prop drilling', 'API calls', 'Routing'],
    correctAnswer: 1,
    explanation: 'Context API allows sharing state across the component tree without passing props through every level.',
    difficulty: 'medium'
  },
  {
    id: 'python-adv-1',
    topic: 'python',
    question: 'What is a decorator in Python?',
    code: `@timer
def process():
    pass`,
    options: ['A class method', 'A function that modifies another function', 'A comment', 'A type hint'],
    correctAnswer: 1,
    explanation: 'Decorators are functions that modify the behavior of other functions or classes using the @ syntax.',
    difficulty: 'hard'
  },
  {
    id: 'python-adv-2',
    topic: 'python',
    question: 'What does the "with" statement do?',
    code: `with open('file.txt', 'r') as f:
    content = f.read()`,
    options: ['Imports a module', 'Creates a context manager for resource management', 'Defines a function', 'Catches exceptions'],
    correctAnswer: 1,
    explanation: 'The with statement creates a context manager that ensures proper resource cleanup (like closing files).',
    difficulty: 'medium'
  },
  {
    id: 'python-adv-3',
    topic: 'python',
    question: 'What is list slicing in Python?',
    code: `nums = [0, 1, 2, 3, 4, 5]
print(nums[1:4])`,
    options: ['[0, 1, 2, 3]', '[1, 2, 3]', '[1, 2, 3, 4]', '[2, 3, 4]'],
    correctAnswer: 1,
    explanation: 'Slicing [1:4] returns elements from index 1 up to (but not including) index 4: [1, 2, 3].',
    difficulty: 'easy'
  },
  {
    id: 'django-adv-1',
    topic: 'django',
    question: 'What does select_related do in Django ORM?',
    code: `MyModel.objects.select_related('foreign_key')`,
    options: ['Filters results', 'Performs a SQL join to reduce queries', 'Orders results', 'Limits results'],
    correctAnswer: 1,
    explanation: 'select_related performs a SQL join to fetch related objects in a single query, reducing database hits.',
    difficulty: 'hard'
  },
  {
    id: 'django-adv-2',
    topic: 'django',
    question: 'What is the purpose of Django signals?',
    code: `@receiver(post_save, sender=User)
def create_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)`,
    options: ['Validate data', 'Allow decoupled applications to get notified of actions', 'Handle HTTP requests', 'Define URLs'],
    correctAnswer: 1,
    explanation: 'Signals allow certain senders to notify receivers when an action has occurred, enabling decoupled code.',
    difficulty: 'hard'
  },
  {
    id: 'django-adv-3',
    topic: 'django',
    question: 'What is Django middleware?',
    code: `from django.utils.deprecation import MiddlewareMixin`,
    options: ['A database layer', 'A hook into request/response processing', 'A template engine', 'A URL router'],
    correctAnswer: 1,
    explanation: 'Middleware is a framework of hooks into Django request/response processing for modifying input or output.',
    difficulty: 'medium'
  },
  {
    id: 'css-adv-1',
    topic: 'css',
    question: 'What does CSS Grid auto-fit do?',
    code: `grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));`,
    options: ['Fits content automatically', 'Creates responsive columns that collapse empty tracks', 'Centers grid items', 'Aligns items'],
    correctAnswer: 1,
    explanation: 'auto-fit creates as many columns as fit, then collapses empty tracks for a responsive layout.',
    difficulty: 'medium'
  },
  {
    id: 'css-adv-2',
    topic: 'css',
    question: 'What is the flexbox gap property?',
    code: `.container {
  display: flex;
  gap: 20px;
}`,
    options: ['Padding between items', 'Space between flex items', 'Margin outside container', 'Border width'],
    correctAnswer: 1,
    explanation: 'The gap property sets spacing between flex items without affecting outer edges.',
    difficulty: 'easy'
  },
  {
    id: 'css-adv-3',
    topic: 'css',
    question: 'What are CSS custom properties?',
    code: `:root {
  --main-color: #06c;
}
.element {
  color: var(--main-color);
}`,
    options: ['Comments', 'Reusable values that can be referenced', 'JavaScript variables', 'Deprecated syntax'],
    correctAnswer: 1,
    explanation: 'CSS custom properties (variables) allow defining reusable values that can be referenced throughout the stylesheet.',
    difficulty: 'easy'
  },
  {
    id: 'css-adv-4',
    topic: 'css',
    question: 'What is a CSS media query?',
    code: `@media (max-width: 768px) {
  .sidebar { display: none; }
}`,
    options: ['A CSS preprocessor', 'Conditional styles based on device characteristics', 'A JavaScript function', 'An animation'],
    correctAnswer: 1,
    explanation: 'Media queries apply CSS styles conditionally based on device characteristics like screen width.',
    difficulty: 'easy'
  }
]
