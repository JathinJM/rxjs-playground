// Only emit when the current value is different than the last.
import { from } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

const sampleObject = { name: 'Test' };
const sampleObject1 = { name: 'Test' };

//Objects must be same reference
const source$ = from([sampleObject, sampleObject1, sampleObject]);

// only emit distinct objects, based on last emitted value
source$
  .pipe(distinctUntilChanged())
  // output: {name: 'Test'}
  .subscribe(console.log);