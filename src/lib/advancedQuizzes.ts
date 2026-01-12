import { Quiz } from './types'

    id: 'js-adv-1',
   
  let count = 0;
    return ++count;
}
console.log(c(), c());`,
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
   
    id: 'js-adv-2',
    topic: 'javascript',
    question: 'What is event bubbling?',
    code: `document.getElementById('parent').addEventListener('click', () => {
  console.log('Parent clicked');
   
document.getElementById('child').addEventListener('click', () => {
  console.log('Child clicked');
});`,
    options: ['Events propagate from child to parent', 'Events propagate from parent to child', 'Events fire simultaneously', 'Events cancel each other'],
    correctAnswer: 0,
    question: 'What is object destructuring doing here?',
const { a, ...rest } = o
    
   
  },
    id: 'ts-adv-1',
    question: 'What is a union type in TypeScri
let value: StringOrNumber = "hello";
    options: ['A type that combines p
    explanation: 'Union types allow a value
  },
    id: 'ts-adv-2',
    question: 'What d
  throw new Error(message);
    options: ['A nullabl
    
  }
    id: 'ts-adv-3',
    question: 'What is t
  if (typeof value === "string") {
  }
    options: ['Converting types', '
    explanation: 'Typ
  }
    id: 'ts-adv-4',
    question: 'What a
  return arg;
const result = identit
    
   
  {
    topic: 'typescript',
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
    topic: 'react',
type PartialUser = Partial<User>;`,
    options: ['Custom types', 'Built-in type transformations', 'Type guards', 'Decorators'],
    correctAnswer: 1,
    explanation: 'Utility types are built-in TypeScript types that transform existing types (e.g., Partial, Pick, Omit).',
    difficulty: 'medium'
    
  {
  {
    topic: 'django'
    code: `class CustomMiddleware:
        self.get_response = 
    correctAnswer: 1,
    diffi
  {
    topic: 'django',
    code: `User.objects.filter(is_active=True)`,
    correctAnswer: 1,
    
  {
    topic: 'django',
    code: `Book.obj
    correctAnswer: 1,
    difficulty: 'hard'
  {
    topic: 'd
    code: `user = User.objects.get(id=1)`,
    correctAnswer: 1,
    difficulty: 'medium'
  {
    
   
    correctAnswer: 1,
    difficulty: 'me
  {
    topic: 'css',
    code: `.containe
  gap: 20px;
    options: ['Border spacing', 'Space between flex items', 'Padding', 'Margin'],
    explanation: 'The
  },
    id: 'css-adv-3',
    
  -
.element {
}`,
    correctAnswer: 1,
    difficulty: 'medium'
  {
   
    code: `@media (
    displa
}`,
    correctAnswer: 1,
    diffic
  {
   
    code: `.box {
}`,
    correctAnswer: 1,
    difficulty: 'mediu
]





























































































































































































