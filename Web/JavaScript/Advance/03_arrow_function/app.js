// const nama = (nama) => { return `hallo ${nama}`;}
// console.log(nama('udin'));

// implisit return
// const nama = nama => { return `hallo ${nama}`;}

// tanpa parameter
// const nama = () => `hello guys`;
// console.log(nama());

// let mahasiswa = ['udin', 'tono', 'budi'];

// cara panjang
// let jumlah = mahasiswa.map(function (nama) {
//   return nama.length;
// });
// console.log(jumlah);

// cara pendek
// let jumlah = mahasiswa.map(nama => nama.length);
// console.log(jumlah);

// return object
// let jumlah = mahasiswa.map(nama => ({ nama: nama, jumlah: nama.length }));
// console.table(jumlah);


// konsep this di arrow function

// constructor function
// const Mahasiswa = function() {
//   this.nama = 'udin';
//   this.umur = 33;
//   this.sayHello = function(){
//     console.log(`my name ${this.nama}, im ${this.umur} old`);
//   }
//   console.log(this);
// }

// const udin = new Mahasiswa();

// versi arrow function
// const Mahasiswa = function() {
//   this.nama = 'udin';
//   this.umur = 33;
//   this.sayHello = () => {
//     console.log(`my name ${this.nama}, im ${this.umur} old`);
//   }
//   console.log(this);
// }

// const udin = new Mahasiswa();


// object literal
// const mhs1 = {
//   nama: 'udin',
//   umur: 33,
//   sayHello: () => {
//     console.log(`halo, saya ${this.nama}, ${this.umur}`);
//   },
// }


// const Mahasiswa = function() {
//   this.nama = 'udin';
//   this.umur = 33;
//   this.sayHello = () => {
//     console.log(`my name ${this.nama}, im ${this.umur} old`);
//   }

//   setInterval(()=>{
//     console.log(this.umur++);
//   }, 500);
// }

// const udin = new Mahasiswa();

// tidak bisa asal pakai arrow function karena konsep this nya berbeda

const box = document.querySelector('.box');
box.addEventListener('click', function(){
  let satu = 'size';
  let dua = 'caption';

  // untuk membalikkan animasi
  if(this.classList.contains(satu)){
    [satu, dua] = [dua, satu];
  };

  this.classList.toggle(satu);
  setTimeout(() => {
    // pakai function biasa isinya window
    // saat ganti jadi arrow function bisa pakai this
    this.classList.toggle(dua);
  }, 600);
});