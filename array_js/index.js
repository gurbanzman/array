// array task - 1

// function array_Clone(arr){
//    let newArr = [...arr];
//    return newArr;
// }

// console.log(array_Clone([1, 2, 4, 0]));

// console.log(array_Clone([1, 2, [4, 0]]));

// array task - 2

// function sliceArray(arr,n){
//    let sliceArr = arr.slice(0,n);
//    console.log(sliceArr);

// }

// sliceArray([7, 9, 0, -2],3);

//array task - 3

// function joinString(arr){
//    console.log(`"${arr.join(" ")}"`);
// }

// joinString(["Red","Green","White","Black"]);

//array task - 4

// let arr1 = [3,'a', 'a', 'a', 2, 3, 'a', 3,'a',2, 4, 9, 3 ];

// let same = 1;
// let m = 0;
// let rptElement;

// for(let i = 0; i < arr1.length; i++){
//    for(let j = i; j < arr1.length; j++){
//       if(arr1[i] == arr1[j]){
//          m++;
//       }
//       if(rptElement < m){
//          same = m;
//          rptElement = arr1[i];
//       }
//    }
//    m = 0;
// }

//task - 5

// let arr = [1,2,3,4,5];
// let sum = 0;
// let hasil = 1;
// for(let i of arr){
//    sum += i;
//    hasil *= i;
// }
// console.log(sum, hasil);

//task - 6

// function dublicateArray(arr){
//    let emptyArr = [];
//    for(let i = 0; i < arr.length; i++){
//       if(!emptyArr.includes(arr[i])) {
//          emptyArr.push(arr[i]);
//       }
//    }
//    return emptyArr;
// }

// console.log(emptyArr);
// dublicateArray([1, 2, -2, 4, 5, 4 ,7, 8, 7 , 7, 71, 3, 6]);

//task - 7

// function removeElement(arr, num){
//    let index = arr.indexOf(num);
// }

//task - 8

// let arr = [7, 9, 0, -2];
// console.log(arr.slice(-1));
// console.log(arr.slice(1));

//task - 9

// const swapCase = function(letters){
//    let newLetter = "";
//    for(let i = 0; i < letters.length; i++){
//       if(letters[i] === letters[i].toUpperCase()){
//          newLetter += letters[i].toLowerCase();
//       }
//       else{
//          newLetter += letters[i].toUpperCase();
//       }
//    }
//    return newLetter;
// }

// let text = 'The Quick Brown Fox';

// let swaptext = swapCase(text);
// console.log(swaptext);
