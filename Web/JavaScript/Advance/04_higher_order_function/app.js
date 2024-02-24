// map(), filter(), reduce()
// filter() : mengelompokkan
// map() : manipulasi isi
// reduce() : menyatukan

const angka = [3,4,6,7,8,2,9,1,5];
// mencari angka >= 3
// for
// const newAngka = [];
// for(let i = 0; i < angka.length; i++){
//   if(angka[i] >= 3){
//     newAngka.push(angka[i]);
//   }
// }
// console.log(newAngka);

// filter()
// const newAngka = angka.filter((e) => e >= 3);
// console.log(newAngka);

// map()
// kalikan semua angka dengan 2
// const newAngka = angka.map(a => a * 2);
// console.log(newAngka);

// reduce()
// jumlahkan seluruh element pada array
// const newAngka = angka.reduce((accumulator, currentValue) => accumulator + currentValue, 5);
// console.log(newAngka);

// Method Chainning
// Cari angka > 5
// kalikan 3
// jumlahkan
const hasil = angka.filter(a => a > 5) // filter
  .map(a => a * 3) // map
  .reduce((a,b) => a+b); // reduce
console.log(hasil);