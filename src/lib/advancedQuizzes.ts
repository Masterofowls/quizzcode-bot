import { Quiz } from './types'

export const ADVANCED_QUIZZES: Quiz[] = [
  {
    id: 'js-adv-1',
    topic: 'javascript',
    question: 'What will this closure code output?',
    code: `function createCounter() {
  let count = 0;
  return function() {
    return ++count;
  };
}
const c = createCounter();
console.log(c());
console.log(c());`,
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
    options: ['Makes code run faster', 'Handles promises with cleaner syntax', 'Prevents errors', 'Creates parallel requests'],
    correctAnswer: 1,
    explanation: 'async/await provides a cleaner syntax for working with promises, making asynchronous code look more like synchronous code.',
    difficulty: 'medium'
  },
  {
    id: 'ts-adv-1',
    topic: 'typescript',
    question: 'What is a union type?',
    code: `type StringOrNumber = string | number;
function process(value: StringOrNumber) {
  return value;
}`,
    options: ['A type that combines properties', 'A type that can be one of several types', 'A generic type', 'An intersection type'],
    correctAnswer: 1,
    explanation: 'Union types allow a value to be one of several types, using the | operator.',
    difficulty: 'medium'
  },
  {
    id: 'ts-adv-2',
    topic: 'typescript',
    question: 'What does "keyof" do in TypeScript?',
    code: `type Person = { name: string; age: number };
type PersonKeys = keyof Person;`,
    options: ['Creates an array of keys', 'Creates a union type of all property names', 'Gets the first key', 'Validates keys'],
    correctAnswer: 1,
    explanation: 'keyof creates a union type of all property names in a type. PersonKeys would be "name" | "age".',
    difficulty: 'hard'
  },
  {
    id: 'ts-adv-3',
    topic: 'typescript',
    question: 'What is a mapped type?',
    code: `type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};`,
    options: ['A type that maps values', 'A way to transform properties of a type', 'A type alias', 'A generic constraint'],
    correctAnswer: 1,
    explanation: 'Mapped types transform each property in a type. This example makes all properties readonly.',
    difficulty: 'hard'
  },
  {
    id: 'python-adv-1',
    topic: 'python',
    question: 'What is a list comprehension with condition?',
    code: `squares = [x**2 for x in range(10) if x % 2 == 0]`,
    options: ['Creates [0, 4, 16, 36, 64]', 'Creates [0, 1, 4, 9, 16]', 'Throws an error', 'Creates [2, 4, 6, 8]'],
    correctAnswer: 0,
    explanation: 'List comprehension squares only even numbers from 0 to 9, resulting in [0, 4, 16, 36, 64].',
    difficulty: 'medium'
  },
  {
    id: 'python-adv-2',
    topic: 'python',
    question: 'What is a decorator in Python?',
    code: `@log_time
def my_function():
    pass`,
    options: ['A comment', 'A function that modifies another function', 'A class method', 'A module import'],
    correctAnswer: 1,
    explanation: 'Decorators are functions that modify the behavior of other functions or classes.',
    difficulty: 'hard'
  },
  {
    id: 'python-adv-3',
    topic: 'python',
    question: 'What does the "with" statement do?',
    code: `with open('file.txt', 'r') as f:
    content = f.read()`,
    options: ['Opens files permanently', 'Manages resource cleanup automatically', 'Creates a context', 'Locks the file'],
    correctAnswer: 1,
    explanation: 'The "with" statement ensures proper resource management, automatically closing the file even if an error occurs.',
    difficulty: 'medium'
  },
  {
    id: 'django-adv-1',
    topic: 'django',
    question: 'What does select_related optimize?',
    code: `MyModel.objects.select_related('foreign_key_field').all()`,
    options: ['Reduces database queries with JOIN', 'Speeds up sorting', 'Caches results', 'Validates data'],
    correctAnswer: 0,
    explanation: 'select_related performs a SQL JOIN to retrieve related objects in a single query, reducing database hits.',
    difficulty: 'hard'
  },
  {
    id: 'django-adv-2',
    topic: 'django',
    question: 'What is the difference between select_related and prefetch_related?',
    code: `Author.objects.prefetch_related('books').all()`,
    options: ['No difference', 'select_related uses JOIN, prefetch_related uses separate queries', 'prefetch_related is slower', 'select_related works with many-to-many'],
    correctAnswer: 1,
    explanation: 'select_related uses SQL JOINs for foreign keys, while prefetch_related uses separate queries for many-to-many and reverse foreign keys.',
    difficulty: 'hard'
  },
  {
    id: 'django-adv-3',
    topic: 'django',
    question: 'What is a Django signal?',
    code: `from django.db.models.signals import post_save
post_save.connect(my_handler, sender=MyModel)`,
    options: ['A websocket connection', 'A way to execute code when events occur', 'A model method', 'A view decorator'],
    correctAnswer: 1,
    explanation: 'Signals allow decoupled applications to get notified when actions occur elsewhere in the framework.',
    difficulty: 'hard'
  },
  {
    id: 'css-adv-1',
    topic: 'css',
    question: 'What does CSS Grid auto-fit do?',
    code: `grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));`,
    options: ['Fits content automatically', 'Creates responsive columns that wrap', 'Sets fixed width', 'Centers content'],
    correctAnswer: 1,
    explanation: 'auto-fit creates as many columns as fit, collapsing empty tracks and making the grid responsive.',
    difficulty: 'hard'
  },
  {
    id: 'css-adv-2',
    topic: 'css',
    question: 'What is the flexbox gap property?',
    code: `.container {
  display: flex;
  gap: 20px;
}`,
    options: ['Padding between items', 'Space between flex items', 'Margin for container', 'Item width'],
    correctAnswer: 1,
    explanation: 'The gap property creates consistent spacing between flex items without affecting the outer edges.',
    difficulty: 'easy'
  },
  {
    id: 'css-adv-3',
    topic: 'css',
    question: 'What are CSS custom properties (variables)?',
    code: `:root {
  --primary-color: blue;
}
.element {
  color: var(--primary-color);
}`,
    options: ['Comments', 'Reusable values that can be referenced', 'JavaScript variables', 'Deprecated syntax'],
    correctAnswer: 1,
    explanation: 'CSS custom properties (variables) allow you to store and reuse values throughout your stylesheet.',
    difficulty: 'easy'
  },
  {
    id: 'css-adv-4',
    topic: 'css',
    question: 'What is a CSS media query?',
    code: `@media (max-width: 768px) {
  .container { width: 100%; }
}`,
    options: ['A CSS preprocessor', 'Conditional styles based on device characteristics', 'JavaScript integration', 'Animation timing'],
    correctAnswer: 1,
    explanation: 'Media queries allow you to apply styles conditionally based on device characteristics like screen width.',
    difficulty: 'medium'
  },
  {
    id: 'react-adv-1',
    topic: 'react',
    question: 'What is the useEffect cleanup function?',
    code: `useEffect(() => {
  const subscription = subscribe();
  return () => subscription.unsubscribe();
}, []);`,
    options: ['State management', 'Cleanup function that runs on unmount', 'Error handler', 'Optimization'],
    correctAnswer: 1,
    explanation: 'The returned function from useEffect runs when the component unmounts or before the effect runs again.',
    difficulty: 'medium'
  },
  {
    id: 'react-adv-2',
    topic: 'react',
    question: 'What does useMemo do?',
    code: `const value = useMemo(() => {
  return expensiveCalculation(a, b);
}, [a, b]);`,
    options: ['Memoizes function references', 'Memoizes computed values', 'Creates state', 'Handles side effects'],
    correctAnswer: 1,
    explanation: 'useMemo memoizes a computed value, only recalculating when dependencies change.',
    difficulty: 'medium'
  },
  {
    id: 'react-adv-3',
    topic: 'react',
    question: 'What is useCallback used for?',
    code: `const handleClick = useCallback(() => {
  doSomething(a, b);
}, [a, b]);`,
    options: ['Memoizes values', 'Memoizes function references', 'Creates callbacks', 'Handles events'],
    correctAnswer: 1,
    explanation: 'useCallback memoizes function references, preventing unnecessary re-renders when passing callbacks to child components.',
    difficulty: 'hard'
  },
  {
    id: 'react-adv-4',
    topic: 'react',
    question: 'What is the Context API used for?',
    code: `const ThemeContext = React.createContext();
<ThemeContext.Provider value={theme}>`,
    options: ['Local state', 'Global state sharing without prop drilling', 'API calls', 'Routing'],
    correctAnswer: 1,
    explanation: 'Context API allows sharing data across the component tree without passing props through every level.',
    difficulty: 'medium'
  }
]
