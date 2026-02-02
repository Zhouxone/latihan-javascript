let num = new Date()
console.log(num)// menunjukan waktu hari ini

let specific = new Date("August 20, 2024 10:20:00")// waktu yang di rekayasa
console.log(specific)

let custom = new Date(2024, 7, 10, 20, 10, 30)
console.log(custom)

//menggunakan paramater (tahun, bulan, hari, jam, ment ,detik, milidetik)



//mengambil  informasi tanggal dan waktu

let today = new Date()

console.log(today.getFullYear())
console.log(today.getMonth())
console.log(today.getDay())
console.log(today.getHours())
console.log(today.getMinutes())
console.log(today.getSeconds())
console.log(today.getMilliseconds())
console.log(today.getTime())



//mengatur tanggal dan waktu
let date = new Date()
date.setFullYear(2025)
console.log(date)
date.setMonth(11)
console.log(date)
date.setDate(29)
console.log(date)

// perhitungan waktu dengan date object 

let starDate = new Date(2024, 7, 20, 10, 30)
let endDate = new Date(2024, 8, 3, 10, 30)


let diff = endDate - starDate
console.log(diff)/// yang keluarnya milisecoins
let x = diff / (1000 * 3600 * 24)
console.log(x)