import { Quiz } from './types'

export const ADVANCED_QUIZZES: Quiz[] = [
  {
    question: 'What
  let count = 0;
    return ++count;
}
console.log(c())
    options: ['0, 0',
    explanation: 'T
  },
 
    question: 'What 
  if (e.target.ma
  }
    options: ['Adding events to all children', 'Usi
    explanation: 'Eve
  },
    id: 'js-adv-3',
    
var
    correctAnswer: 
    difficulty: 'medium'
  {
    topic: 'javascript',
    code: `const obj = Object.freez
console.log(obj.a);`,
   
    d
  {
    topic: 'typescrip
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
    question: 'What will be logged when trying to modify a frozen object?',
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
  {
   
    code: `squares = [x**2 for x in range(10)]`,
    correctAnswer: 0,
    difficulty: 'medium'
  {
    
   
    correctAnswer: 
    difficulty: 'medium'
  {
    topic: 'django',
    code: `MyModel.objects.sele
    correctAnswer: 1,
    difficulty: 'hard
  {
    topic: 'django',
    
]`,
    correctAnswer: 1,
    difficulty: 'med
  {
    topic: 'django',
    code: `MyModel
    correc
    difficulty: 'hard'
  {
    topic: 'css',
    code: `display: gr
    
   
  },
    id: 'css-adv-2',
    question: 'What is the flexbox gap prope
  display: flex;
}`,
    correctAnswer: 1,
    difficulty: 'easy'
  {
    
   
    correctAnswer: 1,
    difficulty: 'eas
  {
    topic: 'css',
    code: `--primary-color: blue;
    options: ['Commen
    explanation: 'CSS custom properties (variables) allow you to store and reuse values throug
  },
    
   
  .container { width: 1
    options: ['A CSS
    explanation: 'Media queries allow you to 
  },
    id: 'react-adv-1',
    question: 'What i
  console.log('Effect ran');
    options: ['State m
    
  }
    id: 'react-adv-2',
    question: 'What 
  return expensiveCalculation(a, b);
    options: ['Memoizes f
    explanation: 'useMemo memoizes a computed va
  }

































































































