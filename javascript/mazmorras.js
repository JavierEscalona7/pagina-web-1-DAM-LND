let contenedorMinas = document.getElementById("Minas");
let imagenesMinas = contenedorMinas.getElementsByTagName('img');
let indiceMinas = 0;

for (let i = 0; i < imagenesMinas.length; i++) {
  imagenesMinas[i].style.display = 'none';
}
imagenesMinas[indiceMinas].style.display = '';

setTimeout(function pasarMinas() {
  imagenesMinas[indiceMinas].style.display = 'none';
  indiceMinas++;
  if (indiceMinas >= imagenesMinas.length) { indiceMinas = 0; }
  imagenesMinas[indiceMinas].style.display = '';
  setTimeout(pasarMinas, 3000);
}, 3000);


let contenedorPinaculo = document.getElementById("Pinaculo");
let imagenesPinaculo = contenedorPinaculo.getElementsByTagName('img');
let indicePinaculo = 0;

for (let i = 0; i < imagenesPinaculo.length; i++) {
  imagenesPinaculo[i].style.display = 'none';
}
imagenesPinaculo[indicePinaculo].style.display = '';

setTimeout(function pasarPinaculo() {
  imagenesPinaculo[indicePinaculo].style.display = 'none';
  indicePinaculo++;
  if (indicePinaculo >= imagenesPinaculo.length) { indicePinaculo = 0; }
  imagenesPinaculo[indicePinaculo].style.display = '';
  setTimeout(pasarPinaculo, 3000);
}, 3000);


let contenedorHora = document.getElementById("HoraCrepusculo");
let imagenesHora = contenedorHora.getElementsByTagName('img');
let indiceHora = 0;

for (let i = 0; i < imagenesHora.length; i++) {
  imagenesHora[i].style.display = 'none';
}
imagenesHora[indiceHora].style.display = '';

setTimeout(function pasarHora() {
  imagenesHora[indiceHora].style.display = 'none';
  indiceHora++;
  if (indiceHora >= imagenesHora.length) { indiceHora = 0; }
  imagenesHora[indiceHora].style.display = '';
  setTimeout(pasarHora, 3000);
}, 3000);


let contenedorCorte = document.getElementById("Corte");
let imagenesCorte = contenedorCorte.getElementsByTagName('img');
let indiceCorte = 0;

for (let i = 0; i < imagenesCorte.length; i++) {
  imagenesCorte[i].style.display = 'none';
}
imagenesCorte[indiceCorte].style.display = '';

setTimeout(function pasarCorte() {
  imagenesCorte[indiceCorte].style.display = 'none';
  indiceCorte++;
  if (indiceCorte >= imagenesCorte.length) { indiceCorte = 0; }
  imagenesCorte[indiceCorte].style.display = '';
  setTimeout(pasarCorte, 3000);
}, 3000);


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
