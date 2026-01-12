import { Quiz } from './types'

    id: 'js-adv-1',
   
    id: 'js-adv-1',
    topic: 'javascript',
    question: 'What will this closure return?',
    code: `function createCounter() {
  let count = 0;
  return function() {
    return ++count;
  };
}
const counter = createCounter();
console.log(counter(), counter());`,
    options: ['0 0', '1 1', '1 2', 'undefined undefined'],
  {
    topic: 'javascript',
    code: `document.ge
  },
  {
    id: 'js-adv-2',
    topic: 'javascript',
    question: 'What is event delegation?',
    code: `document.getElementById('parent').addEventListener('click', (e) => {
  if (e.target.matches('.child')) {
    console.log('Child clicked');
  }
});`,
    options: ['Adding events to all children', 'Using event bubbling to handle events on parent', 'Removing event listeners', 'Preventing default behavior'],
    correctAnswer: 1,
    explanation: 'Event delegation uses event bubbling to handle events at a parent level rather than attaching listeners to each child element.',
    difficulty: 'medium'
  },
  {
    id: 'js-adv-3',
    topic: 'javascript',
    question: 'What does this Promise chain do?',
    code: `Promise.resolve(1)
  .then(x => x + 1)
  .then(x => { throw new Error('oops'); })
  .catch(e => 'error')
  .then(x => console.log(x));`,
    options: ['Logs 2', 'Logs "error"', 'Throws error', 'Logs undefined'],
    correctAnswer: 1,
    explanation: 'The catch handler catches the error and returns "error", which is passed to the final then.',
    difficulty: 'hard'
  },
  {
    id: 'js-adv-4',
    topic: 'javascript',
    question: 'What does this async/await code log?',
    code: `async function test() {
  console.log(1);
  await Promise.resolve();
  console.log(2);
}
console.log(3);
test();
console.log(4);`,
    options: ['1 2 3 4', '3 1 4 2', '1 3 4 2', '3 4 1 2'],
    correctAnswer: 1,
    explanation: 'Synchronous code runs first (3, 1, 4), then the awaited promise resolves and logs 2.',
    difficulty: 'hard'
  },
  {
    id: 'js-adv-5',
    topic: 'javascript',
    question: 'What is the Temporal Dead Zone?',
    code: `console.log(x);
let x = 5;`,
    options: ['Variable hoisting', 'Period between scope entry and declaration', 'Memory leak', 'Closure behavior'],
    correctAnswer: 1,
    explanation: 'The Temporal Dead Zone is the period between entering scope and declaration where let/const variables cannot be accessed.',
    difficulty: 'medium'
  },
  {
    id: 'js-adv-6',
    topic: 'javascript',
    question: 'What is the difference between var and let?',
    code: `for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
  },
    id: 'js-adv-7',
   
delete obj.a;
    options: ['1', 'u
    explanation: 'The delete operator removes properties from objects. Accessing a deleted property returns undefined.',
  },
    
   
var x = 5;`,
    correctAnswer: 1,
    difficulty: 'medium'
  {
    topic: 'j
    code: `[1, 2, 3].
    correctAnswer: 1,
    difficulty: 'easy
  {
    topic: 'typescript
    
   
    explanation: 'P
  },
    id: 'ts-adv-2',
    question: 'What is typ
  if (typeof
  }
    options: ['Type c
    explanation: 'Type narrowing is when TypeScript refines a type to a more specific type based on conditions.',
  },
    
   
