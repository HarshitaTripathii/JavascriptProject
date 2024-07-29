//singleton

//Object.create
const mySym=Symbol();
const mySym1=Symbol();

const fobj={name:"Harshita",
    "full name": "Harshita Tripathi",
    [mySym] : "mykey",      //using [] , we declare symbols in object.
    mySym1 : "mykey1",
    age:21,
    email:"harshita@google.com",
    location:"Noida"
};
// console.log(fobj);
// console.log(fobj[mySym]);   //this is the only method to access symbol present in object
// console.log(fobj.mySym);

// console.log(fobj[mySym1]);
// console.log(fobj.mySym1);

// console.log(typeof fobj[mySym]);
// console.log(typeof fobj.mySym);

// console.log(typeof fobj[mySym1]);
// console.log(typeof fobj.mySym1);
// console.log(fobj.email);
// console.log(typeof fobj.email);
// console.log(fobj["age"]);
// console.log(fobj["full name"]);
// console.log(fobj.full name);     //ERROR dot(.) method is not applicable in such cases, hence not preferable

// CHANGE
// fobj.email="Harshita@yahoo.com";
// console.log(fobj);
// Object.freeze(fobj);   // when you want to Lock your object
// fobj.email="Harshita@hotmail.com";
// console.log(fobj);

//GREETINGS
fobj.greet=function(){
    console.log("hello JS user");
};
console.log(fobj.greet());

fobj.greet1=function(){
    console.log(`hello JS user ${this.name}`);  //in order to access object keys
};
console.log(fobj.greet1());