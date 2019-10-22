import $ from 'jquery';
import { Observable, of, from, fromEvent, interval, timer,merge, concat , range} from 'rxjs';
import Rx from 'rxjs/Rx'

/*
of('hello')
.subscribe ( x => {
    
     of(x + 'everyone').subscribe( l => console.log(l));
    
});*/

/*
of('hello').mergeMap( v => of( v+ ' Everyone'))
.subscribe( l => console.log(l));

*/

/*
const inputSource$ = fromEvent($('#input'), 'keyup');

inputSource$.subscribe(x => {
   
    from(getUser(x.target.value)).subscribe(x => {
        $('#name').text(x.data.name);
        $('#blog').text(x.data.blog);
        $('#repos').text(x.data.public_repos);
    });

})*/
function getUser(userName){
    return $.ajax({
        url:"https://api.github.com/users/"+userName,
        dataType:'jsonp'
    }).promise();
}


const inputSource$ = fromEvent($('#input'), 'keyup').map( e => e.target.value)
.switchMap(v => from(getUser(v)))

inputSource$.subscribe( x => {
    $('#name').text(x.data.name);
    $('#blog').text(x.data.blog);
    $('#repos').text(x.data.public_repos);
})






