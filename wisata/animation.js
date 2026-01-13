const container = document.querySelector(".home-card-container");
const cards = Array.from(container.children);

let speed = 0.6;
let pos = 0;

// clone semua kartu supaya loop
cards.forEach(card => {
  container.appendChild(card.cloneNode(true));
});

// hitung lebar set pertama
let totalWidth = 0;
cards.forEach(card => {
  totalWidth += card.offsetWidth + 25; // 25 = gap CSS
});

function animate() {
  pos -= speed;

  if (Math.abs(pos) >= totalWidth) {
    pos = 0;
  }

  container.style.transform = `translateX(${pos}px)`;
  requestAnimationFrame(animate);
}

animate();

