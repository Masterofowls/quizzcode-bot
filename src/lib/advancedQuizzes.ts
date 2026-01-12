import { Quiz } from './types'

export const ADVANCED_QUIZZES: Quiz[] = [
  {
    id: 'js-adv-1',
    topic: 'javascript',
    question: 'What will this closure return?',
    code: `function counter() {
  let count = 0;
  return function() {
    return ++count;
  };
}
const c = counter();
console.log(c(), c());`,
    options: ['0, 0', '1, 1', '1, 2', 'undefined, undefined'],
    correctAnswer: 2,
    explanation: 'Closures maintain access to their outer scope. Each call increments the same count variable.',
    difficulty: 'medium'
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
    question: 'What does Promise.all do?',
    code: `const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);
const result = await Promise.all([p1, p2]);`,
    options: ['Returns first resolved promise', 'Returns all resolved promises as array', 'Returns last promise', 'Runs promises sequentially'],
    correctAnswer: 1,
    explanation: 'Promise.all waits for all promises to resolve and returns an array of all results.',
    difficulty: 'medium'
  },
  {
    id: 'js-adv-4',
    topic: 'javascript',
    question: 'What is the purpose of async/await?',
    code: `async function fetchData() {
  const response = await fetch('/api');
  return response.json();
}`,
    options: ['Makes code run faster', 'Handles asynchronous code synchronously', 'Creates parallel execution', 'Prevents errors'],
    correctAnswer: 1,
    explanation: 'Async/await provides a way to write asynchronous code that looks and behaves like synchronous code.',
    difficulty: 'medium'
  },
  {
    id: 'js-adv-5',
    topic: 'javascript',
    question: 'What does Object.freeze do?',
    code: `const obj = Object.freeze({ a: 1 });
obj.a = 2;
console.log(obj.a);`,
    options: ['2', '1', 'undefined', 'Error'],
    correctAnswer: 1,
    explanation: 'Object.freeze prevents modifications to an object. The assignment silently fails in non-strict mode.',
    difficulty: 'hard'
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
    id: 'ts-adv-4',
    topic: 'typescript',
    question: 'What is a type guard?',
    code: `function isString(value: unknown): value is string {
  return typeof value === 'string';
}`,
    options: ['A security feature', 'A function that narrows types', 'A type validator', 'A compiler directive'],
    correctAnswer: 1,
    explanation: 'Type guards are functions that help TypeScript narrow down types within conditional blocks.',
    difficulty: 'hard'
  },
  {
    id: 'ts-adv-5',
    topic: 'typescript',
    question: 'What are utility types in TypeScript?',
    code: `type User = { name: string; age: number };
type PartialUser = Partial<User>;`,
    options: ['Custom types', 'Built-in type transformations', 'Type aliases', 'Generic constraints'],
    correctAnswer: 1,
    explanation: 'Utility types like Partial, Pick, Omit are built-in types that transform other types.',
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
    question: 'What is React Context used for?',
    code: `const ThemeContext = React.createContext('light');
function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Child />
    </ThemeContext.Provider>
  );
}`,
    options: ['State management', 'Passing data without props drilling', 'Routing', 'Side effects'],
    correctAnswer: 1,
    explanation: 'Context provides a way to pass data through the component tree without manually passing props.',
    difficulty: 'medium'
  },
  {
    id: 'react-adv-5',
    topic: 'react',
    question: 'What is useReducer used for?',
    code: `const [state, dispatch] = useReducer(reducer, initialState);`,
    options: ['Fetching data', 'Complex state logic', 'Memoization', 'Refs'],
    correctAnswer: 1,
    explanation: 'useReducer is useful for managing complex state logic with multiple sub-values or actions.',
    difficulty: 'hard'
  },
  {
    id: 'python-adv-1',
    topic: 'python',
    question: 'What are decorators in Python?',
    code: `@timer
def slow_function():
    time.sleep(1)`,
    options: ['Comments', 'Functions that modify other functions', 'Class methods', 'Type hints'],
    correctAnswer: 1,
    explanation: 'Decorators are functions that wrap other functions to extend or modify their behavior.',
    difficulty: 'hard'
  },
  {
    id: 'python-adv-2',
    topic: 'python',
    question: 'What is a generator in Python?',
    code: `def count_up_to(n):
    i = 1
    while i <= n:
        yield i
        i += 1`,
    options: ['A random number generator', 'A function that yields values lazily', 'A class constructor', 'A list comprehension'],
    correctAnswer: 1,
    explanation: 'Generators use yield to produce values one at a time, saving memory for large sequences.',
    difficulty: 'hard'
  },
  {
    id: 'python-adv-3',
    topic: 'python',
    question: 'What does the with statement do?',
    code: `with open('file.txt') as f:
    content = f.read()`,
    options: ['Opens files faster', 'Ensures proper resource cleanup', 'Creates a scope', 'Handles exceptions'],
    correctAnswer: 1,
    explanation: 'The with statement ensures resources are properly cleaned up, even if exceptions occur.',
    difficulty: 'medium'
  },
  {
    id: 'python-adv-4',
    topic: 'python',
    question: 'What are context managers?',
    code: `class MyContext:
    def __enter__(self):
        return self
    def __exit__(self, *args):
        pass`,
    options: ['Threading tools', 'Objects that manage resources in with statements', 'Decorators', 'Metaclasses'],
    correctAnswer: 1,
    explanation: 'Context managers implement __enter__ and __exit__ methods for resource management.',
    difficulty: 'hard'
  },
  {
    id: 'python-adv-5',
    topic: 'python',
    question: 'What is list slicing?',
    code: `nums = [0, 1, 2, 3, 4]
result = nums[1:4]`,
    options: ['[0, 1, 2, 3]', '[1, 2, 3]', '[1, 2, 3, 4]', '[2, 3, 4]'],
    correctAnswer: 1,
    explanation: 'Slicing [1:4] returns elements from index 1 up to (but not including) index 4.',
    difficulty: 'easy'
  },
  {
    id: 'django-adv-1',
    topic: 'django',
    question: 'What are Django signals?',
    code: `@receiver(post_save, sender=User)
def create_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)`,
    options: ['Validate data', 'Allow decoupled applications to get notified of actions', 'Handle HTTP requests', 'Define URL patterns'],
    correctAnswer: 1,
    explanation: 'Signals allow certain senders to notify receivers when actions occur, enabling decoupled code.',
    difficulty: 'hard'
  },
  {
    id: 'django-adv-2',
    topic: 'django',
    question: 'What is a Django queryset?',
    code: `users = User.objects.filter(is_active=True)`,
    options: ['A database', 'A lazy-evaluated database query', 'An array', 'A model instance'],
    correctAnswer: 1,
    explanation: 'QuerySets are lazy - they only hit the database when evaluated (iterated, sliced, etc).',
    difficulty: 'medium'
  },
  {
    id: 'django-adv-3',
    topic: 'django',
    question: 'What is Django middleware?',
    code: `MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.middleware.common.CommonMiddleware',
]`,
    options: ['A database layer', 'Components that process requests/responses globally', 'URL routers', 'Template engines'],
    correctAnswer: 1,
    explanation: 'Middleware processes requests before they reach views and responses before they reach the client.',
    difficulty: 'medium'
  },
  {
    id: 'django-adv-4',
    topic: 'django',
    question: 'What does select_related do?',
    code: `posts = Post.objects.select_related('author')`,
    options: ['Filters results', 'Performs a SQL join for related objects', 'Orders results', 'Counts results'],
    correctAnswer: 1,
    explanation: 'select_related performs a SQL join to fetch related objects in a single query, reducing database hits.',
    difficulty: 'hard'
  },
  {
    id: 'django-adv-5',
    topic: 'django',
    question: 'What is Django REST framework serialization?',
    code: `class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email']`,
    options: ['Encrypts data', 'Converts complex types to native Python types', 'Validates forms', 'Handles authentication'],
    correctAnswer: 1,
    explanation: 'Serializers convert complex types like querysets and model instances to JSON and vice versa.',
    difficulty: 'medium'
  },
  {
    id: 'css-adv-1',
    topic: 'css',
    question: 'What does CSS Grid "fr" unit do?',
    code: `grid-template-columns: 1fr 2fr 1fr;`,
    options: ['Fits content automatically', 'Creates flexible track sizes based on available space', 'Fixed pixel size', 'Percentage of container'],
    correctAnswer: 1,
    explanation: 'The fr unit represents a fraction of available space in the grid container.',
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
    options: ['Padding between items', 'Space between flex items', 'Margin of container', 'Border width'],
    correctAnswer: 1,
    explanation: 'The gap property sets spacing between flex or grid items without using margins.',
    difficulty: 'easy'
  },
  {
    id: 'css-adv-3',
    topic: 'css',
    question: 'What are CSS custom properties?',
    code: `:root {
  --main-color: #3498db;
}
.element {
  color: var(--main-color);
}`,
    options: ['Comments', 'Variables that can be reused', 'Functions', 'Mixins'],
    correctAnswer: 1,
    explanation: 'CSS custom properties (variables) allow defining reusable values that can be referenced throughout the stylesheet.',
    difficulty: 'medium'
  },
  {
    id: 'css-adv-4',
    topic: 'css',
    question: 'What is a media query?',
    code: `@media (max-width: 768px) {
  .sidebar {
    display: none;
  }
}`,
    options: ['Database query', 'Conditional CSS based on device characteristics', 'JavaScript event', 'HTML attribute'],
    correctAnswer: 1,
    explanation: 'Media queries apply CSS rules conditionally based on device features like screen width.',
    difficulty: 'easy'
  },
  {
    id: 'css-adv-5',
    topic: 'css',
    question: 'What does CSS transform do?',
    code: `.box {
  transform: rotate(45deg) scale(1.5);
}`,
    options: ['Changes color', 'Applies 2D/3D transformations', 'Animates elements', 'Changes layout'],
    correctAnswer: 1,
    explanation: 'Transform applies visual transformations like rotate, scale, translate, and skew to elements.',
    difficulty: 'medium'
  }
]
