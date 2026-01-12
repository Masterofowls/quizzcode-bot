import { Quiz } from './types'

    id: 'js-adv-1',
   
    id: 'js-adv-1',
    topic: 'javascript',
    question: 'What is a closure in JavaScript?',
    code: `function counter() {
}
  return function() {
    options: ['0 0'
  }
 
const c = counter();
    id: 'js-adv-2',
    options: ['0 0', '1 2', '1 1', 'undefined undefined'],
    explanation: 'Eve
  },
    id: 'js-adv-3',
    
con
    options: ['{ a:
    explanation: 'Object
  },
    id: 'ts-adv-1',
    question: 'What is 
let
    options: ['A type that combines properties', 'A type that can b
    explanation: 'Union 
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
    options: ['Converting t
    explanation: 'Ty
  },
    id: 'ts-adv-4',
    question: 'What are generics in TypeScript?',
  return arg;
cons
   
    difficulty: 'me
  {
    topic: 'typescript',
    code: `interface User {
  name: string;
type PartialU
    correctAnswer: 1,
    difficulty: 'medi
  {
    topic: 'react',
    
}, 
    correctAnswer: 
    difficulty: 'hard'
  {
    topic: 'react',
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




















































































