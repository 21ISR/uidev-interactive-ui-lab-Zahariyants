const popup = document.querySelector('.popup-overlay');
const btn = document.querySelector('#show-popup');
const btncl = document.querySelector('.popup-close');
const form = document.querySelector('#popup-form');

btn.addEventListener('click', () => {
    popup.classList.add('show')
});

btncl.addEventListener('click', () => {
    popup.classList.remove('show')
});

form.addEventListener('submit', () => {
    alert("Сообщение отправлено");
    popup.classList.remove('show');
    form.reset();
    btncl();
});

const acitems = document.querySelectorAll('.accordion-item');
acitems.forEach(item => {
    const header = item.querySelector('.accordion-header');
    const content = item.querySelector('.accordion-content');

    if (content) {
        content.style.maxHeight = null;
    }
    
    if (header) {
        header.addEventListener('click', function() {
            const isOpen = this.classList.contains('show');
            
            acitems.forEach(otherItem => {
                const otherHeader = otherItem.querySelector('.accordion-header');
                const otherContent = otherItem.querySelector('.accordion-content');
                if (otherHeader !== this && otherHeader) {
                    otherHeader.classList.remove('show');
                    if (otherContent) {
                        otherContent.style.maxHeight = null;
                    }
                }
            });

            if (!isOpen) {
                this.classList.add('show');
                if (content) {
                    content.style.maxHeight = content.scrollHeight + 'px';
                }
            } 
            else {
                this.classList.remove('show');
                if (content) {
                    content.style.maxHeight = null;
                }
            }
        });
    }
});

const Btn = document.querySelectorAll('.tab-btn');
const Content = document.querySelectorAll('.tab-content');

function switchTab(tabId) {
    Content.forEach(content => {
        content.classList.remove('show');
    });

    const acContent = document.getElementById(tabId);
    if (acContent) {
        acContent.classList.add('show');
    }

    Btn.forEach(btn => {
        btn.classList.remove('show');
        if (btn.getAttribute('data-tab') === tabId) {
            btn.classList.add('show');
        }
    });
}

Btn.forEach(btn => {
    btn.addEventListener('click', function() {
        const tabId = this.getAttribute('data-tab');
        if (tabId) {
            switchTab(tabId);
        }
    });
});

const acBtn = document.querySelector('.tab-btn.active');
if (acBtn) {
    const defTabId = acBtn.getAttribute('data-tab');
    if (defTabId) {
        switchTab(defTabId);
    }
} else if (Btn.length > 0) {
    const firstTabId = Btn[0].getAttribute('data-tab');
    if (firstTabId) {
        switchTab(firstTabId);
    }
}

const tooltips = document.querySelectorAll('.tooltip')
tooltips.forEach((tooltip) => {
    tooltip.addEventListener('mouseenter', () => {
        const text = tooltip.querySelector('.tooltip-text')
        text.style.display = 'inline-block'
    })
    tooltip.addEventListener('mouseleave', () => {
        const text = tooltip.querySelector('.tooltip-text')
        text.style.display = 'none'
    })
})

const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const leftArrow = document.querySelector('.slider-arrow-left');
const rightArrow = document.querySelector('.slider-arrow-right');
const dot = document.querySelectorAll('.slider-dot');

let currentSlide = 0;
const totalSlides = slides.length;
function updateSlider() {
    if (slider) {
        slider.style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    dot.forEach((dot, index) => {
        if (index === currentSlide) {
            dot.classList.add('show');
        } else {
            dot.classList.remove('show');
        }
    });
}