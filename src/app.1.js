import $ from 'jquery';
import { Observable, of,mergeMap, from, fromEvent, interval, timer,merge, concat , range} from 'rxjs';
import Rx from 'rxjs/Rx'

const myPromise = ( x )=> new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(x)
    },3000)
});

/*

from([1,2,3,4,5]).subscribe(x => {
        from(myPromise(x)).subscribe(y => console.log(y));
})



from([1,2,3,4,5]).map(x => from(myPromise(x)) )
.mergeAll().subscribe( x => console.log(x))


*/

function myMergeMap (innerObservable){
    const source$ = this;

    return new Observable((observer)=>{
        source$.subscribe( x =>{
            innerObservable(x).subscribe( 
               y =>  observer.next(y),
               e =>  {},
               () => observer.complete()
            )
        })
    })
}


Observable.prototype.myMergeMap = myMergeMap;

from([1,2,3,4,5]). myMergeMap(x => from(myPromise(x)) ) . subscribe( x => console.log(x), e =>{}, () => console.log('completed'))







