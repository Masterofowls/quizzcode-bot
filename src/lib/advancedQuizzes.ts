import { Quiz } from './types'

export const ADVANCED_QUIZZES: Quiz[] = [
  {
  let count = 0;
    return ++count;
}
console.log(c());
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
    
  {
    id: 'js-adv-2',
    topic: 'javascript',
    question: 'What is event delegation?',
    code: `parent.addEventListener('click', (e) => {
  if (e.target.matches('.child')) {
    console.log('Child clicked');
   
});`,
    options: ['Adding events to all children', 'Using a parent listener to handle child events', 'Preventing default behavior', 'Event bubbling'],
    correctAnswer: 1,
    explanation: 'Event delegation uses a single parent listener to handle events from multiple children efficiently.',
    difficulty: 'medium'
obj.
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
    id: 'ts-adv-2',
    question: 'What will be logged?',
    code: `function example(x: string | number)
obj.a = 2;
  }
    options: ['2', '1', 'Error', 'undefined'],
    correctAnswer: 1,
    explanation: 'Object.freeze() prevents modification of existing properties. The assignment fails silently in non-strict mode.',
    difficulty: 'hard'
  },
   
    id: 'ts-adv-1',
type PointKeys = keyof P
    question: 'What is a union type?',
    code: `type StringOrNumber = string | number;
function process(value: StringOrNumber) {
    options: ['
   
  },
    id: 'python-adv-2
    question: 'What is a decorator?',
def my_function():
    
   
  },
    id: 'django-adv-1',
    question: 'What is a QuerySet?',
    options: ['A list', 'A lazy database query ob
    explanation: 'QuerySets ar
  },
   
   
    options: ['Filters results', 'Performs SQL JOIN to reduce queries', 'Orders results', 'Limits results'],
    explanation: 'sel
  },
    id: 'django-adv-3',
    
   
    options: ['A da
    explanation: 'Middle
  },
    id: 'django-adv-4',
    question: 'What does prefet
    options: ['Performs JOIN', 'Performs separate queries and joins in Python', 'Caches resu
    explanation: 'pre
  },
    id: 'css-adv-1',
    
   
    explanation: 'T
  },
    id: 'css-adv-2',
    question: 'What is flexbox gap property?
gap: 1rem;`,
   
    difficulty: 'easy'
  {
    topic: 'css',
    code: `transform: ro
    
   
  {
    topic: 'css',
    code: `--primary-color: blue;
    options: ['Comments', 'CSS variables', 'Preproces
    explanation: 'CSS custom proper
  },
    id: 'css-adv-5',
    question: 'What is a media query?',
  .container { width: 10
    
   
  }

























































































































