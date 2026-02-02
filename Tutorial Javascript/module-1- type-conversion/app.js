// Implicit conversion


let result = "5" + 10 // mau kali atau tambah hasilnya number kecuali (+) plus ini karena akan merubah 10 ke proses strings 
let result1 = "5" - 10 // jika seperti ini akan merubah limanya menjadi number 5
let result2 = "5" / 10
console.log(result, typeof result)

//falsy value 0,null,undefined

let bool = !0 // nilai nya akan menjadi true karena ada tanda ! dan nilai 0 adalah false dan menjadi kan tidak false yang berarti true
let bool1 = !null

console.log(bool1, typeof bool1)
console.log(bool, typeof bool)

// kebalikannya jika ganti jadi 1 yg bernilai true

let bool2 = !1
// maka disini akan menjadi false  karena ada tanda seru yang berarti bukan true = false

console.log(bool2, typeof bool2)


//ekspLICIT cONVERSION


let num = 100

// let string = String(num)
let string = num.toString()
//merubah number ke string

console.log(string, typeof string)


let string2 = "200"
let num2 = parseInt(string2)
console.log(string2, typeof num2)
// merubah string ke number


let string3 = "21321.99999"
let num3 = parseFloat(string3)
//utuk nilang float

console.log(string3, typeof num3)



let bool0 = Boolean(undefined)
console.log(bool0, typeof bool0)


