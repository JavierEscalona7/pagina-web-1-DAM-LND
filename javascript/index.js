function actualizarReloj() {
  let ahora = new Date();
  let horas = ahora.getHours();
  let minutos = ahora.getMinutes();
  let segundos = ahora.getSeconds();

  if (horas < 10) { 
    horas = "0" + horas; 
    }
  if (minutos < 10) { 
    minutos = "0" + minutos; 
    }
  if (segundos < 10) { 
    segundos = "0" + segundos;
    }

  let reloj = document.getElementById("reloj");
  reloj.innerHTML = horas + ":" + minutos + ":" + segundos;
}

setInterval(actualizarReloj, 1000);
actualizarReloj();