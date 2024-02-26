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


const nama = document.querySelector('.nama');
const huruf = [...nama.textContent].map(h => `<span>${h}</span>`).join('');
nama.innerHTML=huruf;