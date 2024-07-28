// let name1="harshita";
// let age=21;
// template Literal using placeholder ${}
// console.log(`My name is ${name1} and i am ${age} years old girl.`);

// let name2= new String('Harshit');

// console.log(name2);
// console.log(name2[3]);
// console.log(name1[7]);
// console.log(name1.length);
// console.log(name1.toUpperCase());
// console.log(name1.charAt(4));
// console.log(name1.indexOf('s'));

// numbers
// const num1=100;

// const num2= new Number(200);

// console.log(num1);
// console.log(num2);
// console.log(num2.toString());
// console.log(num2.toString().length);
// console.log(num2);
// console.log(num2.length);
// console.log(num1.toFixed(1));
// console.log(num2.toFixed(3));

// const num3=35.628;
// console.log(num3.toPrecision(1));
// console.log(num3.toPrecision(2));
// console.log(num3.toPrecision(3));

// toPrecision return a string 

// console.log(typeof num3);
// console.log(typeof(num3.toPrecision(1)));

// to convert numb in readable form using commas

// const salary=1294000;
// const salary1= 12000000;
// console.log(salary.toLocaleString());
// console.log(salary.toLocaleString('en-IN'));

    // *********MATHS*********

// console.log(Math.abs(-223));
// console.log(Math.round(5.3));
// console.log(Math.round(5.9));
// console.log(Math.ceil(5.2));  if number is thoda sa bhi jyada then it will take higher value as the name ceil itself suggests
// console.log(Math.floor(5.9)); if number is thoda sa bhi kam then it will take lower value as the name floor itself suggests

// console.log(Math.random());
// console.log((Math.random()*10));
// console.log((Math.random()*10)+1);

// const max=1100;
// const min=900;
// console.log((Math.random()*(max-min))+min);

// *******DATES********


// const myDate= new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());

// const tdate= new Date(2024,9,5);   // 9 IS MONTH, 5 IS DATE, MONTH NUMBER STARTS WITH 0 HERE IN JS

// const sdate= new Date("2024-10-5");   // HERE MONTH STARTS WITH ACTUAL NUMBER which is 1

// console.log(sdate.toDateString());
// console.log(tdate.toDateString());

// const tdate1= new Date(2024,9,5,14,30);  // 14 because i wanted it to be in PM , If u want it in AM, write 2 inplace of 14
// console.log(tdate1.toLocaleString());

// const newDate=new  Date("2024-10-5");
// // console.log(newDate);
// const date1= Date.now();
// console.log(date1);
// console.log(date1.getTime());   //ERROR

// console.log(newDate.getTime());  //curret time in miliseconds- output


// to convert the time in seconds look below
// console.log(Date.now());
// console.log(Math.floor(Date.now()/1000));

// const date2= new Date("2024-10-5");
// console.log(date2);
// console.log((date2.getMonth()+1));
// console.log(date2.getDay());

// console.log(date1>(newDate.getTime()));   //  false
