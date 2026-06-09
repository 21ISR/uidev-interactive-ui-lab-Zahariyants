const popup = document.querySelector('.popup-overlay');
const btn = document.querySelector('#show-popup');
const btncl = document.querySelector('.popup-close');
const form = document.querySelector('#popup-form');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    popup.classList.add('active');
});

if (btncl) {
    btncl.addEventListener('click', () => {
        popup.classList.remove('active');
    })
};

if (popup) {
    popup.addEventListener('click', (e) => {
        if (e.target === popup) {
            popup.classList.remove('active');
        }
    })
};

form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert("Сообщение отправлено");
    popup.classList.remove('show');
    form.reset();
    btncl();
});

const acitems = document.querySelectorAll('.accordion-item');

acitems.forEach(item => {
    const header = item.querySelector('.accordion-header');
    const content = item.querySelector('.accordion-content');

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
                this.classList.add('active');
                if (content) {
                    content.style.maxHeight = content.scrollHeight + 'px';
                }
            } else {
                this.classList.remove('active');
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
        content.classList.remove('active');
    });

    const acContent = document.getElementById(tabId);
    if (acContent) {
        acContent.classList.add('active');
    }

    Btn.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-tab') === tabId) {
            btn.classList.add('active');
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

const activeTabBtn = document.querySelector('.tab-btn.active');
if (activeTabBtn) {
    const defaultTabId = activeTabBtn.getAttribute('data-tab');
    if (defaultTabId) {
        switchTab(defaultTabId);
    }
} else if (Btn.length > 0) {
    const firstTabId = Btn[0].getAttribute('data-tab');
    if (firstTabId) {
        switchTab(firstTabId);
    }
}

const tooltips = document.querySelectorAll('.tooltip');
tooltips.forEach((tooltip) => {
    tooltip.addEventListener('mouseenter', () => {
        const text = tooltip.querySelector('.tooltip-text');
        text.style.visibility = 'visible';
        text.style.opacity = '1';
    });
    tooltip.addEventListener('mouseleave', () => {
        const text = tooltip.querySelector('.tooltip-text');
        text.style.visibility = 'hidden';
        text.style.opacity = '0';
    });
});

const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const leftArrow = document.querySelector('.slider-arrow-left');
const rightArrow = document.querySelector('.slider-arrow-right');
const dots = document.querySelectorAll('.slider-dot');

let currentSlide = 0;
const totalSlides = slides.length;

function updateSlider() {
    if (slider) {
        slider.style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    dots.forEach((dot, index) => {
        if (index === currentSlide) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });

    if (leftArrow) {
        if (currentSlide === 0) {
            leftArrow.style.opacity = '0.5';
            leftArrow.style.cursor = 'not-allowed';
        } else {
            leftArrow.style.opacity = '1';
            leftArrow.style.cursor = 'pointer';
        }
    }
    if (rightArrow) {
        if (currentSlide === totalSlides - 1) {
            rightArrow.style.opacity = '0.5';
            rightArrow.style.cursor = 'not-allowed';
        } else {
            rightArrow.style.opacity = '1';
            rightArrow.style.cursor = 'pointer';
        }
    }
}

if (leftArrow) {
    leftArrow.addEventListener('click', () => {
        if (currentSlide > 0) {
            currentSlide--;
            updateSlider();
        }
    });
}

if (rightArrow) {
    rightArrow.addEventListener('click', () => {
        if (currentSlide < totalSlides - 1) {
            currentSlide++;
            updateSlider();
        }
    });
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index;
        updateSlider();
    });
})
updateSlider();