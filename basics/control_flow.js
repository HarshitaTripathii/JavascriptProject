// same as in c , swtich case and  if else.

// check even odd
// ((num)=>{
//     if (num%2==0) console.log(`${num} is an even no.`);
//     else console.log(`${num} is an odd no.`);
// })(53)

// let marks=10;
// switch(marks){
//     case 100:
//         console.log("pass");
//         break;
//     case 0:
//         console.log("fail");
//         break;
//     default:
//         console.log("cant be determined");
//         break;
// }

// truthy value
// "false" "0" [], function(){}, {}, true, any value , " "

// falsy value
//  NaN, null, undefined, "", 0, false, -0

let value="0";
// if (value==0){
//     console.log("false value");
// }
// if (value==="0"){
//     console.log("true value");
// }

// ITERATIONS

for (let i=0;i<5;i++)
{
    // console.log(i);
}
const arr=["yashi", "harshita"];
// for (let i=0; i<arr.length;i++)
// {
//     // console.log(arr[i]);
// }
// here instead of out of index error, undefined comes, which is also a problem
let count=0;
while(count<arr.length)
{
    // console.log(`Name is ${arr[count]}`);
    count++;
}
let score=0;

do{
    // console.log(`score is ${score+1}`);
    score++;
}while(score<=3);

// array Loops
// of : strings , array
// in : object

// const a=[10,20,30];
// for (const j of a)
// {
//     // console.log(j);
// }
const myObj={
    "js": "javascript",
    "py": "python",
    "cpp":"c ++",
};
for ( const keys in myObj)
{
    //  console.log(`${keys} ${myObj[keys]}`);
   
}

// for in loop when used for array, it returns key i.e. index and in array keys/index are integers starting from 0
for (const key in arr)
{
    // console.log(arr[key]);
    // console.log(key);
}

// call back function : passed as an argument.
function greet(name, func)
{
    console.log(`hello ${name}, good morning`);
    func();

};
function mssg()
{
   console.log("good bye");
};
// greet("harshita", mssg);

const a=[24,36,48,60];


// console.log(a.lastIndexOf());
// console.log(a.indexOf(48));
// console.log(a.indexOf(45));
// console.log(a.lastIndexOf());

// indexOf fxn is similar to find fxn in python , as they both return -1 , if element not found.

a.forEach( function(value)
{
    // console.log(value);
});

// using this forEach fxn, we can directly access array element without using loops
// while using forEach fxn, we write callback fxn as argument and that should be an unnamed callback fxn.
// in above eg, we have defined the fxn there only but below, we will 1st define a fxn and then its reference as argument

// foreach has 2 parameters : value, index, entire array.
// a.forEach((val, ind, arr)=> console.log(val, ind, arr)); 
// a.forEach((val, ind, arr)=> console.log(val, ind)); 
// a.forEach((val)=> console.log(val, ind));  //it will show error

// suppose we have an array of objects and we want to access any of its keys.

// using for loops
const arr1=[{
    name1:"harshita",
    age:21,
},{
    name1:"dhruv",
    age:20,
},{
    name1:"harshit",
    age:19,
}];

// for ( const items of arr1 )
// {
//    console.log(items.name1);
// }
// arr1.forEach((item)=>console.log(item.age));
// above is using forEach fxn

// in arrow fxn, if we want to return something : either use return keyword in {} or dont use return keyword in () 

// filters in js is almost similar to filters in python.
// filter in js : syntax : sequence.filter(function)

const num=[10,20,30,40,50];
const newN=num.filter((item)=> (item>44) );
// const newN=num.filter((item)=> item*item );
// both above will have same output
// console.log(newN);

/*
// map in python is similar to map in js
//  seq.map(fxn) : this fxn is applied to each term of seq and returns new array
const a1=num.map((item) => item +10)
console.log(a1)
*/

 /*
// Chainnig : using diffrenet methods together.
const a2= num.map((item) => item*10 ).map((item) => item+1 ).filter( (item) => item>40)
console.log(a2) */


//  SHOPPING CART
const shop=[ 
    {
        item : "js modoule",
        price : 2999
    },
    {
        item : " java modoule",
        price : 5999
    },
    {
        item : "c++ modoule",
        price : 4999
    },
    {
        item : "py modoule",
        price : 5099
    }
]
//  below both methods are correct
// const totalShop= shop.reduce ( (acc,val) => acc+ val.price, 0)
const totalShop= shop.reduce ( (acc,val) => acc+ val["price"], 0)
console.log(totalShop)






