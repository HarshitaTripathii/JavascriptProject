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
// var a=10;
// if(true)
// {
//     var a=20;
//     console.log(a);
// }
// console.log(a);


// let cant be redeclared , but can be updated
// const neither be updated, nor be redeclared
// they both works within scopes
// let b=10;
// if(true)
// {
//     let b=20;
//     console.log(b);
// }
// console.log(b);

// below is one of the way to use same object in itself.

// const obj= {
//     username: "harshita",
//     age:21,
//     welcome : function(a){
//        console.log(`${a} has just logged in , welcome`);
//     }
// }
// obj.welcome(obj.username);

// but below is more better way to use "this" keyword.
// this represents current context, to use all the variables present in a scope, 
// where "this" has been applied, we use "this"
// "this" is basically an object.

const obj= {
    username: "harshita",
    age:21,
    welcome : function(){
    console.log(`${this.username} has just logged in , welcome`);
    console.log(this);
    }
};
// here when we print "this" it will return object, having welcom as key and value as "funtion : welcome" but when we write "welcome " function greet() {}" it will return ey and value as "funtion : greet"

// obj.welcome();
// obj.username="arya"
// obj.welcome();
// console.log(this);     //return empty object
// console.log(typeof(this));

// "this" is applicable to objects only. if we try to use it in fxn, then also it is a object but it has 
// some predefined variables, which we can access.
// and same applies for function as expression

// const variable1= function()
// {
//     let name="yashi";
//     console.log(this.name);
// }

// function check()
// {
//     let name="harshita";
//     console.log(this.name);  // return "undefined"
//     console.log(this); // here it will print obj having few keys

// }
// check();

// ARROW  FUNCTION
// remove keyword function and appply () => {}  or () => ()
// if using () : dont write "return"
// if using {} :  write "return"

// const func1=() =>{
//     let name="harshita"
//     console.log(this.name);  // return "undefined" 
//     console.log(this)  //return empty object
// }
// func1();

// const check=()=>{
//     console.log("hell");
// };
// check();

// implicit return is when we write in 1 line only, same as using () , told above
// const func2=(n,m) => n+m+1
// const func3=(n,m) => (n+m+1)
// console.log(func2(2,4));
// console.log(func3(2,4));
// above, func2,func3 are same. using () is equivalent to not using it like this.

// if we want to return objects, then enclose it in ()
// const func4=(a,b)=>({sum:a+b});
// console.log(func4(2,4));

// let var1="global";
// function test(){
//     let var1="local";
// }
// console.log(var1);
// test();
// console.log(var1);

// let var1="global";
// function test(){
//      var1="local";
// }
// console.log(var1);
// test();
// console.log(var1);

// immediate invoked functon expression (IIFE)
// to make any fxn to execute immediately after defining, enclose it with () and then call it on spot by writing ()
// here u can give argument also, if needed as per the parameter while defining
// while using IIFE ; is very imp to put in other statement also, otherwise ERROR.
// use to create a local scope for variables from polluting the global scope.

// ( function check(){
//     // this is named iife
//     console.log("hello user");
// }) ();


// using arrow fxn also, below
// this is unnamed iife
// ( () =>(console.log("hello harshita"))) ();

// passing argument and parameter
// ( (name)=>(console.log(`${name} has just logged in`)))("Harshita Tripathi");



