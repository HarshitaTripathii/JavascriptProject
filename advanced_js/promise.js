// .then(() => {
//     console.log("Successfully executed");
// })
// will not run because getData(null) rejects the promise. 
// Once a promise in the chain rejects,
//  JavaScript skips all remaining .then() blocks and jumps directly to .catch().





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
.then(()=>{
    return getData(2);
})
.then(()=>{
    return getData(4);

})
.then(()=>{
    return getData(3);
})
.then(()=>{
     console.log("Sucessfully executed");
})
.catch((err)=>{
     console.log(err);

})
    

