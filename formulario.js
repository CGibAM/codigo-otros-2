// Se corrige el query selector para clase y la clase correcta del formulario
const formulario = document.getElementsByClassName(".formulario");


formulario.onsubmit = function (e) {
  //Se agrega el preventDefault para prevenir el envio del formulario
  e.preventDefault();

  var n = formulario[0];
  var e = formulario[1];
  var na = formulario[2];

  var nombre = n.value;
  var edad = e.value;

  var i = na.selectedIndex;
  var nacionalidad = na.options[i].value;
  console.log(nombre, edad);
  console.log(nacionalidad);

  if (nombre.length === 0) {
    n.classList.add("error");

  } else if (edad < 18 || edad > 120) {
    e.classList.add("error");
  }

  if (nombre.length > 0 && (edad > 18 && edad < 120)) {
    agregarInvitado(nombre, edad, nacionalidad)
  }
}

var botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
var corteLinea = document.createElement("br")
document.body.appendChild(corteLinea)
document.body.appendChild(botonBorrar);

function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina"
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana"
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana"
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana"
  }

  var lista = document.getElementById("lista-de-invitados")

  var elementoLista = document.createElement("div")
  elementoLista.classList.added("elemento-lista")
  lista.appendChild(elementoLista)

  //Se eliminan elementos repeticos
  // var spanNombre = document.createElement("span")
  // var inputNombre = document.createElement("input")
  // var espacio = document.createElement("br")
  // spanNombre.textContent = "Nombre: "
  // inputNombre.value = nombre
  // elementoLista.appendChild(spanNombre)
  // elementoLista.appendChild(inputNombre)
  // elementoLista.appendChild(espacio)

  function crearElemento(descripcion, valor) {
    var spanNombre = document.createElement("span")
    var inputNombre = document.createElement("input")
    var espacio = document.createElement("br")
    spanNombre.textContent = descripcion + ": "
    inputNombre.value = valor
    elementoLista.appendChild(spanNombre)
    elementoLista.appendChild(inputNombre)
    elementoLista.appendChild(espacio)
  }

  crearElemento("Nombre", nombre)
  crearElemento("Edad", edad)
  crearElemento("Nacionalidad", nacionalidad)

//Se elimina boton de borrar ya que esta de mas
  // var botonBorrar = document.createElement("button")
  // botonBorrar.textContent = "Eliminar invitado"
  // botonBorrar.id = "boton-borrar"
  var corteLinea = document.createElement("br")
  elementoLista.appendChild(corteLinea)
  elementoLista.appendChild(botonBorrar);

  botonBorrar.onclick = function () {
    // this.parentNode.style.display = 'none';
    botonBorrar.parentNode.remove()
  }
}