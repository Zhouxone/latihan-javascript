let mobil = {
    merek: "hyundai",
    model: "avanza",
    tahun: 2024
}//object literal


let buku = new Object()
buku.judul = "javascript"
buku.penulis = "Rinz"
console.log(buku)//connstructor new Object()

//mengakses properti object
let mahasiswa = {
    nama: "rin",
    umur: 22,
    jurusan: "seni"
}

//dengan dot 

console.log(mahasiswa.nama)

//paket bracket 
console.log(mahasiswa["jurusan"])



//menambah properti / mengubah
mahasiswa.alamat = "medan"
console.log(mahasiswa)

//mengubah Properti
mahasiswa.nama = "xiaorin"
console.log(mahasiswa)

//menghapus propererti 

delete mahasiswa.alamat
console.log(mahasiswa)

//nested object 
let universitas = {
    "nama": "itb",
    fakultas: {
        nama: "teknik komputer",
        jurusan: "teknik eleketro"
    }
}

console.log(universitas)

//destrusting object

let { nama, umur } = mahasiswa
console.log(nama)