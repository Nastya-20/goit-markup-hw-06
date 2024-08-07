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
const body = document.querySelector('body');

function openMenu(menu) {
    console.log('Opening menu:', menu);
    menu.classList.add('is-open');
    body.classList.add('no-scroll');
}

function closeMenu(menu) {
    console.log('Closing menu:', menu);
    menu.classList.remove('is-open');
    body.classList.remove('no-scroll');
}

// Обработчики событий для открытия и закрытия мобильного меню
openModalBtn.addEventListener('click', () => openMenu(mobMenu));
closeModalBtn.addEventListener('click', () => closeMenu(mobMenu));

// Відкриття форми на комп'ютері
const modalForm = document.querySelector('.modal');
const openOrderServiceButton = document.querySelector('.button');
const closeOrderServiceButton = document.querySelector('.button-modal-close');
const modalOverlay = document.querySelector('.modal-overlay');


function openForm() {
  console.log('Opening form');
  modalForm.classList.add('is-open');
  modalOverlay.classList.add('is-open');
  body.classList.add('no-scroll');
}

function closeForm() {
  console.log('Closing form');
  modalForm.classList.remove('is-open');
  modalOverlay.classList.remove('is-open');
  body.classList.remove('no-scroll');
}

openOrderServiceButton.addEventListener('click', openForm);
closeOrderServiceButton.addEventListener('click', closeForm);

// Close the modal when clicking on the overlay
modalOverlay.addEventListener('click', (event) => {
  if (event.target === modalOverlay) {
    closeForm();
  }
});


document.addEventListener('DOMContentLoaded', () => {
  const menuItems = document.querySelectorAll('.header-menu-title');

  menuItems.forEach(item => {
    item.addEventListener('click', (event) => {
      event.preventDefault(); // Предотвращает переход по ссылке

      // Удаляем класс 'current' у всех элементов
      menuItems.forEach(el => el.classList.remove('current'));

      // Добавляем класс 'current' к текущему элементу
      item.classList.add('current');
    });
  });
});


