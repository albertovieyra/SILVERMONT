//------------------------------TOGGLE ICON NAVBAR SECTION------------------------
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// ---------------------------------------START PORFOLIO SECTION-------------------------------------
let slideIndex = 0;
const slides = document.getElementsByClassName('slide');

function showSlide(n) {
    if (n < 0) {
        slideIndex = slides.length - 1;
    } else if (n >= slides.length) {
        slideIndex = 0;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    slides[slideIndex].style.display = 'block';
}

function prevSlide() {
    slideIndex--;
    showSlide(slideIndex);
}

function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}

showSlide(slideIndex);
// ---------------------------------------END PORFOLIO SECTION-------------------------------------

// ----------------------------------------FOOTER BUTTON SECTION---------------------------------------
// Al cargar la página, se asigna un evento al botón para que al hacer clic en él, la página se desplace hacia la sección con la clase "home".
window.onload = function () {
    const goToTopButton = document.getElementById('goToTopButton');
    const homeSection = document.querySelector('.home');

    goToTopButton.addEventListener('click', function () {
        // La función scrollIntoView se utilizará para desplazar la página hacia la sección "home"
        homeSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
};