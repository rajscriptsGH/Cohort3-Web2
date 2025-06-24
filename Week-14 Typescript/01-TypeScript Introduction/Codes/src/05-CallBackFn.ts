function callback(fun: ()=> void){
    setTimeout(fun, 1000)
}

callback(function(){
    console.log("hello");
    
})
