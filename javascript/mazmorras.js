let ids = ["Minas", "Pinaculo", "HoraCrepusculo", "Corte"];

for (let i = 0; i < ids.length; i++) {
  let contenedor = document.getElementById(ids[i]);
  let imagenes = contenedor.getElementsByTagName("img");
  let indice = 0;

  for (let j = 0; j < imagenes.length; j++) {
    imagenes[j].style.display = "none";
  }
  imagenes[0].style.display = "";

  setTimeout(function cambiar() {
    imagenes[indice].style.display = "none";
    indice++;
    if (indice >= imagenes.length) indice = 0;
    imagenes[indice].style.display = "";
    setTimeout(cambiar, 3000);
  }, 3000);
}


let idioma = "es"; // idioma actual

let boton = document.getElementById("btnIdioma");
boton.addEventListener("click", cambiarIdioma);

function cambiarIdioma() {

    let nombre1 = document.querySelector(".entrada-izquierda .maz-nombre");
    let desc1 = document.querySelector(".entrada-izquierda .maz-desc");

    let nombre2 = document.querySelector(".entrada-derecha .maz-nombre");
    let desc2 = document.querySelector(".entrada-derecha .maz-desc");

    let nombre3 = document.querySelectorAll(".maz-nombre")[2];
    let desc3 = document.querySelectorAll(".maz-desc")[2];

    let nombre4 = document.querySelectorAll(".maz-nombre")[3];
    let desc4 = document.querySelectorAll(".maz-desc")[3];

    if (idioma === "es") {

        nombre1.textContent = "Deadmines";
        desc1.textContent = "The first major Alliance dungeon, full of Defias and gunmen, ending with Van Cleef.";

        nombre2.textContent = "Utgarde Pinnacle";
        desc2.textContent = "The vrykul fortress in Northrend, with epic frozen sea views.";

        nombre3.textContent = "Hour of Twilight";
        desc3.textContent = "A journey to an apocalyptic future where Deathwing has destroyed Azeroth.";

        nombre4.textContent = "Court of Stars";
        desc4.textContent = "The lair of the Dark Prince Kael'thas in an ethereal palace among the stars.";

        boton.textContent = "Español";
        idioma = "en";

    } else {

        nombre1.textContent = "Minas de la Muerte";
        desc1.textContent = "La primera gran mazmorra de la Alianza. Un oscuro complejo minero infestado de defias y pistoleros donde los aventureros se enfrentan a Van Cleef.";

        nombre2.textContent = "Pináculo de Utgarde";
        desc2.textContent = "La fortaleza de los vrykul en las costas de Rasganorte. Una mazmorra épica con vistas al mar helado y uno de los diseños más recordados de la expansión.";

        nombre3.textContent = "Hora del Crepúsculo";
        desc3.textContent = "Un viaje por el tiempo a un futuro apocalíptico donde Deathwing ha destruido Azeroth. Densa en historia y con una atmósfera oscura e inquietante.";

        nombre4.textContent = "Corte de las Estrellas";
        desc4.textContent = "La guarida del Príncipe Oscuro Kael'thas en un palacio etéreo entre estrellas. Visualmente impresionante y uno de los finales de mazmorra más épicos del juego.";

        boton.textContent = "English";
        idioma = "es";
    }
}