type UserKeys = key
    correctAnswer: 1,
    difficulty: 'medium'
  {
    topic: 'typescript',
    code: `function i
}`,
    correctAnswer: 1,
    
  {
    topic: 'typescr
    code: `type User = {
    options: ['Removes properties', 'Selects specific prop
    explanation: 'Pick<T, K> constructs a type by pic
  },
    id: 'react-adv-1',
    question: 'What d
  console.log(count);
    options: ['Memoizes 
    
  }
    id: 'react-adv-
    question: 'What is t
  return computeExpensive(a, b);
    options: ['Memoizes functions', 'Memoizes com
    explanation: 'useMemo memo
  },
   
   
    options: ['Creates state', 'Creates a mutable reference', 'Creates side effects', 'Memoizes values'],
    explanation: 'use
  },
    id: 'python-adv-1'
    
   
    options: ['A fu
    explanation: 'Genera
  },
    id: 'python-adv-2',
    question: 'What is list c
    options: ['A loop', 'Concise syntax for creating lists', 'A function', 'An iterator'],
    explanation: 'Lis
  },
    id: 'python-adv-3',
    
   
    correctAnswer: 
    difficulty: 'medium'
  {
    topic: 'django',
    code: `User.objects.filter(
   
    difficulty: 'medium'
  {
    topic: 'django',
    code: `Book.object
    
   
  {
    topic: 'django',
    code: `python manage.py makemigration
    correctAnswer: 1,
    difficulty: 'easy'
  {
    topic: 'django',
    code: `post_save.connect(my_handler, sender=User)`,
    correctAnswer: 1,
    
  {
    topic: 'css',
    code: `div:not(
    correctAnswer: 1,
    difficulty: 'medium'
  {
    topic: 'cs
    code: `#id { color: red; }
    options: ['Animat
    explanation: 'useCallback returns a memoized version of the callback that only changes if dependencies change.',
    difficulty: 'medium'
  },
  {
    id: 'react-adv-2',
    topic: 'react',
    question: 'What is the purpose of useMemo?',
    code: `const expensive = useMemo(() => {
  return computeExpensive(a, b);
}, [a, b]);`,
    options: ['Memoizes functions', 'Memoizes computed values', 'Creates side effects', 'Manages state'],
    correctAnswer: 1,
    explanation: 'useMemo memoizes the result of expensive computations and only recalculates when dependencies change.',
    difficulty: 'medium'
  },
  {
    id: 'react-adv-3',
    topic: 'react',
    question: 'What does useRef do?',
    code: `const inputRef = useRef(null);`,
    options: ['Creates state', 'Creates a mutable reference', 'Creates side effects', 'Memoizes values'],
    correctAnswer: 1,
    explanation: 'useRef creates a mutable reference that persists across renders without causing re-renders.',
    difficulty: 'easy'
  },
  {
    id: 'python-adv-1',
    topic: 'python',
    question: 'What is a generator?',
    code: `def gen():
    yield 1
    yield 2`,
    options: ['A function that returns a list', 'A function that yields values one at a time', 'A class', 'A decorator'],
    correctAnswer: 1,
    explanation: 'Generators are functions that use yield to produce values lazily, one at a time.',
    difficulty: 'medium'
  },
  {
    id: 'python-adv-2',
    topic: 'python',
    question: 'What is list comprehension?',
    code: `squares = [x**2 for x in range(5)]`,
    options: ['A loop', 'Concise syntax for creating lists', 'A function', 'An iterator'],
    correctAnswer: 1,
    explanation: 'List comprehension provides a concise way to create lists based on existing sequences.',
    difficulty: 'easy'
  },
  {
    id: 'python-adv-3',
    topic: 'python',
    question: 'What does *args do?',
    code: `def func(*args):
    print(args)`,
    options: ['Creates a list', 'Accepts variable number of positional arguments', 'Creates a dictionary', 'Creates a tuple'],
    correctAnswer: 1,
    explanation: '*args allows a function to accept any number of positional arguments as a tuple.',
    difficulty: 'medium'
  },
  {
    id: 'django-adv-1',
    topic: 'django',
    question: 'What is a QuerySet?',
    code: `User.objects.filter(age__gte=18)`,
    options: ['A database', 'A lazy database lookup', 'A model', 'A view'],
    correctAnswer: 1,
    explanation: 'QuerySets are lazy database lookups that are only executed when evaluated.',
    difficulty: 'medium'
  },
  {
    id: 'django-adv-2',
    topic: 'django',
    question: 'What does select_related do?',
    code: `Book.objects.select_related('author').all()`,
    options: ['Filters results', 'Performs SQL JOIN to reduce queries', 'Orders results', 'Creates a queryset'],
    correctAnswer: 1,
    explanation: 'select_related performs a SQL JOIN to fetch related objects in a single query, reducing database hits.',
    difficulty: 'hard'
  },
  {
    id: 'django-adv-3',
    topic: 'django',
    question: 'What are Django migrations?',
    code: `python manage.py makemigrations`,
    options: ['Handles routing', 'Propagates model changes to database schema', 'Creates views', 'Manages static files'],
    correctAnswer: 1,
    explanation: 'Migrations are how Django propagates changes to models into the database schema.',
    difficulty: 'easy'
  },
  {
    id: 'django-adv-4',
    topic: 'django',
    question: 'What are Django signals?',
    code: `post_save.connect(my_handler, sender=User)`,
    options: ['HTTP requests', 'Decoupled event notifications', 'Database queries', 'Template tags'],
    correctAnswer: 1,
    explanation: 'Signals allow decoupled applications to get notified when certain actions occur elsewhere in the framework.',
    difficulty: 'hard'
  },
  {
    id: 'css-adv-1',
    topic: 'css',
    question: 'What does the :not() pseudo-class do?',
    code: `div:not(.special) { color: red; }`,
    options: ['Selects all elements', 'Excludes elements matching selector', 'Selects parent elements', 'Creates animations'],
    correctAnswer: 1,
    explanation: ':not() pseudo-class excludes elements that match the given selector.',
    difficulty: 'medium'
  },
  {
    id: 'css-adv-2',
    topic: 'css',
    question: 'What is CSS specificity?',
    code: `#id { color: red; }
.class { color: blue; }`,
    options: ['Animation timing', 'Priority calculation for conflicting styles', 'Layout algorithm', 'Color scheme'],
    correctAnswer: 1,
    explanation: 'Specificity determines which CSS rule applies when multiple rules target the same element.',
    difficulty: 'medium'
  },
  {
    id: 'css-adv-3',
    topic: 'css',
    question: 'What does transform do?',
    code: `div { transform: translate(50px, 100px); }`,
    options: ['Changes color', 'Applies 2D/3D transformations', 'Creates animations', 'Changes font'],
    correctAnswer: 1,
    explanation: 'The transform property applies 2D or 3D transformations to elements.',
    difficulty: 'easy'
  },
  {
    id: 'css-adv-4',
    topic: 'css',
    question: 'What are CSS custom properties?',
    code: `--primary-color: #3498db;
color: var(--primary-color);`,
    options: ['A JavaScript feature', 'CSS variables for reusable values', 'Browser settings', 'Preprocessor syntax'],
    correctAnswer: 1,
    explanation: 'CSS custom properties (variables) allow you to store and reuse values throughout your stylesheet.',
    difficulty: 'medium'
  },
  {
    id: 'css-adv-5',
    topic: 'css',
    question: 'What do media queries do?',
    code: `@media (max-width: 768px) {
  .container { width: 100%; }
}`,
    options: ['Creates animations', 'Applies styles conditionally based on device characteristics', 'Imports fonts', 'Defines variables'],
    correctAnswer: 1,
    explanation: '@media queries apply styles conditionally based on device characteristics like screen width.',
    difficulty: 'easy'
  }
]
    correctAnswer: 1,
    explanation: 'Specificity determines which CSS rule applies when multiple rules target the same element.',
    difficulty: 'medium'
  },
  {
    id: 'css-adv-3',
    topic: 'css',
    question: 'What does transform do?',
    code: `div { transform: translate(50px, 100px); }`,
    options: ['Changes color', 'Applies 2D/3D transformations', 'Creates animations', 'Changes font'],
    correctAnswer: 1,
    explanation: 'The transform property applies 2D or 3D transformations to elements.',
    difficulty: 'easy'
  },
  {
    id: 'css-adv-4',
    topic: 'css',
    question: 'What are CSS custom properties?',
    code: `--primary-color: #3498db;
color: var(--primary-color);`,
    options: ['A JavaScript feature', 'CSS variables for reusable values', 'Browser settings', 'Preprocessor syntax'],
    correctAnswer: 1,
    explanation: 'CSS custom properties (variables) allow you to store and reuse values throughout your stylesheet.',
    difficulty: 'medium'
  },
  {
    id: 'css-adv-5',
    topic: 'css',
    question: 'What do media queries do?',
    code: `@media (max-width: 768px) {
  .container { width: 100%; }
}`,
    options: ['Creates animations', 'Applies styles conditionally based on device characteristics', 'Imports fonts', 'Defines variables'],
    correctAnswer: 1,
    explanation: '@media queries apply styles conditionally based on device characteristics like screen width.',
    difficulty: 'easy'
  }
]
