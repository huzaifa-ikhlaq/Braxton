// loading functionlaity 

let firstPage = document.querySelector('#first-page')
let mainPage = document.querySelector('#main-page')
let bgSvg = document.querySelector('#bg-svg')
let heroText = document.querySelector('#heroText')

window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        firstPage.classList.add('hidden')

        mainPage.classList.remove('hidden')

        setTimeout(() => {
            heroText.classList.remove('translate-y-15', 'opacity-0')
            setTimeout(() => {
                // bg-svg fade in
                bgSvg.classList.remove('opacity-0')
                bgSvg.classList.add('opacity-100')
            }, 100)
        }, 100)
    }, 100)
})
// 4 3 2

// Toggle theme (dark / light)
let containerOfSunMoon = document.querySelector('#containerOfSunMoon');
let sun = document.querySelector('#sun');
let moon = document.querySelector('#moon');


let isDark = localStorage.getItem('theme') === 'dark';

function applyTheme() {
    if (isDark) {
        document.documentElement.classList.add('dark');
        sun.classList.add('hidden');
        moon.classList.remove('hidden');
    } else {
        document.documentElement.classList.remove('dark');
        sun.classList.remove('hidden');
        moon.classList.add('hidden');
    }
}

// Call once on page load
applyTheme();

containerOfSunMoon.addEventListener('click', () => {
    isDark = !isDark;
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    applyTheme();
});

// nav-iteams 
const navItems = document.querySelectorAll('[id^="nav-item-"]');

navItems.forEach(item => {
    item.addEventListener('click', () => {

        navItems.forEach(nav => {
            nav.classList.remove(
                'border-[#595959]',
                'dark:border-[#a8b0c1]',
                'bg-black',
                'dark:bg-white'
            );
            nav.classList.add('border-transparent');

            const links = nav.querySelectorAll('a');
            links.forEach(link => {
                link.classList.remove('text-[#e9e9f1]', 'dark:text-[#22232C]');
                link.classList.add('text-[#8B8A91]');
            });

            const svg = nav.querySelector('svg');
            if (svg) {
                svg.classList.remove(
                    'text-[#e9e9f1]',
                    'dark:text-[#22232C]',
                    'text-white',
                    'dark:text-black'
                );
                svg.classList.add('text-[#8B8A91]');
            }
        });

        if (window.innerWidth >= 992) {
            item.classList.remove('border-transparent');
            item.classList.add('border-[#595959]', 'dark:border-[#a8b0c1]');
        }

        const currentLinks = item.querySelectorAll('a');
        currentLinks.forEach(link => {
            link.classList.remove('text-[#8B8A91]');
            link.classList.add('text-[#e9e9f1]', 'dark:text-[#22232C]');
        });

        const activeSvg = item.querySelector('svg');
        if (activeSvg) {
            activeSvg.classList.remove('text-[#8B8A91]');
            activeSvg.classList.add('text-[#e9e9f1]', 'dark:text-[#22232C]');
        }

        if (
            item.classList.contains('left-nav-item') &&
            window.innerWidth < 992
        ) {
            item.classList.add('', 'bg-black');

            if (activeSvg) {
                activeSvg.classList.add('text-white', 'dark:text-black');
            }
        }
    });
});

// reached to section by nav item functionality
function slowScrollTo(id) {
    const target = document.getElementById(id);
    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const duration = 100;

        const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);

        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function easeInOutQuad(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}

// nav active according to section 
const observedSections = ["section1", "section2", "section3", "section5", "section10"];
const sectionToNavMap = {
    section1: "nav-item-1",
    section2: "nav-item-2",
    section3: "nav-item-3",
    section5: "nav-item-4",
    section10: "nav-item-5"
};

