// Recupero elementi in pagina
const display = document.getElementById('display');

// Parto da 5 secondi
let seconds = 5;
display.innerText = seconds;

const countdown = setInterval(() => {
  display.innerText = --seconds;
  if (seconds === 0) {
    display.innerText = 'Buon Anno';
    clearInterval(countdown);
    confetti({
      particleCount: 1000,
      spread: 360
    })

  }
}, 1000);