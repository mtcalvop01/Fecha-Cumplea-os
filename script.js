  const titulo = document.createElement("h2");
  titulo.id = "titulo";
  titulo.innerText = "Mi Cumpleaños";

  const inputFecha = document.createElement("input");
  inputFecha.type = "date";
  inputFecha.id = "input";

  const h2 = document.createElement("h2");
  h2.id = "h2";
  h2.innerText = "Introduce una fecha y te dirá cuanto queda para que llegue";

  const dias = document.createElement("h2");
  dias.id = "dias";

  const horas = document.createElement("h2");
  horas.id = "horas";

  const minutos = document.createElement("h2");
  minutos.id = "minutos";

  const segundos = document.createElement("h2");
  segundos.id = "segundos";

  const contador = document.createElement("div");
  contador.id = "contador";

  document.body.appendChild(titulo);
  document.body.appendChild(h2);
  document.body.appendChild(inputFecha);
  document.body.appendChild(contador);
  contador.appendChild(dias);
  contador.appendChild(horas);
  contador.appendChild(minutos);
  contador.appendChild(segundos);

  function actualizarContador(fechaObjetivo) {
      const fin = new Date(fechaObjetivo);
      const ahora = new Date();
      let diff = fin - ahora;

      if (diff <= 0) {
          dias.innerText = "¡La fecha ya pasó!";
          horas.innerText = "";
          minutos.innerText = "";
          segundos.innerText = "";
          contador.style.backgroundColor = "gray";
          return;
      }

      const diasRestantes = Math.floor(diff / (1000 * 60 * 60 * 24));
      const horasRestantes = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutosRestantes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const segundosRestantes = Math.floor((diff % (1000 * 60)) / 1000);

      dias.innerText = `Días: ${diasRestantes}`;
      horas.innerText = `Horas: ${horasRestantes}`;
      minutos.innerText = `Minutos: ${minutosRestantes}`;
      segundos.innerText = `Segundos: ${segundosRestantes}`;

      if (diasRestantes > 30) {
          contador.style.backgroundColor = "lightgreen";
      } else if (diasRestantes <= 30 && diasRestantes >= 7) {
          contador.style.backgroundColor = "orange";
      } else {
          contador.style.backgroundColor = "red";
      }
  }

  // Actualizar cada segundo
  setInterval(() => {
      if (inputFecha.value) {
          actualizarContador(inputFecha.value);
      }
  }, 1000);

  // Actualizar al cambiar la fecha
  inputFecha.addEventListener("change", () => {
      if (inputFecha.value) {
          actualizarContador(inputFecha.value);
      }
  });


