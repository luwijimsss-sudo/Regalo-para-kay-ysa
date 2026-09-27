const magicButton = document.getElementById("magicButton");
const confettiLayer = document.getElementById("confettiLayer");

if (magicButton) {
  magicButton.addEventListener("click", () => {
    magicButton.disabled = true;
    createConfetti(130);
    createBalloons(14);

    magicButton.style.animation = "none";
    magicButton.style.transform = "scale(1.15)";
    magicButton.style.boxShadow = "0 0 80px rgba(245,200,107,.95), 0 0 150px rgba(142,91,181,.8)";

    setTimeout(() => {
      window.location.href = "home.html";
    }, 3200);
  });
}

function createConfetti(amount) {
  const pieces = ["✦", "✧", "•", "◆", "★"];
  for (let i = 0; i < amount; i++) {
    const piece = document.createElement("span");
    piece.className = "confetti";
    piece.textContent = pieces[Math.floor(Math.random() * pieces.length)];
    piece.style.left = `${Math.random() * 100}vw`;
    piece.style.setProperty("--x", `${(Math.random() - 0.5) * 260}px`);
    piece.style.setProperty("--fall-time", `${2.2 + Math.random() * 2.4}s`);
    piece.style.fontSize = `${10 + Math.random() * 15}px`;
    piece.style.color = ["#f5c86b", "#c9a9df", "#ffffff", "#8e5bb5"][Math.floor(Math.random() * 4)];
    piece.style.animationDelay = `${Math.random() * .45}s`;
    confettiLayer.appendChild(piece);
  }
}

function createBalloons(amount) {
  const colors = ["#8e5bb5", "#f5c86b", "#c9a9df", "#542b78", "#fff0bf"];
  for (let i = 0; i < amount; i++) {
    const balloon = document.createElement("span");
    balloon.className = "balloon";
    balloon.style.left = `${5 + Math.random() * 90}vw`;
    balloon.style.background = colors[Math.floor(Math.random() * colors.length)];
    balloon.style.setProperty("--drift", `${(Math.random() - 0.5) * 180}px`);
    balloon.style.animationDelay = `${Math.random() * .7}s`;
    confettiLayer.appendChild(balloon);
  }
}
