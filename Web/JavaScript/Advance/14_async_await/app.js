// const coba = new Promise(resolve => {
//   setTimeout(() => {
//     resolve('selesai')
//   }, 2000);
// });
// coba.then(() => console.log(coba));


function cobaPromise() {
  return new Promise((resolve, reject) => {
    const waktu = 50000;
    if( waktu < 5000 ){
      setTimeout(() => {
        resolve('selesai');
      }, 2000);
    } else {
      reject('too slow!');
    }
  });
}
// cara normal pakai then
// const coba = cobaPromise();
// coba.then(coba => console.log(coba))
// .then(() => console.log(coba));

// pakai await 
// sebelum function await-nya 
// awaitnya sebelum function yang didalam nya
// try = resolve
// catch = reject
async function cobaAsync(){
  try{
    const coba = await cobaPromise();
    console.log(coba);
  } catch(e) {
    console.error(e);
  }
};
cobaAsync();

// resolve ditangkap dengan method then
// reject ditangkap dengan method catch