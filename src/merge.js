// Merge
// def: Turn multiple observables into a single observable.
import { Observable, of,mergeMap, from, fromEvent, interval, timer,merge, concat , range, observable} from 'rxjs';
import { mapTo } from 'rxjs/operators';

//emit every 2.5 seconds
const first = interval(2500);
//emit every 2 seconds
const second = interval(2000);
//emit every 1.5 seconds
const third = interval(1500);
//emit every 1 second
const fourth = interval(1000);

//emit outputs from one observable
const example = merge(
  first.pipe(mapTo('FIRST!')),
  second.pipe(mapTo('SECOND!')),
  third.pipe(mapTo('THIRD')),
  fourth.pipe(mapTo('FOURTH'))
);

const subscribe = example.subscribe(val => console.log(val));