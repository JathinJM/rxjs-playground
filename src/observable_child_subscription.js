import { of, Observable } from "rxjs"

var observable = Observable.create((observer) => {
    try {
        observer.next('Hi')
        observer.next('How are you?')
       // observer.complete()
       // observer.next('stop here')
       setInterval(() => {
        observer.next('good day')
    }, 2200)
    } catch (err) {
        observer.error(err)
    }
}); 

var subscription = observable.subscribe(
    (x) => addData(x),
    (error) => addData(error),
    () => addData('Completed')
);

var subscription2 = observable.subscribe(
    (x) => addData(x)
);

subscription.add(subscription2);

function addData(val) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}

//subscription.add(subscription2);
/*setTimeout(() => {
    subscription.unsubscribe();
}, 6000);*/

setTimeout(() => {
    var subscription2 = observable.subscribe(
        (x) => addData('Subscriber 2: '+x)
    );
}, 1000);