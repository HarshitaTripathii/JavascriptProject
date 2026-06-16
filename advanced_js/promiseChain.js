function getdata(dataId){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(dataId){
                resolve("sucess");
                console.log("data ",dataId);
            }
            else{
                reject("error occured");
            }
            
        }, 3000);
    });
};

console.log("fetching data 1");
getdata(1)
.then((res)=>{
    console.log("fetching data 2");
    getdata(2);
})

// proper promise chaining
getdata(1)
.then((res)=>{
    console.log("fetching data 2");
    return getdata(2);
}).
then(()=>{
    console.log("done now");
})
