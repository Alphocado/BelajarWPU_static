// cara membuat object pada javascript
// 1. object literal
// problem : tidak efektif kalau object lebih dari satu
// let mahasiswa1 = {
//   nama: 'Udin',
//   energy: 10,
//   makan: function(porsi){
//     this.energy += porsi;
//     console.log(`${this.nama}, selamat makan`)
//   }
// }
// let mahasiswa2 = {
//   nama: 'Udon',
//   energy: 10,
//   makan: function(porsi){
//     this.energy += porsi;
//     console.log(`${this.nama}, selamat makan`)
//   }
// }
// note: method adalah function yang ada didalam object

// 2. function declaration
// problem : berat
// function Mahasiswa(nama, energy){
//   let mahasiswa = {};
//   mahasiswa.nama = nama;
//   mahasiswa.energy = energy;

//   mahasiswa.makan = function (porsi) {
//     this.energy += porsi;
//     console.log(`selamat makan ${this.nama}`);
//   }

//   mahasiswa.main = function(jam) {
//     this.energy -= jam;
//     console.log(`${this.nama} sedang main`);
//   }

//   return mahasiswa;
// }
// let udin = Mahasiswa('udin', 10);
// let tono = Mahasiswa('tono', 10);

// 3. constructor function
// ganti mahasiswa dengan this
// hapus let mahasiswa & hapus return
// function Mahasiswa(nama, energy){
//   this.nama = nama;
//   this.energy = energy;

//   this.makan = function (porsi) {
//     this.energy += porsi;
//     console.log(`selamat makan ${this.nama}`);
//   }

//   this.main = function(jam) {
//     this.energy -= jam;
//     console.log(`${this.nama} sedang main`);
//   }
// }

// let udin = new Mahasiswa('udin', 10);


// 4. object.create

const methodMahasiswa = {
  makan: function (porsi) {
    this.energy += porsi;
    console.log(`selamat makan ${this.nama}`);
  },

  main: function(jam) {
    this.energy -= jam;
    console.log(`${this.nama} sedang main`);
  },

  tidur: function(jam) {
    this.energy += jam*2;
    console.log(`tidur ${this.nama}`)
  }
};
function Mahasiswa(nama, energy){
  let mahasiswa = Object.create(methodMahasiswa);
  mahasiswa.nama = nama;
  mahasiswa.energy = energy;

  return mahasiswa;
}
let udin = Mahasiswa('udin', 10);
let tono = Mahasiswa('tono', 10);