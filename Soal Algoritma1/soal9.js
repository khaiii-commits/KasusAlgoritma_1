const prompt = require('prompt-sync')({sigint:true})

const p =Number(prompt('panjang : '))
  const l =Number(prompt('lebar : '))

let luas = p * l
let keliling = 2 * (p + l)

console.log(`
    luas persegi: ${luas}
    keliling persegi : ${keliling}`)
