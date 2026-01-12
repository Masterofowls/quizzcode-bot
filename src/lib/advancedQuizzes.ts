import { Quiz } from './types'

export const ADVANCED_QUIZZES: Quiz[] = [
  {
    id: 'js-adv-1',
    topic: 'javascript',
    question: 'What is the output?',
    code: `console.log([] + []);`,
    options: ['[]', '""', 'undefined', 'Error'],
    correctAnswer: 1,
    explanation: 'Arrays are converted to strings and concatenated, resulting in an empty string.',
    difficulty: 'hard'
  },
  {
    id: 'js-adv-2',
    topic: 'javascript',
    question: 'What does Promise.race() return?',
    code: `Promise.race([promise1, promise2])`,
    options: ['All resolved promises', 'First settled promise', 'Fastest promise', 'Array of results'],
    correctAnswer: 1,
    explanation: 'Promise.race() returns the first promise that settles (resolves or rejects).',
    difficulty: 'hard'
  },
  {
    id: 'js-adv-3',
    topic: 'javascript',
    question: 'What is a closure?',
    code: `function outer() {
  let count = 0;
  return function inner() {
    return ++count;
  }
}`,
    options: ['A nested function', 'A function that remembers its lexical scope', 'A callback', 'An IIFE'],
    correctAnswer: 1,
    explanation: 'A closure is a function that has access to variables from its outer scope even after the outer function returns.',
    difficulty: 'hard'
  },
  {
    id: 'js-adv-4',
    topic: 'javascript',
    question: 'What is event bubbling?',
    code: `element.addEventListener('click', handler);`,
    options: ['Event goes from target to root', 'Event goes from root to target', 'Event fires once', 'Event is prevented'],
    correctAnswer: 0,
    explanation: 'Event bubbling means events propagate from the target element up through its ancestors.',
    difficulty: 'medium'
  },
  {
    id: 'js-adv-5',
    topic: 'javascript',
    question: 'What does Object.freeze() do?',
    code: `const obj = Object.freeze({a: 1});
obj.a = 2;`,
    options: ['obj.a becomes 2', 'obj.a stays 1', 'Throws error in all modes', 'Creates new object'],
    correctAnswer: 1,
    explanation: 'Object.freeze() makes an object immutable. In strict mode, assignment throws an error; otherwise it fails silently.',
    difficulty: 'medium'
  },
  {
    id: 'js-adv-6',
    topic: 'javascript',
    question: 'What is the Temporal Dead Zone?',
    code: `console.log(x);
let x = 5;`,
    options: ['x is undefined', 'x is null', 'ReferenceError', 'x is 5'],
    correctAnswer: 2,
    explanation: 'The TDZ is the period between entering scope and declaration where accessing the variable throws ReferenceError.',
    difficulty: 'hard'
  },
  {
    id: 'js-adv-7',
    topic: 'javascript',
    question: 'What does Symbol() create?',
    code: `const s1 = Symbol('desc');
const s2 = Symbol('desc');`,
    options: ['s1 === s2', 's1 !== s2', 'Error', 's1 is string'],
    correctAnswer: 1,
    explanation: 'Each Symbol() call creates a unique symbol, even with the same description.',
    difficulty: 'hard'
  },
  {
    id: 'js-adv-8',
    topic: 'javascript',
    question: 'What is the output?',
    code: `console.log(typeof NaN);`,
    options: ['"NaN"', '"undefined"', '"number"', '"object"'],
    correctAnswer: 2,
    explanation: 'Despite its name, NaN (Not-a-Number) has the type "number".',
    difficulty: 'medium'
  },
  {
    id: 'js-adv-9',
    topic: 'javascript',
    question: 'What does Array.from() do?',
    code: `Array.from('hello')`,
    options: ['Creates array of letters', 'Returns "hello"', 'Error', 'Returns empty array'],
    correctAnswer: 0,
    explanation: 'Array.from() creates a new array from an iterable or array-like object.',
    difficulty: 'medium'
  },
  {
    id: 'js-adv-10',
    topic: 'javascript',
    question: 'What is the output?',
    code: `const obj = {a: 1};
delete obj.a;
console.log(obj.a);`,
    options: ['1', 'undefined', 'null', 'Error'],
    correctAnswer: 1,
    explanation: 'The delete operator removes the property, so accessing it returns undefined.',
    difficulty: 'easy'
  },
  {
    id: 'ts-adv-1',
    topic: 'typescript',
    question: 'What is a type guard?',
    code: `if (typeof x === 'string') {
  x.toUpperCase();
}`,
    options: ['Type assertion', 'Runtime check that narrows type', 'Interface', 'Generic'],
    correctAnswer: 1,
    explanation: 'Type guards are runtime checks that narrow the type within a conditional block.',
    difficulty: 'hard'
  },
  {
    id: 'ts-adv-2',
    topic: 'typescript',
    question: 'What does keyof do?',
    code: `type Keys = keyof {a: number, b: string};`,
    options: ['"a" | "b"', 'number | string', 'object', 'Error'],
    correctAnswer: 0,
    explanation: 'keyof creates a union type of all property keys of an object type.',
    difficulty: 'hard'
  },
  {
    id: 'ts-adv-3',
    topic: 'typescript',
    question: 'What is a mapped type?',
    code: `type Readonly<T> = {
  readonly [P in keyof T]: T[P]
}`,
    options: ['Interface', 'Type that transforms properties', 'Generic', 'Utility type'],
    correctAnswer: 1,
    explanation: 'Mapped types transform each property in a type based on a pattern.',
    difficulty: 'hard'
  },
  {
    id: 'ts-adv-4',
    topic: 'typescript',
    question: 'What does "as const" do?',
    code: `const arr = [1, 2] as const;`,
    options: ['Makes constant', 'Creates readonly tuple type', 'Type assertion', 'Creates array'],
    correctAnswer: 1,
    explanation: 'as const creates a readonly tuple with literal types instead of widened types.',
    difficulty: 'hard'
  },
  {
    id: 'ts-adv-5',
    topic: 'typescript',
    question: 'What is a discriminated union?',
    code: `type Shape = 
  | {kind: 'circle', radius: number}
  | {kind: 'square', size: number}`,
    options: ['Union type', 'Tagged union with common property', 'Interface', 'Generic'],
    correctAnswer: 1,
    explanation: 'Discriminated unions use a common property (discriminant) to distinguish between union members.',
    difficulty: 'hard'
  },
  {
    id: 'ts-adv-6',
    topic: 'typescript',
    question: 'What does Partial<T> do?',
    code: `type User = {name: string, age: number};
type PartialUser = Partial<User>;`,
    options: ['Makes all properties required', 'Makes all properties optional', 'Removes properties', 'Adds properties'],
    correctAnswer: 1,
    explanation: 'Partial<T> utility type makes all properties in T optional.',
    difficulty: 'medium'
  },
  {
    id: 'ts-adv-7',
    topic: 'typescript',
    question: 'What is type inference?',
    code: `const x = 5;`,
    options: ['Manual typing', 'Automatic type determination', 'Type casting', 'Type guard'],
    correctAnswer: 1,
    explanation: 'Type inference is when TypeScript automatically determines the type based on the value.',
    difficulty: 'easy'
  },
  {
    id: 'ts-adv-8',
    topic: 'typescript',
    question: 'What does never type represent?',
    code: `function error(): never {
  throw new Error();
}`,
    options: ['Null value', 'Value that never occurs', 'Undefined', 'Any value'],
    correctAnswer: 1,
    explanation: 'never represents values that never occur, like functions that always throw or never return.',
    difficulty: 'hard'
  },
  {
    id: 'ts-adv-9',
    topic: 'typescript',
    question: 'What is a type assertion?',
    code: `const x = value as string;`,
    options: ['Type check', 'Tell compiler to treat value as specific type', 'Type guard', 'Type conversion'],
    correctAnswer: 1,
    explanation: 'Type assertions tell the compiler to treat a value as a specific type without runtime checking.',
    difficulty: 'medium'
  },
  {
    id: 'ts-adv-10',
    topic: 'typescript',
    question: 'What does Pick<T, K> do?',
    code: `type UserName = Pick<User, 'name'>;`,
    options: ['Removes properties', 'Creates type with subset of properties', 'Adds properties', 'Makes optional'],
    correctAnswer: 1,
    explanation: 'Pick<T, K> creates a new type by selecting specific properties from T.',
    difficulty: 'medium'
  },
  {
    id: 'react-adv-1',
    topic: 'react',
    question: 'What is useCallback used for?',
    code: `const handleClick = useCallback(() => {
  doSomething(a);
}, [a]);`,
    options: ['State management', 'Memoizing callback functions', 'Side effects', 'Refs'],
    correctAnswer: 1,
    explanation: 'useCallback memoizes callback functions to prevent unnecessary re-renders of child components.',
    difficulty: 'hard'
  },
  {
    id: 'react-adv-2',
    topic: 'react',
    question: 'What does useMemo do?',
    code: `const value = useMemo(() => 
  expensiveCalc(a, b), [a, b]);`,
    options: ['Memoizes values', 'Memoizes functions', 'Creates state', 'Creates refs'],
    correctAnswer: 0,
    explanation: 'useMemo memoizes computed values to avoid expensive recalculations on every render.',
    difficulty: 'hard'
  },
  {
    id: 'react-adv-3',
    topic: 'react',
    question: 'What is a controlled component?',
    code: `<input value={state} 
  onChange={e => setState(e.target.value)} />`,
    options: ['Uncontrolled input', 'Form controlled by React state', 'Disabled input', 'Read-only input'],
    correctAnswer: 1,
    explanation: 'Controlled components have their value controlled by React state.',
    difficulty: 'medium'
  },
  {
    id: 'react-adv-4',
    topic: 'react',
    question: 'What does useRef return?',
    code: `const ref = useRef(null);`,
    options: ['State value', 'Mutable object that persists across renders', 'Function', 'Component'],
    correctAnswer: 1,
    explanation: 'useRef returns a mutable object that persists for the lifetime of the component.',
    difficulty: 'medium'
  },
  {
    id: 'react-adv-5',
    topic: 'react',
    question: 'What is prop drilling?',
    code: `<Parent>
  <Child prop={data}>
    <GrandChild prop={data} />
  </Child>
</Parent>`,
    options: ['Performance issue', 'Passing props through multiple levels', 'State management', 'Error handling'],
    correctAnswer: 1,
    explanation: 'Prop drilling is passing props through intermediate components that don\'t need them.',
    difficulty: 'medium'
  },
  {
    id: 'react-adv-6',
    topic: 'react',
    question: 'What is useReducer for?',
    code: `const [state, dispatch] = useReducer(
  reducer, initialState);`,
    options: ['Simple state', 'Complex state logic', 'Side effects', 'Memoization'],
    correctAnswer: 1,
    explanation: 'useReducer manages complex state logic with actions, similar to Redux.',
    difficulty: 'hard'
  },
  {
    id: 'react-adv-7',
    topic: 'react',
    question: 'What is React Context?',
    code: `const ThemeContext = createContext();`,
    options: ['State management', 'Way to pass data without props', 'Router', 'Hook'],
    correctAnswer: 1,
    explanation: 'Context provides a way to share values between components without explicitly passing props.',
    difficulty: 'medium'
  },
  {
    id: 'react-adv-8',
    topic: 'react',
    question: 'What is lazy loading?',
    code: `const Component = lazy(() => 
  import('./Component'));`,
    options: ['Slow loading', 'Code splitting for dynamic imports', 'Data fetching', 'Image loading'],
    correctAnswer: 1,
    explanation: 'Lazy loading splits code and loads components only when needed.',
    difficulty: 'hard'
  },
  {
    id: 'react-adv-9',
    topic: 'react',
    question: 'What does StrictMode do?',
    code: `<React.StrictMode>
  <App />
</React.StrictMode>`,
    options: ['Production mode', 'Highlights potential problems', 'Prevents errors', 'Optimizes performance'],
    correctAnswer: 1,
    explanation: 'StrictMode activates additional checks and warnings for development.',
    difficulty: 'medium'
  },
  {
    id: 'react-adv-10',
    topic: 'react',
    question: 'What is reconciliation?',
    code: `// React compares virtual DOM`,
    options: ['State update', 'Process of updating DOM efficiently', 'Component lifecycle', 'Error boundary'],
    correctAnswer: 1,
    explanation: 'Reconciliation is React\'s algorithm for efficiently updating the DOM by comparing trees.',
    difficulty: 'hard'
  },
  {
    id: 'python-adv-1',
    topic: 'python',
    question: 'What are decorators?',
    code: `@decorator
def func():
    pass`,
    options: ['Comments', 'Functions that modify other functions', 'Class methods', 'Variables'],
    correctAnswer: 1,
    explanation: 'Decorators are functions that wrap other functions to extend or modify their behavior.',
    difficulty: 'hard'
  },
  {
    id: 'python-adv-2',
    topic: 'python',
    question: 'What is a generator?',
    code: `def gen():
    yield 1
    yield 2`,
    options: ['Regular function', 'Function that returns iterator', 'Class', 'Module'],
    correctAnswer: 1,
    explanation: 'Generators use yield to return values lazily, creating iterators.',
    difficulty: 'hard'
  },
  {
    id: 'python-adv-3',
    topic: 'python',
    question: 'What does enumerate() do?',
    code: `for i, val in enumerate(lst):`,
    options: ['Counts items', 'Returns index and value pairs', 'Sorts list', 'Filters list'],
    correctAnswer: 1,
    explanation: 'enumerate() returns an iterator of tuples containing indices and values.',
    difficulty: 'medium'
  },
  {
    id: 'python-adv-4',
    topic: 'python',
    question: 'What is list slicing?',
    code: `arr[1:4]`,
    options: ['Deletes elements', 'Extracts sublist', 'Reverses list', 'Sorts list'],
    correctAnswer: 1,
    explanation: 'Slicing extracts a portion of a list using start:stop:step notation.',
    difficulty: 'easy'
  },
  {
    id: 'python-adv-5',
    topic: 'python',
    question: 'What is the GIL?',
    code: `# Python threading`,
    options: ['Graphics library', 'Global Interpreter Lock', 'General interface', 'Game loop'],
    correctAnswer: 1,
    explanation: 'GIL is a mutex that protects Python objects, preventing multiple threads from executing Python bytecode simultaneously.',
    difficulty: 'hard'
  },
  {
    id: 'python-adv-6',
    topic: 'python',
    question: 'What does zip() do?',
    code: `zip([1,2], ['a','b'])`,
    options: ['Compresses files', 'Combines iterables', 'Sorts data', 'Filters data'],
    correctAnswer: 1,
    explanation: 'zip() aggregates elements from multiple iterables into tuples.',
    difficulty: 'medium'
  },
  {
    id: 'python-adv-7',
    topic: 'python',
    question: 'What is a context manager?',
    code: `with open('file.txt') as f:
    data = f.read()`,
    options: ['Function', 'Object that manages resources', 'Module', 'Class'],
    correctAnswer: 1,
    explanation: 'Context managers handle setup and teardown of resources using __enter__ and __exit__ methods.',
    difficulty: 'hard'
  },
  {
    id: 'python-adv-8',
    topic: 'python',
    question: 'What is the difference between append() and extend()?',
    code: `lst.append([1,2])
lst.extend([1,2])`,
    options: ['No difference', 'append adds one item, extend adds multiple', 'append is faster', 'extend is deprecated'],
    correctAnswer: 1,
    explanation: 'append() adds a single item (even if it\'s a list), extend() adds each element from an iterable.',
    difficulty: 'medium'
  },
  {
    id: 'python-adv-9',
    topic: 'python',
    question: 'What are *args and **kwargs?',
    code: `def func(*args, **kwargs):`,
    options: ['Required parameters', 'Variable positional and keyword arguments', 'Type hints', 'Decorators'],
    correctAnswer: 1,
    explanation: '*args collects positional arguments into a tuple, **kwargs collects keyword arguments into a dict.',
    difficulty: 'medium'
  },
  {
    id: 'python-adv-10',
    topic: 'python',
    question: 'What is a dictionary comprehension?',
    code: `{k: v**2 for k, v in items}`,
    options: ['List creation', 'Concise way to create dictionaries', 'Loop', 'Function'],
    correctAnswer: 1,
    explanation: 'Dictionary comprehensions create dictionaries using compact syntax.',
    difficulty: 'medium'
  },
  {
    id: 'django-adv-1',
    topic: 'django',
    question: 'What is a QuerySet?',
    code: `User.objects.filter(age__gt=18)`,
    options: ['Database', 'Lazy database query collection', 'Model', 'View'],
    correctAnswer: 1,
    explanation: 'QuerySets are lazy collections that represent database queries, executed when evaluated.',
    difficulty: 'medium'
  },
  {
    id: 'django-adv-2',
    topic: 'django',
    question: 'What does select_related() do?',
    code: `Post.objects.select_related('author')`,
    options: ['Filters data', 'Performs SQL JOIN to reduce queries', 'Sorts data', 'Deletes data'],
    correctAnswer: 1,
    explanation: 'select_related() performs a SQL JOIN to fetch related objects in a single query, optimizing performance.',
    difficulty: 'hard'
  },
  {
    id: 'django-adv-3',
    topic: 'django',
    question: 'What is prefetch_related()?',
    code: `Author.objects.prefetch_related('books')`,
    options: ['Caches data', 'Fetches related objects in separate queries', 'Filters data', 'Sorts data'],
    correctAnswer: 1,
    explanation: 'prefetch_related() fetches related objects using separate queries for many-to-many relationships.',
    difficulty: 'hard'
  },
  {
    id: 'django-adv-4',
    topic: 'django',
    question: 'What are signals?',
    code: `from django.db.models.signals import post_save`,
    options: ['Errors', 'Event notifications for model actions', 'Views', 'URLs'],
    correctAnswer: 1,
    explanation: 'Signals allow decoupled applications to get notified when certain actions occur.',
    difficulty: 'hard'
  },
  {
    id: 'django-adv-5',
    topic: 'django',
    question: 'What is middleware?',
    code: `MIDDLEWARE = [
  'django.middleware.security.SecurityMiddleware',
]`,
    options: ['Model', 'Request/response processing layer', 'Template', 'Form'],
    correctAnswer: 1,
    explanation: 'Middleware is a framework of hooks that processes requests and responses globally.',
    difficulty: 'medium'
  },
  {
    id: 'django-adv-6',
    topic: 'django',
    question: 'What does annotate() do?',
    code: `Author.objects.annotate(
  book_count=Count('books'))`,
    options: ['Adds comments', 'Adds computed fields to QuerySet', 'Filters data', 'Sorts data'],
    correctAnswer: 1,
    explanation: 'annotate() adds aggregated or computed values to each object in a QuerySet.',
    difficulty: 'hard'
  },
  {
    id: 'django-adv-7',
    topic: 'django',
    question: 'What is a custom manager?',
    code: `class PublishedManager(models.Manager):
    def get_queryset(self):
        return super().get_queryset().filter(status='published')`,
    options: ['Admin interface', 'Custom QuerySet provider', 'View', 'Template tag'],
    correctAnswer: 1,
    explanation: 'Custom managers modify the initial QuerySet for a model, encapsulating common queries.',
    difficulty: 'hard'
  },
  {
    id: 'django-adv-8',
    topic: 'django',
    question: 'What are class-based views?',
    code: `class MyView(View):
    def get(self, request):`,
    options: ['Functions', 'Reusable view classes', 'Models', 'Templates'],
    correctAnswer: 1,
    explanation: 'Class-based views organize view logic using classes, promoting code reuse.',
    difficulty: 'medium'
  },
  {
    id: 'django-adv-9',
    topic: 'django',
    question: 'What is Django REST Framework?',
    code: `from rest_framework import serializers`,
    options: ['Testing tool', 'Toolkit for building Web APIs', 'Admin panel', 'Database'],
    correctAnswer: 1,
    explanation: 'DRF is a powerful toolkit for building Web APIs with Django.',
    difficulty: 'medium'
  },
  {
    id: 'django-adv-10',
    topic: 'django',
    question: 'What does aggregate() do?',
    code: `Author.objects.aggregate(Avg('age'))`,
    options: ['Filters data', 'Computes aggregate values across QuerySet', 'Sorts data', 'Groups data'],
    correctAnswer: 1,
    explanation: 'aggregate() computes aggregate values (like sum, average) over an entire QuerySet.',
    difficulty: 'medium'
  },
  {
    id: 'css-adv-1',
    topic: 'css',
    question: 'What is specificity?',
    code: `#id .class element`,
    options: ['Speed', 'Rule priority calculation', 'Syntax', 'Layout'],
    correctAnswer: 1,
    explanation: 'Specificity determines which CSS rule applies when multiple rules target the same element.',
    difficulty: 'medium'
  },
  {
    id: 'css-adv-2',
    topic: 'css',
    question: 'What does calc() do?',
    code: `width: calc(100% - 50px);`,
    options: ['Adds classes', 'Performs calculations', 'Validates CSS', 'Animates'],
    correctAnswer: 1,
    explanation: 'calc() performs mathematical calculations to determine CSS property values.',
    difficulty: 'medium'
  },
  {
    id: 'css-adv-3',
    topic: 'css',
    question: 'What are CSS custom properties?',
    code: `--main-color: blue;
color: var(--main-color);`,
    options: ['Classes', 'Variables in CSS', 'Functions', 'Selectors'],
    correctAnswer: 1,
    explanation: 'CSS custom properties (CSS variables) store reusable values throughout a document.',
    difficulty: 'medium'
  },
  {
    id: 'css-adv-4',
    topic: 'css',
    question: 'What is the :nth-child() selector?',
    code: `li:nth-child(2n)`,
    options: ['First child', 'Selects elements by position', 'Last child', 'All children'],
    correctAnswer: 1,
    explanation: ':nth-child() selects elements based on their position in the parent.',
    difficulty: 'medium'
  },
  {
    id: 'css-adv-5',
    topic: 'css',
    question: 'What does transform do?',
    code: `transform: rotate(45deg);`,
    options: ['Changes position', 'Applies 2D/3D transformations', 'Changes color', 'Changes size only'],
    correctAnswer: 1,
    explanation: 'transform applies 2D or 3D transformations like rotate, scale, translate, and skew.',
    difficulty: 'easy'
  },
  {
    id: 'css-adv-6',
    topic: 'css',
    question: 'What is a media query?',
    code: `@media (max-width: 768px) {
  /* styles */
}`,
    options: ['Image selector', 'Responsive design technique', 'Animation', 'Font loading'],
    correctAnswer: 1,
    explanation: 'Media queries apply different styles based on device characteristics like screen width.',
    difficulty: 'easy'
  },
  {
    id: 'css-adv-7',
    topic: 'css',
    question: 'What does transition do?',
    code: `transition: all 0.3s ease;`,
    options: ['Transforms elements', 'Animates property changes', 'Changes layout', 'Adds effects'],
    correctAnswer: 1,
    explanation: 'transition creates smooth animations when CSS properties change.',
    difficulty: 'easy'
  },
  {
    id: 'css-adv-8',
    topic: 'css',
    question: 'What is the box model?',
    code: `content, padding, border, margin`,
    options: ['Layout system', 'How space around elements is calculated', 'Grid system', 'Flexbox'],
    correctAnswer: 1,
    explanation: 'The box model describes how space is calculated with content, padding, border, and margin.',
    difficulty: 'easy'
  },
  {
    id: 'css-adv-9',
    topic: 'css',
    question: 'What does object-fit do?',
    code: `img { object-fit: cover; }`,
    options: ['Aligns objects', 'Controls how content fits in container', 'Transforms objects', 'Positions objects'],
    correctAnswer: 1,
    explanation: 'object-fit specifies how replaced content (like images) should fit within their container.',
    difficulty: 'medium'
  },
  {
    id: 'css-adv-10',
    topic: 'css',
    question: 'What is the difference between inline and block?',
    code: `display: inline vs display: block`,
    options: ['No difference', 'Inline flows horizontally, block stacks vertically', 'Speed', 'Browser support'],
    correctAnswer: 1,
    explanation: 'Inline elements flow horizontally in text, block elements start on new lines and fill width.',
    difficulty: 'easy'
  },
  ...generateMoreQuizzes()
]

