const prompt = require('prompt-sync')({sigint:true})

let angka = Number(prompt("masukkan kode : "))
let a = 78821

if( angka === a) {
    console.log('You are authenticated')
}

if(angka < a) {
    console.log('You have no access')
}