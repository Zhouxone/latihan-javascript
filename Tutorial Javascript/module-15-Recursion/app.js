function faktorial(n) {
    if (n === 0) {//base case
        return 1
    }
    //Recursive case
    console.log(n)
    return n * faktorial(n - 1)//Recursive case
}

console.log(faktorial(5))