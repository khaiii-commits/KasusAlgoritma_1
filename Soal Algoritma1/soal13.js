const prompt = require("prompt-sync")({sigint:true})

let harga = Number(prompt("masukkan harga barang : "))
const pajak = 0.1
const fee = 0.05

let p = harga * pajak
let f = harga * fee
let total = harga + p + f 

console.log(`
    harga makanan : ${harga}
    pajak : ${p}
    fee : ${f}
    harga bayar : ${total}
    `)