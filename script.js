// ===============================
// BUTKI ENTERPRISES
// Premium Website Script
// ===============================

document.addEventListener("DOMContentLoaded", function () {

    // Loader
    const loader = document.getElementById("loader");

    if (loader) {
        setTimeout(() => {
            loader.style.display = "none";
        }, 1500);
    }

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

    // Header Shadow
    const header = document.querySelector("header");

    window.addEventListener("scroll", function () {

        if (!header) return;

        if (window.scrollY > 50) {
            header.style.boxShadow = "0 5px 20px rgba(0,0,0,.4)";
        } else {
            header.style.boxShadow = "none";
        }

    });

    // Counter Animation
    function animateCounter(id, end, suffix = "") {

        const element = document.getElementById(id);

        if (!element) return;

        let start = 0;

        const timer = setInterval(() => {

            start++;

            element.innerHTML = start + suffix;

            if (start >= end) {
                clearInterval(timer);
            }

        }, 60);

    }

    animateCounter("exp", 6, "+");
    animateCounter("project", 30, "+");

    // Quote Form
    const form = document.querySelector(".quote form");

    if (form) {

        form.addEventListener("submit", function (e) {

            e.preventDefault();

            alert("Thank You! We will contact you soon.");

            form.reset();

        });

    }

    // Fade Animation
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }

        });

    });

    sections.forEach(section => {

        section.style.opacity = "0";
        section.style.transform = "translateY(40px)";
        section.style.transition = "all .8s ease";

        observer.observe(section);

    });

});

console.log("BUTKI ENTERPRISES Website Loaded Successfully");