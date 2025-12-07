const input = require('prompt-sync')({ signit: true})

const nilai = Number(input("Masukkan nilai: "))

if (nilai > 75) {
    console.log("A")
} else {
    console.log("remedial")
}