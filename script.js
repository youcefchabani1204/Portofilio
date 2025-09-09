// Animation au scroll
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
    }
  });
}, {threshold:0.2});
sections.forEach(section => observer.observe(section));





const canvas = document.getElementById('heroParticles');
const ctx = canvas.getContext('2d');

let particlesArray;
let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

// ====== Particule class ======
class Particle {
  constructor(){
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.size = Math.random() * 3 + 1;
    this.speedX = (Math.random() - 0.5) * 1.5;
    this.speedY = (Math.random() - 0.5) * 1.5;
    this.color = 'rgba(255,255,255,0.7)'; // blanc visible sur fond violet
  }
  update(){
    this.x += this.speedX;
    this.y += this.speedY;

    // Rebond sur les bords
    if(this.x < 0 || this.x > width) this.speedX *= -1;
    if(this.y < 0 || this.y > height) this.speedY *= -1;
  }
  draw(){
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}

// ====== Init ======
function init(){
  particlesArray = [];
  for(let i=0; i<80; i++){
    particlesArray.push(new Particle());
  }
}
init();

// ====== Animation ======
function animate(){
  ctx.clearRect(0,0,width,height);
  particlesArray.forEach(p => {
    p.update();
    p.draw();
  });
  requestAnimationFrame(animate);
}
animate();

// ====== Resize ======
window.addEventListener('resize', () => {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
  init();
});
document.querySelectorAll('.navbar a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});
// contact 
