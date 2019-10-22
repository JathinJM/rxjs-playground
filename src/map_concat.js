import $ from 'jquery';
import { Observable, of, from, fromEvent, interval, timer } from 'rxjs';
import Rx from 'rxjs/Rx'



/*
const source$ = interval(1000)
.take(10).map( v => v*v)

source$.subscribe(
    x =>{
            console.log(x)
    },
    err => console.log(err),
    () => console.log('completed')
)*/

/*
const source$ = from (['siddiq', 'jhon', 'tom']).map( v => v.toUpperCase())

source$.subscribe(
    x => console.log(x),
    e => console.log(err),
    () => console.log('completed')
)*/


const source$= of ([
    {"name":"siddiq",age:23},
    {"name":"sid", age:25}
]).map(name =>{
    console.log(name);
    return name;
})

source$.subscribe(x => console.log(x))