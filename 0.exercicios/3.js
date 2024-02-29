conta1 = (a, b) => a**b
conta2 = (a, b) => {
    return a**b
}

function conta3 (a, b) {
    console.log(a**b)
}

console.log(conta1(2, 4))
console.log(conta2(2, 4))
conta3(2, 4)