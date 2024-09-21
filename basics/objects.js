//singleton

//Object.create

const mySym=Symbol();
const mySym1=Symbol();
// const obj3= new Object();
const num2= new Number();
// console.log(num2);

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
// fobj.greet=function(){
//     console.log("hello JS user");
// };
// console.log(fobj.greet());

// fobj.greet1=function(){
//     console.log(`hello JS user ${this.name}`);  //in order to access object keys or in order to take reference of same object
// };
// console.log(fobj.greet1());
// console.log(fobj.greet1);

//method of declaring object
const obj1 = new Object(); 
const obj2={}; 
obj1.id=127895;
obj1.fname="Rishi";
obj1.lname="Singh";
// console.log(obj1);

const detj={
    managId:"some@yahoo.com",
    fullname:{
        username:{
            firstName:"rushi",
            lastname:"kale"
        },

        adminname:
        {
            firstName:"vishal",
            lastname:"pandey"
        }
    },
    location:"Gurgaon"

};
const obj4= { 1:"a", 2:"b",3:"c"};


// console.log(detj);

// console.log(detj.fullname);
// console.log(detj.fullname.adminname);
// console.log(detj.fullname.adminname.lastname);

//MERGING OBJECTS

const allObj=Object.assign({},detj, fobj, obj4);  //syntax: Object.assign(target, source)
// console.log(allObj)   //object of items

const allObj2= {...detj, ...fobj,...obj1};   //same as above but easier method
console.log(allObj2);

const allObj1= {detj, fobj};
// console.log(allObj1);   // object of objects