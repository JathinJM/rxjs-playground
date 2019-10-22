//forkJoin
// def:  when all observables complete, give the last emitted value from each as an array

import { delay, catchError, _throw } from 'rxjs/operators';
import { forkJoin, of, throwError } from 'rxjs';

const example = forkJoin(
    //emit 'Hello' immediately
    of('Hello'),
    //emit 'World' after 1 second
    of('World').pipe(delay(1000)),
    // throw error
    throwError('This will error').pipe(catchError(error => of(error)))
  );
  
  const subscribe = example.subscribe(val => console.log(val));