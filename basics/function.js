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
console.log(Loginmssg("Harshita"));
console.log(Loginmssg(""));
console.log(Loginmssg());

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
function Loginmssg(username="sam"){
    if(!username){
        console.log("Enter a valid username");
        return;
    }
    return `${username} just logged in`;
};



