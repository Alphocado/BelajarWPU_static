function cetakNama(nama) {
  return `Halo, saya ${nama}`;
}

const PI = 3.14;

const mahasiswa = {
  nama : "udin",
  umur : 20,
  cetakMhs(){
    return `Saya, ${this.nama}, umur ${this.umur}`
  }
}

class Orang {
  constructor() {
    console.log('object telah dibuat');
  }
}

// cara kirim jika lebih dari 1
// module.exports.cetakNama = cetakNama;
// module.exports.PI = PI;
// module.exports.mahasiswa = mahasiswa;
// module.exports.Orang = Orang;

// cara lain
// module.exports = {
//   cetakNama: cetakNama,
//   PI: PI,
//   mahasiswa: mahasiswa,
//   Orang: Orang
// }

// cara lain lagi
module.exports = { cetakNama, PI, mahasiswa, Orang};