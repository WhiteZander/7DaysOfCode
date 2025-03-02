let maximo="";
let minimo= "";
let numeroIntento="";
let numeroSecreto="";
let numeroIngresado="";

generaNumeroRandom();
console.log(numeroSecreto);
comparaNumero ();


function comparaNumero (){


    for (i=1; i<=3; i++){
        numeroIngresado=parseInt(prompt("Ingresa tu número"));

        if(numeroIngresado==numeroSecreto){
            alert("Felicidades acertaste");
            break;
        } else {
            alert("No acertaste, intenta otra vez");
        }  if (i>=3){
            alert(`Lo siento, se te acabaron los intentos, el número secreto era ${numeroSecreto}`)
        }
    }
}




function generaNumeroRandom(){
minimo = parseInt(prompt("Elige un valor minimo"));
maximo = parseInt(prompt("Elige un valor maximo"));
numeroSecreto=Math.floor(Math.random() * (maximo - minimo + 1) + minimo);

}
