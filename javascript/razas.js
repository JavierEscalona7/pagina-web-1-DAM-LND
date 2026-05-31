// Variables de imagen
let imgHumanoFe = document.getElementById("imgHumanoFe");
let imgHumanoMas = document.getElementById("imgHumanoMas");
let imgElfoFe = document.getElementById("imgElfoFe");
let imgElfoMas = document.getElementById("imgElfoMas");
let imgEnanoFe = document.getElementById("imgEnanoFe");
let imgEnanoMas = document.getElementById("imgEnanoMas");
let imgGnomoFe = document.getElementById("imgGnomoFe");
let imgGnomoMas = document.getElementById("imgGnomoMas");
let imgDraeneiFe = document.getElementById("imgDraeneiFe");
let imgDraeneiMas = document.getElementById("imgDraeneiMas");
let imgWorgenFe = document.getElementById("imgWorgenFe");
let imgWorgenMas = document.getElementById("imgWorgenMas");
let imgOrcFe = document.getElementById("imgOrcFe");
let imgOrcMas = document.getElementById("imgOrcMas");
let imgTrollFe = document.getElementById("imgTrollFe");
let imgTrollMas = document.getElementById("imgTrollMas");
let imgTaurenFe = document.getElementById("imgTaurenFe");
let imgTaurenMas = document.getElementById("imgTaurenMas");
let imgUndeadFe = document.getElementById("imgUndeadFe");
let imgUndeadMas = document.getElementById("imgUndeadMas");
let imgESangreFe = document.getElementById("imgESangreFe");
let imgESangreMas = document.getElementById("imgESangreMas");
let imgGoblinFe = document.getElementById("imgGoblinFe");
let imgGoblinMas = document.getElementById("imgGoblinMas");
let imgPandarenFe = document.getElementById("imgPandarenFe");
let imgPandarenMas = document.getElementById("imgPandarenMas");

// Asignar imagenes al cargar
imgHumanoFe.style.backgroundImage = "url(../imagenes/HumanFemale.jpg)";
imgHumanoMas.style.backgroundImage = "url(../imagenes/HumanMale.jpg)";
imgElfoFe.style.backgroundImage = "url(../imagenes/NightElfFemale.jpg)";
imgElfoMas.style.backgroundImage = "url(../imagenes/NightElfMale.jpg)";
imgEnanoFe.style.backgroundImage = "url(../imagenes/DwarfFemale.jpg)";
imgEnanoMas.style.backgroundImage = "url(../imagenes/DwarfMale.jpg)";
imgGnomoFe.style.backgroundImage = "url(../imagenes/GnomeFemale.jpg)";
imgGnomoMas.style.backgroundImage = "url(../imagenes/GnomeMale.jpg)";
imgDraeneiFe.style.backgroundImage = "url(../imagenes/DraeneiFemale.jpg)";
imgDraeneiMas.style.backgroundImage = "url(../imagenes/DraeneiMale.jpg)";
imgWorgenFe.style.backgroundImage = "url(../imagenes/WorgenFemale.jpg)";
imgWorgenMas.style.backgroundImage = "url(../imagenes/WorgenMale.jpg)";
imgOrcFe.style.backgroundImage = "url(../imagenes/OrcFemale.jpg)";
imgOrcMas.style.backgroundImage = "url(../imagenes/OrcMale.jpg)";
imgTrollFe.style.backgroundImage = "url(../imagenes/TrollFemale.jpg)";
imgTrollMas.style.backgroundImage = "url(../imagenes/TrollMale.jpg)";
imgTaurenFe.style.backgroundImage = "url(../imagenes/TaurenFemale.jpg)";
imgTaurenMas.style.backgroundImage = "url(../imagenes/TaurenMale.jpg)";
imgUndeadFe.style.backgroundImage = "url(../imagenes/UndeadFemale.jpg)";
imgUndeadMas.style.backgroundImage = "url(../imagenes/UndeadMale.jpg)";
imgESangreFe.style.backgroundImage = "url(../imagenes/BloodElfFemale.jpg)";
imgESangreMas.style.backgroundImage = "url(../imagenes/BloodElfMale.jpg)";
imgGoblinFe.style.backgroundImage = "url(../imagenes/GoblinFemale.jpg)";
imgGoblinMas.style.backgroundImage = "url(../imagenes/GoblinMale.jpg)";
imgPandarenFe.style.backgroundImage = "url(../imagenes/PandarenFemale.jpg)";
imgPandarenMas.style.backgroundImage = "url(../imagenes/PandarenMale.jpg)";

