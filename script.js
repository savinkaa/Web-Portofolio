// ===============================
// ACTIVE NAVBAR
// ===============================

window.addEventListener("scroll", () => {

    let sections = document.querySelectorAll("section");
    let navLinks = document.querySelectorAll("nav ul li a");

    sections.forEach(sec => {

        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if(top >= offset && top < offset + height){

            navLinks.forEach(link => {
                link.classList.remove("active");
            });

            document.querySelector(
                `nav ul li a[href*=${id}]`
            ).classList.add("active");
        }
    });
});

// ===============================
// DARK MODE
// ===============================

const themeToggle = document.getElementById("theme-toggle");

if(localStorage.getItem("theme") === "light"){

    document.body.classList.add("light");
    themeToggle.textContent = "🌙";

}else{

    themeToggle.textContent = "☀";
}

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light");

    if(document.body.classList.contains("light")){

        themeToggle.textContent = "🌙";
        localStorage.setItem("theme","light");

    }else{

        themeToggle.textContent = "☀";
        localStorage.setItem("theme","dark");
    }
});

// ===============================
// FADE UP
// ===============================

const fadeElements = document.querySelectorAll(".fade-up");

function checkFade(){

    const triggerBottom = window.innerHeight * 0.85;

    fadeElements.forEach(el => {

        const boxTop = el.getBoundingClientRect().top;

        if(boxTop < triggerBottom){

            el.classList.add("show");
        }
    });
}

window.addEventListener("scroll",checkFade);
window.addEventListener("load",checkFade);

// ===============================
// BACK TO TOP
// ===============================

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){

        backToTop.style.display = "block";

    }else{

        backToTop.style.display = "none";
    }
});

backToTop.addEventListener("click", () => {

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
});

// ===============================
// PRELOADER
// ===============================

window.addEventListener("load", () => {

    const preloader = document.getElementById("preloader");

    setTimeout(() => {

        preloader.style.opacity = "0";

        setTimeout(() => {

            preloader.style.display = "none";

        },500);

    },1000);
});

// ===============================
// TYPING EFFECT
// ===============================

const typingText = document.querySelector(".typing");

const texts = [
    "Mahasiswa Informatika",
    "Frontend Developer",
    "UI/UX Enthusiast",
    "Creative Designer"
];

let textIndex = 0;
let charIndex = 0;

function typeEffect(){

    if(charIndex < texts[textIndex].length){

        typingText.textContent += texts[textIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeEffect,100);

    }else{

        setTimeout(eraseEffect,1500);
    }
}

function eraseEffect(){

    if(charIndex > 0){

        typingText.textContent =
        texts[textIndex].substring(0,charIndex - 1);

        charIndex--;

        setTimeout(eraseEffect,50);

    }else{

        textIndex = (textIndex + 1) % texts.length;

        setTimeout(typeEffect,500);
    }
}

document.addEventListener("DOMContentLoaded",typeEffect);
