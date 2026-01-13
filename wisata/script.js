document.addEventListener("DOMContentLoaded", () => {
  const modeBtn = document.getElementById("modeBtn");
  const body = document.body;

  if (modeBtn) {
    modeBtn.addEventListener("click", () => {
      body.classList.toggle("night-mode");
      modeBtn.textContent = body.classList.contains("night-mode")
        ? "☀️ Mode Siang"
        : "🌙 Mode Malam";
    });
  }

  const loginForm = document.getElementById("loginForm");
  const errorMsg = document.getElementById("errorMsg");

  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value.trim();

      const validUser = "nesa_maulina";
      const validPass = "loplop";

      if (username === validUser && password === validPass) {
        errorMsg.style.color = "green";
        errorMsg.textContent = "✅ Login berhasil! Mengalihkan ke Beranda...";
        setTimeout(() => {
          window.location.href = "index.html";
        }, 1500);
      } else {
        errorMsg.style.color = "red";
        errorMsg.textContent = "Username atau password salah!";
      }
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("kontakForm");
  const statusPesan = document.getElementById("statusPesan");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const emailInput = document.getElementById("email").value.trim();
      const nama = document.getElementById("nama").value.trim();
      const hp = document.getElementById("nohp").value.trim();
      const pesan = document.getElementById("pesan").value.trim();

      const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput);

      if (!emailValid) {
        tampilkanStatus("Format email tidak valid ❌", "error");
        return;
      }

      if (!nama || !hp || !pesan) {
        tampilkanStatus("Harap isi semua kolom dengan benar ❗", "error");
        return;
      }

      tampilkanStatus("Pesan terkirim ✅", "success");
      form.reset();
    });
  }

  function tampilkanStatus(pesan, tipe) {
    statusPesan.textContent = pesan;
    statusPesan.className = tipe === "success" ? "success" : "error";
    statusPesan.style.opacity = "1";

    setTimeout(() => {
      statusPesan.style.opacity = "0";
    }, 3000);
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".home-card-container");
  if (!container) return;

  let speed = 0.7;

  function loop() {
    container.scrollLeft += speed;

    if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
      container.scrollLeft = 0;
    }

    requestAnimationFrame(loop);
  }

  loop();
});

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".home-card-container");
  if (!container) return;

  container.innerHTML += container.innerHTML;

  let pos = 0;
  const speed = 0.6;

  function slide() {
    pos += speed;
    container.scrollLeft = pos;

    if (pos >= container.scrollWidth / 2) {
      pos = 0;
      container.scrollLeft = 0;
    }

    requestAnimationFrame(slide);
  }

  slide();
});

document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector("#beranda .home-card-container");
  if (!slider) return;

  let speed = 0.5;

  function autoSlide() {
    slider.scrollLeft += speed;

    if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth) {
      slider.scrollLeft = 0;
    }

    requestAnimationFrame(autoSlide);
  }

  autoSlide();
});

document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector("#beranda .home-card-container");
  if (!slider) return;

  slider.innerHTML += slider.innerHTML;

  let scrollSpeed = 1; 

  function loopSlide() {
    slider.scrollLeft += scrollSpeed;

    if (slider.scrollLeft >= slider.scrollWidth / 2) {
      slider.scrollLeft = 0;
    }

    requestAnimationFrame(loopSlide);
  }

  loopSlide();
});

document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector("#beranda .home-card-container");
  if (!slider) return;

  const cards = slider.innerHTML;
  slider.innerHTML += cards;

  let position = 0;
  const speed = 0.4;

  function smoothLoop() {
    position -= speed;
    slider.style.transform = `translateX(${position}px)`;

    if (Math.abs(position) >= slider.scrollWidth / 2) {
      position = 0;
    }

    requestAnimationFrame(smoothLoop);
  }

  smoothLoop();
});

document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector("#beranda .home-card-container");
  if (!slider) return;

  slider.innerHTML += slider.innerHTML;

  let posisi = 0;
  const speed = 0.4; 

  function loop() {
    posisi -= speed;

    if (Math.abs(posisi) >= slider.scrollWidth / 2) {
      posisi = 0;
    }

    slider.style.transform = `translateX(${posisi}px)`;
    requestAnimationFrame(loop);
  }

  loop();
});
