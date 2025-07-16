// loading functionlaity 

let firstPage = document.querySelector('#first-page')
let mainPage = document.querySelector('#main-page')
let bgSvg1 = document.querySelector('#bg-svg')

window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        firstPage.classList.add('hidden')
        // main-page 
        mainPage.classList.remove('hidden')
        setTimeout(() => {
            // bg-svg
            bgSvg1.classList.remove('opacity-0')
            bgSvg1.classList.add('opacity-100')
        }, 800)
    }, 2000)
})

// Toggle theme (dark / light)
let containerOfSunMoon = document.querySelector('#containerOfSunMoon');
let sun = document.querySelector('#sun');
let moon = document.querySelector('#moon');

// Initialize theme from localStorage
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

// Nav item highlighting
const navItems = document.querySelectorAll('[id^="nav-item-"]');

navItems.forEach(item => {
    item.addEventListener('click', () => {
        // Remove border and text colors from all nav items
        navItems.forEach(nav => {
            nav.classList.remove('border-[#595959]', 'dark:border-[#a8b0c1]');
            nav.classList.add('border-transparent');

            const links = nav.querySelectorAll('a');
            links.forEach(link => {
                link.classList.remove('text-[#e9e9f1]', 'dark:text-[#22232C]');
                link.classList.add('text-[#8B8A91]');
            });
        });

        // Apply active border and text color to clicked item
        item.classList.remove('border-transparent');
        item.classList.add('border-[#595959]', 'dark:border-[#a8b0c1]');

        const currentLinks = item.querySelectorAll('a');
        currentLinks.forEach(link => {
            link.classList.remove('text-[#8B8A91]');
            link.classList.add('text-[#e9e9f1]', 'dark:text-[#22232C]');
        });
    });
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

// scroll animation 

const revealElements = document.querySelectorAll('.reveal-on-scroll');

function handleScrollReveal() {
    const windowHeight = window.innerHeight;

    revealElements.forEach((el) => {
        const rect = el.getBoundingClientRect();

        if (rect.top < windowHeight - 50) {
            el.classList.add('visible');
        } else {
            el.classList.remove('visible'); // Important: this lets it animate again
        }
    });
}

window.addEventListener('scroll', handleScrollReveal);
window.addEventListener('load', handleScrollReveal);

// slider 


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
