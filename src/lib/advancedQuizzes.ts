import { Quiz } from './types'

export const ADVANCED_QUIZZES: Quiz[] = [
  {
    id: 'js-adv-1',
    topic: 'javascript',
    question: 'What will this closure return?',
    code: `function createCounter() {
    return ++cou
}
console.log(counter
    
 
  {
    topic: 'javascript',
    code: `document.getElementById('parent').addEventListe
    console.log('Chil
});`,
    difficulty: 'medium'
  },
  {
    id: 'js-adv-2',
  {
    question: 'What is event delegation?',
    code: `document.getElementById('parent').addEventListener('click', (e) => {
  if (e.target.matches('.child')) {
    console.log('Child clicked');
  }
});`,
    options: ['Adding events to all children', 'Using event bubbling to handle events on parent', 'Removing event listeners', 'Preventing default behavior'],
    correctAnswer: 1,
    explanation: 'Event delegation uses event bubbling to handle events at a parent level rather than attaching listeners to each child element.',
    difficulty: 'medium'
  },
  {
    id: 'js-adv-3',
    topic: 'javascript',
    question: 'What does this Promise chain do?',
    code: `Promise.resolve(1)
  .then(x => x + 1)
  .then(x => { throw new Error('oops'); })
  .catch(e => 'error')
  .then(x => console.log(x));`,
    options: ['Logs 2', 'Logs "error"', 'Throws error', 'Logs undefined'],
    correctAnswer: 1,
    explanation: 'The catch handler catches the error and returns "error", which is passed to the final then.',
    difficulty: 'hard'
  },
  {
    id: 'js-adv-4',
    topic: 'javascript',
  },
    id: 'js-adv-5',
    question: 'Wh
let x = 5;`,
    correctAnswer
 
  {
    top
    code: `for (v
}`,
    correctAnswer: 1,
    difficulty: 'medium'
  {
    
   
console.log(obj.a);
    correctAnswer: 1,
    difficulty: 'easy'
  {
    topic: '
    code: `type StringOrNumber = string | number;
    options: ['Type i
    explanation: 'Union types allow a value to be one of several types using the | operator.',
  },
    
   
  if (typeof value 
  }
    options: ['Type casting', 'Refining types based on condi
    explanation: 'Type narrowing is when
  },
   
    question: 'What does the keyof operator do?',
type UserKeys = keyof
    correctAnswer: 1,
    difficulty: 'medium'
  {
   
    code: `function
}`,
    correctAnswer: 1,
    difficulty: 'medium'
  {
    topic: 'typescrip
    code: `type User = { name: string; age: numbe
    options: ['Remove
    explanation: 'Pick<T, K> constructs a type by picking specific properties from another type.',
  },
    
   
  console.log(count
    options: ['Memoizes 
    explanation: 'useCallback returns 
  },
    id: 'react-adv-2',
    question: 'What is the purpose of useMemo?',
  return computeExpen
    options: ['Memoizes functions', 'Memoizes computed values', 'Creates side effects', 'Manag
    explanation: 'useM
  },
   
    question: 'What
    options: ['Creates s
    explanation: 'useRef creates a mutab
  },
    id: 'python-adv-1',
    question: 'What is a generator?',
   
   
    explanation: 'Generators are functions that use yield to produce values lazily, one at a time.',
  },
    id: 'python-adv-2',
    question: 'What is l
    
   
  },
    id: 'python-adv-3',
    question: 'What does *args do?',
    print(args)`,
    correctAnswer: 1,
    difficulty: 'medium'
  {
    topic: 'django',
    code: `User.objects.
    
   
  {
    topic: 'django',
    code: `Book.objects.select_rela
    correctAnswer: 1,
    difficult
  {
    topic: 'django',
    code: `python man
    correctAnswer: 1,
    difficulty: 'easy'
  {
   
    code: `post_sav
    correctAnswer: 1,
    difficulty: 'hard'
  {
    topic: 'css',
    code: `div:not(.special) { color: red; }`,
    correctAnswer: 1,
    difficulty: 'medium'
  {
    
   
    options: ['Animati
    explanation: 'S
  },
    id: 'css-adv-3',
    question: 'What d
    options: [
    explanation: 'The transform property applies 2D or 3D transformations to elements.',
  },
    id: 'css-adv-4',
    question: 'What are 
colo
   
    difficulty: 'mediu
  {
    topic: 'css',
    code: `@media (max-width: 768px) {
}`,
    correctAn
    difficulty: 'easy'
]













































































































































