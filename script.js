function toggleMenu() {
  document.querySelector("nav").classList.toggle("open");
}

const follower = document.getElementById('cursor-follower');
    const offsetX = 30; // pixels to the right
    const offsetY = 30; // pixels down

    document.addEventListener('mousemove', (e) => {
      follower.style.left = `${e.clientX + offsetX}px`;
      follower.style.top = `${e.clientY + offsetY}px`;
    });