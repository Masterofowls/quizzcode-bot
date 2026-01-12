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
  }
}
const c = counter();
console.log(c(), c());`,
    options: ['0 0', '1 2', '1 1', 'undefined undefined'],
    correctAnswer: 1,
    explanation: 'The closure maintains the count variable across multiple calls, so it returns 1, then 2.',
    difficulty: 'hard'
  },
  {
    id: 'js-adv-2',
    topic: 'javascript',
    question: 'What is event bubbling?',
    code: `document.getElementById('parent').addEventListener('click', () => {
  console.log('Parent clicked');
});
document.getElementById('child').addEventListener('click', () => {
  console.log('Child clicked');
});`,
    options: ['Events propagate from child to parent', 'Events propagate from parent to child', 'Events fire simultaneously', 'Events cancel each other'],
    correctAnswer: 0,
    explanation: 'Event bubbling means events propagate from the target element up to its ancestors.',
    difficulty: 'medium'
  },
  {
    id: 'js-adv-3',
    topic: 'javascript',
    question: 'What will this async code log?',
    code: `const p1 = Promise.resolve('First');
const p2 = Promise.resolve('Second');
const result = await Promise.all([p1, p2]);
console.log(result);`,
    options: ['["First"]', '["First", "Second"]', '"First Second"', 'undefined'],
    correctAnswer: 1,
    explanation: 'Promise.all returns an array of all resolved values in order.',
    difficulty: 'medium'
  },
  {
    id: 'js-adv-4',
    topic: 'javascript',
    question: 'What does async/await do?',
    code: `async function fetchData() {
  const data = await fetch('/api');
  return data.json();
}`,
    options: ['Makes code run faster', 'Handles asynchronous code synchronously', 'Creates parallel execution', 'Prevents errors'],
    correctAnswer: 1,
    explanation: 'Async/await allows you to write asynchronous code that looks and behaves like synchronous code.',
    difficulty: 'easy'
  },
  {
    id: 'js-adv-5',
    topic: 'javascript',
    question: 'What is object destructuring doing here?',
    code: `const obj = { a: 1, b: 2, c: 3 };
const { a, ...rest } = obj;
console.log(rest);`,
    options: ['{ a: 1 }', '{ b: 2, c: 3 }', '{ a: 1, b: 2, c: 3 }', 'undefined'],
    correctAnswer: 1,
    explanation: 'Object rest syntax collects the remaining properties into a new object after extracting specified properties.',
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
    explanation: 'Union types allow a value to be one of several types, separated by the | operator.',
    difficulty: 'easy'
  },
  {
    id: 'ts-adv-2',
    topic: 'typescript',
    question: 'What does the never type represent?',
    code: `function throwError(message: string): never {
  throw new Error(message);
}`,
    options: ['A nullable value', 'A value that never occurs', 'An optional parameter', 'A void return'],
    correctAnswer: 1,
    explanation: 'The never type represents values that never occur, typically used for functions that always throw or never return.',
    difficulty: 'hard'
  },
  {
    id: 'ts-adv-3',
    topic: 'typescript',
    question: 'What is type narrowing in TypeScript?',
    code: `function print(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  }
}`,
    options: ['Converting types', 'Refining types based on conditions', 'Making types more generic', 'Type inference'],
    correctAnswer: 1,
    explanation: 'Type narrowing refines a union type to a more specific type based on conditional checks.',
    difficulty: 'hard'
  },
  {
    id: 'ts-adv-4',
    topic: 'typescript',
    question: 'What are generics in TypeScript?',
    code: `function identity<T>(arg: T): T {
  return arg;
}
const result = identity<string>("hello");`,
    options: ['Built-in types', 'Type variables for reusable components', 'Type aliases', 'Interfaces'],
    correctAnswer: 1,
    explanation: 'Generics allow creating reusable components that work with multiple types while maintaining type safety.',
    difficulty: 'medium'
  },
  {
    id: 'ts-adv-5',
    topic: 'typescript',
    question: 'What are utility types in TypeScript?',
    code: `type User = { name: string; age: number; };
