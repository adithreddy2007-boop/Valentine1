export function initHearts() {
  const bg = document.querySelector('.hearts-bg');
  if (!bg) return;
  const emojis = ['♥','💕','💗','💓','💖','🌸','💝','🌷'];
  for (let i = 0; i < 22; i++) {
    const h = document.createElement('div');
    h.className = 'heart-float';
    h.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    h.style.left = `${Math.random() * 100}%`;
    h.style.animationDuration = `${7 + Math.random() * 9}s`;
    h.style.animationDelay = `${Math.random() * 9}s`;
    h.style.fontSize = `${13 + Math.random() * 15}px`;
    h.style.opacity = 0.15 + Math.random() * 0.2;
    bg.appendChild(h);
  }
}
