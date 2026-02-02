// tentang pengunaan strings 


//megaksers karakter pada strings
let str = "Javascript"

console.log(str[0])


// properti dan method di dalam strings
console.log(str.length)

//mengetahui panjang strings 
console.log(str.toUpperCase())
console.log(str.toLowerCase())// merubah strings ke lower case
let testTrim = " rin                                               "


console.log(testTrim.trim())




// let firstname = "xin"
// let rin = "pago"

// let result = `${firstname} ${rin}`
// console.log(result)

// let text = "jvascript"
// console.log(text.slice(0, 4))
// console.log(text.substring(4))

//𝗺𝗲𝗻𝗴𝗮𝗻𝘁𝗶 𝗯𝗮𝗴𝗶𝗮𝗻 𝗱𝗮𝗿𝗶 𝘀𝘁𝗿𝗶𝗻𝗴𝘀

// let replacement = "hello world"
// let newr = replacement.replace("world", "rin")

// console.log(newr)

// const arr = ["test", "array", "di", "string"]

// console.log(arr.join(" "))

// //mengabungkan strings

// const teststring = "test-arrat-hahah"

// console.log(teststring.split("-", 2))

//pencarian di dalam strings


//indexof
let setence = "lorem ipsum dolor sit"

let index = setence.indexOf("dolor")
let last = setence.lastIndexOf("dolor")
console.log(index)
console.log(last)

let exist = setence.includes("dolor")

console.log(exist)


const stringsAsli = "javascript"


let stringsbaru = (stringsAsli === "javascript" ? "Javascript" : "No")

console.log(stringsbaru)