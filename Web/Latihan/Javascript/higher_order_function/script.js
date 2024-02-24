// ambil semua elemen video 
const videos = Array.from(document.querySelectorAll('[data-duration]'));

// pilih hanya javascrip lanjutan
let jsLanjut = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'))

// ambil durasi masing-masing video
.map(item => item.dataset.duration)

// ubah durasi jadi int, ubah menit jadi detik
.map(waktu => {
  // 10:30 -> [10,30] split
  const parts = waktu.split(':').map(part => parseFloat(part));
  return parts[0] * 60 + parts[1];
})

// jumlahkan semua detik
.reduce((total, detik) => total + detik);

// ubah format jadi jam menit detik
const jam = Math.floor(jsLanjut / 3600);
jsLanjut = jsLanjut - jam * 3600;
const menit = Math.floor(jsLanjut / 60);
const detik = jsLanjut - menit * 60;

// simpan di DOM 
const pDurasi = document.querySelector('.total-durasi');
pDurasi.textContent = `${jam} Jam , ${menit} menit, ${detik} detik`;
const jmlVideo = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN')).length;
const pJmlVideo = document.querySelector('.jumlah-video');
pJmlVideo.textContent = `${jmlVideo} Video.`

console.log(jsLanjut);