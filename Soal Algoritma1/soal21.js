const prompt = require('prompt-sync')({sigint:true});

let nama  = prompt('Masukan Nama Siswa : ');
let nilai = Number(prompt('Masukan Nilai Siswa (0-100) : '));

// Validasi nilai harus antara 0-100
if (isNaN(nilai) || nilai < 0 || nilai > 100) {
    console.log('Nilai tidak valid! Masukan angka antara 0 sampai 100.');
}
else if (nilai >= 90 && nilai <= 100) {
    console.log(`Nama  : ${nama}`);
    console.log(`Nilai : ${nilai}`);
    console.log(`Grade : A`);
}
else if (nilai >= 80) {
    console.log(`Nama  : ${nama}`);
    console.log(`Nilai : ${nilai}`);
    console.log(`Grade : B`);
}
else if (nilai >= 70) {
    console.log(`Nama  : ${nama}`);
    console.log(`Nilai : ${nilai}`);
    console.log(`Grade : C`);
}
else if (nilai >= 60) {
    console.log(`Nama  : ${nama}`);
    console.log(`Nilai : ${nilai}`);
    console.log(`Grade : D`);
}
else {
    console.log(`Nama  : ${nama}`);
    console.log(`Nilai : ${nilai}`);
    console.log(`Grade : E`);
}