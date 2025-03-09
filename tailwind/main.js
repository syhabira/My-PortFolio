
document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.querySelector("[data-collapse-toggle]");
    const navbarMenu = document.getElementById("navbar-cta");

    toggleButton.addEventListener("click", function () {
        const isExpanded = navbarMenu.classList.contains("hidden");
        if (isExpanded) {
            navbarMenu.classList.remove("hidden");
        } else {
            navbarMenu.classList.add("hidden");
        }
    });

    window.addEventListener("resize", function () {
        if (window.innerWidth >= 800) {
            navbarMenu.classList.remove("hidden");
        } else {
            navbarMenu.classList.add("hidden");
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    gsap.to(".first", 1.5, {delay: .5, top: "-100%", ease: "expo.inOut"});
    gsap.to(".second", 1.5, {delay: .7, top: "-100%", ease: "expo.inOut"});
    gsap.to(".third", 1.5, {delay: .9, top: "-100%", ease: "expo.inOut"});

    // IMG Animation
    gsap.from('.home_img', {opacity: 0, duration: 2, delay: 2, x: 60});

    // INFORMATION
    gsap.from('.home__information', {opacity: 0, duration: 3, delay: 2.3, y: 25});
    gsap.from('.anime-text', {opacity: 0, duration: 3, delay: 2.3, y: 25, ease: "expo.out", stagger: 0.3});

    // NAV ITEM
    gsap.from('.nav__logo', {opacity: 0, duration: 3, delay: 3.2, y: 25, ease: "expo.out"});
    gsap.from('.nav__item', {opacity: 0, duration: 3, delay: 3.2, y: 25, ease: "expo.out", stagger: 0.2});

    // SOCIAL ICONS
    gsap.from('.home__social-icon', {opacity: 0, duration: 3, delay: 4, y: 25, ease: "expo.out", stagger: 0.2});
});
gsap.from('.nav', {opacity: 0, duration: 2, delay: 2, x: 60});

