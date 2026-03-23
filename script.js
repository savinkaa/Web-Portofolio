// =======================
// Highlight menu saat scroll
// =======================
window.addEventListener("scroll", () => {
    let sections = document.querySelectorAll("section");
    let navLinks = document.querySelectorAll("nav ul li a");

    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove("active");
                document.querySelector(`nav ul li a[href*=${id}]`).classList.add("active");
            });
        }
    });
});

// =======================
// Dark/Light Mode Toggle
// =======================
const themeToggle = document.getElementById("theme-toggle");

// Set tema awal dari localStorage
if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light");
    themeToggle.textContent = "🌙";
} else {
    themeToggle.textContent = "☀";
}

// Event klik tombol toggle
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
        themeToggle.textContent = "🌙";
        localStorage.setItem("theme", "light");
    } else {
        themeToggle.textContent = "☀";
        localStorage.setItem("theme", "dark");
    }
});

// =======================
// Fade-Up Animation Saat Scroll
// =======================
const fadeElements = document.querySelectorAll(".fade-up");

function checkFadeElements() {
    const triggerBottom = window.innerHeight * 0.85;
    fadeElements.forEach(el => {
        const boxTop = el.getBoundingClientRect().top;
        if (boxTop < triggerBottom) {
            el.classList.add("show");
        }
    });
}

window.addEventListener("scroll", checkFadeElements);
window.addEventListener("load", checkFadeElements);

// =======================
// Back to Top Button
// =======================
const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
});

backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// =======================
// Preloader
// =======================
window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");
    setTimeout(() => {
        preloader.style.opacity = "0";
        preloader.style.pointerEvents = "none";
        setTimeout(() => {
            preloader.style.display = "none";
        }, 500);
    }, 500); // delay untuk efek smooth
});
