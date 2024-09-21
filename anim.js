// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Él la estaba esperando con una flor amarilla 🌼", time: 0 },
  { text: "ella lo estaba soñando 💭", time: 5 },
  { text: "con la luz en su pupila 👁️✨", time: 6 },
  { text: "Y el amarillo del sol 🔅", time: 13 },
  { text: "iluminaba la esquina 🌇", time: 14 },
  { text: "lo sentía tan cercano 🤲", time: 21 },
  { text: "lo sentía desde niña 👧", time: 24 },
  { text: "Ella sabía que él sabía 💡", time: 26 },
  { text: "que algún día pasaría 📅", time: 29 },
  { text: "que vendría él a buscarla 🚶‍♂️💐", time: 31 },
  { text: "con sus flores 🌻 amarillas", time: 33 },
  { text: "No te apures, no detengas 🏃‍♂️", time: 40 },
  { text: "el instante del encuentro ⏳", time: 41 },
  { text: "está dicho que es un hecho ✔️", time: 42 },
  { text: "no la pierdas no hay derecho 🚫", time: 44 },
  { text: "no te olvides, que la vida 🌱", time: 46 },
  { text: "casi nunca está dormida 😴", time: 52 },
  
];


// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 5
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);

document.body.addEventListener('touchstart', function() {
  var audio = document.getElementById('audio');
  audio.play();
});
