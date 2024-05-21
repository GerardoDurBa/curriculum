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


// ARRAYS   
var dias_sem = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
var array_num = [1,2,3,4,5,6,7,8,9];
var array_mix = [1,2.5,"abc"];
var array_mul = [
  {name:"Gerardo", age:18, color:"green"},
  {name:"Andrea", age:18, color:"black"},
  {name:"William", age:18, color:"white"},
  {name:"Wilder", age:32, color:"gray"},
]

var json_ejm = {
  name:"Gerardo",
  lastname: "Duran",
  phone:"3175455170",
  email:"gduranb@ufpso.edu.co"
}

console.log(dias_sem);
console.log(array_num);
console.log(array_mix);
console.log(array_mul);
console.log(json_ejm);

for (let i = 0; i < dias_sem.length; i++) {
  console.log(dias_sem[i]);
}


var j=0;
while (j< array_num.length) {
  console.log(array_num[j]);
  j++
}

var acum = 0;
for(let h = 0; h<array_num.length; h++){
  acum += array_num[h]
}
console.log(acum);


var acum2 = 0;

for (let n = 0; n < array_mul.length; n++) {
  acum2 += array_mul[n].age ;
}
// document.write(acum2);
// document.getElementById("print_age").innerText = "El valor de la suma de las edades es: " + acum2;


var array_ejem = [1,2,3];


function agregarP(){
  array_ejem.unshift(0)
  document.getElementById("valoresP").value = array_ejem;
}

function eliminarP(){
  array_ejem.shift()
  document.getElementById("valoresP").value = array_ejem
}

var array_ejemplo = [1,2,3,4,5,6,7,8,9]
function limpiar(){
  document.getElementById("valores").value="";
}
// array.pop para agregar 
// let un tipo de variable para funciones 
function agregar(){
  let val_new =array_ejemplo.push(10);
  document.getElementById("valores").value=array_ejemplo;
}
// array.push añade un elemento al final 
// no se puede agragar un elemento a la mitad de array por que daño el array 

function eliminar(){
  array_ejemplo.pop()
  document.getElementById("valores").value="";
}
//agregar un imput que escriba un numero en el primero y que elimine el primero  
function imp_rever(){
  document.getElementById("text_rever").innerText= array_ejemplo.reverse();
  document.getElementById("valores") = false;
}

// var fibonacci = [];
// fibonacci[0] = 0;
// fibonacci[1] = 1;
// for (var i = 2; i < 10; i++) {
//   fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
// }
// document.write(fibonacci);


//FUNCION PARA ENVIAR EL NOMBRE CONCATENADO

document.getElementById("fecha").value = new Date();
var fecha = new Date();
document.getElementById("dia").innerText = fecha.getDay();
document.getElementById("año").innerText = fecha.getFullYear();
document.getElementById("mes").innerText = fecha.getMonth();
document.getElementById("dia_mes").innerText = fecha.getDate();
document.getElementById("hora").innerText = fecha.getHours()
document.getElementById("minute").innerText = fecha.getMinutes()


function send_name(){
  let name_one = document.getElementById("name_one").value;
  let name_two = document.getElementById("name_two").value;
  let search_var = document.getElementById("search_var").value;
  let name_com = name_one.toUpperCase()+ " " +name_two.toUpperCase();
  let variable = name_com.charAt(search_var);
  Swal.fire(variable);
  
  if(search_var <= name_com.length && search_var != 0){
    document.getElementById("print_name").innerText = "La letra correspondiente al #"+search_var+" es: "+variable;
  }else if(isNaN(search_var)){
    Swal.fire("No es una numero");
  }
  else{
    Swal.fire("El numero no tiene valor o el valor no es un numero");
    document.getElementById("print_name").innerText = "";
  }
}