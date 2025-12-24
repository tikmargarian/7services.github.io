// Code for google avis
const container = document.querySelector('.reviews');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

if (container && prev && next) {
  next.addEventListener('click', () => {
    container.scrollBy({ left: 320, behavior: 'smooth' });
  });

  prev.addEventListener('click', () => {
    container.scrollBy({ left: -320, behavior: 'smooth' });
  });
}
// Code for google avis

// Colors for google avatars
const avatars = document.querySelectorAll(".avatar");
const colors = [
  "#2a6b84", "#d62f2f", "#74c0fc", "#044944",
  "#8bc24a", "#254bdd", "#044944", "#ffce40",
  "#8dc63f", "#d62f2f"
];

avatars.forEach((avatar, i) => {
    avatar.style.backgroundColor = colors[i];
});
// Colors for google avatars

// Navbar hamburger media code
const navbarItems = document.querySelector(".navbar-items");
const hamburger = document.querySelector(".navbar-hamburger");

function openNavbar () {
    hamburger.classList.toggle("active");
    navbarItems.classList.toggle("active")
}

function closeNavbar () {
    hamburger.classList.remove("active");
    navbarItems.classList.remove("active")
}

hamburger.addEventListener("click", openNavbar);

document.querySelectorAll(".navbar-items li a").forEach((item) => {
    item.addEventListener("click", closeNavbar)
})