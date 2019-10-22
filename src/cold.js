// cold observable example
import { of } from 'rxjs';

var stream$ = of(1,2,3);
//subscriber 1: 1,2,3
var subscribe1 = stream$.subscribe(
   data => console.log(data),
   err => console.error(err),
   () => console.log('completed')
)

//subscriber 2: 1,2,3
var subscribe1 = stream$.subscribe(
   data => console.log(data),
   err => console.error(err),
   () => console.log('completed')
)