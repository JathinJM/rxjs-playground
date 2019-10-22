import $ from 'jquery';
import { from } from 'rxjs';

/*
const number =[ 1,2,3,4,5 ]

const number$= from(number);


//number$.subscribe((data)=> console.log(data), (e)=>console.log(e), () => console.log("Completed"))

const ul= document.querySelector('#ul')

const posts=[
    {title:"title1", body:"This is the body1"},
    {title:"title2", body:"This is the body2"},
    {title:"title3", body:"This is the body3"},
]


const posts$= from(posts);

posts$.subscribe((data)=> {
    $('#ul').append(`<li><h3>${data.title}</h3></li>`)   
}, (e)=>console.log(e), () => console.log("Completed"))
*/



const set= new Set(['hello',1,2,{"name":"siddiq"}]);


const setStream$= from(set);

setStream$.subscribe((data)=> console.log(data), (e)=>console.log(e), () => console.log("Completed"))
