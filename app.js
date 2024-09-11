const cantidadDeNumeros = 87;
const arrayDeNumerosRandom = [];
let numerosPar = 0;
let numerosImpar = 0;

for(let i = 0; i < cantidadDeNumeros; i++){
    const random = Math.random();
    const numerosRandom = random * 1000;
    const redondeoDeNumerosRandom = Math.floor(numerosRandom) + 1;
    arrayDeNumerosRandom[i] = redondeoDeNumerosRandom;

}

for(let j = 0; j < arrayDeNumerosRandom.length; j++){
    if(arrayDeNumerosRandom[j] % 2 === 0){
        numerosPar++;
    } else {
        numerosImpar++;
    }
}


console.log('Array de 87 numeros generados de manera random: ', arrayDeNumerosRandom);
console.log('=========================================');
console.log('Cantidad de numeros Pares: ', numerosPar);
console.log('=========================================');
console.log('Cantidad de numeros Impares: ', numerosImpar);


