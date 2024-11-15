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
for (let i=0; i<arr.length;i++)
{
    // console.log(arr[i]);
}
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

const a=[10,20,30];
for (const j of a)
{
    // console.log(j);
}
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
greet("harshita", mssg);

