let fruits = ["apel", "banana", "manggo"]
console.log(fruits)



//new array
let num = new Array(1, 2, 3, 4, 5)
console.log(num)


// mengakses elemen array

console.log(fruits[0])
console.log(fruits[2])


// menambah atau mengubah elemen array
fruits[3] = "strawberry"
fruits[0] = "along"
console.log(fruits)




// manipulasi array

let numbers = [1, 2, 3, 4, 5]
numbers.push(4)
numbers.pop()
numbers.shift()
numbers.unshift(7)
console.log(numbers)


//mengabungkan array
let numbers2 = [4, 5]

let b = numbers.concat(numbers2)
console.log(b)
console.log(b.slice(2, 4))

console.log(b.slice(0, 3, 10)) // membuang angka dan mengantinya dengan paramater ketiga dengan jarak index 0 -3


let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]

console.log(matrix)