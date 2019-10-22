//import $ from 'jquery';
//import { Observable, of,mergeMap, from, fromEvent, interval, timer,merge, concat , range, observable} from 'rxjs';
//import Rx from 'rxjs/Rx'

/*

const observableFn = (observer)=>{
    let tearDown = setTimeout(()=>{
        observer.next(10)
    },500);
    return tearDown;
}

observableFn({
    next(item) {
        console.log(item);
    }
})


const map = (observable, mapFn ) => (observer)=>{
    return observable({
        next(item){
            observer.next(mapFn(item))
        }
    })
};


const source = map(observableFn, (e)=>e*2);

source({
    next(x){
        console.log(x);
    }
})*/

/*

new Promise((resolve, reject)=>{
    setTimeout(()=>{
            resolve('ad')
    },1000)
}).then((x) => {

   new Promise((resolve, reject)=>{
       resolve(x)
   })
}
)
.then((y)=> {
    console.log(y)
    
})


class Observable{
    constructor(observableFn){
        this.subscribe = observableFn;
    }

    map(mapFn){
        return new Observable((observer)=>{
            return this.subscribe({
                next(item){
                    observer.next(mapFn(item));
                }
            })
        })
    }  
}

const myObservable = new Observable((observer)=>{
    let tearDown = setTimeout(()=>{
        observer.next(10)
    },500);
    return tearDown;
})

myObservable.map(x => x*2 ).subscribe({
    next(x){
        console.log(x);
    }
})

*/





/*
of(1,2, asyncScheduler)
  .subscribe( x => console.log(x));
console.log("Before or after?");

*/
/*

const myPromise = new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve("Timeout1 Done")
        }, 3000)
})


const myPromise2 = new Promise((resolve, reject) =>{
    setTimeout(()=>{
        resolve("Timeout2 Done")
    }, 6000)
})

forkJoin( from(myPromise), from(myPromise2)).subscribe(
    x => console.log(x)
)

*/


/*
console.log("Hey I am here")


const myWorker = new Worker('Worker.js');

myWorker.postMessage(2)

myWorker.onmessage = function(event){
    console.log('count here is ',event.data)
}



*/


/*
import {animationFrameScheduler, asapScheduler, bindCallback, from, of,asyncScheduler, forkJoin, fromEventPattern} from 'rxjs';



function foo(value, callback) {
    callback(value);
  }

  // with streams
  const reactiveFoo = bindCallback(foo); 
  //when we call reactiveFoo it returns an observable
  reactiveFoo(1)
    .subscribe( x => console.log(x)); //prints 1 in the console
  
  */


 import { of, from, Subject } from 'rxjs'; 
 import { map, mergeMap, delay, mergeAll, switchMap, concatMap, exhaustMap } from 'rxjs/operators';
 

 const getData = (param) => {
    return of(`retrieved new data with param ${param}`).pipe(
      delay(1000)
    )
  }


  const getDataConcatMap = (param) => {
    const delayTime = Math.floor(Math.random() * 10000) + 1;
    return of(`retrieved new data with params: ${param} and delay: ${delayTime}`).pipe(
      delay(delayTime)
    )
  }
  
/*
  console.log("using merge map")
  
  // using mergeMap
  from([1,2,3,4]).pipe(
    mergeMap(param => getData(param))
  ).subscribe(val => console.log(val));

  console.log("Using switch map")
  
  from([1,2,3,4]).pipe(
    switchMap(param => getData(param))
  ).subscribe(val => console.log(val));

*/


let subject = new Subject()




  // using mergeMap
  subject.pipe(
    exhaustMap(param => getDataConcatMap(param))
  ).subscribe(val => console.log('exhaustMap:', val));
  
  // using concatMap
  subject.pipe(
    concatMap(param => getDataConcatMap(param))
  ).subscribe(val => console.log('concatMap:', val));

  subject.next('1')


  setTimeout( () => subject.next(10),500)
  

