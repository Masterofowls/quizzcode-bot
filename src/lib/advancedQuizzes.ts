import { Quiz } from './types'

export const ADVANCED_QUIZZES: Quiz[] = [
  {
    id: 'js-adv-1',
    topic: 'javascript',
    question: 'What is a closure in JavaScript?',
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
    explanation: 'Event bubbling means events propagate from the target element up through its ancestors.',
    difficulty: 'medium'
  },
  {
    id: 'js-adv-3',
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
    question: 'What does useMemo optimize?',
    code: `const expensiveValue = useMemo(() => {
  return computeExpensiveValue(a, b);
}, [a, b]);`,
    options: ['Component renders', 'Expensive calculations', 'Event handlers', 'State updates'],
    correctAnswer: 1,
    explanation: 'useMemo memoizes the result of expensive calculations and only recalculates when dependencies change.',
    difficulty: 'hard'
  },
  {
    id: 'django-adv-1',
    topic: 'django',
    question: 'What is Django middleware?',
    code: `class CustomMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response`,
    options: ['A database layer', 'Request/response processing hooks', 'A template engine', 'A URL router'],
    correctAnswer: 1,
    explanation: 'Middleware provides hooks for processing requests and responses globally before they reach views.',
    difficulty: 'hard'
  },
  {
    id: 'django-adv-2',
    topic: 'django',
    question: 'What does select_related do?',
    code: `User.objects.select_related('profile').all()`,
    options: ['Filters results', 'Performs JOIN to reduce queries', 'Orders results', 'Counts results'],
    correctAnswer: 1,
    explanation: 'select_related performs SQL JOIN to fetch related objects in a single query, reducing database hits.',
    difficulty: 'hard'
  },
  {
    id: 'django-adv-3',
    topic: 'django',
    question: 'What is prefetch_related used for?',
    code: `Book.objects.prefetch_related('authors').all()`,
    options: ['One-to-one relations', 'Many-to-many relations', 'Foreign keys only', 'Filtering'],
    correctAnswer: 1,
    explanation: 'prefetch_related optimizes many-to-many and reverse foreign key lookups with separate queries.',
    difficulty: 'hard'
  },
  {
    id: 'css-adv-1',
    topic: 'css',
    question: 'What does CSS Grid "gap" property do?',
    code: `.container {
  display: grid;
  gap: 20px;
}`,
    options: ['Border spacing', 'Space between grid items', 'Padding', 'Margin'],
    correctAnswer: 1,
    explanation: 'The gap property creates space between grid items without affecting outer margins.',
    difficulty: 'medium'
  },
  {
    id: 'css-adv-2',
    topic: 'css',
    question: 'What is CSS specificity?',
    code: `#id .class element { }`,
    options: ['Execution order', 'Rule priority calculation', 'Browser support', 'Animation timing'],
    correctAnswer: 1,
    explanation: 'Specificity determines which CSS rules apply when multiple rules target the same element.',
    difficulty: 'medium'
  },
  {
    id: 'css-adv-3',
    topic: 'css',
    question: 'What does transform: translateZ do?',
    code: `.element {
  transform: translateZ(50px);
}`,
    options: ['2D translation', '3D translation on Z-axis', 'Rotation', 'Scaling'],
    correctAnswer: 1,
    explanation: 'translateZ moves elements along the Z-axis in 3D space, creating depth effects.',
    difficulty: 'hard'
  },
  {
    id: 'css-adv-4',
    topic: 'css',
    question: 'What is a CSS custom property?',
    code: `:root {
  --primary-color: blue;
}
.element {
  color: var(--primary-color);
}`,
    options: ['A class selector', 'A CSS variable', 'A pseudo-element', 'A media query'],
    correctAnswer: 1,
    explanation: 'CSS custom properties (variables) allow you to store and reuse values throughout your stylesheet.',
    difficulty: 'medium'
  },
  {
    id: 'python-adv-1',
    topic: 'python',
    question: 'What is a decorator in Python?',
    code: `@timer
def slow_function():
    time.sleep(1)`,
    options: ['A comment', 'A function modifier', 'A class method', 'An import statement'],
    correctAnswer: 1,
    explanation: 'Decorators are functions that modify the behavior of other functions or classes.',
    difficulty: 'hard'
  },
  {
    id: 'python-adv-2',
    topic: 'python',
    question: 'What does __init__ do in Python classes?',
    code: `class Person:
    def __init__(self, name):
        self.name = name`,
    options: ['Destroys objects', 'Initializes new objects', 'Static method', 'Class variable'],
    correctAnswer: 1,
    explanation: '__init__ is the constructor method called when creating new instances of a class.',
    difficulty: 'medium'
  },
  {
    id: 'python-adv-3',
    topic: 'python',
    question: 'What is list slicing in Python?',
    code: `nums = [0, 1, 2, 3, 4]
result = nums[1:4]`,
    options: ['[1, 2, 3]', '[1, 2, 3, 4]', '[0, 1, 2, 3]', '[2, 3, 4]'],
    correctAnswer: 0,
    explanation: 'List slicing [start:end] returns elements from start index up to (but not including) end index.',
    difficulty: 'easy'
  }
]
