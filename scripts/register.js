let Alumnos=[];
//crear constructor
// Estudiante nombre, correo, genero, campus, calificacion A, calificacion B, calificacion C
let contador=0;
function Estudiante(NombreP, CorreoP, GeneroP, CampusP, califAP, califBP, califCP){
    this.nombre= NombreP;
    this.correo= CorreoP;
    this.genero= GeneroP;
    this.campus= CampusP;
    this.califA= califAP;
    this.califB= califBP;
    this.califC= califCP;
    this.id=contador++;
}
//crear funcion registrar
function registrar(){
    console.log("registrando alumno");
    //obtener los valores de los inputs document.getElementByid()
    let inputNombre=document.getElementById("txtNombre").value;
    let inputCorreo=document.getElementById("txtCorreo").value;
    let inputGenero=document.getElementById("selGenero").value;
    let inputCampus=document.getElementById("selCampus").value;
    let inputcalifA=document.getElementById("califA").value;
    let inputcalifB=document.getElementById("califB").value;
    let inputcalifC=document.getElementById("califC").value;

    //crear nuevo alumno
    let nuevoAlumno= new Estudiante (inputNombre, inputCorreo,inputGenero,inputCampus, inputcalifA, inputcalifB, inputcalifC);
        //agregar alumno al arreglo
    Alumnos.push (nuevoAlumno);
    imprimirAlumnos();
    limpiar();

    
}

function imprimirAlumnos(){
    let row="";
    for(let i=0; i<Alumnos.length; i++){
        let alumno= Alumnos[i];
        let prom=(Number(alumno.califA)+Number(alumno.califB)+Number(alumno.califC))/3;
        row += `
        <tr id="${alumno.id}">
            <td>${alumno.nombre}</td>
            <td>${alumno.correo}</td>
            <td>${alumno.genero}</td>
            <td>${alumno.campus}</td>
            <td>${alumno.califA}</td>
            <td>${alumno.califB}</td>
            <td>${alumno.califC}</td>
            <td>${prom}</td>
            <td><button class="btn btn-danger" onclick="borrarAlumnos(${alumno.id})";>Borrar</button></td>
         </tr>
        `;
    }   
    document.getElementById("alumnosTabla").innerHTML = row;
}

function limpiar(){
    document.getElementById("txtNombre").value="";
    document.getElementById("txtCorreo").value="";
    document.getElementById("selGenero").value="";
    document.getElementById("selCampus").value="";
    document.getElementById("califA").value="";
    document.getElementById("califB").value="";
    document.getElementById("califC").value="";
}

function borrarAlumnos(identificador){
    document.getElementById(identificador).remove();
    Alumnos.splice(identificador,1);
}

//crear funcion init
function init (){
    console.log("registrar");
        let alumnos1= new Estudiante ("Ana","alichitaan@gmail.com","Femenino","Mexicali", 98, 98, 98);
        let alumnos2= new Estudiante ("Ricardo", "ricardo@gmail.com", "Masculino","Tijuana", 90, 98,100);
        let alumnos3= new Estudiante ("Andree","Andree@gmail.com", "Masculino","Ensenada", 91, 86,90); 
        console.log(alumnos1,alumnos2,alumnos3);
        Alumnos.push(alumnos1,alumnos2,alumnos3);
        imprimirAlumnos();
}
//ejecutar funcion init
window.onload=init;// ejecucion cuando renderiza el html