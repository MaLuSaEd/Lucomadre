let nro;
alert("Para validad que no sos un robot te vamos a hacer algunas preguntas.");
nro = prompt("Elige un numero del 1 al 10:");
nro = parseInt(nro);
let aprobado = false;
let aleatorio = Math.random();
aleatorio = 10/aleatorio;
aleatorio = parseInt(aleatorio);
let res;
let rta;

while(!aprobado){
    res = prompt("Cuanto es " +  nro + " + " +  aleatorio + " ?");
    res = parseInt(res);
    rta = nro + aleatorio;
    if(res ==rta){
        aprobado = true;
    }
}


