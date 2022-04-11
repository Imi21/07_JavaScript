// alert('javascript esta funcionando correctamente')

let variableSinValor = "";
let booleano1 = true;
let booleano2 = false;
const pi = 3.141687415;
const TAU = 2*pi;
const miNombre = "Imanol";
const miNumeroFav = 21;

var casado = false
// console.log(miNombre.length);
// console.log(miNumeroFav);
// console.log(`Mi nombre es ${miNombre} y mi numero favorito es ${miNumeroFav}`);
// console.log("Seré un crack en JavaScript al terminar el bootcamp” en mayúsculas".toUpperCase())
let frase = "Hola soy un Crack";
// console.log(frase.substring(0,5))

const toString = miNumeroFav.toString()
// console.log(typeof toString)

const ejemplo = "amigo" 
// console.log(`soy tu ${ejemplo} y quiero ${miNumeroFav} naranjas`)

// console.log( pi.toFixed(2))

// 2.ARRAYS

const arrayVacio = [];
const arrayNumeros = [0,1,2,3,4,5,6,7,8,9];
const arrayNumeros2 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
const arrayNumerosPares = [2,4,6,8];
const arrayNumerosNeg = [0,-1,-2,-3,-4,-5,-6,-7,-8,-9]
const holaMundo = ["hola", "mundo"];
const loGuardoTodo = ["hola", "que", 23, 42.33, "tal"]
const arrayDeArrays = [[756,"nombre"],[225,"apellidos"],[298,"direccion"]];
// console.log (loGuardoTodo.length)
loGuardoTodo.push("patata")
// console.log(loGuardoTodo[5])
// const reversed = arrayNumeros2.reverse();
// console.log(arrayNumeros2.reverse());
// console.log(loGuardoTodo[1])
loGuardoTodo.push("Euralio");
// console.log(loGuardoTodo.length-1);
// console.log(loGuardoTodo[6])


//3.OBJETOS

const Coche = {
    marca : "peugeot",
    modelo : "5008",
    matricula : "8569HZV",
}

const Casa = {
    codPostal : "46925", 
    calle : "emperador Carlos V",
    portal : "25",
    piso : "12",

}

const FullStackDeveloper = {
    arrayLenguajes : ["javascript", "php", "phyton",],
    arrayProyectos : ["mi pagina personal", " ser programador", "comprarme un Tesla" ]
    
}

const Perro = {
    nombre : "Gofre", 
    raza : "Lobo",
    color : "gris",
    edad : "8",
}

const Noticia = {
    titular : "Jesus Gil esta vivo", 
    cuerpo : [ "seccion", "editorial", "articulo", "entrevista"]

}

const Persona = {
    nombre : "Paco",
    apellidos : "Peinado",
    edad : 67,
}

// console.log(Persona.nombre)
// console.log(FullStackDeveloper.arrayLenguajes[0])

const Portatil = {
    marca : "apple",
}

// console.log(Portatil)["marca"]

const Concierto = {
    grupos : ["Estopa", "Izal", "Fito", "Imagine Dragons"]
}

// console.log(Concierto.grupos.length)

const Led = {
    RGB : ["rojo", "verde", "azul"]
}

// console.log(Led.RGB)

const O_Error = {
    codigo : ""
}

const Grupo = {
    integrantes : [ "pedro", "robe", "evaristo", "lucho"]
}

// console.log(Grupo.integrantes[1])

const Impresora = {
    tinta : {rojo: "lleno", verde: "vacio", azul: "amedias"}
   
}

const nivelesDeTinta = Impresora.tinta;

// console.log(nivelesDeTinta)

const Movil = {
    
    especificaciones : [ "intel I20", "rtx 5050"]
}

const especificaciones=Movil.especificaciones

// console.log(especificaciones)

Portatil.marca = "MSI"

// console.log(Portatil.marca)

Concierto.grupos.push("Guns n Roses")

// console.log(Concierto.grupos)

Concierto.fecha = [25/4/18]
Concierto.fecha = new Date()

// console.log(Concierto.fecha)

Grupo.integrantes.pop()

console.log(Grupo.integrantes.length)




