
// let acuEdad=0
// let contEdad=0
// const n=parseInt(prompt("Digite cuantas personas"))
// for ( let i = 1 ;  i<=n ; i++  ){
//     const edad=parseInt(prompt(`digite edad persona ${i}`))
//     if(edad>=18){
//         acuEdad=acuEdad+edad
//         contEdad++
//     }
// }
// const promedio=acuEdad/contEdad
// console.log(promedio);


// let edad=1
// let contador=1
// let acuEdad=0
// while(edad!=0){
//     edad=parseInt(prompt(`digite edad persona ${contador}`))
//     contador++
//     acuEdad=acuEdad+edad
// }
// const promedio=acuEdad/contador

// while (true) {
//     const edad=parseInt(prompt(`digite edad persona ${contador}`))
//     if(edad==0){
//         break
//     }

// }


while (true) {
    const opcion = parseInt(prompt("Digite uno para saludar, digite dos vomitar, 3 para estunudar, digite 4 para salir"))
    if (opcion == 4){
        console.log(`Chaooo!!!!`);
        break
    }
    switch (opcion) {
        case 1:
            console.log("Hola mundo!!!!");
            break;
        case 2:
            console.log("vouadsfjasdlkfjasdoipufsad");
            break;
        case 3:
            console.log("achisssss");
            break;
    

    }
}