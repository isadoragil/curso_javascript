let triangulo = function (a, b, c) {
    if (a == b && b == c){
        return "Equilátero"
    }else if(a == b || b == c || a == c){
        return "Isóceles"
    }else{
        return "Escaleno"
    }
}

console.log(triangulo(3,3,3))
console.log(triangulo(3,3,2))
console.log(triangulo(2,3,3))
console.log(triangulo(3,2,3))
console.log(triangulo(1,2,3)) 