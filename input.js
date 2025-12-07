const input = require('prompt-sync')({ signit: true})

const sapa = "Halo "
const nama = input("Masukkan nama: ")
const lahir = Number(input("Masukkan tahun lahit: "))
const umur = 2025 - lahir

console.log(sapa + nama)
console.log(`Halo ${nama}`)