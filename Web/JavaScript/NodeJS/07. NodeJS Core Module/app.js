// Core Module
// File System
const fs = require('fs');

// menuliskan string ke file (synchrounous)
fs.writeFileSync('data/test.txt', 'hello world')