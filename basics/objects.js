//singleton
//Object.create

// const mySym=Symbol();
// const mySym1=Symbol();
// // const obj3= new Object();
// const num2= new Number();
// // console.log(num2);

// object literals
// const fobj={name:"Harshita",
//     "full name": "Harshita Tripathi",
//     [mySym] : "mykey",      //using [] , we declare symbols in object.
//     mySym1 : "mykey1",
//     age:21,
//     email:"harshita@google.com",
//     location:"Noida"
// };
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
// const obj1 = new Object(); 
// const obj2={}; 
// obj1.id=127895;
// obj1.fname="Rishi";
// obj1.lname="Singh";
// obj1.islogin=false;
// // console.log(obj1);

// const detj={
//     managId:"some@yahoo.com",
//     fullname:
//     {
//         username:{
//             firstName:"rushi",
//             lastname:"kale"
//         },

//         adminname:
//         {
//             firstName:"vishal",
//             lastname:"pandey"
//         }
//     },
//     location:"Gurgaon"

// };
// const obj4= { 1:"a", 2:"b",3:"c"};


// console.log(detj);

// console.log(detj.fullname);
// console.log(detj.fullname.adminname);
// console.log(detj.fullname.adminname.lastname);

//MERGING OBJECTS 

// const allObj=Object.assign({},detj, fobj, obj4); 
 //syntax: Object.assign(target, source)
// console.log(allObj)   //object of items
// const o1={"a":1,"b":2};
// const o2={"a":10,"b":2, "c":20};
// const o4={"d":22};
// const o3=Object.assign({},o1,o2); 
//  here due to {}, o1 will not get updated
// const o3=Object.assign(o1,o2,o4);  
//   due to absence of {}, no new object created, o1 is updated and stored in o3
// console.log(o1);
// console.log(o2);
// console.log(o3);
// console.log(o4);
// console.log(o1===o3);
// const o3={...o1,...o2,...o4};
// console.log(o1);
// console.log(o2);
// console.log(o4);
// console.log(o3);
// console.log(o1===o3);

// .keys and .values return a list of keys or values.
// console.log(Object.keys(o4));
// console.log(Object.values(o4));
// console.log(Object.entries(o4));

// entries returns list of list

// console.log(o4.length);
// console.log(o4.hasOwnProperty("d"));


// const allObj2= {...detj, ...fobj,...obj1}; 
  //same as above but easier method
// console.log(allObj2);

// const allObj1= {detj, fobj};
// console.log(allObj1);   // object of objects


// object de structure and JSON API
// const course={
//     topic:"js",
//     CourseInstructor:"Shradha",
//     time:1
// };
// console.log(course.CourseInstructor);
// // now de structuring the key of objects,for convinience to use it.
// const {CourseInstructor:cinst}=course;
// console.log(cinst);