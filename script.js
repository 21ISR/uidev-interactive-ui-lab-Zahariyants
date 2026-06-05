const popup = document.querySelector('.popup-overlay');
const btn = document.querySelector('.show-popup');
const btncl = document.querySelector('.popup-close');
const form = document.querySelector('.popup-form');

btn.addEventListener('click', () => {
    popup.classList.add('show');
});

btncl.addEventListener('click', () => {
    popup.classList.remove('show');
});

popup.addEventListener('click', (event) => {
    if (event.target === popup) {
        popup.classList.remove('show');
    }
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
    alert("Сообщение отправлено");
    popup.classList.remove('show');
    from.reset();
});

const headers = document.querySelectorAll('.accordion-header')
headers.forEach((header) => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling
        const isOpen = header.classList.contains('active')
        if (isOpen) {
            content.style.maxHeight = null
        } else {
            content.style.maxHeight = content.scrollHeight + 'px'
        }
        header.classList.toggle('active')
    })
});