const observerOptions = {
    root: null,
    threshold: 0.0,
    rootMargin: '0px 0px -20% 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            const navId = sectionToNavMap[sectionId];
            const currentNav = document.getElementById(navId);

            // Remove active styles from all
            navItems.forEach(nav => {
                nav.classList.remove(
                    'border-[#595959]',
                    'dark:border-[#a8b0c1]',
                    'bg-black',
                    'dark:bg-white'
                );
                nav.classList.add('border-transparent');

                const links = nav.querySelectorAll('a');
                links.forEach(link => {
                    link.classList.remove('text-[#e9e9f1]', 'dark:text-[#22232C]');
                    link.classList.add('text-[#8B8A91]');
                });

                const svg = nav.querySelector('svg');
                if (svg) {
                    svg.classList.remove(
                        'text-[#e9e9f1]',
                        'dark:text-[#22232C]',
                        'text-white',
                        'dark:text-black'
                    );
                    svg.classList.add('text-[#8B8A91]');
                }
            });

            // Add active styles to current
            if (window.innerWidth >= 992) {
                currentNav.classList.remove('border-transparent');
                currentNav.classList.add('border-[#595959]', 'dark:border-[#a8b0c1]');
            }

            const currentLinks = currentNav.querySelectorAll('a');
            currentLinks.forEach(link => {
                link.classList.remove('text-[#8B8A91]');
                link.classList.add('text-[#e9e9f1]', 'dark:text-[#22232C]');
            });

            const activeSvg = currentNav.querySelector('svg');
            if (activeSvg) {
                activeSvg.classList.remove('text-[#8B8A91]');
                activeSvg.classList.add('text-[#e9e9f1]', 'dark:text-[#22232C]');
            }

            if (currentNav.classList.contains('left-nav-item') && window.innerWidth < 992) {
                currentNav.classList.add('bg-black', 'dark:bg-white');

                if (activeSvg) {
                    activeSvg.classList.add('text-white', 'dark:text-black');
                }
            }
        }
    });
}, observerOptions);

// Start observing
observedSections.forEach(id => {
    const section = document.getElementById(id);
    if (section) observer.observe(section);
});


// rollar 

let lastScroll = window.scrollY;
let rotation = 0;

const circle = document.querySelector('.circle-rotate');

window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    if (currentScroll > lastScroll) {
        rotation += 2;
    } else {
        rotation -= 2;
    }
    circle.style.transform = `rotate(${rotation}deg)`;
    lastScroll = currentScroll;
});

/// scroll animation 1
const revealElements1 = document.querySelectorAll('.reveal-on-scroll');

function handleScrollReveal1() {
    const windowHeight = window.innerHeight;

    revealElements1.forEach((el) => {
        const rect = el.getBoundingClientRect();

        if (rect.top < windowHeight - 40) {
            el.classList.add('visible');
        } else {
            el.classList.remove('visible');
        }
    });
}

window.addEventListener('scroll', handleScrollReveal1);
window.addEventListener('load', handleScrollReveal1);

// slider 

const slides = document.getElementById("slides");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

const totalSlides = slides.children.length; // 4
const realSlides = totalSlides - 2; // 2 real slides
let currentIndex = 1;
let isTransitioning = false;

// Set initial position
slides.style.transform = `translateX(-${currentIndex * 100}%)`;

function updateSlidePosition() {
    slides.style.transition = 'transform 0.5s ease-in-out';
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function jumpTo(index) {
    slides.style.transition = 'none';
    slides.style.transform = `translateX(-${index * 100}%)`;
    currentIndex = index;
}

function goNext() {
    if (isTransitioning) return;
    isTransitioning = true;
    currentIndex++;
    updateSlidePosition();

    if (currentIndex === totalSlides - 1) {
        setTimeout(() => {
            jumpTo(1);
            isTransitioning = false;
        }, 500);
    } else {
        setTimeout(() => isTransitioning = false, 500);
    }
}

function goPrev() {
    if (isTransitioning) return;
    isTransitioning = true;
    currentIndex--;
    updateSlidePosition();

    if (currentIndex === 0) {
        setTimeout(() => {
            jumpTo(realSlides);
            isTransitioning = false;
        }, 500);
    } else {
        setTimeout(() => isTransitioning = false, 500);
    }
}

// Button events
nextBtn.addEventListener("click", goNext);
prevBtn.addEventListener("click", goPrev);

// ✅ Auto-play every 3 seconds
setInterval(goNext, 3000);

// signUp-form 

const form = document.getElementById("signUpForm");
const afterMessage = document.getElementById("afterSignUpForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    form.classList.remove('opacity-100');
    form.classList.add('opacity-0');
    afterMessage.classList.remove("opacity-0");
    afterMessage.classList.add("opacity-100");
    setTimeout(() => {
        afterMessage.classList.remove("opacity-100");
        afterMessage.classList.add("opacity-0");
        setTimeout(() => {
            form.classList.remove('opacity-0');
            form.classList.add('opacity-100');
            form.reset();
        }, 700);
    }, 4000);
});
