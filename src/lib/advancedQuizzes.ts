import { Quiz } from './types'

export const ADVANCED_QUIZZES: Quiz[] = [
  {
    id: 'js-adv-1',
    topic: 'javascript',
    question: 'What will be logged to the console?',
    code: `function createCounter() {
  let count = 0;
  return function() {
    return ++count;
  }
}
const c = createCounter();
console.log(c(), c());`,
    options: ['1 2', '1 1', '0 1', 'undefined undefined'],
    correctAnswer: 0,
    explanation: 'Closures allow inner functions to access variables from outer functions even after the outer function has returned.',
    difficulty: 'hard'
  },
  {
    id: 'js-adv-2',
    topic: 'javascript',
    question: 'What will this destructuring assignment produce?',
    code: `const { a, b = 5 } = { a: 3 };
console.log(a, b);`,
    options: ['3 undefined', '3 5', 'undefined 5', 'Error'],
    correctAnswer: 1,
    explanation: 'Default values in destructuring are used when the property is undefined. Here, b gets the default value 5.',
    difficulty: 'medium'
  },
  {
    id: 'js-adv-3',
    topic: 'javascript',
    question: 'What does Object.freeze() do?',
    code: `const obj = Object.freeze({ a: 1 });
obj.a = 2;
console.log(obj.a);`,
    options: ['2', '1', 'undefined', 'Error'],
    correctAnswer: 1,
    explanation: 'Object.freeze() makes an object immutable - properties cannot be changed, added, or removed.',
    difficulty: 'hard'
  },
  {
    id: 'js-adv-4',
    topic: 'javascript',
    question: 'What is the output of this async code?',
    code: `async function test() {
  console.log('1');
  await Promise.resolve();
  console.log('2');
}
test();
console.log('3');`,
    options: ['1 2 3', '1 3 2', '3 1 2', '2 1 3'],
    correctAnswer: 1,
    explanation: 'The await pauses execution, allowing synchronous code to run first. Output: 1, 3, 2.',
    difficulty: 'hard'
  },
  {
    id: 'js-adv-5',
    topic: 'javascript',
    question: 'What does the event loop do?',
    code: `console.log('Start');
setTimeout(() => console.log('Timeout'), 0);
Promise.resolve().then(() => console.log('Promise'));
console.log('End');`,
    options: ['Start End Timeout Promise', 'Start End Promise Timeout', 'Start Timeout Promise End', 'Start Promise End Timeout'],
    correctAnswer: 1,
    explanation: 'Microtasks (Promises) execute before macrotasks (setTimeout). Output: Start, End, Promise, Timeout.',
    difficulty: 'hard'
  },
  {
    id: 'ts-adv-1',
    topic: 'typescript',
    question: 'What is a union type in TypeScript?',
    code: `let value: string | number;
value = "hello";
value = 42;`,
    options: ['A type that combines properties', 'A type that can be one of several types', 'An intersection type', 'A generic type'],
    correctAnswer: 1,
    explanation: 'Union types allow a variable to hold values of multiple types, separated by the | operator.',
    difficulty: 'medium'
  },
  {
    id: 'ts-adv-2',
    topic: 'typescript',
    question: 'What does the "never" type represent?',
    code: `function throwError(message: string): never {
  throw new Error(message);
}`,
    options: ['A nullable value', 'A value that never occurs', 'An optional parameter', 'A void return'],
    correctAnswer: 1,
    explanation: 'The never type represents values that never occur, like functions that always throw or never return.',
    difficulty: 'hard'
  },
  {
    id: 'ts-adv-3',
    topic: 'typescript',
    question: 'What is a generic type parameter?',
    code: `function identity<T>(arg: T): T {
  return arg;
}
const result = identity<string>("hello");`,
    options: ['A dynamic type', 'A type variable that allows reusable code', 'A union type', 'A type guard'],
    correctAnswer: 1,
    explanation: 'Generics allow you to write reusable code that works with multiple types while maintaining type safety.',
    difficulty: 'medium'
  },
  {
    id: 'ts-adv-4',
    topic: 'typescript',
    question: 'What are utility types in TypeScript?',
    code: `interface User {
  id: number;
  name: string;
}
type PartialUser = Partial<User>;`,
    options: ['Custom types', 'Built-in type transformations', 'Type guards', 'Decorators'],
    correctAnswer: 1,
    explanation: 'Utility types are built-in TypeScript types that transform existing types (e.g., Partial, Pick, Omit).',
    difficulty: 'medium'
  },
  {
    id: 'ts-adv-5',
    topic: 'typescript',
    question: 'What does the keyof operator do?',
    code: `interface User {
  name: string;
  age: number;
}
type UserKeys = keyof User;`,
    options: ['Gets values', 'Gets a union of property names', 'Creates an array', 'Validates types'],
    correctAnswer: 1,
    explanation: 'keyof creates a union type of all property names from an interface or type.',
    difficulty: 'hard'
  },
  {
    id: 'react-adv-1',
    topic: 'react',
    question: 'What is the useCallback hook used for?',
    code: `const handleClick = useCallback(() => {
  console.log(count);
}, [count]);`,
    options: ['Memoizing values', 'Memoizing functions', 'Managing state', 'Side effects'],
    correctAnswer: 1,
    explanation: 'useCallback memoizes function instances to prevent unnecessary re-creations on re-renders.',
    difficulty: 'hard'
  },
  {
    id: 'react-adv-2',
    topic: 'react',
    question: 'What is the purpose of the key prop in React lists?',
    code: `items.map((item) => (
  <div key={item.id}>{item.name}</div>
));`,
    options: ['For styling', 'To help React identify which items changed', 'For accessibility', 'For performance only'],
    correctAnswer: 1,
    explanation: 'Keys help React identify which items have changed, been added, or removed to efficiently update the DOM.',
    difficulty: 'medium'
  },
  {
    id: 'react-adv-3',
    topic: 'react',
    question: 'What does useMemo do?',
    code: `const expensiveValue = useMemo(() => {
  return computeExpensiveValue(a, b);
}, [a, b]);`,
    options: ['Memoizes function references', 'Memoizes computed values', 'Creates state', 'Handles side effects'],
    correctAnswer: 1,
    explanation: 'useMemo memoizes the result of expensive computations to avoid recalculating on every render.',
    difficulty: 'hard'
  },
  {
    id: 'react-adv-4',
    topic: 'react',
    question: 'What is React Context used for?',
    code: `const ThemeContext = React.createContext('light');`,
    options: ['Routing', 'Global state management', 'Form handling', 'API calls'],
    correctAnswer: 1,
    explanation: 'Context provides a way to pass data through the component tree without prop drilling.',
    difficulty: 'medium'
  },
  {
    id: 'react-adv-5',
    topic: 'react',
    question: 'What is the useRef hook for?',
    code: `const inputRef = useRef(null);
inputRef.current.focus();`,
    options: ['State management', 'Accessing DOM elements and persisting values', 'Side effects', 'Context'],
    correctAnswer: 1,
    explanation: 'useRef returns a mutable ref object that persists across renders, useful for DOM access and storing mutable values.',
    difficulty: 'medium'
  },
  {
    id: 'python-adv-1',
    topic: 'python',
    question: 'What are Python decorators?',
    code: `@timer
def slow_function():
    time.sleep(1)`,
    options: ['Class methods', 'Functions that modify other functions', 'Type hints', 'Error handlers'],
    correctAnswer: 1,
    explanation: 'Decorators are functions that modify the behavior of other functions or classes using the @ syntax.',
    difficulty: 'hard'
  },
  {
    id: 'python-adv-2',
    topic: 'python',
    question: 'What is a generator in Python?',
    code: `def count_up_to(n):
    for i in range(n):
        yield i`,
    options: ['A list comprehension', 'A function that returns an iterator', 'A class method', 'A decorator'],
    correctAnswer: 1,
    explanation: 'Generators use yield to produce values lazily, creating iterators without storing all values in memory.',
    difficulty: 'hard'
  },
  {
    id: 'python-adv-3',
    topic: 'python',
    question: 'What does the with statement do?',
    code: `with open('file.txt') as f:
    data = f.read()`,
    options: ['Opens files only', 'Manages context and cleanup automatically', 'Handles errors', 'Creates classes'],
    correctAnswer: 1,
    explanation: 'The with statement ensures proper resource management by automatically handling setup and cleanup.',
    difficulty: 'medium'
  },
  {
    id: 'python-adv-4',
    topic: 'python',
    question: 'What is list slicing?',
    code: `numbers = [0, 1, 2, 3, 4, 5]
print(numbers[1:4])`,
    options: ['[1, 2, 3]', '[1, 2, 3, 4]', '[0, 1, 2, 3]', '[2, 3, 4]'],
    correctAnswer: 0,
    explanation: 'Slicing with [start:end] includes start but excludes end index. Result: [1, 2, 3].',
    difficulty: 'easy'
  },
  {
    id: 'python-adv-5',
    topic: 'python',
    question: 'What is the difference between append() and extend()?',
    code: `list1 = [1, 2]
list1.append([3, 4])
list2 = [1, 2]
list2.extend([3, 4])`,
    options: ['Both add [3, 4] as single element', 'append adds element, extend adds individual items', 'No difference', 'Both add individual items'],
    correctAnswer: 1,
    explanation: 'append() adds its argument as a single element, extend() adds each item from an iterable.',
    difficulty: 'medium'
  },
  {
    id: 'django-adv-1',
    topic: 'django',
    question: 'What are Django signals?',
    code: `@receiver(post_save, sender=User)
def create_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)`,
    options: ['HTTP requests', 'Event notifications between decoupled apps', 'Database queries', 'URL patterns'],
    correctAnswer: 1,
    explanation: 'Signals allow decoupled applications to get notified when certain actions occur elsewhere in the framework.',
    difficulty: 'hard'
  },
  {
    id: 'django-adv-2',
    topic: 'django',
    question: 'What is a Django queryset?',
    code: `users = User.objects.filter(age__gte=18).order_by('-created')`,
    options: ['A database table', 'A lazy-evaluated database query', 'A list of objects', 'A model instance'],
    correctAnswer: 1,
    explanation: 'QuerySets are lazy - they don\'t hit the database until evaluated, allowing for query optimization.',
    difficulty: 'medium'
  },
  {
    id: 'django-adv-3',
    topic: 'django',
    question: 'What are Django middleware?',
    code: `MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
]`,
    options: ['Database connections', 'Request/response processors', 'Template tags', 'URL patterns'],
    correctAnswer: 1,
    explanation: 'Middleware are hooks that process requests globally before reaching the view and responses before being sent.',
    difficulty: 'hard'
  },
  {
    id: 'django-adv-4',
    topic: 'django',
    question: 'What is Django ORM select_related() used for?',
    code: `posts = Post.objects.select_related('author').all()`,
    options: ['Filter results', 'Optimize queries with foreign keys', 'Order results', 'Count objects'],
    correctAnswer: 1,
    explanation: 'select_related() performs a SQL join to fetch related objects in a single query, reducing database hits.',
    difficulty: 'medium'
  },
  {
    id: 'django-adv-5',
    topic: 'django',
    question: 'What is the purpose of Django forms?',
    code: `class UserForm(forms.ModelForm):
    class Meta:
        model = User
        fields = ['username', 'email']`,
    options: ['Creating HTML', 'Validating and processing user input', 'Database queries', 'URL routing'],
    correctAnswer: 1,
    explanation: 'Django forms handle validation, cleaning, and processing of user input with security features built-in.',
    difficulty: 'easy'
  },
  {
    id: 'css-adv-1',
    topic: 'css',
    question: 'What is CSS specificity?',
    code: `#id { color: red; }
.class { color: blue; }
div { color: green; }`,
    options: ['Browser compatibility', 'Rule priority calculation', 'Cascade order', 'Inheritance'],
    correctAnswer: 1,
    explanation: 'Specificity determines which CSS rule applies when multiple rules target the same element (IDs > classes > elements).',
    difficulty: 'medium'
  },
  {
    id: 'css-adv-2',
    topic: 'css',
    question: 'What does the CSS calc() function do?',
    code: `width: calc(100% - 50px);`,
    options: ['Validates CSS', 'Performs mathematical calculations', 'Converts units', 'Optimizes performance'],
    correctAnswer: 1,
    explanation: 'calc() allows mathematical calculations in CSS, mixing different units like percentages and pixels.',
    difficulty: 'medium'
  },
  {
    id: 'css-adv-3',
    topic: 'css',
    question: 'What are CSS custom properties (variables)?',
    code: `:root {
  --main-color: #06c;
}
.button { color: var(--main-color); }`,
    options: ['Preprocessor variables', 'Native CSS variables', 'JavaScript variables', 'Class names'],
    correctAnswer: 1,
    explanation: 'CSS custom properties are native CSS variables that can be defined, inherited, and used throughout stylesheets.',
    difficulty: 'medium'
  },
  {
    id: 'css-adv-4',
    topic: 'css',
    question: 'What is the CSS box model?',
    code: `div {
  width: 100px;
  padding: 10px;
  border: 5px solid;
  margin: 20px;
}`,
    options: ['A layout pattern', 'Content + padding + border + margin structure', 'A positioning system', 'A flexbox property'],
    correctAnswer: 1,
    explanation: 'The box model defines how element dimensions are calculated: content, padding, border, and margin.',
    difficulty: 'easy'
  },
  {
    id: 'css-adv-5',
    topic: 'css',
    question: 'What does "display: none" do differently than "visibility: hidden"?',
    code: `element1 { display: none; }
element2 { visibility: hidden; }`,
    options: ['No difference', 'display removes from layout, visibility hides but keeps space', 'visibility removes from layout', 'Both remove from layout'],
    correctAnswer: 1,
    explanation: 'display: none removes the element from the document flow, visibility: hidden hides it but preserves its space.',
    difficulty: 'medium'
  }
]
