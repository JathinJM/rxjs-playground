
import { throwError, fromEvent, of } from 'rxjs';
import {
  catchError,
  tap,
  switchMap
} from 'rxjs/operators';

const fakeRequest$ = of().pipe(
  tap(_ => console.log('fakeRequest')),
  throwError
);

const ContinueListening$ = fromEvent(
  document.getElementById('continued'),
  'click'
).pipe(
  switchMap(_ => fakeRequest$.pipe(catchError(_ => of('keep on clicking'))))
);

const StopListening$ = fromEvent(
  document.getElementById('stopped'),
  'click'
).pipe(
  switchMap(_ => fakeRequest$),
  catchError(_ => of('no more requests'))
);

ContinueListening$.subscribe(console.log);
StopListening$.subscribe(console.log);