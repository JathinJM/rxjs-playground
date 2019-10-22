


onmessage = function(e){
  setTimeout(()=>{
    console.log(e)
      postMessage(e['data']*100)
  },1000)
}