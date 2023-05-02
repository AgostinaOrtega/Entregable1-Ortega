let respuesta = prompt("¿Utilizaste un contraste completo?");

if (respuesta.toLowerCase() == "si") {
  alert("Disminuir en el contador");
}

let contador = 30;

const valor = document.querySelector('#valor');
const botones = document.querySelectorAll('.boton')

botones.forEach(boton => {
  boton.addEventListener('click', function(e) {

    const estilos = e.currentTarget.classList;

    if(estilos.contains('disminuir')) {
      contador--;
    }
    else if(estilos.contains('aumentar')) {
      contador++;
    }
    else {
      contador = 30;
    }
      valor.textContent = contador;


      if(contador > 30) {
        valor.style.color = '#fff';
      }
      if(contador < 30) {
        valor.style.color = '#ba215a';
      }
  })
})




