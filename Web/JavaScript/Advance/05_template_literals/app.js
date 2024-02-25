// template literals / template string
// const nama = 'udin';
// const umur = 33;
// console.log(`saya ${nama}, saya ${umur} tahun`);

// embeded expression
// console.log(`${1+1}`);
// console.log(`${alert('halo')}`);
// const x = 11;
// console.log(`${(x % 2 == 0) ? 'genap' : 'ganjil'}`);

// HTML fragments
const mhs = {
  nama: 'udin',
  umur: 33,
  nrp: '3435312',
  email: 'udin@gmail.com'
};

const el = `<div class="mhs">
  <h2>${mhs.nama}</h2>
  <span class="nrp">${mhs.nrp}</span>
</div>`;
console.log(el)