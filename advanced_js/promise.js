// .then(() => {
//     console.log("Successfully executed");
// })
// will not run because getData(null) rejects the promise. 
// Once a promise in the chain rejects,
//  JavaScript skips all remaining .then() blocks and jumps directly to .catch().
// the Promise is providing a way to notify other code when the async operation finishes, using .then() and catch (0)




function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const res = dataId;
            if (res) {
                console.log(res);
                resolve("sucess");
            }
            else{
                reject("Error occured");
            }
        }, 3000);


    });
};

getData(1)
.then((res)=>{
    console.log("it is a ",res);
    return getData(2);
})
.then(()=>{
    return getData(3);

})
.then(()=>{
    return getData(null);
})
.then(()=>{
     console.log("Sucessfully executed");
})
.catch((err)=>{
     console.log(err);

})
    

