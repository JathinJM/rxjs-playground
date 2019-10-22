import $ from 'jquery';
import { Observable, of, from, fromEvent, interval, timer,merge, concat , range} from 'rxjs';
import Rx from 'rxjs/Rx'

/*
of('hello')
.merge( of('everyone'))
.subscribe ( x => console.log(x));


interval(2000).merge( interval(500) )
.take(25).subscribe( x => console.log(x));

*/

/*

const source1$ = interval(2000).map(v => 'merge1 :'+v )
const source2$ = interval(500).map(v => 'merge2 :'+v )


merge(source1$, source2$).take(25).subscribe( x => console.log(x))*/


const source1$ = range(0, 5).map(v => 'concat1 :'+v )
const source2$ = range(6, 5).map(v => 'concat2 :'+v )


concat(source1$, source2$).take(25).subscribe( x => console.log(x))


