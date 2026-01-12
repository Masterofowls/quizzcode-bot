import { Quiz } from './types'

    id: 'js-adv-1',
   
  let count = 0;
}
console.log(counter(), counter());`,
    correctAnswer: 2,
    difficulty: 
  {
 
    code: `document.getElementBy
    console.log('Child clicked');
});`,
    correctAnswer: 1,
    difficulty: 'medium'
    difficulty: 'hard'
  },
   
    id: 'js-adv-2',
    topic: 'javascript',
    question: 'What is event delegation in JavaScript?',
    code: `document.getElementById('parent').addEventListener('click', (e) => {
  if (e.target.matches('.child')) {
    console.log('Child clicked');
  }
});`,
    options: ['Adding events to all children', 'Using a parent listener to handle child events', 'Preventing event bubbling', 'Creating custom events'],
    correctAnswer: 1,
    explanation: 'Event delegation uses a single parent listener to handle events from multiple children efficiently.',
    difficulty: 'medium'
  },
  {
    options: ['2', 
    explanation: 'Object
  },
    id: 'js-adv-5',
    question
  const response = await fetch('/api');
}`,
    correctAnswer: 1,
    difficulty: 'medium'
  {
   
    code: `type Str
value = 42;`,
    correctAnswer: 1,
    difficulty: 'medium'
  {
    topic: 'typescrip
    code: `function throwError(msg: string): n
}`,
    correctAnswer: 1,
    difficulty: 'hard'
  {
   
    code: `function
    return value.toUpper
  return value.toFixed(2);
    options: ['Type conversion', 'Refin
    explanation: 'Type narrowing is whe
  },
   
    question: 'What is the useEffect cleanup function?',
  const subscription 
}, []);`,
    correctAnswer: 1,
    
  {
    topic: 'react',
    code: `const value =
}, [a, b]);`,
    code: `type StringOrNumber = string | number;
let value: StringOrNumber = "hello";
value = 42;`,
    options: ['A type that combines properties', 'A type that can be one of several types', 'An enum', 'A generic type'],
    correctAnswer: 1,
    explanation: 'Union types allow a variable to hold values of different specified types using the | operator.',
    difficulty: 'medium'
  },
   
    id: 'ts-adv-2',
    topic: 'typescript',
    question: 'What does the "never" type represent?',
    code: `function throwError(msg: string): never {
  throw new Error(msg);
}`,
    options: ['A null value', 'A value that never occurs', 'An undefined value', 'An empty type'],
    correctAnswer: 1,
    explanation: 'The never type represents values that never occur, like functions that always throw or never return.',
    difficulty: 'hard'
  },
  {
    id: 'ts-adv-3',
    topic: 'typescript',
    question: 'What is type narrowing in TypeScript?',
    code: `function process(value: string | number) {
  if (typeof value === "string") {
    return value.toUpperCase();
  }
  return value.toFixed(2);
}`,
    options: ['Type conversion', 'Refining types within conditional blocks', 'Type casting', 'Type inference'],
    correctAnswer: 1,
    explanation: 'Type narrowing is when TypeScript refines a type to a more specific type based on runtime checks.',
    difficulty: 'hard'
  },
  {
    id: 'react-adv-1',
    topic: 'react',
    question: 'What is the useEffect cleanup function?',
    code: `useEffect(() => {
  const subscription = subscribe();
  return () => subscription.unsubscribe();
}, []);`,
    options: ['Error handler', 'Cleanup function that runs on unmount', 'State initializer', 'Async function'],
    correctAnswer: 1,
    explanation: 'The function returned from useEffect runs when the component unmounts or before the effect runs again.',
    difficulty: 'medium'
  },
  {
    id: 'react-adv-2',
    topic: 'react',
    question: 'What does useMemo do?',
    code: `const value = useMemo(() => {
  return expensiveCalculation(a, b);
}, [a, b]);`,
    options: ['Memoizes a callback', 'Memoizes a computed value', 'Creates state', 'Handles side effects'],
    correctAnswer: 1,
    explanation: 'useMemo memoizes the result of a computation and only recalculates when dependencies change.',
    difficulty: 'medium'
  },
  {
    id: 'react-adv-3',
    topic: 'react',
    question: 'What does useCallback do?',
    code: `const handleClick = useCallback(() => {
  doSomething(a, b);
}, [a, b]);`,
    options: ['Memoizes a value', 'Memoizes a function', 'Creates an effect', 'Handles events'],
    correctAnswer: 1,
    explanation: 'useCallback returns a memoized version of the callback that only changes if dependencies change.',
    difficulty: 'medium'
  },
  {
    code: `@receiver(p
    if created:
    options: ['Validate data', 'Allow decoupled ap
    explanation: 'Signals allow certain senders to notify recei
  },
    id: 'django-adv-3
    question: 'What is Django middleware?',
    options: ['A databas
    
  }
    id: 'css-adv-1',
    question: 'What 
    options: ['Fits content automatically', 'Cr
    explanation: 
  },
    id: 'c
    question: 'What is the flexbox gap property?',
  display: flex;
}`,
    correctAnswer: 1,
    
  {
    topic: 'css',
    code: `:root {
}
  color: var(--main-color);
    options: ['Comments'
    explanation: 'CSS custom properties (variables) allow defining reusable values that can be referenced throughout the stylesheet
  },
    id: 'css-adv-4',
    question: 'What is a
  .s
   
    explanation: 'Media
  }




























































































