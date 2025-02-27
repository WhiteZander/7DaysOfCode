let nombre=0;
let edad=0;
let lenguaje=0;
let gustaLenguaje=0;

nombre = prompt("¿Cuál es tu nombre?");
edad = prompt("¿Cuantos años tienes?");
lenguaje = prompt("¿Qué lenguaje de programación estás estudiando?")

console.log(nombre);
console.log(edad);
console.log(lenguaje);

alert(`Hola ${nombre}, tienes ${edad} años y ya estás aprendiendo ${lenguaje}!`)

evitaRespuestaMala();


function evitaRespuestaMala(){
    let respuesta=false;
while (respuesta==false) { 
gustaLenguaje = parseInt(prompt(`¿Te gusta estudiar ${lenguaje}? Responde con el número 1 para SÍ o 2 para NO.`))

    if(gustaLenguaje===1){
        alert("¡Muy bien! Sigue estudiando y tendrás mucho éxito.");
        
         respuesta=true;
    } else {
        if (gustaLenguaje===2){

            alert("Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?");

             respuesta=true;

        } else {
            alert("Ingresa una respuesta válida");
        }
    }

}

}