// Ocultar todas las masculinas al cargar
imgHumanoMas.style.display = "none";
imgElfoMas.style.display = "none";
imgEnanoMas.style.display = "none";
imgGnomoMas.style.display = "none";
imgDraeneiMas.style.display = "none";
imgWorgenMas.style.display = "none";
imgOrcMas.style.display = "none";
imgTrollMas.style.display = "none";
imgTaurenMas.style.display = "none";
imgUndeadMas.style.display = "none";
imgESangreMas.style.display = "none";
imgGoblinMas.style.display = "none";
imgPandarenMas.style.display = "none";

// Variables de botones
let HumanoFe = document.getElementById("HumanoFe");
let HumanoMas = document.getElementById("HumanoMas");
let ElfoFe = document.getElementById("ElfoFe");
let ElfoMas = document.getElementById("ElfoMas");
let EnanoFe = document.getElementById("EnanoFe");
let EnanoMas = document.getElementById("EnanoMas");
let GnomoFe = document.getElementById("GnomoFe");
let GnomoMas = document.getElementById("GnomoMas");
let DraeneiFe = document.getElementById("DraeneiFe");
let DraeneiMas= document.getElementById("DraeneiMas");
let WorgenFe = document.getElementById("WorgenFe");
let WorgenMas = document.getElementById("WorgenMas");
let OrcFe = document.getElementById("OrcFe");
let OrcMas = document.getElementById("OrcMas");
let TrollFe = document.getElementById("TrollFe");
let TrollMas = document.getElementById("TrollMas");
let TaurenFe = document.getElementById("TaurenFe");
let TaurenMas = document.getElementById("TaurenMas");
let UndeadFe = document.getElementById("UndeadFe");
let UndeadMas = document.getElementById("UndeadMas");
let ESangreFe = document.getElementById("ESangreFe");
let ESangreMas= document.getElementById("ESangreMas");
let GoblinFe = document.getElementById("GoblinFe");
let GoblinMas = document.getElementById("GoblinMas");
let PandarenFe = document.getElementById("PandarenFe");
let PandarenMas = document.getElementById("PandarenMas");

// Humano
HumanoFe.addEventListener("click", function() {
  imgHumanoFe.style.display = "block";
  imgHumanoMas.style.display = "none";
  HumanoFe.classList.add("activo");
  HumanoMas.classList.remove("activo");
});
HumanoMas.addEventListener("click", function() {
  imgHumanoMas.style.display = "block";
  imgHumanoFe.style.display = "none";
  HumanoMas.classList.add("activo");
  HumanoFe.classList.remove("activo");
});

// Elfo
ElfoFe.addEventListener("click", function() {
  imgElfoFe.style.display = "block";
  imgElfoMas.style.display = "none";
  ElfoFe.classList.add("activo");
  ElfoMas.classList.remove("activo");
});
ElfoMas.addEventListener("click", function() {
  imgElfoMas.style.display = "block";
  imgElfoFe.style.display = "none";
  ElfoMas.classList.add("activo");
  ElfoFe.classList.remove("activo");
});

// Enano
EnanoFe.addEventListener("click", function() {
  imgEnanoFe.style.display = "block";
  imgEnanoMas.style.display = "none";
  EnanoFe.classList.add("activo");
  EnanoMas.classList.remove("activo");
});
EnanoMas.addEventListener("click", function() {
  imgEnanoMas.style.display = "block";
  imgEnanoFe.style.display = "none";
  EnanoMas.classList.add("activo");
  EnanoFe.classList.remove("activo");
});

// Gnomo
GnomoFe.addEventListener("click", function() {
  imgGnomoFe.style.display = "block";
  imgGnomoMas.style.display = "none";
  GnomoFe.classList.add("activo");
  GnomoMas.classList.remove("activo");
});
GnomoMas.addEventListener("click", function() {
  imgGnomoMas.style.display = "block";
  imgGnomoFe.style.display = "none";
  GnomoMas.classList.add("activo");
  GnomoFe.classList.remove("activo");
});

