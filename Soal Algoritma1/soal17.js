const prompt = require('prompt-sync')({sigint:true})

let h = 200

let a = Number(prompt("total harga barang : "))
if( a >= h ){
    console.log('mendapatkan diskon 7.5%')
}
if( a <= h){
    console.log('tidak mendapatkan diskon')
}