let contador = 0;
let cajaContador = document.getElementById("contadorClicks");

if (localStorage.getItem("clicksClases") !== null) {
  contador = parseInt(localStorage.getItem("clicksClases"));
  cajaContador.textContent = "Clicks totales: " + contador;
}

function sumarClick() {
  contador++;
  cajaContador.textContent = "Clicks totales: " + contador;
  localStorage.setItem("clicksClases", contador);
}

let guerreroClicks = 0;
if (localStorage.getItem("guerreroClicks") !== null) {
  guerreroClicks = parseInt(localStorage.getItem("guerreroClicks"));
}

let paladinClicks = 0;
if (localStorage.getItem("paladinClicks") !== null) {
  paladinClicks = parseInt(localStorage.getItem("paladinClicks"));
}

let cazadorClicks = 0;
if (localStorage.getItem("cazadorClicks") !== null) {
  cazadorClicks = parseInt(localStorage.getItem("cazadorClicks"));
}

let magoClicks = 0;
if (localStorage.getItem("magoClicks") !== null) {
  magoClicks = parseInt(localStorage.getItem("magoClicks"));
}

let brujoClicks = 0;
if (localStorage.getItem("brujoClicks") !== null) {
  brujoClicks = parseInt(localStorage.getItem("brujoClicks"));
}

let druidaClicks = 0;
if (localStorage.getItem("druidaClicks") !== null) {
  druidaClicks = parseInt(localStorage.getItem("druidaClicks"));
}

let sacerdoteClicks = 0;
if (localStorage.getItem("sacerdoteClicks") !== null) {
  sacerdoteClicks = parseInt(localStorage.getItem("sacerdoteClicks"));
}

let picaroClicks = 0;
if (localStorage.getItem("picaroClicks") !== null) {
  picaroClicks = parseInt(localStorage.getItem("picaroClicks"));
}

let shamanClicks = 0;
if (localStorage.getItem("shamanClicks") !== null) {
  shamanClicks = parseInt(localStorage.getItem("shamanClicks"));
}

let caballeroClicks = 0;
if (localStorage.getItem("caballeroClicks") !== null) {
  caballeroClicks = parseInt(localStorage.getItem("caballeroClicks"));
}

let monjeClicks = 0;
if (localStorage.getItem("monjeClicks") !== null) {
  monjeClicks = parseInt(localStorage.getItem("monjeClicks"));
}

let cazademonClicks = 0;
if (localStorage.getItem("cazademonClicks") !== null) {
  cazademonClicks = parseInt(localStorage.getItem("cazademonClicks"));
}

let evocadorClicks = 0;
if (localStorage.getItem("evocadorClicks") !== null) {
  evocadorClicks = parseInt(localStorage.getItem("evocadorClicks"));
}

let cajaGuerrero = document.getElementById("cajaGuerrero");
let cajaPaladin = document.getElementById("cajaPaladin");
let cajaCazador = document.getElementById("cajaCazador");
let cajaMago = document.getElementById("cajaMago");
let cajaBrujo = document.getElementById("cajaBrujo");
let cajaDruida = document.getElementById("cajaDruida");
let cajaSacerdote = document.getElementById("cajaSacerdote");
let cajaPicaro = document.getElementById("cajaPicaro");
let cajaShaman = document.getElementById("cajaShaman");
let cajaCaballero = document.getElementById("cajaCaballero");
let cajaMonje = document.getElementById("cajaMonje");
let cajaCazademon = document.getElementById("cajaCazademon");
let cajaEvocador = document.getElementById("cajaEvocador");

cajaGuerrero.addEventListener("click", function() {
  guerreroClicks++;
  localStorage.setItem("guerreroClicks", guerreroClicks);
  sumarClick();
  alert("Guerrero\nRol: Tanque o DPS\nArmadura: Placa\nArma: Espadas, hachas, mazas\n\nClicks a esta clase: " + guerreroClicks);
});

