document.addEventListener("DOMContentLoaded", function() {
    if (localStorage.getItem("authenticated") !== "true") {
        checkPassword();
    }
});

function checkPassword() {
    let correctPassword = "amirnz";
    let userPassword = prompt("رمز ورود به سایت را وارد کنید:");

    if (userPassword === correctPassword) {
        localStorage.setItem("authenticated", "true");
    } else {
        document.body.innerHTML = "<h1 style='text-align:center; color:red;'>دسترسی غیرمجاز!</h1>";
    }
}

alert("تولدت مبارک تیچر ❤️");

const container = document.getElementById('container');
const colors = ['yellow', 'red', 'orange', 'pink', 'purple'];

function createFirework() {
  const firework = document.createElement('div');
  firework.classList.add('firework');

  // جای افقی رندوم بین 0 تا عرض صفحه
  const randomX = Math.random() * window.innerWidth;
  firework.style.left = `${randomX}px`;

  // شروع پایین صفحه (اسکرول + ارتفاع پنجره)
  const startY = window.scrollY + window.innerHeight;
  firework.style.top = `${startY}px`;

  container.appendChild(firework);

  let startTime = null;
  const duration = 1500; // مدت حرکت فشفشه

  function animate(time) {
    if (!startTime) startTime = time;
    const elapsed = time - startTime;
    const progress = Math.min(elapsed / duration, 1);

    // وسط صفحه (اسکرول + نصف ارتفاع)
    const middleY = window.scrollY + window.innerHeight / 2;

    // حرکت از پایین به وسط (top کم میشه)
    const currentTop = startY - progress * (startY - middleY);
    firework.style.top = `${currentTop}px`;

    // محو شدن و کوچک شدن آخر حرکت
    if (progress > 0.8) {
      firework.style.opacity = `${1 - (progress - 0.8) / 0.2}`;
      firework.style.height = `${80 * (1 - (progress - 0.8) / 0.2)}px`;
    }

    if (progress < 1) {
      requestAnimationFrame(animate);
    } else {
      const rect = firework.getBoundingClientRect();
      firework.remove();
      createExplosion(rect.left + rect.width / 2, rect.top + rect.height / 2 + window.scrollY);
    }
  }

  requestAnimationFrame(animate);
}

function createExplosion(x, y) {
  for (let i = 0; i < 30; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    const color = colors[Math.floor(Math.random() * colors.length)];
    particle.classList.add(color);

    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;

    const angle = Math.random() * 2 * Math.PI;
    const distance = Math.random() * 100 + 50;
    particle.style.setProperty('--x', `${Math.cos(angle) * distance}px`);
    particle.style.setProperty('--y', `${Math.sin(angle) * distance}px`);
    particle.style.animation = 'explodeParticle 1s forwards';

    container.appendChild(particle);
    particle.addEventListener('animationend', () => {
      particle.remove();
    });
  }
}

function createMultipleFireworks(count = 3, delay = 300) {
  for (let i = 0; i < count; i++) {
    setTimeout(() => {
      createFirework();
    }, i * delay);
  }
}

// اجرا کردن سه فشفشه پشت سر هم هر 2 ثانیه
setInterval(() => {
  createMultipleFireworks(3, 300);
}, 2000);

// شروع اولیه
createMultipleFireworks(3, 300);
