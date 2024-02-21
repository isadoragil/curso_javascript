let nome = "NomeTeste", idade = 15;

console.log(`Olá, meu nome é ${nome} e eu tenho ${idade} anos`);
console.log("Olá, meu nome é", nome, "e eu tenho", idade, "anos");


/*-------------------------------------------------------------------------------------------*/ 
let a = 3, b = 8;

function soma(x, y) {
    console.log("A soma é " + (x + y));
}
soma(a,b);

function soma2(x, y) {
    return("A soma é " + (x + y));
}
console.log(soma2(a,b));

const soma3 = (x,y) => "A soma é " + (x + y);
console.log(soma3(a,b));

const soma4 = (x,y) => console.log("A soma é " + (x + y));
soma4(a,b);

console.log(typeof soma4);



/*-------------------------------------------------------------------------------------------*/ 

const produto = {};

produto.preco = 3.5;
produto.nome = "Shampoo";
produto.estoque = 56;

console.log(produto);

console.log("Produto: " + produto.nome);
console.log("Preço: R$" + produto.preco);
console.log("Quantidade em estoque: " + produto.estoque);



/*-------------------------------------------------------------------------------------------*/ 

const peso1 = 1.0;
const peso2 = Number('2.0');

console.log(peso1, peso2);
console.log(Number.isInteger(peso1));
console.log(Number.isInteger(peso2));

const avaliacao1 = 9.871;
const avaliacao2 = 6.871;

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2);

console.log(media);
console.log(media.toFixed(2));
console.log(media.toString(2)); // em binário
console.log(typeof media);
console.log(typeof Number);
console.log(typeof peso2);