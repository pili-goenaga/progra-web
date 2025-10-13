// 1. Ejercicio 1: Declaración de Variables
// Declara tres variables: una para almacenar tu ciudad, otra para almacenar tu país, y otra para almacenar
//  tu edad de nacimiento. Imprime los valores en la consola y después intenta cambiar los valores y observa los resultados con let y const.
let ciudad = "buenos aires"
let pais = "argentina"
let edad = 20 
console.log(ciudad,pais,edad)
ciudad= "ney york"
pais= "USA"

const ARRAY1= [ciudad, pais]
console.log(ARRAY1)

// 2. Ejercicio 2: Operaciones Matemáticas
// Declara tres variables numéricas. Calcula el promedio de las tres y encuentra el residuo de 
// la división de la suma total entre 2. Imprime los resultados.

let uno= 3
let dos = 3
let tres = 3 
let suma = (uno+dos+tres)
let prom= suma/3
let res= suma%2
console.log(prom, res)

// 3. Ejercicio 3: Tipos de Datos
// Declara una variable para almacenar un objeto que represente un coche con propiedades como marca, 
// modelo y año. Imprime el tipo de cada propiedad con typeof.

let auto = {
    marca: "ford",
    modelo: "mustang",
    año: 1966
}
console.log(typeof(auto.marca),typeof(auto.modelo), typeof(auto.año))

// 4. Ejercicio 4: Arrays Básicos
// Crea un array con los nombres de 5 ciudades que te gustaría visitar. 
// Reemplaza el tercer elemento por otra ciudad y luego imprime el array actualizado.
let ARRAY2= ["nyc","londres", "manchester", "paris", "miami"]
ARRAY2[2] = "roma"
console.log(ARRAY2)

// 5. Crea un array de 3 objetos que representen películas, cada una con título, director y año de lanzamiento. 
// Imprime el director de la última película.
let ARRAY3=[
    {
        titulo: "good will hunting",
        director: "hgus van sant", 
        anio: 1997
    },
    {
        titulo: "fight club",
        director: "david fincher",
        anio: 1999
    },
    {
        titulo: "el padrino", 
        director: "coppola",
        anio: 1972
    }

]
console.log(ARRAY3[2].director)

// 6. Declara tres variables booleanas y usa operadores lógicos para verificar si al menos dos son verdaderas.
//  Imprime true o false en la consola dependiendo del resultado.
let one= true
let two= false 
let three = true 
let variable = one && two || two && three || one && three
console.log(variable)

// 7. Declara dos variables que almacenen strings (por ejemplo, tu nombre y tu apellido). 
// Luego, crea una tercera variable que concatene las dos primeras y muestra el resultado en la consola.
let nom= "pilar"
let app= "goenaga"
let concatenar= nom + " " + app
console.log(concatenar)

// 8.Declara una variable numérica y utiliza los operadores de incremento (++) y decremento (--) 
// para modificar su valor. Imprime el valor de la variable después de cada operación.

let numerito = 7
numerito++;
console.log(numerito)
numerito--;
console.log(numerito)

// 9. Declara una variable sin asignarle un valor y otra variable con valor null. 
// Utiliza typeof para imprimir el tipo de cada variable.
let var1;
let var2= null;
console.log(typeof(var1), typeof(var2))

// 10. Declara una variable que almacene un número como string (por ejemplo, "123"). 
// Convierte este string a un número usando parseInt o Number y demuestra que ahora puedes realizar operaciones matemáticas con él.

let varnum= "12";
let convert= parseInt(varnum);
let prueba= convert+1;
console.log(prueba)


