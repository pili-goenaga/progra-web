// // guia uno 

// // uno 
// // Escribí un código que declare variables ciudad, pais, anioNacimiento con let y const, las imprima, y 
// // luego intente reasignarlas explicando en consola qué pasa con const.

// let ciudad = "new york";
// let pais = "usa"; 
// const anioNacimiento = 2005;

// console.log(ciudad,pais,anioNacimiento)

// ciudad= "buenos aires"  // siento q cuando re asigno variables no tengo q poner let 
// pais = "argentina "


// console.log (ciudad,pais)

// // dos 
// // Escribí un código que reciba 3 números (pueden ser fijos) y calcule el promedio y el 
// // residuo de la suma total entre 2. Imprimí ambos resultados.

// let uno= 4;
// let dos = 9; 
// let tres = 5; 
// let suma= (uno+dos+tres);
// let prom= suma/3;
// let residuo = suma%2;
// console.log(prom, residuo)

// // tres
// //Escribí un código que cree un objeto auto con marca, modelo, anio. Imprimí el tipo de cada propiedad con typeof.

// let auto ={
//     marca: "ford",
//     modelo: "mustang", 
//     anio: 1966
// }

// console.log(typeof(auto.marca), typeof(auto.modelo), typeof(auto.anio))

// // cuatro 
// // Escribí un código que cree un array con 5 ciudades. Reemplazá el tercer elemento y mostrá el array actualizado.

// let ciudades = ["buenos aires", "londres", "madrid", "paris"," miami"]

// console.log(ciudades)
// ciudades[2]= "berlin"
// console.log(ciudades)

// //cinco 
// // Escribí un código que cree un array con 3 películas (título, director, año). Imprimí el director de la última película.
// let peliculas =[
//     uno={
//         titulo: "taxi driver",
//         director: "martin scorssese",
//         anio:1976
//     },
//     dos={
//         titulo: "saltburn",
//         director: "emerald fennell",
//         anio: 2023
//     },
//     tres={
//         titulo: "pricilla",
//         director: "sofia coppolla",
//         anio: 2023
//     }
// ]
// console.log(peliculas[2].director)

// //seis
// //Escribí un código con 3 booleanos (a, b, c) y verificá si al menos dos son verdaderos. Imprimí true/false.

// let one= true
// let two= false
// let three= true 
// let variables= one && two || two && three || three && one //con || (or) si al menos una es verdadera queda como verdadero
// console.log(variables)

// //siete  
// //Escribí un código que tome nombre y apellido, los concatene en nombreCompleto y lo imprima.
// let nombre= "pilar"
// let apellido="goenaga"
// let nombreCompleto = nombre + " " + apellido
// console.log(nombreCompleto)

// //ocho 
// //Escribí un código que declare una variable numérica, aplique ++ y --, e imprima el valor después de cada operación.
// let numero = 9 
// numero++
// console.log(numero)
// numero--
// console.log(numero)

// //nueve 
// //Escribí un código que declare let x; y let y = null; e imprima typeof x y typeof y explicando la salida.
// let var1;
// let var2= null
// console.log(typeof(var1), typeof(var2))

// //diez
// // Escribí un código que convierta "123" a número con Number o parseInt y demuestre que puede sumar 7 (debe dar 130).
// let variable= "123"
// let convertir = parseInt(variable)
// console.log(convertir + 7)

// //once 
// // Escribí un código con un array valores = [0, 1, "", "hola", null, undefined, [], {}] y recorré con un for/forEach
// // imprimiendo valor y !!valor.

// // let array =[0,1,"hola",null,undefined,[],{}]
// // let recorrer= valores.array

// // for (variable de control; condicion; variación  )
// let name= "Esteban"
// for ( let i = 0; i< name.length; i ++){
//     console.log(name[i])
// }

//guia dos
//uno 
//Escribí un código con una función maxDeTres(a,b,c) que devuelva el mayor y probala con varios casos.

function maxDeTres (a,b,c,){
    if (a<b && b<c){
        return c
    }
    else if (b<c && c<a){
        return a 
    }
    else {
        return b
    }
}
console.log(maxDeTres(3,4,1))

