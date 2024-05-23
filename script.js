document.addEventListener('DOMContentLoaded', function () {
    let slideIndex = 0;
    const slides = document.querySelectorAll('.slides');
    const showSlides = () => {
        slides.forEach((slide, index) => {
            slide.style.display = 'none';
        });
        slideIndex++;
        if (slideIndex > slides.length) slideIndex = 1;
        slides[slideIndex - 1].style.display = 'block';
        setTimeout(showSlides, 3000);
    };
    showSlides();

    const languageButton = document.querySelector('.language-button');
    const languageMenu = document.querySelector('.language-menu');
    languageButton.addEventListener('click', () => {
        languageMenu.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
        if (!languageButton.contains(e.target) && !languageMenu.contains(e.target)) {
            languageMenu.classList.remove('active');
        }
    });

    const currencyButton = document.querySelector('.currency-button');
    const currencyMenu = document.querySelector('.currency-menu');
    currencyButton.addEventListener('click', () => {
        currencyMenu.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
        if (!currencyButton.contains(e.target) && !currencyMenu.contains(e.target)) {
            currencyMenu.classList.remove('active');
        }
    });
});