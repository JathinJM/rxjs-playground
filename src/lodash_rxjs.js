import * as _ from "lodash"
import { of, Observable } from "rxjs"


// Operator
    var pickNumbers = () => (source$) =>{
        return new Observable((observer)=>{
            source$.subscribe({
                next(item){
                        observer.next( _.pickBy(item, _.isNumber));
                },
                error(error){
                        observer.error(error);
                },
                complete(){
                        observer.complete();
                }
            })
        })
    }

// Usage
var obs = of( { 'a': 4, 'b': 'str', 'c': 3 });
obs.pipe(pickNumbers()).subscribe(x => console.log(x))