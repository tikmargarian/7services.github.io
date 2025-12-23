// Code for google avis
const container = document.querySelector('.reviews');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
        
next.addEventListener('click', () => {
    container.scrollBy({ left: 320, behavior: 'smooth' });
});
        
prev.addEventListener('click', () => {
    container.scrollBy({ left: -320, behavior: 'smooth' });
});
// Code for google avis

// Colors for google avatars
const avatars = document.querySelectorAll(".avatar");
avatars[0].style.backgroundColor = "#2a6b84";
avatars[1].style.backgroundColor = "#d62f2f";
avatars[2].style.backgroundColor = "#74c0fc";
avatars[3].style.backgroundColor = "#044944";
avatars[4].style.backgroundColor = "#8bc24a";
avatars[5].style.backgroundColor = "#254bdd";
avatars[6].style.backgroundColor = "#044944";
avatars[7].style.backgroundColor = "#ffce40";
avatars[8].style.backgroundColor = "#8dc63f";
avatars[9].style.backgroundColor = "#d62f2f";
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