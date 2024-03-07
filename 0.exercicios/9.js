function arredonda(nota) {
    if (nota % 5 > 2) {
        let notaArredondada = nota + (5 - nota % 5)
        return notaArredondada
    } else {
        let notaArredondada = nota
        return notaArredondada
    }
}

function classificacao(nota) {
    let notaCorrigida = arredonda(nota)
    if (notaCorrigida >= 40) {
        console.log('Aprovado com ' + notaCorrigida)
    }else{
        console.log('Reprovado com ' + notaCorrigida)
    }
}

classificacao(37)
classificacao(38)
classificacao(84)
classificacao(82)
classificacao(31)

