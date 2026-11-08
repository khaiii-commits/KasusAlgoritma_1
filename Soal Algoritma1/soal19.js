const prompt = require('prompt-sync')({sigint:true})

let x = Number(prompt('nilai x : '))
let y = Number(prompt('nilai y : '))
let z = Number(prompt('nilai z : '))

if(x >= 50){
    console.log(`${x} Bilangan Terbesar`)
}else{
    console.log(`${x} Bilangan terkecil`)
}

if(y >= 50){
    console.log(`${y} Bilangan Terbesar`)
}else{
    console.log(`${y} Bilangan terkecil`)
}

if(z >= 50){
    console.log(`${z} Bilangan Terbesar`)
}else{
    console.log(`${z} Bilangan terkecil`)
}