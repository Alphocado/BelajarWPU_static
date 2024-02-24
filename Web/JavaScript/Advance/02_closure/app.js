// // creation phase pada global contextk
// // nama var = undefined
// // nama funtion = fn()
// // hoisting
// // window = global object
// // this = window

// // execution phase
// // console.log(sayHelllo());

// // let nama = 'udin';
// // let umur = 33;

// // function sayHello(){
// //   console.log(`saya ${nama} dan saya ${umur} tahun`)
// // }

// // function membuat Local Execution Context
// // yang di dalamnya terdapat creation dan execution phase
// // window
// // arguments
// // hoisting

// // let nama = 'udin';
// // let username = '@rynt';
// // function printurl(username){
// //   let instagram = 'https://instagram.com/';
// //   return instagram+username;
// // };
// // console.log(printurl(username));


// function satu(){
//   var nama = 'Udin';
//   console.log(nama);
// }
// function dua(){
//   console.log(nama);
// }
// console.log(nama);
// var nama = "Erik";
// satu();
// dua('doddy');
// console.log(nama);


// function init(){
//   let nama = 'udin';
//   function showName(){
//     console.log(nama);
//   }
//   showName();
// }
// init();

// function salam(waktu){
//   return function (nama) {
//     console.log(`hello ${nama}, ${waktu}`);
//   }
// }
// let good = salam('pagi');

let add = (function() {
  let counter = 0;
  return function(){
    return ++counter;
  }
})();

console.log(add());
console.log(add());
console.log(add());