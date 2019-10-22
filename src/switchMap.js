// Map to observable, complete previous inner observable, emit values.
import { timer, interval } from 'rxjs';
import { switchMap } from 'rxjs/operators';

// switch to new inner observable when source emits, emit result of project function
timer(0,5000).pipe(
  switchMap(
    _ => interval(2000),
    (outerValue, innerValue, outerIndex, innerIndex) => ({
      outerValue,
      innerValue,
      outerIndex,
      innerIndex
    })
  )
)
.subscribe(val => console.log(val));