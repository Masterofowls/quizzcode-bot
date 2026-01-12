import { Quiz, Topic } from './types'
import { advancedQuizzes } from './advancedQuizzes'

export const TOPICS: Topic[] = [
  {
    id: 'javascript',
    name: 'JavaScript',
    icon: 'js',
    description: 'Core JavaScript concepts and ES6+ features',
    color: 'oklch(0.75 0.15 70)',
    totalQuizzes: 100,
    difficulty: 'easy',
    category: 'Frontend'
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    icon: 'ts',
    description: 'TypeScript types, interfaces, and generics',
    color: 'oklch(0.55 0.15 245)',
    totalQuizzes: 100,
    difficulty: 'medium',
    category: 'Frontend'
  },
  {
    id: 'react',
    name: 'React',
    icon: 'react',
    description: 'React hooks, components, and patterns',
    color: 'oklch(0.65 0.15 195)',
    totalQuizzes: 100,
    difficulty: 'medium',
    category: 'Frontend'
  },
  {
    id: 'python',
    name: 'Python',
    icon: 'python',
    description: 'Python syntax, data structures, and OOP',
    color: 'oklch(0.58 0.18 245)',
    totalQuizzes: 100,
    difficulty: 'easy',
    category: 'Backend'
  },
  {
    id: 'django',
    name: 'Django',
    icon: 'django',
    description: 'Django models, views, and REST framework',
    color: 'oklch(0.35 0.08 155)',
    totalQuizzes: 100,
    difficulty: 'hard',
    category: 'Backend'
  },
  {
    id: 'css',
    name: 'CSS',
    icon: 'css',
    description: 'CSS layouts, animations, and modern features',
    color: 'oklch(0.55 0.20 265)',
    totalQuizzes: 100,
    difficulty: 'easy',
    category: 'Frontend'
  }
]

