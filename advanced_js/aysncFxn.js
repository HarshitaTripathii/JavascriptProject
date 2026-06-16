function api(data) {
    return new Promise((resolve, reject) => {
        console.log("fetching data", data);
        setTimeout(() => {
            
            if (data) {
                console.log(data);
                resolve("success");
            }
            else{
                console.log("unable to fetch");
                reject("failed to process");
            }
        }, 3000);
    });
};

async function getData(){
    
    try{await api(1);
    await api(2);
    await api(null);
    await api(3);}
    catch(err){
        console.log("error", err);
    }


}
getData();
