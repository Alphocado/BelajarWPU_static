// Callback
// Synchronous Callback
// function halo(nama){
//   alert(`Halo, ${nama}`);
// }

// function tampilkanPesan(callback) {
//   const nama = prompt('Masukkan nama : ');
//   callback(nama);
// }

// tampilkanPesan(nama => alert(`Halo ${nama}`));

// const mhs = [
//   {
//     "nama": "udin",
//     "nrp": "736432",
//     "email": "udin@gmail.com",
//     "jurusan": "Teknik Komputer",
//     "idDosenWali": 1,
//   },
//   {
//     "nama": "budi",
//     "nrp": "7246328",
//     "email": "budi@gmail.com",
//     "jurusan": "Teknik Elektro",
//     "idDosenWali": 3,
//   },
//   {
//     "nama": "tono",
//     "nrp": "982321",
//     "email": "tono@gmail.com",
//     "jurusan": "Teknik Mesin",
//     "idDosenWali": 2,
//   },
// ];
// console.log('mulai');
// mhs.forEach(m => {
//   for(let i = 0; i< 1000000; i++){
//     let date = new Date();
//   }
//   console.log(m.nama);
// });
// console.log('selesai');


// Asynchronous Callback
// function getDataMahasiswa(url, success, error){
//   let xhr = new XMLHttpRequest();
//   xhr.onreadystatechange = function(){
//     if(xhr.readyState === 4){
//       if(xhr.status === 200){
//         success(xhr.response);
//       } else if(xhr.status === 404){
//         error();
//       }
//     }
//   }

//   xhr.open('get', url);
//   xhr.send();
// }

// console.log('mulai');
// getDataMahasiswa('data/mahasiswa.json', results => {
//   // console.log(JSON.parse(results));
//   const mhs = JSON.parse(results);
//   mhs.forEach(m => console.log(m.nama));
// }, () => {
  
// });
// console.log('selesai'); 


// JQuery 
console.log('mulai');
$.ajax({
  url: 'data/nahasiswa.json',
  success: (mhs) => {
    mhs.forEach(m => console.log(m.nama));
    // console.log(mhs);
  },
  error: (e) => {
    console.log(e.responseText);
  }
});
console.log('selesai');