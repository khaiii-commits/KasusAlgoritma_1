const prompt = require("prompt-sync")({sigint:true})

const Phi = 3.14
let r = Number(prompt("jari jari : "))

let v = 4/3 * Phi * r**3
let l = 4 * Phi * r**2

console.log(`
    Volume bola : ${v.toFixed(2)}
    Luas permukaan bola : ${l.toFixed(2)}

`)