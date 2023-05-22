



//let clientes = [];
//const boton_agregar = document.getElementById("agregar");

//boton_agregar.addEventListener("click", function(){
   // let nombreCliente = document.getElementById('nombre').value;
    /*if (nombreCliente == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: '<a href="">Why do I have this issue?</a>'
          })
    }*/
 //   console.log("hiciste click en el boton")

//})

let boton = document.getElementById("agregar")
boton.addEventListener("click", function(){
    console.log("Hiciste click en el botón.")
    alert("Evento detectado. Mirá la consola")
})