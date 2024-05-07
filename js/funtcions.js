//FORMAS DE IMPRIMIR EN PANTALLA
//alert("HOLA SOY UN ALERT DESDE UN ARCHIVO EXTERNO DE JS")
//console.log("HOLA SOY UN MENSAJE DE CONSOLA");
// document.write("HOLA SOY LA INTERFAZ PRINCIPAL")
// Swal.fire("Hola soy una alerta de una librería");
// Swal.fire({
//     title: "The Internet?",
//     text: "That thing is still around?",
//     icon: "success",
//     showConfirmButton: false,
//     timer: 1500
//   });


//   VARIABLES Y TIPO DE DATOS
const pi = 3.14;
var name = "Gerardo Durán";
let edad = 18;
let edad_string = "18";
var bool = true; // false

// OPERADORES BÁSICOS + - / * %
var suma = 5-2;
console.log(suma);
console.log(edad_string);
var one = 10;
var two = 20;
console.log(one+two);
console.log(one-two);
console.log(one*two);
console.log(one/two);
console.log(one%two);

//OPERADORES DE COMPARACIÓN
//< > => =< <>
// = ASIGNACIÓN
// == COMPARACIÓN 5 == "5"
// === COMPARACIÓN 5 == "5"
//OPERADORES LÓGICOS
// AND && OR ||

console.log("Mi nombre "+name+ " tiene como edad "+edad);

function load_page(){
    console.log("");
    Swal.fire({
        imageUrl: "https://ufpso.edu.co/administradoru15/ventana/banner%20Admitidos_Mesa%20de%20trabajo%201%20(3)%20(1).jpg",
        imageAlt: "A tall image",
        showConfirmButton: false
      });
}

function send_info(){
    let name = document.getElementById("name").value;
    let last_name = document.getElementById("last_name").value;
    let password = document.getElementById("password").value;
    let password2 = document.getElementById("password2").value;
    if(name.length == 0 || last_name.length == 0 || password.length == 0 || password2.length == 0){
        Swal.fire({
           title: "Campos vacíos",
            text: "alguno de los campos se encuentra vacío",
           icon: "error"
              });
              if(name.length == 0){
                document.getElementById("name").style.border = "2px solid red"
              }else{
                document.getElementById("name").style.border = "2px solid green"
              }
              if(last_name.length==0){
                document.getElementById("last_name").style.background = "red"
              }else{
                document.getElementById("last_name").style.background = "green"
              }
              if(password === passsword2){
                document.write("CONTRASEÑA CORRECTA")
              }
              
    }else{
        document.getElementById("print").innerText = name+" "+last_name;
    }
    
}