cajaPaladin.addEventListener("click", function() {
  paladinClicks++;
  localStorage.setItem("paladinClicks", paladinClicks);
  sumarClick();
  alert("Paladín\nRol: Tanque, Healer o DPS\nArmadura: Placa\nArma: Mazas, espadas\n\nClicks a esta clase: " + paladinClicks);
});

cajaCazador.addEventListener("click", function() {
  cazadorClicks++;
  localStorage.setItem("cazadorClicks", cazadorClicks);
  sumarClick();
  alert("Cazador\nRol: DPS\nArmadura: Cuero o malla\nArma: Arcos, armas de fuego\n\nClicks a esta clase: " + cazadorClicks);
});

cajaMago.addEventListener("click", function() {
  magoClicks++;
  localStorage.setItem("magoClicks", magoClicks);
  sumarClick();
  alert("Mago\nRol: DPS\nArmadura: Tela\nArma: Bastones, varas\n\nClicks a esta clase: " + magoClicks);
});

cajaBrujo.addEventListener("click", function() {
  brujoClicks++;
  localStorage.setItem("brujoClicks", brujoClicks);
  sumarClick();
  alert("Brujo\nRol: DPS\nArmadura: Tela\nArma: Bastones, varas\n\nClicks a esta clase: " + brujoClicks);
});

cajaDruida.addEventListener("click", function() {
  druidaClicks++;
  localStorage.setItem("druidaClicks", druidaClicks);
  sumarClick();
  alert("Druida\nRol: Tanque, Healer o DPS\nArmadura: Cuero\nArma: Bastones, garras\n\nClicks a esta clase: " + druidaClicks);
});

cajaSacerdote.addEventListener("click", function() {
  sacerdoteClicks++;
  localStorage.setItem("sacerdoteClicks", sacerdoteClicks);
  sumarClick();
  alert("Sacerdote\nRol: Healer o DPS\nArmadura: Tela\nArma: Bastones, varas\n\nClicks a esta clase: " + sacerdoteClicks);
});

cajaPicaro.addEventListener("click", function() {
  picaroClicks++;
  localStorage.setItem("picaroClicks", picaroClicks);
  sumarClick();
  alert("Pícaro\nRol: DPS\nArmadura: Cuero\nArma: Dagas, espadas\n\nClicks a esta clase: " + picaroClicks);
});

cajaShaman.addEventListener("click", function() {
  shamanClicks++;
  localStorage.setItem("shamanClicks", shamanClicks);
  sumarClick();
  alert("Chamán\nRol: Healer o DPS\nArmadura: Malla\nArma: Mazas, hachas\n\nClicks a esta clase: " + shamanClicks);
});

cajaCaballero.addEventListener("click", function() {
  caballeroClicks++;
  localStorage.setItem("caballeroClicks", caballeroClicks);
  sumarClick();
  alert("Caballero de la Muerte\nRol: Tanque o DPS\nArmadura: Placa\nArma: Espadas, hachas, mazas\n\nClicks a esta clase: " + caballeroClicks);
});

cajaMonje.addEventListener("click", function() {
  monjeClicks++;
  localStorage.setItem("monjeClicks", monjeClicks);
  sumarClick();
  alert("Monje\nRol: Tanque, Healer o DPS\nArmadura: Cuero\nArma: Armas de asta, mazas\n\nClicks a esta clase: " + monjeClicks);
});

cajaCazademon.addEventListener("click", function() {
  cazademonClicks++;
  localStorage.setItem("cazademonClicks", cazademonClicks);
  sumarClick();
  alert("Cazador de Demonios\nRol: Tanque o DPS\nArmadura: Cuero\nArma: Cuchillas warglaive\n\nClicks a esta clase: " + cazademonClicks);
});

cajaEvocador.addEventListener("click", function() {
  evocadorClicks++;
  localStorage.setItem("evocadorClicks", evocadorClicks);
  sumarClick();
  alert("Evocador\nRol: Healer o DPS\nArmadura: Malla\nArma: Bastones, varas\n\nClicks a esta clase: " + evocadorClicks);
});
