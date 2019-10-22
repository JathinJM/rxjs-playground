import $ from 'jquery';
import { Observable, of, from, fromEvent } from 'rxjs';
import Rx from 'rxjs/Rx'

const myPromise = new Promise((resolve, reject)=>{
    console.log("Creating a promise")
    setTimeout(()=>{
        resolve("Hello from promise");
    },3000)
})

/*
const source$ = from(myPromise);
source$.subscribe ( x => console.log(x), e => console.error(e), ()=> console.log("Completed"));
*/

/*
myPromise.then((x)=>{
    console.log(x)
})*/



const inputSource$ = fromEvent($('#input'), 'keyup');

inputSource$.subscribe(x => {
   
    from(getUser(x.target.value)).subscribe(x => {
        $('#name').text(x.data.name);
        $('#blog').text(x.data.blog);
        $('#repos').text(x.data.public_repos);
    });

})
function getUser(userName){
    return $.ajax({
        url:"https://api.github.com/users/"+userName,
        dataType:'jsonp'
    }).promise();
}

/*
from(getUser('bradtraversy')).subscribe(x => {
    $('#name').text(x.data.name);
    $('#blog').text(x.data.blog);
    $('#repos').text(x.data.public_repos);
});*/