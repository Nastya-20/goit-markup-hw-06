const scrollToTopBtn = document.getElementById('scrollToTopBtn');

// Функция отображения кнопки при прокрутке
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) { // Если прокрутка больше 300 пикселей
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

// Функция прокрутки вверх при нажатии на кнопку
scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Плавная прокрутка
    });
});


// Закриття та відкриття мобильного меню
const mobMenu = document.querySelector('.mob-menu');
const openModalBtn = document.querySelector('.open-menu-btn');
const closeModalBtn = document.querySelector('.close-menu-btn ');

function openMenu(menu) {
    console.log('Opening menu:', menu);
    menu.classList.add('is-open');
}

function closeMenu(menu) {
    console.log('Closing menu:', menu);
    menu.classList.remove('is-open');
}

// Обработчики событий для открытия и закрытия мобильного меню
openModalBtn.addEventListener('click', () => openMenu(mobMenu));
closeModalBtn.addEventListener('click', () => closeMenu(mobMenu));


