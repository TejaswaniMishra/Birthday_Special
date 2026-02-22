
const container = document.querySelector(".balloon-container");

const colors = [
  "#ff7eb9",
  "#ffd166",
  "#8ecae6",
  "#c77dff",
  "#ffb4a2",
  "#90dbf4"
];

function createBalloon() {
  const balloon = document.createElement("div");
  balloon.className = "balloon";

  // random size
  const size = Math.random() * 20 + 60;
  balloon.style.width = size + "px";
  balloon.style.height = size * 1.3 + "px";

  // random color
  balloon.style.background =
    colors[Math.floor(Math.random() * colors.length)];

  // random position
  balloon.style.left = Math.random() * 100 + "vw";

  // random animation
  const duration = Math.random() * 4 + 10;
  balloon.style.animationDuration = duration + "s";

  balloon.style.animationDelay = Math.random() * 3 + "s";
  balloon.style.transform = `scale(${Math.random() * 0.4 + 0.8})`;

  // sideways drift
  balloon.style.setProperty(
    "--drift",
    Math.random() * 60 - 30 + "px"
  );

  container.appendChild(balloon);

  // remove after animation
  setTimeout(() => {
    balloon.remove();
  }, duration * 1000);

}

// 🎈 infinite loop
setInterval(createBalloon, 1200);

function confettiBurst() {
  for (let i = 0; i < 30; i++) {
    const c = document.createElement("div");
    c.innerText = Math.random() > 0.5 ? "🎉" : "✨";
    c.style.position = "fixed";
    c.style.left = "50%";
    c.style.top = "60%";
    c.style.fontSize = "24px";
    c.style.pointerEvents = "none";
    c.style.transform = `translate(-50%, -50%) translate(${Math.random()*200-100}px, ${Math.random()*-200}px)`;
    c.style.transition = "all 1s ease";
    document.body.appendChild(c);

    setTimeout(() => {
      c.style.opacity = 0;
      c.style.transform += " translateY(200px)";
    }, 50);

    // page load pe turant balloons
   for (let i = 0; i < 6; i++) {
   setTimeout(createBalloon, i * 200);
  }

  // then infinite loop
  setInterval(createBalloon, 800);
    }
  }

const bgMusic = document.getElementById("bgMusic");
let musicStarted = false;

// 🔥 first interaction pe music
document.addEventListener("click", () => {
  if (!musicStarted) {
    bgMusic.volume = 0.4;
    bgMusic.play();
    musicStarted = true;
  }
}, { once: true });



function goToHeart() {
  confettiBurst();

  setTimeout(() => {
    document.body.style.transition = "opacity 1s";
    document.body.style.opacity = 0;
  }, 700);

  setTimeout(() => {
    window.location.href = "b12/index.html";
  }, 1700);
}