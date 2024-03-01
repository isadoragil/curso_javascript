function bhaskara(a, b, c) {
    let delta = b**2 - 4 * a * c
    if(delta<0){
        return 'Delta é negativo'
    }else{
        let resultado = []
        let x = (- b + Math.sqrt(delta))/(4 * a * c)
        let y = (- b - Math.sqrt(delta))/(4 * a * c)
        resultado.push(x)
        resultado.push(y)
        return resultado
    }
}

console.log(bhaskara(1, 3, 2))
console.log(bhaskara(3, 1, 2))