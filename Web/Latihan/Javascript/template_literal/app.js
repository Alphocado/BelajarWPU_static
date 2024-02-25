// 1. html fragments
// const mhs = {
//   nama: 'Udin Samsudin',
//   umur: 33,
//   nrp: '7842387',
//   email: 'udin@gmail.com'
// };

// const el = `<div class="mhs">
//   <h2>${mhs.nama}</h2>
//   <span class="nrp">${mhs.nrp}</span>
// </div>`;

// 2. lopping
// const mhs = [
//   {
//     nama: 'udin samsudin',
//     email: 'udin@gmail.com'
//   },
//   {
//     nama: 'budi susanto',
//     email: 'udin@gmail.com'
//   },
//   {
//     nama: 'tono sutarno',
//     email: 'udin@gmail.com'
//   },
// ];
// const el = `<div class="mhs">
//   ${mhs.map(m => `<ul>
//     <li>${m.nama}</li>
//     <li>${m.email}</li>
//   </ul>`).join('')}
// </div>`

// 3. conditional
// ternary
// const lagu = {
//   judul: 'In Your Head',
//   penyanyi: 'The Cranberries',
//   // feat: 'Udin Samsudin'
// }
// const el = `<div class="lagu">
//   <ul>
//     <li>${lagu.judul}</li>
//     <li>${lagu.penyanyi} ${lagu.feat ? `(feat. ${lagu.feat})` : ''}</li>
//   </ul>
// </div>`

// 4. Nested
// HTML Fragment bersarang

const mhs = {
  nama: 'udin samsudin',
  semester: 5,
  mataKuliah: [
    'Rekayasa',
    'Analisa',
    'Pemrograman',
    'OOP'
  ]
};

// kegunaan join untuk menghilangkan koma
function cetakMataKuliah(mataKuliah){
  return `
    <ol>
      ${mataKuliah.map(mk => `<li>${mk}</li>`).join('')} 
    </ol>
  `
}

const el = `<div class="mhs">
  <h2>${mhs.nama}</h2>
  <span class="semester">${mhs.semester}</span>
  <h4>Mata Kuliah : </h4>
  ${cetakMataKuliah(mhs.mataKuliah)}
</div>`


document.body.innerHTML = el;