export const QUIZZES: Quiz[] = [
  {
    id: 'js-1',
    topic: 'javascript',
    question: 'What will be the output of this code?',
    code: `console.log(typeof null);`,
    options: ['null', 'undefined', 'object', 'number'],
    correctAnswer: 2,
    explanation: 'In JavaScript, typeof null returns "object". This is a known bug in JavaScript that has been kept for backwards compatibility.',
    difficulty: 'medium'
  },
  {
    id: 'js-2',
    topic: 'javascript',
    question: 'What does the spread operator (...) do in this context?',
    code: `const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];`,
    options: ['Creates a reference to arr1', 'Creates a shallow copy of arr1 and adds new elements', 'Throws an error', 'Concatenates arrays'],
    correctAnswer: 1,
    explanation: 'The spread operator creates a shallow copy of arr1 and spreads its elements into the new array, then adds 4 and 5.',
    difficulty: 'easy'
  },
  {
    id: 'js-3',
    topic: 'javascript',
    question: 'What is the result of this comparison?',
    code: `console.log(0.1 + 0.2 === 0.3);`,
    options: ['true', 'false', 'undefined', 'NaN'],
    correctAnswer: 1,
    explanation: 'Due to floating-point precision issues, 0.1 + 0.2 equals 0.30000000000000004, not exactly 0.3.',
    difficulty: 'hard'
  },
  {
    id: 'js-4',
    topic: 'javascript',
    question: 'What will this code output?',
    code: `const obj = { a: 1 };
const arr = [obj, obj];
arr[0].a = 2;
console.log(arr[1].a);`,
    options: ['1', '2', 'undefined', 'Error'],
    correctAnswer: 1,
    explanation: 'Both array elements reference the same object, so modifying one affects the other. The output is 2.',
    difficulty: 'medium'
  },
  {
    id: 'js-5',
    topic: 'javascript',
    question: 'What does this arrow function return?',
    code: `const multiply = (a, b) => a * b;`,
    options: ['undefined', 'The product of a and b', 'A function', 'null'],
    correctAnswer: 1,
    explanation: 'Arrow functions with a single expression implicitly return that expression without needing the return keyword.',
    difficulty: 'easy'
  },
  {
    id: 'ts-1',
    topic: 'typescript',
    question: 'What type will TypeScript infer for this variable?',
    code: `const numbers = [1, 2, 3];`,
    options: ['number[]', 'Array<any>', 'any[]', '[number, number, number]'],
    correctAnswer: 0,
    explanation: 'TypeScript infers number[] (array of numbers) based on the initial values.',
    difficulty: 'easy'
  },
  {
    id: 'ts-2',
    topic: 'typescript',
    question: 'Which is the correct way to define an optional property?',
    code: `interface User {
  name: string;
  age___
}`,
    options: ['age: number | undefined', 'age?: number', 'age: number?', 'Both A and B'],
    correctAnswer: 3,
    explanation: 'Both "age?: number" and "age: number | undefined" create optional properties, though they have subtle differences.',
    difficulty: 'medium'
  },
  {
    id: 'ts-3',
    topic: 'typescript',
    question: 'What does the "readonly" modifier do?',
    code: `interface Point {
  readonly x: number;
  readonly y: number;
}`,
    options: ['Makes properties private', 'Prevents properties from being modified after creation', 'Makes properties static', 'Optimizes memory usage'],
    correctAnswer: 1,
    explanation: 'The readonly modifier prevents properties from being reassigned after the object is created.',
    difficulty: 'easy'
  },
  {
    id: 'ts-4',
    topic: 'typescript',
    question: 'What is a generic constraint in TypeScript?',
    code: `function merge<T extends object>(obj: T) {
  return { ...obj };
}`,
    options: ['A type guard', 'A way to limit what types can be used with generics', 'A decorator', 'An interface'],
    correctAnswer: 1,
    explanation: 'The "extends" keyword creates a constraint that limits T to types that extend object.',
    difficulty: 'hard'
  },
  {
    id: 'ts-5',
    topic: 'typescript',
    question: 'What does the union type do?',
    code: `type Status = 'pending' | 'active' | 'inactive';`,
    options: ['Creates an enum', 'Allows a variable to be one of several types', 'Combines types', 'Creates a type alias'],
    correctAnswer: 1,
    explanation: 'Union types (using |) allow a value to be one of several specified types or literal values.',
    difficulty: 'easy'
  },
  {
    id: 'react-1',
    topic: 'react',
    question: 'What hook should you use for side effects?',
    code: `// Fetch data when component mounts
___(() => {
  fetchData();
}, []);`,
    options: ['useState', 'useEffect', 'useCallback', 'useMemo'],
    correctAnswer: 1,
    explanation: 'useEffect is used for side effects like data fetching, subscriptions, or DOM manipulation.',
    difficulty: 'easy'
  },
  {
    id: 'react-2',
    topic: 'react',
    question: 'What does the dependency array do in useEffect?',
    code: `useEffect(() => {
  console.log(count);
}, [count]);`,
    options: ['Limits how many times effect runs', 'Determines when the effect re-runs', 'Passes props to the effect', 'Creates a closure'],
    correctAnswer: 1,
    explanation: 'The dependency array tells React to re-run the effect only when the specified values change.',
    difficulty: 'medium'
  },
  {
    id: 'react-3',
    topic: 'react',
    question: 'What is the correct way to update state based on previous state?',
    code: `const [count, setCount] = useState(0);
// Increment count`,
    options: ['setCount(count + 1)', 'setCount(prev => prev + 1)', 'count++', 'Both A and B are correct'],
    correctAnswer: 1,
    explanation: 'Using the functional update form (setCount(prev => prev + 1)) is the correct way to update state based on previous state.',
    difficulty: 'medium'
  },
  {
    id: 'react-4',
    topic: 'react',
    question: 'What does React.memo do?',
    code: `const MemoComponent = React.memo(MyComponent);`,
    options: ['Saves component state', 'Prevents re-renders if props haven\'t changed', 'Caches API calls', 'Creates a pure component'],
    correctAnswer: 1,
    explanation: 'React.memo is a higher-order component that memoizes the result and only re-renders if props change.',
    difficulty: 'hard'
  },
  {
    id: 'react-5',
    topic: 'react',
    question: 'What is the purpose of keys in React lists?',
    code: `items.map(item => 
  <li key={item.id}>{item.name}</li>
)`,
    options: ['For styling', 'To help React identify which items changed', 'For accessibility', 'For SEO'],
    correctAnswer: 1,
    explanation: 'Keys help React identify which items have changed, been added, or removed, optimizing re-renders.',
    difficulty: 'easy'
  },
  {
    id: 'python-1',
    topic: 'python',
    question: 'What is the output of this code?',
    code: `print(type([]) == list)`,
    options: ['True', 'False', 'Error', 'None'],
    correctAnswer: 0,
    explanation: '[] creates a list object, and type([]) returns the list class, which equals list.',
    difficulty: 'easy'
  },
  {
    id: 'python-2',
    topic: 'python',
    question: 'What does this list comprehension do?',
    code: `squares = [x**2 for x in range(5)]`,
    options: ['Creates [0, 1, 4, 9, 16]', 'Creates [1, 4, 9, 16, 25]', 'Throws an error', 'Creates [2, 4, 6, 8, 10]'],
    correctAnswer: 0,
    explanation: 'List comprehension squares numbers from 0 to 4, resulting in [0, 1, 4, 9, 16].',
    difficulty: 'easy'
  },
  {
    id: 'python-3',
    topic: 'python',
    question: 'What is the difference between "is" and "=="?',
    code: `a = [1, 2, 3]
b = [1, 2, 3]
print(a == b, a is b)`,
    options: ['True, True', 'True, False', 'False, True', 'False, False'],
    correctAnswer: 1,
    explanation: '"==" checks value equality (True), while "is" checks identity/memory location (False for different objects).',
    difficulty: 'medium'
  },
  {
    id: 'python-4',
    topic: 'python',
    question: 'What does *args allow in a function?',
    code: `def func(*args):
    return len(args)`,
    options: ['Multiple keyword arguments', 'Multiple positional arguments', 'A single argument', 'No arguments'],
    correctAnswer: 1,
    explanation: '*args allows a function to accept any number of positional arguments as a tuple.',
    difficulty: 'medium'
  },
  {
    id: 'python-5',
    topic: 'python',
    question: 'What is a lambda function?',
    code: `square = lambda x: x ** 2`,
    options: ['A named function', 'An anonymous inline function', 'A class method', 'A decorator'],
    correctAnswer: 1,
    explanation: 'Lambda creates anonymous functions with a single expression, useful for short operations.',
    difficulty: 'easy'
  },
  {
    id: 'django-1',
    topic: 'django',
    question: 'What does the Django ORM do?',
    code: `User.objects.filter(age__gte=18)`,
    options: ['Connects to database directly', 'Maps Python objects to database tables', 'Creates HTML forms', 'Handles HTTP requests'],
    correctAnswer: 1,
    explanation: 'Django ORM (Object-Relational Mapping) translates Python code to database queries.',
    difficulty: 'easy'
  },
  {
    id: 'django-2',
    topic: 'django',
    question: 'What is the purpose of migrations?',
    code: `python manage.py makemigrations`,
    options: ['Deploy the app', 'Apply database schema changes', 'Run tests', 'Start the server'],
    correctAnswer: 1,
    explanation: 'Migrations track and apply changes to database schema based on model definitions.',
    difficulty: 'easy'
  },
  {
    id: 'django-3',
    topic: 'django',
    question: 'What does ForeignKey establish?',
    code: `class Post(models.Model):
    author = models.ForeignKey(User)`,
    options: ['Many-to-many relationship', 'One-to-many relationship', 'One-to-one relationship', 'No relationship'],
    correctAnswer: 1,
    explanation: 'ForeignKey creates a one-to-many relationship (one user can have many posts).',
    difficulty: 'medium'
  },
  {
    id: 'django-4',
    topic: 'django',
    question: 'What is a Django view?',
    code: `def home(request):
    return render(request, 'home.html')`,
    options: ['A template', 'A function that handles requests', 'A model', 'A URL pattern'],
    correctAnswer: 1,
    explanation: 'Views are functions or classes that receive requests and return responses.',
    difficulty: 'easy'
  },
  {
    id: 'django-5',
    topic: 'django',
    question: 'What does {% csrf_token %} do in templates?',
    code: `<form method="post">
  {% csrf_token %}
</form>`,
    options: ['Validates forms', 'Protects against CSRF attacks', 'Encrypts data', 'Creates hidden fields'],
    correctAnswer: 1,
    explanation: 'CSRF token protects against Cross-Site Request Forgery attacks by validating form submissions.',
    difficulty: 'medium'
  },
  {
    id: 'css-1',
    topic: 'css',
    question: 'What does "flexbox" provide?',
    code: `display: flex;`,
    options: ['Grid layout', 'One-dimensional layout model', 'Fixed positioning', 'Animation'],
    correctAnswer: 1,
    explanation: 'Flexbox provides a one-dimensional layout model for arranging items in rows or columns.',
    difficulty: 'easy'
  },
  {
    id: 'css-2',
    topic: 'css',
    question: 'What is the difference between padding and margin?',
    code: `div {
  padding: 10px;
  margin: 20px;
}`,
    options: ['No difference', 'Padding is inside, margin is outside', 'Margin is inside, padding is outside', 'Both are outside'],
    correctAnswer: 1,
    explanation: 'Padding is space inside the element (between content and border), margin is space outside.',
    difficulty: 'easy'
  },
  {
    id: 'css-3',
    topic: 'css',
    question: 'What does "z-index" control?',
    code: `div { z-index: 10; }`,
    options: ['Size', 'Stack order/depth', 'Transparency', 'Position'],
    correctAnswer: 1,
    explanation: 'z-index controls the stacking order of positioned elements (higher values appear on top).',
    difficulty: 'medium'
  },
  {
    id: 'css-4',
    topic: 'css',
    question: 'What is CSS Grid used for?',
    code: `display: grid;
grid-template-columns: 1fr 1fr 1fr;`,
    options: ['One-dimensional layouts', 'Two-dimensional layouts', 'Animations', 'Typography'],
    correctAnswer: 1,
    explanation: 'CSS Grid is a two-dimensional layout system for creating complex layouts with rows and columns.',
    difficulty: 'medium'
  },
  {
    id: 'css-5',
    topic: 'css',
    question: 'What does "position: sticky" do?',
    code: `nav {
  position: sticky;
  top: 0;
}`,
    options: ['Fixes to viewport', 'Switches between relative and fixed based on scroll', 'Absolutely positions', 'Removes from flow'],
    correctAnswer: 1,
    explanation: 'Sticky positioning toggles between relative and fixed based on scroll position.',
    difficulty: 'hard'
  }
]

const ALL_QUIZZES = [...QUIZZES, ...advancedQuizzes]

export function getQuizzesByTopic(topicId: string): Quiz[] {
  return ALL_QUIZZES.filter(q => q.topic === topicId)
}

export function getRandomQuizzes(topicId: string, count: number): Quiz[] {
  const topicQuizzes = getQuizzesByTopic(topicId)
  const shuffled = [...topicQuizzes].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, count)
}
