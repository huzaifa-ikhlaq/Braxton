// loading functionlaity 

// let firstPage = document.querySelector('#first-page')
// let mainPage = document.querySelector('#main-page')
// let bgSvg1 = document.querySelector('#bg-svg')

// window.addEventListener('DOMContentLoaded', () => {
//     setTimeout(() => {
//         firstPage.classList.add('hidden')
//         // main-page 
//         mainPage.classList.remove('hidden')
//         setTimeout(() => {
//             // bg-svg
//             bgSvg1.classList.remove('opacity-0')
//             bgSvg1.classList.add('opacity-100')
//         }, 800)
//     }, 2000)
// })

// nav-items 
let navItem1 = document.querySelector('#nav-item-1')
let navItem2 = document.querySelector('#nav-item-2')
let navItem3 = document.querySelector('#nav-item-3')
let navItem4 = document.querySelector('#nav-item-4')
let navItem5 = document.querySelector('#nav-item-5')

const navItems = document.querySelectorAll('[id^="nav-item-"]');

navItems.forEach(item => {
    item.addEventListener('click', () => {
        navItems.forEach(nav => {
            nav.classList.remove('border-[#595959]');
            nav.classList.add('border-transparent'); // restore invisible border
            const link = nav.querySelector('a');
            link.classList.remove('text-[#e9e9f1]');
            link.classList.add('text-[#8B8A91]');
        });

        item.classList.remove('border-transparent'); // remove invisible border
        item.classList.add('border-[#595959]'); // apply visible one
        const currentLink = item.querySelector('a');
        currentLink.classList.remove('text-[#8B8A91]');
        currentLink.classList.add('text-[#e9e9f1]');
    });
});

//  dark and white theme 
let containerOfSunMoon = document.querySelector('#containerOfSunMoon')
let sun = document.querySelector('#sun')
let moon = document.querySelector('#moon')

containerOfSunMoon.addEventListener('click', changetheme)

let isSun = true;
function changetheme() {
    if (isSun) {
        sun.classList.add('hidden')
        moon.classList.remove('hidden')
    } else {
        sun.classList.remove('hidden')
        moon.classList.add('hidden')
    }
    isSun = !isSun
}