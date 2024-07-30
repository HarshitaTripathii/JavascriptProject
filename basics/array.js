const arr= [1,2,3,4,5];
const arr2 = new Array(9,8,7,6);
// console.log(arr2);
// const arr1= ["Yashi", 1, true, 2,3];
// console.log(arr,arr1);
// console.log(arr[4]);

// ARRAY METHODS

// console.log(arr.pop());  //returns deleted value, DELETES LAST ENTERED ITEM
// console.log(arr);
// console.log(arr.pop(2));  // here giving index is useless , equivalent to pop()= pop(index)

// console.log(arr.push(5));
// console.log(arr);
// console.log(arr.push(5)); //returns length of updated array  to add item in last
// console.log(arr);

// console.log(arr.unshift(3));    //returns length of updated array  to add item at first place
// console.log(arr);

// console.log(arr.shift());       //returns deleted value, DELETES FIRST ITEM
// console.log(arr);

// console.log(arr.includes(200));
// console.log(arr.includes(2));

// console.log(arr.indexOf(200));  // returns -1 if element not found
// console.log(arr.indexOf(2));

//to convert values of array into string

// const newAr= arr.join();
// console.log(newAr);   NOTE- COMMA IS ALSO A PART OF STRING
// console.log(newAr[1]);

  

// console.log(`${newAr} - ${typeof newAr}` );   // it is a STRING , so no need of [] brackets
// console.log(arr);     // arr will show [] brackets
// console.log( `${arr} - ${typeof arr}`);     // arr will not show [] brackets 

// console.log("A ",arr);

// const narr=arr.slice(1,3);  // using slice, exlcudes upper limit, do not alters original array
// console.log("USING SLICE : ", narr);  

// console.log("B ",arr);

// const n1arr=arr.splice(1,3);  //using splice, inlcudes upper limit, Alters original array, remove the sliced part
// console.log("USING SLICE : ", n1arr);

// console.log("C ",arr);

// console.log(arr.push(arr2)); //ALTER THE ARRAY TO WHICH IT IS ADDED, RETURN THE LENGTH OF ALTERED ARRAY
// console.log(arr);
// console.log(arr2);

// console.log(arr.concat(arr2));   //CONCATENATE WILL NOT CHANGE THE ORIGINAL ARRAYS, IT CREATES A NEW CONCATENATED ARRAY
// console.log(arr);
// console.log(arr2);

// const arr3 = new Array(67,89,54,23);
// const allArr= [...arr,...arr2,...arr3];    //this method is widely used over concat, bcoz can add more than 2 arrays
// const allArr= [arr,arr2,arr3];    // ARRAY OF 3 ARRAYS
// console.log(arr);
// console.log(arr2);
// console.log(arr3);
// console.log(allArr);


// to open nested array and convert to single array, use flat()

// const comArr= [2,3,4,[5,6,7],7,[89,[43,67],42],56];
// console.log(comArr);
// console.log(comArr.flat(Infinity));


//to convert anything into array
// console.log(Array.isArray("harshita"));
// console.log(Array.from("harshita"));

// const a1=678;
// const a2=648;
// const a3=668;
// console.log(Array.of(a1,a2,a3));