// Draenei
DraeneiFe.addEventListener("click", function() {
  imgDraeneiFe.style.display = "block";
  imgDraeneiMas.style.display = "none";
  DraeneiFe.classList.add("activo");
  DraeneiMas.classList.remove("activo");
});
DraeneiMas.addEventListener("click", function() {
  imgDraeneiMas.style.display = "block";
  imgDraeneiFe.style.display = "none";
  DraeneiMas.classList.add("activo");
  DraeneiFe.classList.remove("activo");
});

// Worgen
WorgenFe.addEventListener("click", function() {
  imgWorgenFe.style.display = "block";
  imgWorgenMas.style.display = "none";
  WorgenFe.classList.add("activo");
  WorgenMas.classList.remove("activo");
});
WorgenMas.addEventListener("click", function() {
  imgWorgenMas.style.display = "block";
  imgWorgenFe.style.display = "none";
  WorgenMas.classList.add("activo");
  WorgenFe.classList.remove("activo");
});

// Orco
OrcFe.addEventListener("click", function() {
  imgOrcFe.style.display = "block";
  imgOrcMas.style.display = "none";
  OrcFe.classList.add("activo");
  OrcMas.classList.remove("activo");
});
OrcMas.addEventListener("click", function() {
  imgOrcMas.style.display = "block";
  imgOrcFe.style.display = "none";
  OrcMas.classList.add("activo");
  OrcFe.classList.remove("activo");
});

// Troll
TrollFe.addEventListener("click", function() {
  imgTrollFe.style.display = "block";
  imgTrollMas.style.display = "none";
  TrollFe.classList.add("activo");
  TrollMas.classList.remove("activo");
});
TrollMas.addEventListener("click", function() {
  imgTrollMas.style.display = "block";
  imgTrollFe.style.display = "none";
  TrollMas.classList.add("activo");
  TrollFe.classList.remove("activo");
});

// Tauren
TaurenFe.addEventListener("click", function() {
  imgTaurenFe.style.display = "block";
  imgTaurenMas.style.display = "none";
  TaurenFe.classList.add("activo");
  TaurenMas.classList.remove("activo");
});
TaurenMas.addEventListener("click", function() {
  imgTaurenMas.style.display = "block";
  imgTaurenFe.style.display = "none";
  TaurenMas.classList.add("activo");
  TaurenFe.classList.remove("activo");
});

// Undead
UndeadFe.addEventListener("click", function() {
  imgUndeadFe.style.display = "block";
  imgUndeadMas.style.display = "none";
  UndeadFe.classList.add("activo");
  UndeadMas.classList.remove("activo");
});
UndeadMas.addEventListener("click", function() {
  imgUndeadMas.style.display = "block";
  imgUndeadFe.style.display = "none";
  UndeadMas.classList.add("activo");
  UndeadFe.classList.remove("activo");
});

// Elfo de Sangre
ESangreFe.addEventListener("click", function() {
  imgESangreFe.style.display = "block";
  imgESangreMas.style.display = "none";
  ESangreFe.classList.add("activo");
  ESangreMas.classList.remove("activo");
});
ESangreMas.addEventListener("click", function() {
  imgESangreMas.style.display = "block";
  imgESangreFe.style.display = "none";
  ESangreMas.classList.add("activo");
  ESangreFe.classList.remove("activo");
});

// Goblin
GoblinFe.addEventListener("click", function() {
  imgGoblinFe.style.display = "block";
  imgGoblinMas.style.display = "none";
  GoblinFe.classList.add("activo");
  GoblinMas.classList.remove("activo");
});
GoblinMas.addEventListener("click", function() {
  imgGoblinMas.style.display = "block";
  imgGoblinFe.style.display = "none";
  GoblinMas.classList.add("activo");
  GoblinFe.classList.remove("activo");
});

// Pandaren
PandarenFe.addEventListener("click", function() {
  imgPandarenFe.style.display = "block";
  imgPandarenMas.style.display = "none";
  PandarenFe.classList.add("activo");
  PandarenMas.classList.remove("activo");
});
PandarenMas.addEventListener("click", function() {
  imgPandarenMas.style.display = "block";
  imgPandarenFe.style.display = "none";
  PandarenMas.classList.add("activo");
  PandarenFe.classList.remove("activo");
});