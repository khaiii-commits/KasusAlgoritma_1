const prompt = require('prompt-sync')({sigint:true})

let e = 1
let f = 2
let j = 3
let g = 4

let a = Number(prompt('juara :'))
if( a === e){
    console.log(`Selamat Anda Juara Utama`)
}

let b = Number(prompt('juara :'))
if( b === f){
    console.log(`Selamat Anda Runner Up`)
}

let c = Number(prompt('juara :'))
if( c === j){
    console.log(`Selamat Anda Juara Ketiga`)
}

let d = Number(prompt('juara :'))
if( d === g){
    console.log(`Inputan Anda Salah`)
}