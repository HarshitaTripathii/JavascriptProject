/*
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


// resolve parameter is connnected/ linked to then (), you can pass, object, string anything
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("resolve with parameter");
        resolve({username:"Harshita", email:"harshita@yahoo.com"});
    },1000)
}).then(function(user){
    console.log(user)
})
*/

new Promise(function(resolve, reject){
    setTimeout(function(){
        let error=true;
        if(!error)
        {
            resolve({name:"Arya", age:21});
        }
        else{
            reject("ERROR : something went wrong ");
        }
    },1000)
    
    
})
.then(function(obj){
    console.log(obj);
    return obj.age;
})
.then(function(AgeOfuser){
    console.log(`age is ${AgeOfuser}`);
})
  .catch(function(err){
    console.log(err);
})
.finally(()=>{
    console.log("All done and we are at finally stage ");
})