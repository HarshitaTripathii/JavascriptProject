function sum1(n1,n2)
{
    console.log(n1+n2);
}
function sum2(n1,n2)
{
   return (n1+n2);
}
// sum1(4,6);
// const r1=sum1(2,6);
// const r2=sum2(2,6);
// console.log("result1 is ", r1);
// console.log("result2 is ", r2);

// function Loginmssg(username){
//     return `${username} just logged in`;
// };
// console.log(Loginmssg("Harshita"));
// console.log(Loginmssg(""));
// console.log(Loginmssg());

// function Loginmssg(username){
//     if(username===undefined){
//         console.log("Enter a valid username");
//         return;
//     }
//     return `${username} just logged in`;
// };
// here below, empty and " " case and no input  is also involved as no input 
// function Loginmssg(username){
//     if(!username){
//         console.log("Enter a valid username");
//         return;
//     }
//     return `${username} just logged in`;
// };
// if want a name to print, in case of no input then give the default value
// function Loginmssg(username="sam"){
//     if(!username){
//         console.log("Enter a valid username");
//         return;
//     }
//     return `${username} just logged in`;
// };
// ...is a rest operator here, which returns list of all arguments
// function TotalPrice(...num1)
// {
//     return num1;
// };
// console.log(TotalPrice(200,500,700));

// function TotalPrice(val1, val2,...num1)
// {
//     return num1;
// };
// console.log(TotalPrice(100,200,300,400,500,600));
// here above, 1st argu =val1, 2nd argu =bal2, rest are combined in a list in num1

// const detail={
//     name:"harshita", age: 21, location:"Noida"
// };
// const array1=[24,36,48,60];

// function fetchArray(a)
// {
//     return a[3];
// }
// console.log(fetchArray(array1));

// function Statement(o)
// {
//     return `Name of customer is ${o.name} and living in ${o.location}`;
// };
// console.log(Statement(detail))
// console.log(fetchArray([10,20,30,55]));

// var can be declared and can be updated
// it works globally.
var a=10;
if(true)
{
    var a=20;
    console.log(a);
}
console.log(a);


// let cant be redeclared , but can be updated
// const neither be updated, nor be redeclared
// they both works within scopes
let b=10;
if(true)
{
    let b=20;
    console.log(b);
}
console.log(b);







