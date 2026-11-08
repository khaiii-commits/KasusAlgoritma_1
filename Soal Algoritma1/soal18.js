const prompt = require('prompt-sync')({sigint:true})

let a = Number(prompt('angka : '))

if (a % 7 === 0) {
  console.log(`${a} adalah kelipatan 7`);
} else {
    console.log(`${a} bukan kelipatan 7`);
}