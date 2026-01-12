import { Quiz } from './types'

    id: 'js-adv-1',
   
    id: 'js-adv-1',
    topic: 'javascript',
    question: 'What will this closure code output?',
    code: `function createCounter() {
    options: ['0
    explanation: 'The
  },
    
 
  if (e.target.matches('.c
  }
    options: ['Addi
    options: ['0, 0', '1, 1', '1, 2', 'undefined, undefined'],
    correctAnswer: 2,
    explanation: 'The closure maintains access to the count variable, incrementing it with each call. First call returns 1, second returns 2.',
    difficulty: 'hard'
    
  {
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
    correctAnswer: 
    topic: 'javascript',
    question: 'What does hoisting do to this code?',
    code: `console.log(x);
var x = 5;`,
    options: ['Error', 'undefined', '5', 'null'],
    correctAnswer: 1,
    explanation: 'Variable declarations are hoisted to the top but not their assignments, so x is undefined when logged.',
    difficulty: 'medium'
  },
   
    id: 'js-adv-4',
    id: 'ts-adv-1',
    question: 'What will be logged when trying to modify a frozen object?',
    code: `type StringOrNumber = string | numbe
obj.a = 2;
}`,
    options: ['2', '1', 'Error', 'undefined'],
    explanation: 'Uni
    explanation: 'Object.freeze() prevents modification of existing properties. The assignment fails silently in non-strict mode.',
    difficulty: 'hard'
  },
   
    id: 'js-adv-5',
    options: ['Creates a
    question: 'What does the async/await syntax do?',
    code: `async function fetchData() {
  const response = await fetch('/api');
  },
   
    question: 'What does the "with" statement do?',
    content = f.read(
    correctAnswer: 1,
    difficulty: 'medium'
  {
   
    code: `MyModel.
    correctAnswer: 0,
    difficulty: 'hard'
  {
    topic: 'django',
    code: `Auth
   
    difficulty: 'hard'
  {
    topic: 'django',
    code: `from django.d
    
   
  },
    id: 'css-adv-1',
    question: 'What does CSS Grid auto-fit do?',
    options: ['Fits content automatically', 'Creates re
    explanation: 'auto-fit create
  },
    id: 'css-adv-2',
    question: 'What is the flexbox gap property?',
  display: flex;
}`,
   
    difficulty: 'ea
  {
    topic: 'css',
    code: `:root {
}
  co
    options: ['Comments', 'Reusable values that can be referenced', 'JavaScript variables', 'Deprecated syntax'],
    explanation: 'CSS
  },
    id: 'css-adv-4',
    
  .
    options: ['A CSS pr
    explanation: 'Me
  },
    id: 'react-adv-1',
    question: 'What is the useEffect cleanup function?',
  const subscription 
}, []);`,
    correctAnswer: 1,
    
  {
    topic: 'react',
    code: `const val
}, [a, b]);`,
    correctAnswer: 1
    difficulty: 'm
  {
    topic: 'react',
    code: `const hand
}, [a, b]);`,
    correctAnswer: 1,
    
  {
    topic: 'react',
    code: `const The
    options: ['Local state', 'Global state sharing 
    explanation: 'Context API allows sharin
  }







































































































































