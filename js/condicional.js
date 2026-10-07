// Desarrolle un algoritmo que lea el valor del pasaje y el número de pasajeros que
// abordarán un microbús. Calcular el valor total a pagar. Además, imprima un
// mensaje que diga si tiene sobre cupo o no. Tenga en cuenta que a un microbús le
// caben 20 pasajeros.

//entrada
const numPasajeros=parseInt(prompt("Digite cuantos pasajeros"))
const valorPasaje=parseInt(prompt("Digite valor del pasaje"))
//proceso 
const totalPagar=numPasajeros*valorPasaje
if (numPasajeros>20){
    console.log(`Tiene sobre cupo`);
}else{
    console.log(`No tiene sobrecupo`);
}
//salida
console.log(totalPagar);


//sobrecupo




// 2. Leer nombre y estatura de una persona, Imprimir el nombre si su 
// estatura es mayor a 165

//entrada
const nombre=prompt("Digite nombre")
const estatura=parseInt(prompt("Digite estatura"))

if(estatura>165){
    console.log(`El nombre es: ${nombre}`);
}


//10   18.5    3        78

let peso=100
const d1=peso*10/100

peso=peso-d1   //90

const d2=peso*18.5/100   //  74
peso=peso-d2

const au=peso*3/100    // 76
peso=peso+au

if(peso>=78){
    console.log(`Siga haciendo ejercicio`);
}else{
    console.log(`muy bien`);
}

