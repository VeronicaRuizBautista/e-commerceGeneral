function botonMenu() {
    var btn = document.getElementById("menu");
    btn.classList.toggle("visible");
    }

function botonDetalles() {
    var btn = document.getElementById("aviso");
    btn.classList.toggle("verdetalles");
    }

function restar(id) {
    let contador = parseInt(document.getElementById(id).innerText);
    contador--;
    document.getElementById(id).innerText = contador;
}