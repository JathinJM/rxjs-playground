import { Observable, of,mergeMap, from, fromEvent, interval, timer,merge, concat , range, observable} from 'rxjs';
import { delay } from 'rxjs/operators';

//concat
// Def:  Subscribe to observables in order as previous completes
concat(
  of(1, 2, 3).pipe(delay(3000)),
  // after 3s, the first observable will complete and subsquent observable subscribed with values emitted
  of(4, 5, 6)
)
  // log: 1,2,3,4,5,6
  .subscribe(console.log);