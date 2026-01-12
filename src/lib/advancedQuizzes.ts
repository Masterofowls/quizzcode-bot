import { Quiz } from './types'

    id: 'js-adv-1',
   
    id: 'js-adv-1',
    topic: 'javascript',
    question: 'What will this closure return?',
    code: `function createCounter() {
    options: ['0
    explanation: 'The
  },
   
 
  if (e.target.matches('.child')
  }
    options: ['Adding mul
    explanation: 'Event delegation uses event bubbling to hand
  },
    id: 'js-adv-3',
    question: 'What will
  .t
  .
    correctAnswer: 
    difficulty: 'hard'
  {
    topic: 'javascript',
    code: `console.log(x);
    options: ['Error', 'undefined
   
  },
    id: 'js-adv-5',
    question: 'What i
const { a, b } = obj;
    options: ['Error', '
    
  }
    id: 'ts-adv-1',
    question: 'What is a
function process(value: StringOrNumber) {
}`,
    correctAnswer: 
    difficulty: 'easy'
  {
    topic: 'typescript',
    code: `function p
    return value.toUpperCase();
  return value * 2;
    
   
  },
    id: 'ts-adv-3',
    question: 'What is the keyof o
type PointKeys = keyof Poi
    correctA
    difficulty: 'medium'
  {
    topic: 'typescript',
    code: `function iden
}`,
   
    difficulty: 'me
  {
    topic: 'typescript',
    code: `type User = { name: string;
const { a, b } = obj;
console.log(a);`,
    options: ['Error', '1', 'undefined', '{a: 1}'],
    topic: 'react',
    explanation: 'Destructuring extracts properties from objects into distinct variables.',
    difficulty: 'easy'
  },
   
    id: 'ts-adv-1',
    topic: 'typescript',
    question: 'What is a union type?',
    code: `type StringOrNumber = string | number;
function process(value: StringOrNumber) {
  return value;
}`,
    options: ['Type intersection', 'Type that can be one of several types', 'Type alias', 'Generic type'],
    correctAnswer: 1,
    explanation: 'Union types allow a value to be one of several types, denoted with the | operator.',
  },
  },
   
    id: 'ts-adv-2',
    topic: 'typescript',
    question: 'What is type narrowing?',
    code: `function process(value: string | number) {
  if (typeof value === 'string') {
    return value.toUpperCase();
  }
  return value * 2;
}`,
    options: ['Type casting', 'Refining types within conditional blocks', 'Type assertion', 'Generic constraint'],
    correctAnswer: 1,
    explanation: 'Type narrowing refines union types to more specific types within conditional blocks.',
    difficulty: 'medium'
  },
   
    id: 'ts-adv-3',
    topic: 'typescript',
    question: 'What is the keyof operator?',
    code: `type Point = { x: number; y: number };
type PointKeys = keyof Point;`,
    options: ['Creates new keys', 'Gets union of all keys', 'Deletes keys', 'Renames keys'],
        yield i
    explanation: 'keyof creates a union type of all keys in an object type.',
    correctAnswer: 1,
    
   
    id: 'ts-adv-4',
    topic: 'typescript',
    question: 'What are generics?',
    code: `function identity<T>(arg: T): T {
  return arg;
   
    options: ['Type variables', 'Reusable type parameters', 'Class inheritance', 'Interface extension'],
    correctAnswer: 1,
    explanation: 'Generics allow you to write reusable code that works with multiple types.',
    difficulty: 'medium'
  },
  {
    id: 'ts-adv-5',
    topic: 'typescript',
    question: 'What does the Partial utility type do?',
    code: `type User = { name: string; age: number };
type PartialUser = Partial<User>;`,
    difficulty: 'medium'
  {
    topic: 'django',
    difficulty: 'medium'
  },
  {
  {
    topic: 'django'
    code: `User.objects.filter(active=True)`,
    correctAnswer: 1,
    difficulty: 'easy
  {
    topic: 'django',
    code: `MIDDLEWARE
]`,
    correctAnswer: 1,
    
  {
    topic: 'django',
    code: `Author.o
    correctAnswer: 1,
    difficulty: 'hard'
  {
    topic: 'c
    code: `div:not(.special) { color: red; }`,
    correctAnswer: 1,
    difficulty: 'medium'
  {
    
   
    options: ['Grid la
    explanation: 'F
  },
    id: 'css-adv-3',
    question: 'What does t
    options: ['Animates elements', 'Applies 2D/3D transformations', 'Changes color', 'Modifies text'
    explanation: 'The
  },
    id: 'css-adv-4',
    
col
    correctAnswer: 1,
    difficulty: 'me
  {
    topic: 'c
    code: `@media (max-width: 768px) {
}`,
    correctAnswer: 1,
    difficulty: 'easy'
]

















































































    id: 'django-adv-2',
    topic: 'django',
    question: 'What does select_related do?',
    code: `Book.objects.select_related('author')`,
    options: ['Filters results', 'Performs SQL JOIN for ForeignKey', 'Creates relationship', 'Deletes records'],
    correctAnswer: 1,
    explanation: 'select_related performs a SQL JOIN to fetch related objects in a single query, reducing database hits.',
    difficulty: 'hard'
  },
  {
    id: 'django-adv-3',
    topic: 'django',
    question: 'What is a QuerySet?',
    code: `User.objects.filter(active=True)`,
    options: ['Database table', 'Lazy database query collection', 'Model instance', 'View function'],
    correctAnswer: 1,
    explanation: 'QuerySets are lazy collections that represent database queries, executed only when needed.',
    difficulty: 'easy'
  },
  {
    id: 'django-adv-4',
    topic: 'django',
    question: 'What is a middleware?',
    code: `MIDDLEWARE = [
    'django.middleware.common.CommonMiddleware',
]`,
    options: ['Database layer', 'Request/response processing hook', 'URL router', 'Template tag'],
    correctAnswer: 1,
    explanation: 'Middleware processes requests and responses globally before they reach views or after they leave.',
    difficulty: 'hard'
  },
  {
    id: 'django-adv-5',
    topic: 'django',
    question: 'What is prefetch_related for?',
    code: `Author.objects.prefetch_related('books')`,
    options: ['Caching', 'Fetching ManyToMany relations efficiently', 'Database indexing', 'Query filtering'],
    correctAnswer: 1,
    explanation: 'prefetch_related performs separate queries for ManyToMany and reverse ForeignKey relationships.',
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
