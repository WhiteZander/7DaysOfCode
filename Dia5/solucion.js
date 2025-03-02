let frutas=[];
let lacteos=[];
let congelados=[];
let dulces=[];
let alimento= "";

while(true){
   let añadirLista = prompt("¿Desea añadir algo a la lista?").toLowerCase();

   console.log(añadirLista);

   if (añadirLista=="si") {

    alimento=prompt("¿Que alimento te gustaría agregar?");
    let alimentoLista = prompt("¿En que categoría encaja? 1. Frutas, 2. Lacteos, 3. Congelados 4.Dulces");
    console.log(alimentoLista);

    switch (alimentoLista){
        default:
            alimentoLista = parseInt(prompt("Ingresa una categoría válida -- 1. Frutas, 2. Lacteos, 3. Congelados 4.Dulces"));
        
        case "1":
            frutas.push(alimento);
            break;
        case "2":
            frutas.push(alimento);
            break;
        case "3":
            frutas.push(alimento);
            break;
        case "4":
            frutas.push(alimento);
            break;

    }
   } else {
    if(añadirLista=="no"){
    console.log("Lista de compras: " )
    console.log("Frutas: " + frutas)
    console.log("Lacteos: " + lacteos)
    console.log("Congelados: " + congelados)
    console.log("Dulces: " + dulces)
     break;
   }

   else{
    alert("Ingresa una respuesta válida");
   }
   }}