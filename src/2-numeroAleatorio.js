/*
Crear un programa que reciba dos numeros de argumentos y que me devuelva el aleatorio de ellos, si no me pasan los argumentos o son invalidos los valores por defecto seran 1 y 100
*/

const argumentos = process.argv;
const args = argumentos.slice(2)

// console.log(argumentos)
console.log(args)

// inicializar los valores por defecto
let min = 1
let max = 100

//verificar si tengo valores en args
if(args.length === 2){
    // pasar de string a number
    const minParseado = parseInt(args[0]);
    const maxParseado = parseInt(args[1]);

    console.log(minParseado, maxParseado)
    // preguntar si minParseado no es isNaN y lo mismo con el maximo, ademas quiero saber si el minParseado es menor al maxParseado
    if(!isNaN(minParseado) && !isNaN(maxParseado) && minParseado < maxParseado){
        min = minParseado;
        max = maxParseado;
    }else{
        console.log('⚠ Rango invalido. Usaremos los valores por defecto 1 al 100')
    }
}

// generar el numero aleatorio
const aleatorio = Math.floor(Math.random() * (max - min) + min);

// mostrar por consola
console.log(`Número aleatorio generado entre ${min} y ${max}, 🃏 ${aleatorio}`)