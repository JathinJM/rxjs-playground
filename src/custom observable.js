import $ from 'jquery';
import { Observable, of } from 'rxjs';


const Source$= new Observable((observer) =>{
    console.log("Creating a observavele");

    observer.next("hello world");
    observer.next("ANother balue");

    observer.error( new Error('error'));
    setTimeout(()=>{
        observer.next("Yet another value");
        observer.complete();
    },3000)
    
})


Source$
.subscribe ( x => console.log(x), e => console.error(e), ()=> console.log("Completed"));


