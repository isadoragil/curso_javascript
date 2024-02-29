const operacao = function(a, b){
    soma = a + b
    subtracao = a - b
    multiplicacao = a * b
    divisao = a / b
    //return (soma + ' ' + subtracao + ' ' + multiplicacao + ' ' + divisao)
    return (`${soma} ${subtracao} ${multiplicacao} ${divisao}`)
}

console.log(operacao(12, 4))