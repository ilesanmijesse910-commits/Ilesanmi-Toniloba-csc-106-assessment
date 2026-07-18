

document.addEventListener("DOMContentLoaded", function () {
    highlightActiveNavLink();
    setupMobileMenuToggle();
    setupContactFormValidation();
});

function highlightActiveNavLink() {
    const currentPage = window.location.pathname.split("/").pop() || "homepage.html";
    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(function (link) {
        const linkPage = link.getAttribute("href");

        if (linkPage === currentPage) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
}

function setupMobileMenuToggle() {
    const toggleBtn = document.getElementById("menuToggle");
    const navLinks = document.querySelector(".nav-links");

    if (!toggleBtn || !navLinks) {
        return;
    }

    toggleBtn.addEventListener("click", function () {
        navLinks.classList.toggle("show");
    });
}

function setupContactFormValidation() {
    const form = document.getElementById("contactForm");

    if (!form) {
        return;
    }

    form.addEventListener("submit", function (event) {
        const name = form.querySelector("#name");
        const email = form.querySelector("#email");
        const message = form.querySelector("#message");

        let errorMessage = "";

        if (!name.value.trim()) {
            errorMessage = "Please enter your name.";
        } else if (!email.value.trim() || !email.value.includes("@")) {
            errorMessage = "Please enter a valid email address.";
        } else if (!message.value.trim()) {
            errorMessage = "Please enter a message.";
        }

        if (errorMessage) {
            event.preventDefault();
            alert(errorMessage);
        }
    });
}
