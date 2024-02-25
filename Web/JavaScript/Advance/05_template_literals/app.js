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
// const mhs = {
//   nama: 'udin',
//   umur: 33,
//   nrp: '3435312',
//   email: 'udin@gmail.com'
// };

// const el = `<div class="mhs">
//   <h2>${mhs.nama}</h2>
//   <span class="nrp">${mhs.nrp}</span>
// </div>`;
// console.log(el)



// Tagged Templates
const nama = 'Udin Samsudin';
const umur = 33;
const email = 'udin@gmail.com';

// args akan menjadi array untuk expression/parameter 
// jika semisal expression lebih dari satu
function highlight(strings, ...args){
  // let result = '';
  // strings.forEach((str, i) => {
  //   result += `${str}${args[i] || ''}`;
  // });
  // return result;

  return strings.reduce((result, str, i) => `${result}${str}<span class="hl">${args[i] || ''}</span>`, '');
}

const str = highlight`My name is ${nama}, im ${umur} years old, my email ${email}`;
// console.log(str);
document.body.innerHTML = str;