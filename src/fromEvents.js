import $ from 'jquery';
import { fromEvent } from 'rxjs';

console.log('RxJS Boiler here...');

const btn = document.querySelector('#btn');
const input = document.querySelector('#input');
const output = document.querySelector('#output');




const btnstream$ = fromEvent(btn, 'click');
const inputstream$ = fromEvent(input, 'keyup');
const movestream$ = fromEvent(document, 'mousemove');

btnstream$.subscribe((e)=>{
    console.log(e.target.value);
},
(err)=>{
    console.log("someerr");
},()=>{
    console.log("completed  the stream")
})
console.log('RxJS Boiler Running...');


inputstream$.subscribe((e)=>{
    console.log(e.target.value)
    output.append(e.target.value);
},
(err)=>{
    console.log("someerr");
},()=>{
    console.log("completed  the stream")
})
console.log('RxJS Boiler Running...');



movestream$.subscribe((e)=>{
    output.innerHTML = `<h1> x: ${e.clientX} y:${e.clientY} </h1>`;    
},
(err)=>{
    console.log("someerr");
},()=>{
    console.log("completed  the stream")
})
console.log('RxJS Boiler Running...');
