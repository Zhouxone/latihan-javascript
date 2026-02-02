for (let i = 1; i <= 5; i++) {
    console.log(`iterasike ${i}`)
}

let y = 1
while (y <= 5) {
    console.log(`iterasi dengan while loop ${y}`)
    y++
}

//do while-loop

let z = 1
do {
    console.log(`iterasi ke ${z}`)
    z++
} while (z <= 5)

//for in loop
const object = { nama: "rin", umur: 26 }

for (let property in object) {
    console.log(property)
    console.log(object[property])
}


//for of loop

const array = [1, 2, 3, 4, 5]
for (let nilai of array) {
    console.log(nilai)
}