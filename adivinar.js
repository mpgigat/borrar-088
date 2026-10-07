
// // una funcion que evualue la entrada del usuario y responder con una de las siguientes pistas:
// //       "El número secreto es MAYOR" (si el usuario ingresó un número menor al secreto).
// //       "El número secreto es MENOR" (si el usuario ingresó un número mayor).
// //       "¡Correcto!" (si el usuario adivina el número), mostrando además la cantidad de intentos que le tomó.
// // Se debe contar el numero de intentos usados

// const numeroAleatorio=()=>{
//     return  Math.floor(Math.random()*101)
// }

// const validarNumero=(numero)=>{
//     if(numero>numAdivinar){
//         return 1
//     }else if(numero<numAdivinar){
//         return 2
//     }else{
//         return 0
//     }
// }

//total de intentos maximo.  5
//para dos jugadores




// console.log(`Inicio Juego Adivinanza`);
// const numAdivinar=numeroAleatorio()

// let intentos=0
// while(true){
//     const numeroUsuario= parseInt(prompt("Dugite numero"))
//     intentos++
//     const validacion=validarNumero(numeroUsuario)
//     if (validacion==0){
//         console.log(`Felicitacion!, uso ${intentos} intentos`);
//         break;
//     }else if(validacion==1){
//         console.log(`El número secreto es MENOR`);
//     }else{
//         console.log(`El número secreto es MAYOR`);
//     }

// }

const ventas = [
  {
    "id": 1,
    "articulo": "Camiseta básica",
    "cantidad": 2,
    "precio_unitario": 15.50,
    "fecha": "2026-08-20"
  },
  {
    "id": 2,
    "articulo": "Pantalón vaquero",
    "cantidad": 1,
    "precio_unitario": 35.00,
    "fecha": "2026-08-21"
  },
  {
    "id": 3,
    "articulo": "Zapatos deportivos",
    "cantidad": 1,
    "precio_unitario": 55.00,
    "fecha": "2026-08-21"
  },
  {
    "id": 4,
    "articulo": "Gorra de béisbol",
    "cantidad": 3,
    "precio_unitario": 12.00,
    "fecha": "2026-08-22"
  },
  {
    "id": 5,
    "articulo": "Pack de calcetines",
    "cantidad": 5,
    "precio_unitario": 8.50,
    "fecha": "2026-08-23"
  },
  {
    "id": 6,
    "articulo": "Chaqueta de cuero",
    "cantidad": 1,
    "precio_unitario": 85.00,
    "fecha": "2026-08-23"
  },
  {
    "id": 7,
    "articulo": "Reloj de pulsera",
    "cantidad": 2,
    "precio_unitario": 45.00,
    "fecha": "2026-08-24"
  },
  {
    "id": 8,
    "articulo": "Bufanda de lana",
    "cantidad": 1,
    "precio_unitario": 14.00,
    "fecha": "2026-08-25"
  },
  {
    "id": 9,
    "articulo": "Gafas de sol",
    "cantidad": 2,
    "precio_unitario": 22.50,
    "fecha": "2026-08-25"
  },
  {
    "id": 10,
    "articulo": "Cinturón de cuero",
    "cantidad": 2,
    "precio_unitario": 18.00,
    "fecha": "2026-08-26"
  }
];

const totalizarVenta=(venta)=>{
    return venta.cantidad*venta.precio_unitario
}

let acuVentas=0
for(let i=0; i<ventas.length;i++  ){
    const totalVenta=totalizarVenta(ventas[i])
    acuVentas=acuVentas+totalVenta
}
console.log(`El total recolectado por la empresa es ${acuVentas}`);

//array metodos, reduce
//totales por articulo