const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("aysnc 1 completed ");
        resolve();
        
    },1000)
});

promiseOne.then(function()
{
    console.log("then / resolve has been called");
    
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("aysnc 2 completed");
        resolve();
    }, 1000)

}).then(function(){
    console.log("then / resolve has been called ");
})