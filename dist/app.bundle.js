/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

	//import $ from 'jquery';
	//import { Observable, of,mergeMap, from, fromEvent, interval, timer,merge, concat , range, observable} from 'rxjs';
	//import Rx from 'rxjs/Rx'
	//import * as _ from "lodash"


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

	/*let a = _.head([1,2,3])


	console.log(a)

	var headOperator = () => (source$) =>{
	    return new Observable((observer)=>{
	        source$.subscribe({
	            next(item){
	                    observer.next(_.head(item));
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

	of([1,2,3]).pipe(headOperator()).subscribe(x => console.log(x)) */
	"use strict";

/***/ })
/******/ ]);