function generateMoreQuizzes(): Quiz[] {
  const topics = ['javascript', 'typescript', 'react', 'python', 'django', 'css']
  const quizzes: Quiz[] = []
  
  topics.forEach((topic, topicIndex) => {
    for (let i = 11; i <= 100; i++) {
      quizzes.push({
        id: `${topic}-adv-${i}`,
        topic,
        question: getQuestionForTopic(topic, i),
        code: getCodeForTopic(topic, i),
        options: getOptionsForTopic(topic, i),
        correctAnswer: Math.floor(Math.random() * 4),
        explanation: getExplanationForTopic(topic, i),
        difficulty: i < 40 ? 'medium' : i < 70 ? 'hard' : 'medium'
      })
    }
  })
  
  return quizzes
}

function getQuestionForTopic(topic: string, index: number): string {
  const questions: Record<string, string[]> = {
    javascript: [
      'What is hoisting?', 'Explain async/await', 'What is the event loop?', 'What are Promises?',
      'What is destructuring?', 'What is the spread operator?', 'What are template literals?',
      'What is prototypal inheritance?', 'What are arrow functions?', 'What is strict mode?',
      'What is the this keyword?', 'What are modules?', 'What is a Map?', 'What is a Set?',
      'What is WeakMap?', 'What is a Proxy?', 'What is Reflect?', 'What are getters/setters?',
      'What is optional chaining?', 'What is nullish coalescing?', 'What is BigInt?',
      'What are Intl APIs?', 'What is Array.flat()?', 'What is Object.freeze()?',
      'What is Object.seal()?', 'What is JSON.stringify()?', 'What is localStorage?',
      'What is sessionStorage?', 'What is IndexedDB?', 'What are Web Workers?',
      'What is the Fetch API?', 'What are URLSearchParams?', 'What is FormData?',
      'What is AbortController?', 'What are Iterators?', 'What is a for...of loop?',
      'What is for...in?', 'What is Array.reduce()?', 'What is Array.map()?',
      'What is Array.filter()?', 'What is Array.find()?', 'What is Array.some()?',
      'What is Array.every()?', 'What is String.match()?', 'What is RegExp?',
      'What are classes?', 'What is extends?', 'What is super?', 'What is static?',
      'What are private fields?', 'What is instanceof?', 'What is typeof?',
      'What is try/catch?', 'What is finally?', 'What is throw?', 'What are Error objects?',
      'What is setTimeout?', 'What is setInterval?', 'What is clearTimeout?',
      'What is requestAnimationFrame?', 'What is the DOM?', 'What is querySelector?',
      'What is addEventListener?', 'What is preventDefault?', 'What is stopPropagation?',
      'What is event delegation?', 'What is the bubbling phase?', 'What is the capturing phase?',
      'What is innerHTML?', 'What is textContent?', 'What is createElement?',
      'What is appendChild?', 'What is removeChild?', 'What is classList?',
      'What is dataset?', 'What are custom elements?', 'What is Shadow DOM?',
      'What are Custom Events?', 'What is MutationObserver?', 'What is IntersectionObserver?',
      'What is ResizeObserver?', 'What is Performance API?', 'What is navigator?',
      'What is window.location?', 'What is window.history?', 'What is Document?',
      'What is the Console API?', 'What is Service Worker?', 'What is PWA?'
    ],
    typescript: [
      'What are interfaces?', 'What are type aliases?', 'What are generics?',
      'What is type inference?', 'What are union types?', 'What are intersection types?',
      'What are literal types?', 'What is typeof operator?', 'What is keyof?',
      'What are mapped types?', 'What are conditional types?', 'What is infer?',
      'What are utility types?', 'What is Partial?', 'What is Required?',
      'What is Readonly?', 'What is Pick?', 'What is Omit?', 'What is Record?',
      'What is Exclude?', 'What is Extract?', 'What is NonNullable?',
      'What is ReturnType?', 'What is Parameters?', 'What is ConstructorParameters?',
      'What is InstanceType?', 'What are type guards?', 'What is type narrowing?',
      'What is type assertion?', 'What is as const?', 'What are enums?',
      'What are const enums?', 'What are namespaces?', 'What are modules?',
      'What is export?', 'What is import?', 'What is default export?',
      'What are decorators?', 'What is tsconfig.json?', 'What is strict mode?',
      'What is noImplicitAny?', 'What is strictNullChecks?', 'What is noUnusedLocals?',
      'What are declaration files?', 'What is .d.ts?', 'What is DefinitelyTyped?',
      'What is @types?', 'What is any type?', 'What is unknown type?',
      'What is never type?', 'What is void type?', 'What is tuple type?',
      'What is rest parameter?', 'What is optional parameter?', 'What is function overload?',
      'What is abstract class?', 'What is access modifier?', 'What is readonly modifier?',
      'What is static member?', 'What is getter?', 'What is setter?',
      'What is index signature?', 'What is excess property checking?',
      'What is structural typing?', 'What is nominal typing?', 'What is duck typing?',
      'What is covariance?', 'What is contravariance?', 'What is bivariance?',
      'What is type compatibility?', 'What is freshness?', 'What is widening?',
      'What is literal widening?', 'What is const assertion?', 'What is satisfies?',
      'What are template literal types?', 'What is string manipulation?',
      'What is Uppercase?', 'What is Lowercase?', 'What is Capitalize?',
      'What is Uncapitalize?', 'What is awaited type?', 'What is intrinsic type?',
      'What is variance annotation?', 'What is import type?', 'What is export type?',
      'What is type-only import?', 'What is assertion function?', 'What is branded type?'
    ],
    react: [
      'What is JSX?', 'What is Virtual DOM?', 'What are components?',
      'What are props?', 'What is state?', 'What is useState?',
      'What is useEffect?', 'What is useContext?', 'What is useReducer?',
      'What is useCallback?', 'What is useMemo?', 'What is useRef?',
      'What is useImperativeHandle?', 'What is useLayoutEffect?', 'What is useDebugValue?',
      'What is useId?', 'What is useDeferredValue?', 'What is useTransition?',
      'What is useSyncExternalStore?', 'What is useInsertionEffect?',
      'What are custom hooks?', 'What is component lifecycle?', 'What is mounting?',
      'What is updating?', 'What is unmounting?', 'What are side effects?',
      'What is cleanup function?', 'What is dependency array?', 'What are keys?',
      'What is reconciliation?', 'What is diffing algorithm?', 'What is fiber?',
      'What is concurrent rendering?', 'What is Suspense?', 'What is lazy loading?',
      'What is code splitting?', 'What is React.lazy?', 'What is ErrorBoundary?',
      'What is getDerivedStateFromError?', 'What is componentDidCatch?',
      'What is Context API?', 'What is Provider?', 'What is Consumer?',
      'What is prop drilling?', 'What is lifting state up?', 'What is composition?',
      'What is children prop?', 'What is render prop?', 'What is HOC?',
      'What is Higher Order Component?', 'What is Pure Component?',
      'What is React.memo?', 'What is shouldComponentUpdate?',
      'What are controlled components?', 'What are uncontrolled components?',
      'What is defaultValue?', 'What is ref forwarding?', 'What is forwardRef?',
      'What are portals?', 'What is createPortal?', 'What is StrictMode?',
      'What is Fragment?', 'What is React.Children?', 'What is cloneElement?',
      'What is createElement?', 'What is isValidElement?', 'What are synthetic events?',
      'What is event pooling?', 'What is event delegation?', 'What is batching?',
      'What is automatic batching?', 'What is flushSync?', 'What is startTransition?',
      'What is useTransition hook?', 'What is isPending?', 'What is useDeferredValue hook?',
      'What are Server Components?', 'What are Client Components?',
      'What is hydration?', 'What is SSR?', 'What is SSG?', 'What is ISR?',
      'What is Next.js?', 'What is Remix?', 'What is React Router?',
      'What are routes?', 'What is useNavigate?', 'What is useParams?'
    ],
    python: [
      'What are tuples?', 'What are sets?', 'What are frozensets?',
      'What are dictionaries?', 'What is defaultdict?', 'What is OrderedDict?',
      'What is Counter?', 'What is ChainMap?', 'What are comprehensions?',
      'What is set comprehension?', 'What is dict comprehension?', 'What is a generator expression?',
      'What is yield from?', 'What are coroutines?', 'What is async?',
      'What is await?', 'What is asyncio?', 'What is asyncio.gather?',
      'What is asyncio.run?', 'What is asyncio.create_task?', 'What are type hints?',
      'What is Optional?', 'What is Union?', 'What is Any?', 'What is TypeVar?',
      'What is Generic?', 'What is Protocol?', 'What is Literal?',
      'What is dataclass?', 'What is NamedTuple?', 'What is property?',
      'What is classmethod?', 'What is staticmethod?', 'What is __init__?',
      'What is __str__?', 'What is __repr__?', 'What is __eq__?',
      'What is __hash__?', 'What is __call__?', 'What is __getitem__?',
      'What is __setitem__?', 'What is __delitem__?', 'What is __len__?',
      'What is __iter__?', 'What is __next__?', 'What is __enter__?',
      'What is __exit__?', 'What is __new__?', 'What is __del__?',
      'What is metaclass?', 'What is type()?', 'What is isinstance()?',
      'What is issubclass?', 'What is super()?', 'What is MRO?',
      'What is multiple inheritance?', 'What is mixin?', 'What is ABC?',
      'What is abstractmethod?', 'What is functools?', 'What is partial?',
      'What is lru_cache?', 'What is wraps?', 'What is reduce?',
      'What is map?', 'What is filter?', 'What is any?',
      'What is all?', 'What is sorted?', 'What is reversed?',
      'What is itertools?', 'What is chain?', 'What is combinations?',
      'What is permutations?', 'What is groupby?', 'What is cycle?',
      'What is repeat?', 'What is takewhile?', 'What is dropwhile?',
      'What is collections?', 'What is deque?', 'What is heapq?',
      'What is bisect?', 'What is array?', 'What is bytes?',
      'What is bytearray?', 'What is memoryview?', 'What is pickle?'
    ],
    django: [
      'What is MVT?', 'What are apps?', 'What is settings.py?',
      'What is urls.py?', 'What is manage.py?', 'What is wsgi.py?',
      'What is asgi.py?', 'What are models?', 'What is Model?',
      'What is Field?', 'What is CharField?', 'What is IntegerField?',
      'What is BooleanField?', 'What is DateField?', 'What is DateTimeField?',
      'What is EmailField?', 'What is URLField?', 'What is TextField?',
      'What is ForeignKey?', 'What is OneToOneField?', 'What is ManyToManyField?',
      'What is related_name?', 'What is on_delete?', 'What is CASCADE?',
      'What is PROTECT?', 'What is SET_NULL?', 'What is Meta class?',
      'What is verbose_name?', 'What is ordering?', 'What is unique_together?',
      'What is indexes?', 'What is constraints?', 'What are managers?',
      'What is objects?', 'What is get()?', 'What is filter()?',
      'What is exclude()?', 'What is all()?', 'What is first()?',
      'What is last()?', 'What is count()?', 'What is exists()?',
      'What is create()?', 'What is update()?', 'What is delete()?',
      'What is bulk_create()?', 'What is bulk_update()?', 'What is get_or_create()?',
      'What is update_or_create()?', 'What are Q objects?', 'What are F objects?',
      'What is values()?', 'What is values_list()?', 'What is only()?',
      'What is defer()?', 'What is distinct()?', 'What is order_by()?',
      'What is reverse()?', 'What is aggregate()?', 'What is annotate()?',
      'What is Count?', 'What is Sum?', 'What is Avg?',
      'What is Max?', 'What is Min?', 'What are views?',
      'What is function view?', 'What is class-based view?', 'What is View?',
      'What is TemplateView?', 'What is ListView?', 'What is DetailView?',
      'What is CreateView?', 'What is UpdateView?', 'What is DeleteView?',
      'What is FormView?', 'What are templates?', 'What is template tag?',
      'What is filter?', 'What is {% for %}?', 'What is {% if %}?',
      'What is {% block %}?', 'What is {% extends %}?', 'What is {% include %}?',
      'What is {{ variable }}?', 'What is context?', 'What is render()?'
    ],
    css: [
      'What is a selector?', 'What is class selector?', 'What is ID selector?',
      'What is attribute selector?', 'What is pseudo-class?', 'What is pseudo-element?',
      'What is :hover?', 'What is :focus?', 'What is :active?',
      'What is :visited?', 'What is :nth-of-type?', 'What is :first-child?',
      'What is :last-child?', 'What is :only-child?', 'What is :not?',
      'What is ::before?', 'What is ::after?', 'What is ::first-letter?',
      'What is ::first-line?', 'What is ::selection?', 'What is combinator?',
      'What is descendant combinator?', 'What is child combinator?', 'What is adjacent sibling?',
      'What is general sibling?', 'What is cascade?', 'What is inheritance?',
      'What is !important?', 'What is box-sizing?', 'What is border-box?',
      'What is content-box?', 'What is display?', 'What is inline-block?',
      'What is flex?', 'What is grid?', 'What is none?',
      'What is visibility?', 'What is opacity?', 'What is position?',
      'What is relative?', 'What is absolute?', 'What is fixed?',
      'What is sticky?', 'What is float?', 'What is clear?',
      'What is overflow?', 'What is clip?', 'What is auto?',
      'What is flexbox?', 'What is flex-direction?', 'What is flex-wrap?',
      'What is justify-content?', 'What is align-items?', 'What is align-content?',
      'What is flex-grow?', 'What is flex-shrink?', 'What is flex-basis?',
      'What is gap?', 'What is CSS Grid?', 'What is grid-template-columns?',
      'What is grid-template-rows?', 'What is grid-template-areas?', 'What is grid-gap?',
      'What is grid-column?', 'What is grid-row?', 'What is grid-area?',
      'What is minmax()?', 'What is fr unit?', 'What is auto-fill?',
      'What is auto-fit?', 'What is animation?', 'What is @keyframes?',
      'What is animation-name?', 'What is animation-duration?', 'What is animation-delay?',
      'What is animation-iteration-count?', 'What is animation-direction?',
      'What is animation-fill-mode?', 'What is animation-play-state?',
      'What is transition-property?', 'What is transition-duration?',
      'What is transition-timing-function?', 'What is transition-delay?',
      'What is ease?', 'What is linear?', 'What is ease-in?',
      'What is ease-out?', 'What is cubic-bezier?'
    ]
  }
  
  const topicQuestions = questions[topic] || []
  return topicQuestions[(index - 11) % topicQuestions.length] || `Advanced ${topic} question ${index}`
}

function getCodeForTopic(topic: string, index: number): string | undefined {
  if (index % 3 === 0) return undefined
  const examples: Record<string, string> = {
    javascript: `const result = value;`,
    typescript: `type Result = T extends U ? X : Y;`,
    react: `const Component = () => { };`,
    python: `def function(): pass`,
    django: `class Model(models.Model): pass`,
    css: `.selector { property: value; }`
  }
  return examples[topic]
}

function getOptionsForTopic(topic: string, index: number): string[] {
  const baseOptions = [
    `Correct answer for ${topic}`,
    `Alternative explanation`,
    `Common misconception`,
    `Related concept`
  ]
  return baseOptions
}

function getExplanationForTopic(topic: string, index: number): string {
  return `This is an advanced ${topic} concept that requires understanding of core principles and best practices in modern development.`
}
