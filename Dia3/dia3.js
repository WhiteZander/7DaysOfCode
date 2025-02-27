let area =""
let especialidad ="";
let buenNombre="";
let path="";
let nuevaTecnologia="";

console.log (area);



eligeArea();
console.log(especialidadCorrecto());
eligeEspecialidad();
mensajeAreaFinal ();
nuevaTecnologiaFn();

    while(nuevaTecnologia=="ok"){

        let ingresaTecnología = prompt("Ingresa el nombre de la tecnología");
        alert(`${ingresaTecnología} Es bastante genial`)

         nuevaTecnologiaFn();

    }

alert("Mucha suerte");



function eligeArea(){
while(true){
    area = prompt("¿Quieres estudiar Front-End o Back-End?")
    area = reemplazar(area);
if (area=="frontend"){
    especialidad = prompt("¿Quieres aprender React o aprender Vue?");
    especialidad = reemplazar(especialidad);
    return especialidad;
} else {
    if(area=="backend"){
        especialidad = prompt("¿Quieres prender C# o aprender Java?");
        especialidad = reemplazar(especialidad);
        return especialidad;
    } else {
        alert("Ingresa un valor válido");
    }
}
}
}

function especialidadCorrecto (){

   

    switch (especialidad){
        case "react":
            return buenNombre="React";
            
        case "vue":
            return buenNombre="Vue";
        case "c":
            return buenNombre="C#";
        case "java":
            return buenNombre="Java";
}}

function eligeEspecialidad(){

    if (especialidadCorrecto()===undefined){
        alert("Ingresa un valor válido");
        eligeArea();
        eligeEspecialidad();
    } else{

     path= prompt(`Es genial que quieras aprender ${especialidadCorrecto()}, ahora ¿Quieres seguir por el área de ${area=="frontend" ? "Front-End" : "Back-End"} ó quieres desarrollarte como FullStack?`);
     
    return path = reemplazar(path);}
    return especialidadCorrecto();
} 

function areaFinal (){
    switch (path){
        case "frontend":
            return buenNombre="Front-End";
            break;
        case "backend":
            return buenNombre="Back-End";
            break;
        case "fullstack":
            return buenNombre="FullStack";
            break;
    }

}

function mensajeAreaFinal (){
    if (areaFinal()===undefined){
        alert("Ingresa un valor válido");
        eligeEspecialidad();
    } else {
        alert(`Felicidades por escoger ${areaFinal()} como tu área de especialización`)
    }
}


function nuevaTecnologiaFn(){
    nuevaTecnologia=prompt("¿Hay alguna otra tecnología que te gustaría aprender? --Responde ok si tu respuesta es positiva--")
    nuevaTecnologia=reemplazar(nuevaTecnologia);
    return nuevaTecnologia;
    }

function reemplazar (texto) {


    let quitaAcentos = texto.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    let quitaAscii = quitaAcentos.replace(/[^a-zA-Z0-9 ]/g, '')
    let quitaEspacios = quitaAscii.replace(/ /g, '');
    let quitaGuion = quitaEspacios.replace(/-/g, '');
    let minusculas = quitaGuion.toLowerCase();
    return minusculas;
   
}