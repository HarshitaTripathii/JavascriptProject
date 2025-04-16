const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("aysnc completed ");
        resolve();
        
    },1000)
});

promiseOne.then(function()
{
    console.log("then / resolve has been called");
    
})

new Promise(function(resolve, reject){
    
})