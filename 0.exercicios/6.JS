function simples(montante, c, i, t) {
    montante = c * (1 + (i/100)*t)
    return montante
}

function composto(montante, c, i, t) {
    montante = c * ((1+(i/100))**t)
    return montante
}

