const popup = document.querySelector('.popup-overlay')
const btn = document.querySelector('.show-popup')

btn.addEventListener('click', () => {
    popup.classList.add('show');
});

popup.addEventListener('click', (event) => {
    if (event.target === popup) {
        popup.classList.remove('show');
    }
});