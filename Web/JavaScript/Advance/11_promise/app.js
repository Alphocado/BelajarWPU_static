// $.ajax({
//   url: 'http://www.omdbapi.com/?apikey=6ef48394&s=harry',
//   success: movies => console.log(movies)
// })

// const xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function () {
//   if(xhr.status === 200){
//     if(xhr.readyState === 4){
//       console.log(JSON.parse(xhr.response));
//     }
//   } else {
//     console.log(xhr.responseText);
//   }
// }
// xhr.open('get', 'http://www.omdbapi.com/?apikey=6ef48394&s=harry');
// xhr.send()  ;


// fetch
// fetch('http://www.omdbapi.com/?apikey=6ef48394&s=harry')
//   .then(response => response.json())
//   .then(response => console.log(response));


// Promise
// object yg merepresentasikan keberhasilan / kegagalan sebuah
// event yang asynchronous di masa yang akan datang
// janji (terpenuhi / ingkar)
// states (fulfilled / rejected / pending)
// callback (resolve / reject / finally)
// aksi (then / catch)

// contoh 1
// let ditepati = false;
// const janji1 = new Promise((resolve, reject) => {
//   if(ditepati){
//     resolve('janji ditepati');
//   } else {
//     reject('ingkar janji');
//   }
// });

// janji1
//   .then(response => console.log('oke : ' + response))
//   .catch(response => console.log('not ok : ' +response));


// contoh 2 
// let ditepati = true;
// const janji2 = new Promise((resolve, reject) => {
//   if(ditepati){
//     setTimeout(() => {
//       resolve('ditepati, setelah sekian....');
//     }, 2000);
//   } else {
//     setTimeout(() => {
//       resolve('tidak ditepati, setelah sekian....');
//     }, 2000)
//   }
// }); 

// console.log('mulai');
// // console.log(janji2.then(() => console.log(janji2)));
// janji2
//   .finally(() => console.log('selesai menunggu'))
//   .then(response => console.log('oke : ' + response))
//   .catch(response => console.log('not ok : ' +response));
// console.log('selesai');


// promise.all()
const film = new Promise(resolve => {
  setTimeout(() => {
    resolve([{
      judul: 'Avengers',
      sutradara: 'Budi',
      pemeran: 'Tono, Agus',
    }])
  }, 1000);
});
const cuaca = new Promise(resolve => {
  setTimeout(() => {
    resolve([{
      kota: 'Bandung',
      template: 30,
      kondisi: 'Berawan'
    }]);
  }, 500)
});

// film.then(response => console.log(response));
// cuaca.then(response => console.log(response));
Promise.all([film, cuaca])
// .then(response => console.log(response));
  .then(response => { 
    const [film, cuaca] = response;
    console.log(film);
    console.log(cuaca);
  });