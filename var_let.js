var numero = 1;
{
    var numero = 2;
    console.log("dentro = ", numero);
}
console.log("fora = ", numero);

/*-------------------------------------------------------------------------------------------*/ 

let numero = 1;
{
    let numero = 2;
    console.log("dentro = ", numero);
}
console.log("fora = ", numero);

/*-------------------------------------------------------------------------------------------*/ 

var numero = 1;
{
    let numero = 2;
    console.log("dentro = ", numero);
}
console.log("fora = ", numero);

/*-------------------------------------------------------------------------------------------*/ 

for(var i=0; i<10; i++){
    console.log(i);
}
console.log('i = ', i);

/*-------------------------------------------------------------------------------------------*/ 

for(let i=0; i<10; i++){
    console.log(i);
}
console.log('i = ', i);