type PartialUser = Partial<User>;`,
    options: ['Custom types', 'Built-in type transformations', 'Type guards', 'Decorators'],
    correctAnswer: 1,
    explanation: 'Utility types are built-in TypeScript types that transform existing types (e.g., Partial, Pick, Omit).',
    difficulty: 'medium'
  },
  {
    id: 'react-adv-1',
    topic: 'react',
    question: 'What does useEffect do?',
    code: `useEffect(() => {
  console.log('Component mounted');
}, []);`,
    options: ['Manages state', 'Performs side effects', 'Creates refs', 'Memoizes values'],
    correctAnswer: 1,
    explanation: 'useEffect handles side effects in functional components, like data fetching or subscriptions.',
    difficulty: 'medium'
  },
  {
    id: 'react-adv-2',
    topic: 'react',
    question: 'What is useMemo used for?',
    code: `const memoized = useMemo(() => {
  return expensiveCalculation(a, b);
}, [a, b]);`,
    options: ['Side effects', 'Memoizing expensive computations', 'State management', 'Event handling'],
    correctAnswer: 1,
    explanation: 'useMemo memoizes the result of expensive calculations to avoid recomputing on every render.',
    difficulty: 'medium'
  },
  {
    id: 'react-adv-3',
    topic: 'react',
    question: 'What does useCallback do?',
    code: `const handleClick = useCallback(() => {
  console.log(a, b);
}, [a, b]);`,
    options: ['Memoizes values', 'Memoizes callback functions', 'Manages state', 'Performs effects'],
    correctAnswer: 1,
    explanation: 'useCallback returns a memoized callback function that only changes when dependencies change.',
    difficulty: 'medium'
  },
  {
    id: 'react-adv-4',
    topic: 'react',
    question: 'What is React.memo?',
    code: `const Child = React.memo(({ name }) => {
  return <div>{name}</div>;
});
function Parent() {
  return (
    <div>
      <Child name="John" />
    </div>
  );
}`,
    options: ['State management', 'Component memoization', 'Side effect handling', 'Context API'],
    correctAnswer: 1,
    explanation: 'React.memo is a higher-order component that prevents unnecessary re-renders by memoizing the component.',
    difficulty: 'hard'
  },
  {
    id: 'react-adv-5',
    topic: 'react',
    question: 'What is useReducer useful for?',
    code: `const [state, dispatch] = useReducer(reducer, initialState);`,
    options: ['Fetching data', 'Complex state logic', 'Side effects', 'Refs'],
    correctAnswer: 1,
    explanation: 'useReducer is useful for managing complex state logic with multiple sub-values or actions.',
    difficulty: 'medium'
  },
  {
    id: 'python-adv-1',
    topic: 'python',
    question: 'What is a decorator in Python?',
    code: `@cache
def slow_function():
    return expensive_operation()`,
    options: ['A class method', 'A function that wraps another function', 'A type hint', 'An import statement'],
    correctAnswer: 1,
    explanation: 'Decorators are functions that wrap other functions to extend or modify their behavior.',
    difficulty: 'hard'
  },
  {
    id: 'python-adv-2',
    topic: 'python',
    question: 'What is a generator in Python?',
    code: `def count_up_to(n):
    i = 0
    while i < n:
        yield i
        i += 1`,
    options: ['A random number generator', 'A function that yields values one at a time', 'A list comprehension', 'A class constructor'],
    correctAnswer: 1,
    explanation: 'Generators are functions that use yield to produce a sequence of values lazily, one at a time.',
    difficulty: 'hard'
  },
  {
    id: 'python-adv-3',
    topic: 'python',
    question: 'What does the with statement do?',
    code: `with open('file.txt', 'r') as f:
    content = f.read()`,
    options: ['Creates a loop', 'Manages context and resource cleanup', 'Defines a function', 'Imports a module'],
    correctAnswer: 1,
    explanation: 'The with statement ensures proper resource management by automatically handling setup and cleanup.',
    difficulty: 'medium'
  },
  {
    id: 'python-adv-4',
    topic: 'python',
    question: 'What are list comprehensions?',
    code: `squares = [x**2 for x in range(10)]`,
    options: ['A loop', 'A concise way to create lists', 'A function', 'A class'],
    correctAnswer: 1,
    explanation: 'List comprehensions provide a concise syntax for creating lists based on existing iterables.',
    difficulty: 'easy'
  },
  {
    id: 'python-adv-5',
    topic: 'python',
    question: 'What does list slicing do?',
    code: `nums = [0, 1, 2, 3, 4]
