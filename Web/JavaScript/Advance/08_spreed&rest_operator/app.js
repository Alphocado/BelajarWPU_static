// spread operator
// memecah iterables menjadi single element

// array salah satu iterables
// const mhs = ['udin', 'budi', 'tono']
// console.log(mhs);
// string juga salah satu iterables
// console.log(...mhs[0]);

// menggabungkan 2 array
// const mhs = ['udin', 'budi', 'tono'];
// const dosen = ['agus', 'jojo', 'tina'];
// const orang = [...mhs, 'upin', ...dosen];
// spread lebih flexible dibanding concat
// const orang = mhs.concat(dosen);
// console.log(orang);


// mengcopy array
// const mhs = ['udin', 'budi', 'tono'];
// // const mhs1 = mhs;
// // mhs1[0] = 'Doni';

// // cara copy yg betul
// const mhs1 = [...mhs];
// mhs1[0] = 'Doni';
// console.log(mhs);

// const liMhs = document.querySelectorAll('li');
// // console.log(liMhs[0].textContent);
// // const mhs = [];
// // for(let i = 0; i < liMhs.length; i++){
// //   mhs.push(liMhs[i].textContent);
// // };
// // console.log(mhs);

// const mhs = [...liMhs].map(m => m.textContent);
// console.log(mhs);


// const nama = document.querySelector('.nama');
// const huruf = [...nama.textContent].map(h => `<span>${h}</span>`).join('');
// nama.innerHTML=huruf;

// function myFunc(..k){
//   // return Array.from(arguments);
//   return [];
// }
// console.log(myFunc(1,2,3,4,5));

// function jumlahkan(...angka){
//   let total = 0;
//   for(const a of angka) {
//     total += a;
//   }
//   return total;
// }
// console.log(jumlahkan(1,2,3,4,5));


// array destructuring
// const klmp1 = ['udin', 'budi', 'tono',' anji'];
// const [ketua, wakil, ...anggota] = klmp1;
// console.log()

// object destructuring
// const team = {
//   pm: "udin",
//   frontEnd1: 'budi',
//   frontEnd2: 'erik',
//   backEnd: 'tono',
//   ux: 'fani',
//   devOps: 'anji'
// };

// const {pm, ...myTeam} = team;
// console.log(myTeam);

// filtering
function filterBy(type, ...values){
  return values.filter( v => typeof v === type );
}

console.log(filterBy('boolean', 1,2, 'udin', false, 10, true, 'tono'));