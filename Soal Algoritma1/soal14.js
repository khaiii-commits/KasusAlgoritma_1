const prompt = require('prompt-sync')({sigint:true})

let a = Number(prompt("masukkan angka : "))

if(a === 100) {
    console.log('nilai kamu sempurna!')
}