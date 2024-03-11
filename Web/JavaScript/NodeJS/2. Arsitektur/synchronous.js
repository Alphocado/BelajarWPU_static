// Synchronous

const getUserSync = (id) => {
  // let nama = '';
  // if(id == 1){
  //   nama = 'udin';
  // } else {
  //   nama = 'budi';
  // }

  const nama = id === 1 ? 'udin' : 'budi';
  return { id, nama };
};

const userSatu = getUserSync(1);
console.log(userSatu);

const userDua = getUserSync(1);
console.log(userDua);

const halo = 'Hello World';
console.log(halo);