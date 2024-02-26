// for..of
// const mhs = ['udin', 'budi', 'tono'];
// for(let i = 0; i < mhs.length; i++ ){
//   console.log(mhs[i]);
// }

// mhs.forEach(m => console.log(m));

// for( const m of mhs ){
//   console.log(m);
// }

// String
// const nama = 'Udin';
// for(const n of nama){
//   console.log(n)
// }

// nama.forEach(n => console.log(n));

// const mhs = ['udin', 'budi', 'tono'];
// i akan menjadi index
// mhs.forEach((m, i) => {
//   console.log(`${m} adalah mahasiswa ke ${i+1}`)
// });

// cuman isi tidak dengan index
// for(const m of mhs.entries()){
//   console.log(m);
// }

// NodeList
// const liNama = document.querySelectorAll('.nama');
// // liNama.forEach(n => console.log(n.textContent));
// for( n of liNama ){
//   console.log(n.innerHTML);
// }


// arguments
// function jumlahkanAngka(){
//   // return arguments.reduce((a,i) => a+i);
//   // arguments.forEach(a => jumlah += a);

//   let jumlah = 0;
//   for( a of arguments ){
//     jumlah += a;
//   }
//   return jumlah;
// }
// console.log(jumlahkanAngka(1,2,3,4,5));

// for..in
const mhs = {
  nama: 'udin',
  umur: 33,
  email: 'udin@Gmail.com'
}

for( m in mhs ){
  console.log(m);
}