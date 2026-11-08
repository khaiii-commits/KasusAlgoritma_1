const prompt = require('prompt-sync')({sigint:true})

let h = prompt('Masukan Huruf: ')
let huruf = h.toLowerCase()

if(h < 'a' || h > 'z' || h.length !== 1) {
    console.log('bukan termasuk huruf')
}

else if (huruf === 'a' || huruf === 'i' || huruf === 'u' || huruf === 'e' || huruf === 'o') {
  console.log(`"${h}" adalah Huruf Vokal`);
}

else {
  console.log(`"${h}" adalah Huruf Konsonan`);
}