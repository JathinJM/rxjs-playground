import $ from 'jquery';
import { Observable, of, from, fromEvent, interval, timer } from 'rxjs';
import Rx from 'rxjs/Rx'

/*
const source$ = interval(1000)

source$.subscribe(x => console.log(x))*/

/*
const source$ = timer(1000,1000)

source$.subscribe(x => console.log(x))

*/


const source$ = range(0,5)

source$.subscribe(x => console.log(x))