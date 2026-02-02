let kali = function (a, b) {
    return a * b
}

console.log(kali(4, 5))


//arrow function
let rin = (a, b) => {
    return a * b;
}

console.log(rin(4, 5))


//bisa di persingkat 
// 
// 
let k = (a, b) => a * b;

console.log(k(2, 3))

//IIFE(immediately Invoked fUNCTION Expression)
const appConfig = (function () {
    const apikey = "1234"
    const apiurl = "https://api.example.com"
    return {
        getApikey: function () {
            return apikey
        },
        getApiURL: function () {
            return apiurl
        }
    }
})()
console.log(appConfig.getApikey())
console.log(appConfig.getApiURL())

