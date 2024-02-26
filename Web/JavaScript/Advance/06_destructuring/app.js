// destructuring variable / assignment

// destructuring array
// const perkenalan = ['halo', 'nama', 'saya', 'udin'];
// const [salam, satu, dua, nama] = perkenalan;

// skipping items
// melompati 1 2 
// const [salam, , , nama] = perkenalan
// console.log(salam);

// swap items
// let a = 1;
// let b = 2;
// console.log(a);
// console.log(b);
// [a,b] = [b, a];
// console.log(a);
// console.log(b);

// return value pada function
// function coba() {
//   return [1,2];
// }
// const a = coba();
// console.log(a);
// console.log(a[1]);

// const [a, b] = coba();
// console.log(b);


// Rest parameter
// const [a, ...values] = [1,2, 3, 4];
// console.log(a);
// console.log(values);

// Destructuring Object
// const mhs = {
//   nama: "Udin",
//   umur: 33
// };
// const nama = mhs.nama;
// tidak boleh sembarang penamaannya harus sesuai dengan isi object
// const {nama, umur} = mhs;
// console.log(nama);

// Assignment tanpa deklarasi object
// const {nama, umur} = {
//   nama: 'udin',
//   umur: 33
// }
// ({ nama, umur } = { nama: 'udin', umur: 33});
// console.log(nama);

// Assign ke variable baru
// const mhs = {
//   nama: 'udin',
//   umur: 33
// }
// const { nama: n, umur:u } = mhs;
// console.log(u);

// Memberikan Default Value
// const mhs = {
//   nama: 'udin',
//   umur: 33
// }
// const {nama, umur, email = 'default@gmail.com'} = mhs;
// console.log(email);

// Memberi nilai default + assign ke variable baru
// const mhs = {
//   nama: 'udin',
//   umur: 33,
//   email: 'udin@gmail.com'
// }
// const {nama: n, umur: u, email:e = 'default@gmail.com'} = mhs;
// console.log(e);


// Rest Parameter
// const mhs = {
//   nama: 'udin',
//   umur: 33,
//   email: 'udin@gmail.com'
// }
// const {nama, ...value} = mhs;
// console.log(value);

// Mengambil field pada object, setelah
// dikirim sebagai parameter untuk function
const mhs = {
  id: 123,
  nama: 'Udin',
  umur: 33,
  email: 'udin@gmail.com'
}
function getIdMhs({ id }){
  return id;
}
console.log(getIdMhs(mhs));