const input = require('prompt-sync')({ signit: true})

const nama = input("masukkan nama: ")
const umur = Number(input("masukkan umur: "))

if (umur < 21) {
    const kurangUmur = 21 - umur
    console.log(`maaf ${nama}, umur kamu kurang ${kurangUmur} tahun lagi`)
} else {
    const uang = input("masukkan jumlah uang: ")
    if (uang < 500000) {
        const kurangUang = uang / 1000
        console.log(`maaf ${nama}, uang kamu hanya ${kurangUang} ribu, datang lain kali`)
    } else { 
        console.log(`selamat datang ${nama}`)
    }
}