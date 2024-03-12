// jika hanya fs aja, akan cari dulu di core module
// const fs = require('fs');
// const cetakNama = require('./coba'); // local module
// const moment = require('moment'); //third party module / npm module \ node_modules

// 1. core module
// 2. local module
// 3. node_modules
// cari di core module dulu lalu kebawah

// dalam bentuk object import nya
const coba = require('./coba');
// console.log(coba)

// cara menampilkan/menggunakan
console.log(
  coba.cetakNama('udin'), 
  coba.PI, coba.mahasiswa.cetakMhs(), 
  new coba.Orang()
);