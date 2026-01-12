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
    code: `const obj = Object.freeze({ name: 'John' });
obj.name = 'Jane';
console.log(obj.name);`,
    options: ['Jane', 'John', 'undefined', 'Error'],
    correctAnswer: 1,
    explanation: 'Object.freeze() makes an object immutable. Attempts to modify it are silently ignored (or throw errors in strict mode).',
    difficulty: 'hard'
  },
  {
    id: 'js-adv-4',
    topic: 'javascript',
    question: 'What is the output of this async code?',
    code: `console.log('1');
async function test() {
  console.log('2');
  await Promise.resolve();
  console.log('3');
}
test();
console.log('4');`,
    options: ['1 2 3 4', '1 2 4 3', '1 4 2 3', '2 1 4 3'],
    correctAnswer: 1,
    explanation: 'The await pauses execution, allowing synchronous code to run first. Output: 1, 2, 4, 3.',
    difficulty: 'hard'
  },
  {
    id: 'js-adv-5',
    topic: 'javascript',
    question: 'What is the event loop order?',
    code: `console.log('Start');
setTimeout(() => console.log('Timeout'), 0);
Promise.resolve().then(() => console.log('Promise'));
console.log('End');`,
    options: ['Start End Timeout Promise', 'Start End Promise Timeout', 'Start Timeout Promise End', 'Start Promise Timeout End'],
    correctAnswer: 1,
    explanation: 'Microtasks (Promises) execute before macrotasks (setTimeout). Output: Start, End, Promise, Timeout.',
    difficulty: 'hard'
  },
  {
    id: 'ts-adv-1',
    topic: 'typescript',
    question: 'What does the union type allow?',
    code: `let value: string | number;
value = 'hello';
value = 42;`,
    options: ['Only strings', 'Only numbers', 'Either strings or numbers', 'Error'],
    correctAnswer: 2,
    explanation: 'Union types allow a variable to hold values of multiple specified types.',
    difficulty: 'medium'
  },
  {
    id: 'ts-adv-2',
    topic: 'typescript',
    question: 'What does the never type represent?',
    code: `function throwError(message: string): never {
  throw new Error(message);
}`,
    options: ['A function that returns nothing', 'A function that never returns', 'A function that returns undefined', 'A function that returns null'],
    correctAnswer: 1,
    explanation: 'The never type represents values that never occur, like functions that always throw or have infinite loops.',
    difficulty: 'hard'
  },
  {
    id: 'ts-adv-3',
    topic: 'typescript',
    question: 'What is a generic in TypeScript?',
    code: `function identity<T>(arg: T): T {
  return arg;
}`,
    options: ['A dynamic type', 'A type variable for reusable code', 'An interface', 'A class'],
    correctAnswer: 1,
    explanation: 'Generics allow you to write reusable code that works with multiple types while maintaining type safety.',
    difficulty: 'medium'
  },
  {
    id: 'ts-adv-4',
    topic: 'typescript',
    question: 'What are utility types?',
    code: `interface User {
  name: string;
  age: number;
}
type PartialUser = Partial<User>;`,
    options: ['Custom types', 'Built-in type transformations', 'Type guards', 'Decorators'],
    correctAnswer: 1,
    explanation: 'Utility types like Partial, Pick, Omit transform existing types. Partial makes all properties optional.',
    difficulty: 'medium'
  },
  {
    id: 'ts-adv-5',
    topic: 'typescript',
    question: 'What does the keyof operator do?',
    code: `interface Person {
  name: string;
  age: number;
}
type PersonKeys = keyof Person;`,
    options: ['"name" | "age"', 'string', 'Person', 'undefined'],
    correctAnswer: 0,
    explanation: 'keyof creates a union type of all property names from an interface or type.',
    difficulty: 'hard'
  },
  {
    id: 'react-adv-1',
    topic: 'react',
    question: 'What is the purpose of useMemo?',
    code: `const memoizedValue = useMemo(() => {
  return computeExpensiveValue(a, b);
}, [a, b]);`,
    options: ['Memoize state', 'Memoize computed values', 'Memoize components', 'Memoize effects'],
    correctAnswer: 1,
    explanation: 'useMemo memoizes the result of expensive computations, recomputing only when dependencies change.',
    difficulty: 'medium'
  },
  {
    id: 'react-adv-2',
    topic: 'react',
    question: 'What is the purpose of the key prop in React?',
    code: `items.map(item => 
  <div key={item.id}>{item.name}</div>
)`,
    options: ['For styling', 'Help React identify changes', 'For accessibility', 'For SEO'],
    correctAnswer: 1,
    explanation: 'Keys help React identify which items have changed, been added, or removed to efficiently update the DOM.',
    difficulty: 'easy'
  },
  {
    id: 'react-adv-3',
    topic: 'react',
    question: 'What does useCallback do?',
    code: `const memoizedCallback = useCallback(
  () => { doSomething(a, b); },
  [a, b]
);`,
    options: ['Memoize values', 'Memoize functions', 'Create callbacks', 'Handle events'],
    correctAnswer: 1,
    explanation: 'useCallback returns a memoized version of the callback that only changes if dependencies change.',
    difficulty: 'medium'
  },
  {
    id: 'react-adv-4',
    topic: 'react',
    question: 'What is React Context used for?',
    code: `const ThemeContext = React.createContext('light');`,
    options: ['Local state', 'Global state sharing', 'Routing', 'HTTP requests'],
    correctAnswer: 1,
    explanation: 'Context provides a way to share values between components without passing props through every level.',
    difficulty: 'medium'
  },
  {
    id: 'react-adv-5',
    topic: 'react',
    question: 'What is useRef used for?',
    code: `const inputRef = useRef(null);
inputRef.current.focus();`,
    options: ['State management', 'Direct DOM access and persisting values', 'Side effects', 'Memoization'],
    correctAnswer: 1,
    explanation: 'useRef provides a way to access DOM elements directly and persist values across renders without causing re-renders.',
    difficulty: 'medium'
  },
  {
    id: 'python-adv-1',
    topic: 'python',
    question: 'What are decorators in Python?',
    code: `@timer
def slow_function():
    time.sleep(1)`,
    options: ['Comments', 'Functions that modify other functions', 'Classes', 'Loops'],
    correctAnswer: 1,
    explanation: 'Decorators are functions that wrap other functions to modify or enhance their behavior.',
    difficulty: 'hard'
  },
  {
    id: 'python-adv-2',
    topic: 'python',
    question: 'What is a generator in Python?',
    code: `def count_up_to(n):
    for i in range(n):
        yield i`,
    options: ['A function that returns a list', 'A function that yields values lazily', 'A class', 'A decorator'],
    correctAnswer: 1,
    explanation: 'Generators use yield to produce values one at a time, saving memory for large sequences.',
    difficulty: 'hard'
  },
  {
    id: 'python-adv-3',
    topic: 'python',
    question: 'What is a context manager?',
    code: `with open('file.txt', 'r') as f:
    content = f.read()`,
    options: ['A function', 'An object that manages resources with __enter__ and __exit__', 'A decorator', 'A class method'],
    correctAnswer: 1,
    explanation: 'Context managers handle resource setup and cleanup automatically using __enter__ and __exit__ methods.',
    difficulty: 'medium'
  },
  {
    id: 'python-adv-4',
    topic: 'python',
    question: 'What does slicing do?',
    code: `numbers = [0, 1, 2, 3, 4]
print(numbers[1:4])`,
    options: ['[0, 1, 2, 3]', '[1, 2, 3]', '[1, 2, 3, 4]', '[2, 3, 4]'],
    correctAnswer: 1,
    explanation: 'Slicing [1:4] returns elements from index 1 up to (but not including) index 4: [1, 2, 3].',
    difficulty: 'easy'
  },
  {
    id: 'python-adv-5',
    topic: 'python',
    question: 'What is the difference between == and is?',
    code: `list1 = [1, 2]
list2 = [1, 2]
print(list1 == list2, list1 is list2)`,
    options: ['True True', 'True False', 'False True', 'False False'],
    correctAnswer: 1,
    explanation: '== compares values (True), while is compares object identity in memory (False for different objects).',
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
    options: ['HTTP requests', 'Events that trigger actions', 'Database queries', 'Templates'],
    correctAnswer: 1,
    explanation: 'Signals allow decoupled applications to get notified when actions occur elsewhere in the framework.',
    difficulty: 'hard'
  },
  {
    id: 'django-adv-2',
    topic: 'django',
    question: 'What does queryset chaining do?',
    code: `users = User.objects.filter(age__gte=18).order_by('-created_at')[:10]`,
    options: ['Executes multiple queries', 'Builds a single optimized query', 'Throws an error', 'Returns all users'],
    correctAnswer: 1,
    explanation: 'QuerySets are lazy and chainable, building a single optimized SQL query when evaluated.',
    difficulty: 'medium'
  },
  {
    id: 'django-adv-3',
    topic: 'django',
    question: 'What is Django middleware?',
    code: `MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
]`,
    options: ['Database connections', 'Request/response processing layers', 'URL patterns', 'Templates'],
    correctAnswer: 1,
    explanation: 'Middleware are hooks into Django\'s request/response processing, executing in order for each request.',
    difficulty: 'medium'
  },
  {
    id: 'django-adv-4',
    topic: 'django',
    question: 'What is Django ORM select_related() used for?',
    code: `posts = Post.objects.select_related('author').all()`,
    options: ['Filter results', 'Optimize queries by using SQL joins', 'Order results', 'Paginate results'],
    correctAnswer: 1,
    explanation: 'select_related() uses SQL joins to retrieve related objects in a single query, reducing database hits.',
    difficulty: 'hard'
  },
  {
    id: 'django-adv-5',
    topic: 'django',
    question: 'What are Django serializers?',
    code: `class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'email']`,
    options: ['Database models', 'Convert complex data to JSON/XML', 'Views', 'Templates'],
    correctAnswer: 1,
    explanation: 'Serializers convert complex data types (like model instances) to native Python datatypes for JSON rendering.',
    difficulty: 'medium'
  },
  {
    id: 'css-adv-1',
    topic: 'css',
    question: 'What is CSS specificity?',
    code: `#id { color: red; }
.class { color: blue; }
div { color: green; }`,
    options: ['Order of rules', 'Weight of selectors determining which rule applies', 'CSS version', 'Browser compatibility'],
    correctAnswer: 1,
    explanation: 'Specificity determines which CSS rule applies when multiple rules target the same element. ID > class > element.',
    difficulty: 'medium'
  },
  {
    id: 'css-adv-2',
    topic: 'css',
    question: 'What does calc() do?',
    code: `width: calc(100% - 50px);`,
    options: ['Calculates colors', 'Performs mathematical calculations', 'Validates CSS', 'Creates animations'],
    correctAnswer: 1,
    explanation: 'calc() performs mathematical calculations with mixed units (%, px, em, etc.) for CSS values.',
    difficulty: 'medium'
  },
  {
    id: 'css-adv-3',
    topic: 'css',
    question: 'What are CSS custom properties?',
    code: `:root {
  --primary-color: #3498db;
}
.element { color: var(--primary-color); }`,
    options: ['Classes', 'Variables that can be reused', 'IDs', 'Pseudo-elements'],
    correctAnswer: 1,
    explanation: 'CSS custom properties (variables) store values that can be reused throughout the stylesheet.',
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
}`,
    options: ['Width only', 'Content + padding + border + margin', 'Padding only', 'Border only'],
    correctAnswer: 1,
    explanation: 'The box model includes content, padding, border, and margin. Total width = content + padding + border.',
    difficulty: 'easy'
  },
  {
    id: 'css-adv-5',
    topic: 'css',
    question: 'What is the difference between display: none and visibility: hidden?',
    code: `element1 { display: none; }
element2 { visibility: hidden; }`,
    options: ['No difference', 'display: none removes from layout, visibility: hidden keeps space', 'Opposite behavior', 'Both remove from layout'],
    correctAnswer: 1,
    explanation: 'display: none removes the element from the layout entirely, while visibility: hidden hides it but maintains its space.',
    difficulty: 'medium'
  }
]
