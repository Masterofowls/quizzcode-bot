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
const c = createCounter();
console.log(c(), c());`,
    options: ['1 2', '1 1', '0 1', 'undefined undefined'],
    correctAnswer: 0,
    explanation: 'Closures allow inner functions to access variables from outer functions even after the outer function has returned.',
    difficulty: 'hard'
  },
  {
    id: 'js-adv-2',
    topic: 'javascript',
    question: 'What will this destructuring assignment produce?',
    code: `const { a, b = 5 } = { a: 3 };
console.log(a, b);`,
    options: ['3 undefined', '3 5', 'undefined 5', 'Error'],
    correctAnswer: 1,
    explanation: 'Default values in destructuring are used when the property is undefined. Here, b gets the default value 5.',
    difficulty: 'medium'
  },
  {
    explanation: 'O
  },
    id: 'js-adv-4',
    question: 'What is the output of this async
  console.
  console.log('2');
test();
    options: ['1 2 3'
    explanation: 'The await pauses execution, allowing synchronous code to run first. Output: 1, 3, 2.',
  },
    
   
setTimeout(() => co
console.log('End');`,
    correctAnswer: 1,
    difficulty: 'hard'
  {
    topic: 'typescript',
    code: `let valu
v
    cor
    difficulty: 'me
  {
    topic: 'typescrip
    code: `function throwError(message: string): never {
}`,
    
   
  {
    topic: 'typescript',
    code: `function identity<T>(arg: T): T {
}
    options: ['A dynamic type', 'A type vari
    explanation: 'Generics allow you to write reusabl
  },
    id: 'ts-adv-4',
    question: 'What a
  id: number;
}
    
   
  },
    id: 'ts-adv-5',
    question: 'What does the keyof operator do?',
  name: string;
}
    options: 
    explanation: 'keyof creates a union type of all property names from an interface or type.',
  },
    id: 'react-adv-1',
    question: 'What is t
  co
   
    explanation: 'u
  },
    id: 'react-adv-2',
    question: 'What is the purpose of the key prop in Re
  <div key={item.id}>{item.
   
    explanation: 'Keys help React identify which items have changed, been added, or removed to efficientl
  },
    id: 'react-adv-3',
    question: 'What do
  re
   
    explanation: 'u
  },
    id: 'react-adv-4',
    question: 'What is React Context used fo
    options: 
 
  },
    id: 'react-adv-5',
    question: 'What i
inputRef.current.focus();`,
    correctAnswer: 1,
    
  {
    topic: 'python'
    code: `@timer
    time.sleep(1)`,
    correctAnswer: 1,
    difficult
  {
 
    code: `def count_up_to(n):
        yield i`,
    correctAnswer: 1,
    difficulty: 'hard'
  {
    
   
    options: ['Open
    explanation: 'The wi
  },
    id: 'python-adv-4',
    question: '
print(numbers[
 
    difficulty: 'easy'
  {
    topic: 'python',
    code: `list1 = [1, 2]
list2 = [1, 2]
    
   
  },
    id: 'django-adv
    question: 'What are Django signals?',
def create_profile(sender, instance, created, **kw
        Profile.objec
    correctAns
    difficulty: 'hard'
  {
    topic: 'django',
    code: `users = Use
    
   
  {
    topic: 'django'
    code: `MIDDLEWARE = [
    'django.contrib.sessions.mid
    options: ['Database connections', 
    e
  },
    id: 'django-adv-4
    question: 'What is Django ORM select_related() used for?',
    options: ['Filter re
    
  }
    id: 'django-adv-5'
    question: 'What
    class Meta:
        fields = ['username', 'email']`,
    correctAnswer: 1,
    difficult
  {
    topic: 'css',
    code: `#id { color: red; }
div { color: green; }`
    
   
  {
    topic: 'css',
    code: `width: calc(100% - 50px);`,
    correctAnswer: 1,
    difficulty: 'medium'
  {
    topic: 'css',
    code: `:root {
}
   
    explanation: 'CSS 
  },
    id: 'css-adv-4',
    question: 'What is the CSS box model?
  width: 100px;
  border: 5px solid;
}`,
    correctAnswer: 1,
    difficulty: 'easy'
  {
   
    code: `element1 { d
    options: ['No di
    explanation: 'display: none removes the 
  }















































































































































































