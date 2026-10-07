function saludar() {
    console.log(`Hola Mundo`);
}

const saludarNombre = (nombre, edad = 35) => {
    console.log(`Hola ${nombre}, tienes ${edad} años`);
}

const operaciones = (num1, num2, tipo) => {
    let rta=0;
    switch (tipo) {
        case 1:
            rta = num1 + num2
            break;
        case 2:
            rta = num1 - num2
            break;
        case 3:
            rta = num1 * num2
            break;
        case 4:
            rta = num1 / num2
            break;
        default:
            rta ="operacion incorrecta"
            break;
    }
    return rta
}

saludar()
saludarNombre("Marcela", 22)
const resultado = operaciones(21,34,3)
console.log(resultado);

const num=52

try {
    let div=num/0
} catch (error) {
    console.log(error);
}

const leer ="TI;1100957977;EDWIN SANTIAGO;SANCHEZ PARRA"
substring

const persona = leer.split(";")

console.log(persona);

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
    "cantidad": 1,
    "precio_unitario": 18.00,
    "fecha": "2026-08-26"
  }
];