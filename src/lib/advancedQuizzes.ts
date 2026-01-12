import { Quiz } from './types'

    id: 'js-adv-1',
   
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
  {
    topic: 'javascript',
    code: `document.ge
});
doc
});`,
    correctAnswer: 0,
    difficulty: 'medium'
  {
    topic: 'javascript',
   
con
    correctAnswer: 1,
    difficulty: 'medium'
  {
    topic: 'typescript',
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
  },
    id: 'django-adv-2',
    question: 'What does select_relat
    options: 
    explanation: 'select_related performs SQL JOIN to fetch related objects in a single query, r
  },
    id: 'django-adv-3',
    question: 'What is
    
   
  },
    id: 'css-adv-1',
    question: 'What does CSS Grid "gap" pro
  display: grid;
}`,
    correctAnswer: 1,
    difficulty: 'medium'
  {
    topic: 'css',
    code: `#id .class 
    
   
  {
    topic: 'css',
    code: `.element {
}`,
    correctAnswer: 1,
    difficulty: 'hard
  {
    topic: 'css',
    
}
  color: var(--primary-
    options: ['A cla
    explanation: 'CSS custom properties (variables)
  },
    id: 'python-adv-1',
    question: 'What i
def slow_function():
    options: ['A comme
    
  }
    id: 'python-adv-
    question: 'Wh
    def __init__(self, name):
    options: ['Destroys
    explanation:
  },
   
    question: 'What is list slicing in Python?',
result = nums[1:4]`,
    correctAnswer: 0,
    difficulty: 'easy'
]









































































