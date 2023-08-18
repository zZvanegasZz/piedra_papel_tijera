function juegoPiedraPapelTijera() {
    const opciones = ["piedra", "papel", "tijera"];
    while (true) {
      const jugador = prompt("Elige piedra, papel o tijera (o 'salir' para terminar): ").toLowerCase();
      if (jugador === "salir") {
        alert("¡Hasta luego!");
        break;
      }
      if (!opciones.includes(jugador)) {
        alert("Opción no válida. Intenta nuevamente.");
        continue;
      }
  
      const computadora = opciones[Math.floor(Math.random() * opciones.length)];
      alert("La computadora eligió: " + computadora);
  
      if (jugador === computadora) {
        alert("¡Empate!");
      } else if ((jugador === "piedra" && computadora === "tijera") || (jugador === "papel" && computadora === "piedra") || (jugador === "tijera" && computadora === "papel")) {
        alert("¡Ganaste!");
      } else {
        alert("¡Perdiste!");
      }
    }
  }
  
  juegoPiedraPapelTijera()