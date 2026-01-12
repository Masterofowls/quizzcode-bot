import { Quiz } from './types'

    id: 'js-adv-1',
   
  let count = 0;
    return ++count;
}
console.log(c(), c());`,
    correctAnswe
    difficulty: 'hard
  {
   
 
    options: ['3 und
    explanation: 'Defaul
  },
    correctAnswer: 1,
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
  },
    id: 'ts-adv-4',
    
  r
const result = iden
    correctAnswer: 1,
    difficulty: 'medium'
  {
    topic: 'typescript',
    code: `interface User {
  n
typ
    correctAnswer: 1,
    difficulty: 'medi
  {
    topic: 'react',
    
}, 
    correctAnswer: 
    difficulty: 'hard'
  {
    topic: 'react',
    code: `it
)
    correctAnswer: 1,
    difficulty: 'medium'
  {
    topic: 'react',
    code: `const expensi
}, [
   
    difficulty: 'ha
  {
    topic: 'python',
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
  }
]
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
  }
]
