import { Quiz } from './types'

    id: 'js-adv-1',
   
    id: 'js-adv-1',
    topic: 'javascript',
    question: 'What will this closure return?',
    code: `function createCounter() {
}
console.log(counter()
    options: ['0, 0
   
 
    id: 'js-adv-2',
    question: 'What is 
  if (e.target.matches('.
  }
    options: ['Adding
    explanation: 'Event delegation uses event bubbling to handle events at a parent level rather than attaching listeners to e
  },
    
   
  .then(x => x + 1)
  .catch(e => 'error')
    options: ['Logs 2', 'Logs "error"', 'T
    explanation: 'The catch handler catches the error and returns "error", whic
  },
    id: 'js-adv-4',
   
var x
    correctAnswer: 1,
    difficulty: 'medi
  {
    topic: 'javascript',
    
}`,
    correctAnswer: 
    difficulty: 'medium'
  {
    topic: 'javascript',
    code: `const ob
console.log(a);`,
    correctAnswer: 1,
    difficulty: 'easy'
  {
    topic: 'typescrip
    code: `type StringOrNumber = string | number;
    options: ['Type in
    
  }
    id: 'ts-adv-2',
    question: 'What is t
  if (typeof value === 'string') {
  }
}`,
    correctAnswer: 1,
    difficulty: 'medi
  {
    topic: 'typescript',
    
   
    explanation: 'k
  },
    id: 'ts-adv-4',
    question: 'What are generics?',
  return arg;
   
    explanation: 'Generics allow you to write reusable code that works 
  },
    id: 'ts-adv-5',
    question: 'What does
type
   
    difficulty: 'me
  {
    topic: 'react',
    code: `const handleClick = useCall
}, [count]);`,
    correctAnswer
    difficulty: 'medium'
  {
    topic: 'react',
    code: `const value
}, [
   
    difficulty: 'me
  {
    topic: 'react',
    code: `const inputRef = useRef(null);
    options: ['Creates state', 'Create
    explanation: 'useRef creates a mutable reference that persists across renders
  },
    id: 'python-adv-1',
    question: 'What is
    
   
    options: ['Crea
    explanation: 'Genera
  },
    id: 'python-adv-2',
    question: 'What is list compre
    options: ['Loop syntax', 'C
   
  },
   
    question: 'What does *args do?',
    print(args)`,
    correctAnswer: 1,
    difficulty: 'medium'
  {
   
    code: `User.obj
    correctAnswer: 1,
    difficulty: 'medium'
  {
    topic: 'django',
    code: `Book.objects.select_related('author')`,
    correctAnswer: 1,
    difficulty: 'hard'
  {
    
   
    correctAnswer: 
    difficulty: 'easy'
  {
    topic: 'django',
    code: `po
   
    difficulty: 'hard'
  {
    topic: 'css',
    code: `div:not(.spec
    
   
  {
    topic: 'css',
    code: `display: flex;
    options: ['Grid layout', 'One-dimensional layout model', 'Absolu
    explanation: 'Flexbox is a one-dimensional l
  },
    id: 'css-adv-3',
    question: 'What does transform do?',
    options: ['Animates 
    
  }
    id: 'css-adv-4',
    question: 'What
color: var(--main-color);`,
    correctAnswer: 1,
    difficulty: 'medi
  {
    topic: 'css',
    code: `@media (ma
}`,
    correctAnswer: 1,
    
]



































































































    topic: 'css',
    question: 'What does :not() do?',
    code: `div:not(.special) { color: red; }`,
    options: ['Negates class', 'Selects elements not matching selector', 'Creates new class', 'Removes element'],
    correctAnswer: 1,
    explanation: 'The :not() pseudo-class selects elements that do not match the given selector.',
    difficulty: 'medium'
  },
  {
    id: 'css-adv-2',
    topic: 'css',
    question: 'What is flexbox?',
    code: `display: flex;
justify-content: center;`,
    options: ['Grid layout', 'One-dimensional layout model', 'Absolute positioning', 'Float layout'],
    correctAnswer: 1,
    explanation: 'Flexbox is a one-dimensional layout method for arranging items in rows or columns.',
    difficulty: 'easy'
  },
  {
    id: 'css-adv-3',
    topic: 'css',
    question: 'What does transform do?',
    code: `transform: rotate(45deg) scale(1.5);`,
    options: ['Animates elements', 'Applies 2D/3D transformations', 'Changes color', 'Modifies text'],
    correctAnswer: 1,
    explanation: 'The transform property applies 2D or 3D transformations to elements.',
    difficulty: 'medium'
  },
  {
    id: 'css-adv-4',
    topic: 'css',
    question: 'What are CSS variables?',
    code: `--main-color: blue;
color: var(--main-color);`,
    options: ['JavaScript variables', 'Custom properties for reusable values', 'Class names', 'Media queries'],
    correctAnswer: 1,
    explanation: 'CSS custom properties (variables) store reusable values throughout the stylesheet.',
    difficulty: 'medium'
  },
  {
    id: 'css-adv-5',
    topic: 'css',
    question: 'What are media queries?',
    code: `@media (max-width: 768px) {
  .container { width: 100%; }
}`,
    options: ['JavaScript functions', 'Conditional CSS for different devices', 'Animation keyframes', 'Color schemes'],
    correctAnswer: 1,
    explanation: 'Media queries apply CSS rules based on device characteristics like screen width.',
    difficulty: 'easy'
  }
]