result = nums[1:4]`,
    options: ['[0, 1, 2]', '[1, 2, 3]', '[1, 2, 3, 4]', '[2, 3, 4]'],
    correctAnswer: 1,
    explanation: 'Slicing [1:4] returns elements from index 1 up to (but not including) index 4.',
    difficulty: 'easy'
  },
  {
    id: 'django-adv-1',
    topic: 'django',
    question: 'What is a Django signal?',
    code: `from django.db.models.signals import post_save
@receiver(post_save, sender=User)
def create_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)`,
    options: ['A view function', 'A notification system for model events', 'A URL pattern', 'A template tag'],
    correctAnswer: 1,
    explanation: 'Signals allow decoupled applications to get notified when certain actions occur in Django.',
    difficulty: 'hard'
  },
  {
    id: 'django-adv-2',
    topic: 'django',
    question: 'What is a Django middleware?',
    code: `class CustomMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response`,
    options: ['A database layer', 'Code that processes requests/responses globally', 'A template engine', 'A form validator'],
    correctAnswer: 1,
    explanation: 'Middleware is a framework of hooks into Django\'s request/response processing.',
    difficulty: 'medium'
  },
  {
    id: 'django-adv-3',
    topic: 'django',
    question: 'What is a Django manager?',
    code: `User.objects.filter(is_active=True)`,
    options: ['A database connection', 'An interface for database queries', 'A template system', 'A URL router'],
    correctAnswer: 1,
    explanation: 'Managers provide the interface for database query operations on Django models.',
    difficulty: 'medium'
  },
  {
    id: 'django-adv-4',
    topic: 'django',
    question: 'What does select_related do?',
    code: `Book.objects.select_related('author').all()`,
    options: ['Filters results', 'Performs SQL join for efficiency', 'Orders results', 'Limits results'],
    correctAnswer: 1,
    explanation: 'select_related performs a SQL join to fetch related objects in a single query, reducing database hits.',
    difficulty: 'hard'
  },
  {
    id: 'django-adv-5',
    topic: 'django',
    question: 'What is Django ORM?',
    code: `user = User.objects.get(id=1)`,
    options: ['A template language', 'Object-Relational Mapping for databases', 'A URL router', 'A web server'],
    correctAnswer: 1,
    explanation: 'Django ORM provides a high-level abstraction for database operations using Python objects.',
    difficulty: 'medium'
  },
  {
    id: 'css-adv-1',
    topic: 'css',
    question: 'What does CSS Grid do?',
    code: `grid-template-columns: repeat(3, 1fr);`,
    options: ['Creates a table', 'Creates a two-dimensional layout system', 'Aligns text', 'Adds borders'],
    correctAnswer: 1,
    explanation: 'CSS Grid is a powerful layout system for creating two-dimensional layouts with rows and columns.',
    difficulty: 'medium'
  },
  {
    id: 'css-adv-2',
    topic: 'css',
    question: 'What is Flexbox gap property?',
    code: `.container {
  display: flex;
  gap: 20px;
}`,
    options: ['Border spacing', 'Space between flex items', 'Padding', 'Margin'],
    correctAnswer: 1,
    explanation: 'The gap property creates space between flex items without using margins.',
    difficulty: 'medium'
  },
  {
    id: 'css-adv-3',
    topic: 'css',
    question: 'What are CSS custom properties?',
    code: `:root {
  --main-color: blue;
}
.element {
  color: var(--main-color);
}`,
    options: ['Browser defaults', 'CSS variables for reusable values', 'Media queries', 'Pseudo-elements'],
    correctAnswer: 1,
    explanation: 'CSS custom properties (variables) allow you to store and reuse values throughout your stylesheet.',
    difficulty: 'medium'
  },
  {
    id: 'css-adv-4',
    topic: 'css',
    question: 'What is a CSS media query?',
    code: `@media (max-width: 768px) {
  .sidebar {
    display: none;
  }
}`,
    options: ['A JavaScript function', 'Conditional CSS based on device characteristics', 'A CSS animation', 'A color value'],
    correctAnswer: 1,
    explanation: 'Media queries allow applying CSS conditionally based on device characteristics like screen width.',
    difficulty: 'easy'
  },
  {
    id: 'css-adv-5',
    topic: 'css',
    question: 'What does transform do?',
    code: `.box {
  transform: rotate(45deg);
}`,
    options: ['Changes color', 'Applies visual transformations', 'Adds borders', 'Changes font'],
    correctAnswer: 1,
    explanation: 'The transform property applies 2D or 3D transformations like rotate, scale, translate, and skew.',
    difficulty: 'medium'
  }
]
