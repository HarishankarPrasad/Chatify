const li = document.getElementById("li");
const su = document.getElementById("su");

// --------------------button animation effect starts-----------------
li.addEventListener("mouseenter", () => {
    li.style.backgroundColor = 'var(--btn-bg)';
    li.style.color = 'var(--normal)';    
    su.style.backgroundColor = 'var(--normal)';
    su.style.color = 'var(--btn-bg)';
});

li.addEventListener("mouseleave", () => {
    li.style.backgroundColor = 'var(--normal)';
    li.style.color = "var(--btn-bg)";
    su.style.backgroundColor = 'var(--btn-bg)';;
    su.style.color = 'var(--normal)';
});

su.addEventListener("mouseenter", () => {
    su.style.backgroundColor = 'var(--normal)';
    su.style.color = 'var(--btn-bg)';;    
    li.style.backgroundColor = 'var(--btn-bg)';;
    li.style.color = 'var(--normal)';
});

su.addEventListener("mouseleave", () => {
    su.style.backgroundColor = "var(--btn-bg)";
    su.style.color = 'var(--normal)';
    li.style.backgroundColor = 'var(--normal)';
    li.style.color = 'var(--btn-bg)';
});
// --------------------button animation effect ends-----------------

// Hamburger menu handling

const hamburgerMenu = document.getElementById('hamburger-menu');
const navMenu = document.querySelector('.menu');

hamburgerMenu.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  hamburgerMenu.classList.toggle('open');
});
