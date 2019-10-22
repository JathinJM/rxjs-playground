const getPostOne$ = Rx.Observable.timer(3000).mapTo({id: 1});
const getPostTwo$ = Rx.Observable.timer(1000).mapTo({id: 2});

Rx.Observable.concat(getPostOne$, getPostTwo$).subscribe(res => console.log(res));