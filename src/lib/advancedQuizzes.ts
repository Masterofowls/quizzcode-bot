import { Quiz } from './types'

export const ADVANCED_QUIZZES: Quiz[] = [
  {
    id: 'js-adv-1',
    topic: 'javascript',
    question: 'What will this closure return on the second call?',
    code: `function counter() {
  let count = 0;
  return function() {
    return ++count;
  };
}
const c = counter();
console.log(c());
console.log(c());`,
    options: ['0, 0', '1, 2', '1, 1', 'undefined'],
    correctAnswer: 1,
    explanation: 'The closure maintains access to the count variable. First call returns 1, second returns 2.',
    difficulty: 'hard'
  },
  {
    id: 'js-adv-2',
    topic: 'javascript',
    question: 'What is event delegation?',
    code: `parent.addEventListener('click', (e) => {
  if (e.target.matches('.child')) {
    console.log('Child clicked');
  }
});`,
    options: ['Adding events to all children', 'Using a parent listener to handle child events', 'Preventing default behavior', 'Event bubbling'],
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
    question: 'What will be logged?',
    code: `const obj = Object.freeze({ a: 1 });
obj.a = 2;
console.log(obj.a);`,
    options: ['2', '1', 'Error', 'undefined'],
    correctAnswer: 1,
    explanation: 'Object.freeze() prevents modification of existing properties. The assignment fails silently in non-strict mode.',
    difficulty: 'hard'
  },
  {
    id: 'ts-adv-1',
    topic: 'typescript',
    question: 'What is a union type?',
    code: `type StringOrNumber = string | number;
function process(value: StringOrNumber) {
  return value;
}`,
    options: ['Type intersection', 'Type that can be one of multiple types', 'Type alias', 'Generic type'],
    correctAnswer: 1,
    explanation: 'Union types allow a value to be one of several types using the | operator.',
    difficulty: 'easy'
  },
  {
    id: 'ts-adv-2',
    topic: 'typescript',
    question: 'What is type narrowing?',
    code: `function example(x: string | number) {
  if (typeof x === 'string') {
    return x.toUpperCase();
  }
}`,
    options: ['Type casting', 'Refining types within conditional blocks', 'Type assertion', 'Generic constraint'],
    correctAnswer: 1,
    explanation: 'Type narrowing uses conditional checks to refine union types to more specific types.',
    difficulty: 'medium'
  },
  {
    id: 'ts-adv-3',
    topic: 'typescript',
    question: 'What does keyof do?',
    code: `type Point = { x: number; y: number };
type PointKeys = keyof Point;`,
    options: ['Creates new keys', 'Gets union of all keys', 'Deletes keys', 'Renames keys'],
    correctAnswer: 1,
    explanation: 'keyof creates a union type of all property keys in a type (PointKeys = "x" | "y").',
    difficulty: 'hard'
  },
  {
    id: 'ts-adv-4',
    topic: 'typescript',
    question: 'What are generics?',
    code: `function identity<T>(arg: T): T {
  return arg;
}`,
    options: ['Type variables', 'Reusable type parameters', 'Type guards', 'Interfaces'],
    correctAnswer: 1,
    explanation: 'Generics allow you to write reusable code that works with multiple types using type parameters.',
    difficulty: 'medium'
  },
  {
    id: 'ts-adv-5',
    topic: 'typescript',
    question: 'What does the Partial utility type do?',
    code: `type User = { name: string; age: number };
type PartialUser = Partial<User>;`,
    options: ['Makes all properties required', 'Makes all properties optional', 'Removes properties', 'Adds properties'],
    correctAnswer: 1,
    explanation: 'Partial<T> makes all properties of type T optional, useful for update operations.',
    difficulty: 'medium'
  },
  {
    id: 'python-adv-1',
    topic: 'python',
    question: 'What are Python generators?',
    code: `def counter():
    i = 0
    while True:
        yield i
        i += 1`,
    options: ['Functions that return lists', 'Functions that yield values lazily', 'Class constructors', 'Decorators'],
    correctAnswer: 1,
    explanation: 'Generators use yield to produce values lazily, maintaining state between calls.',
    difficulty: 'hard'
  },
  {
    id: 'python-adv-2',
    topic: 'python',
    question: 'What is a decorator?',
    code: `@my_decorator
def my_function():
    pass`,
    options: ['A comment', 'A function that modifies another function', 'A class method', 'An import statement'],
    correctAnswer: 1,
    explanation: 'Decorators are functions that modify or enhance other functions without changing their code.',
    difficulty: 'hard'
  },
  {
    id: 'django-adv-1',
    topic: 'django',
    question: 'What is a QuerySet?',
    code: `posts = Post.objects.filter(published=True)`,
    options: ['A list', 'A lazy database query object', 'A dictionary', 'An array'],
    correctAnswer: 1,
    explanation: 'QuerySets are lazy objects that represent database queries, only executing when evaluated.',
    difficulty: 'hard'
  },
  {
    id: 'django-adv-2',
    topic: 'django',
    question: 'What does select_related() do?',
    code: `Book.objects.select_related('author').all()`,
    options: ['Filters results', 'Performs SQL JOIN to reduce queries', 'Orders results', 'Limits results'],
    correctAnswer: 1,
    explanation: 'select_related() performs a SQL JOIN to fetch related objects in a single query, reducing database hits.',
    difficulty: 'hard'
  },
  {
    id: 'django-adv-3',
    topic: 'django',
    question: 'What is middleware in Django?',
    code: `MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
]`,
    options: ['A database layer', 'Request/response processing hooks', 'Template engine', 'URL router'],
    correctAnswer: 1,
    explanation: 'Middleware are hooks that process requests and responses globally before they reach views.',
    difficulty: 'easy'
  },
  {
    id: 'django-adv-4',
    topic: 'django',
    question: 'What does prefetch_related() do?',
    code: `Author.objects.prefetch_related('books').all()`,
    options: ['Performs JOIN', 'Performs separate queries and joins in Python', 'Caches results', 'Filters objects'],
    correctAnswer: 1,
    explanation: 'prefetch_related() does separate queries for related objects and joins them in Python, useful for many-to-many.',
    difficulty: 'hard'
  },
  {
    id: 'css-adv-1',
    topic: 'css',
    question: 'What does the :not() pseudo-class do?',
    code: `div:not(.special) { color: red; }`,
    options: ['Selects nothing', 'Selects elements that don\'t match the selector', 'Negates properties', 'Removes elements'],
    correctAnswer: 1,
    explanation: 'The :not() pseudo-class selects elements that do not match the given selector.',
    difficulty: 'medium'
  },
  {
    id: 'css-adv-2',
    topic: 'css',
    question: 'What is flexbox gap property?',
    code: `display: flex;
gap: 1rem;`,
    options: ['Grid layout', 'Space between flex items', 'Padding', 'Border'],
    correctAnswer: 1,
    explanation: 'The gap property sets spacing between flex items without using margins.',
    difficulty: 'easy'
  },
  {
    id: 'css-adv-3',
    topic: 'css',
    question: 'What does the transform property do?',
    code: `transform: rotate(45deg);`,
    options: ['Animates elements', 'Applies 2D/3D transformations', 'Changes position', 'Modifies display'],
    correctAnswer: 1,
    explanation: 'The transform property applies 2D or 3D transformations like rotate, scale, translate, and skew.',
    difficulty: 'medium'
  },
  {
    id: 'css-adv-4',
    topic: 'css',
    question: 'What are CSS custom properties?',
    code: `--primary-color: blue;
color: var(--primary-color);`,
    options: ['Comments', 'CSS variables', 'Preprocessor variables', 'Class names'],
    correctAnswer: 1,
    explanation: 'CSS custom properties (variables) allow reusable values defined with -- and accessed with var().',
    difficulty: 'medium'
  },
  {
    id: 'css-adv-5',
    topic: 'css',
    question: 'What is a media query?',
    code: `@media (max-width: 768px) {
  .container { width: 100%; }
}`,
    options: ['JavaScript function', 'Conditional CSS for different screens', 'Animation', 'Selector'],
    correctAnswer: 1,
    explanation: 'Media queries apply CSS conditionally based on device characteristics like screen width.',
    difficulty: 'easy'
  }
]
