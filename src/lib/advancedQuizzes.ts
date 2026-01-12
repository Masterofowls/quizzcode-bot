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
    explanation: 'Closures allow inner functions to access variables from their outer scope. The counter increments each call, returning 1 then 2.',
    difficulty: 'medium'
  },
  {
    id: 'js-adv-2',
    topic: 'javascript',
    question: 'What is event bubbling in JavaScript?',
    code: `document.getElementById('child').addEventListener('click', () => {
  console.log('child');
});
document.getElementById('parent').addEventListener('click', () => {
  console.log('parent');
});`,
    options: ['Events propagate from parent to child', 'Events propagate from child to parent', 'Events only fire on the target', 'Events fire randomly'],
    correctAnswer: 1,
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
    question: 'What is the purpose of the key prop in React lists?',
    code: `const items = ['a', 'b', 'c'];
items.map((item, index) => 
  <li key={index}>{item}</li>
);`,
    options: ['Styling elements', 'Identifying elements for efficient updates', 'Setting event handlers', 'Creating unique IDs'],
    correctAnswer: 1,
    explanation: 'Keys help React identify which items have changed, been added, or removed, enabling efficient DOM updates.',
    difficulty: 'medium'
  },
  {
    id: 'css-adv-1',
    topic: 'css',
    question: 'What does CSS Grid "gap" property do?',
    code: `.container {
  display: grid;
  gap: 20px;
}`,
    options: ['Sets padding inside elements', 'Sets space between grid items', 'Sets margin outside the container', 'Sets border width'],
    correctAnswer: 1,
    explanation: 'The gap property sets the spacing between grid items (rows and columns) in CSS Grid layouts.',
    difficulty: 'medium'
  },
  {
    id: 'css-adv-2',
    topic: 'css',
    question: 'What is CSS specificity?',
    code: `#id .class div { }  /* A */
.class div { }       /* B */`,
    options: ['How fast CSS loads', 'Weight of selectors determining which styles apply', 'Order of CSS rules', 'CSS validation'],
    correctAnswer: 1,
    explanation: 'CSS specificity determines which style rules take precedence based on selector weight (IDs > classes > elements).',
    difficulty: 'hard'
  },
  {
    id: 'css-adv-3',
    topic: 'css',
    question: 'What are CSS custom properties (variables)?',
    code: `:root {
  --primary-color: blue;
}
.element {
  color: var(--primary-color);
}`,
    options: ['A class name', 'Reusable values that can be referenced', 'A pseudo-class', 'An attribute selector'],
    correctAnswer: 1,
    explanation: 'CSS custom properties (variables) allow storing and reusing values throughout stylesheets using the var() function.',
    difficulty: 'medium'
  },
  {
    id: 'python-adv-1',
    topic: 'python',
    question: 'What is a decorator in Python?',
    code: `@cache
def slow_function():
    return expensive_computation()`,
    options: ['A comment', 'A function that modifies another function', 'A type annotation', 'A class method'],
    correctAnswer: 1,
    explanation: 'Decorators are functions that modify the behavior of other functions or classes, using the @ syntax.',
    difficulty: 'hard'
  },
  {
    id: 'python-adv-2',
    topic: 'python',
    question: 'What is the __init__ method in Python?',
    code: `class Person:
    def __init__(self, name):
        self.name = name`,
    options: ['Destroys objects', 'Initializes new objects', 'Compares objects', 'Converts to string'],
    correctAnswer: 1,
    explanation: 'The __init__ method is a constructor that initializes new instances of a class with initial values.',
    difficulty: 'easy'
  },
  {
    id: 'python-adv-3',
    topic: 'python',
    question: 'What is list slicing in Python?',
    code: `nums = [0, 1, 2, 3, 4, 5]
result = nums[1:4]`,
    options: ['[1, 2, 3]', '[1, 2, 3, 4]', '[0, 1, 2, 3]', '[2, 3, 4]'],
    correctAnswer: 0,
    explanation: 'List slicing extracts a portion of a list. [1:4] means start at index 1 (inclusive) and end at index 4 (exclusive).',
    difficulty: 'easy'
  }
]
