// const validator = require('validator');
const chalk = require('chalk');

// validator
// console.log(validator.isEmail('raylienardy@gmail.com'));
// console.log(validator.isMobilePhone('0802345678', 'id-ID'));
// console.log(validator.isNumeric('0802d345678'));

// chalk
// console.log(chalk.blue('hello world'));
// console.log(chalk.bgBlue('hello world'));
// console.log(chalk.black.bgBlue('hello world'));
// console.log(chalk.italic('hello world'));
// console.log(chalk.italic.bgBlue.black('hello world'));

// ubah warna di tengah-tengah
const nama = 'udin'
const pesan = chalk`Lorem ipsum dolor {bgRed.black.strikethrough.bold sit amet} consectetur {bgGreen.italic.black adipisicing elit}. Eligendi, laborum. My name : ${nama}`;
console.log(pesan);