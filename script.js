/* ==========================
   LOADING SCREEN
========================== */

window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
        loader.style.transition = "0.8s";
    }, 1500);
});

/* ==========================
   MOBILE MENU
========================== */

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

/* ==========================
   CLOSE MENU WHEN CLICK
========================== */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });

});

/* ==========================
   BACK TO TOP BUTTON
========================== */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

/* ==========================
   NAVBAR SCROLL EFFECT
========================== */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 100) {

        navbar.style.background =
            "rgba(4, 15, 25, 0.95)";

        navbar.style.boxShadow =
            "0 5px 20px rgba(0,212,255,0.2)";

    } else {

        navbar.style.background =
            "rgba(7,19,31,0.90)";

        navbar.style.boxShadow = "none";
    }

});

/* ==========================
   GALLERY LIGHTBOX
========================== */

const galleryImages =
    document.querySelectorAll(".gallery img");

galleryImages.forEach(img => {

    img.addEventListener("click", () => {

        const lightbox =
            document.createElement("div");

        lightbox.style.position = "fixed";
        lightbox.style.top = "0";
        lightbox.style.left = "0";
        lightbox.style.width = "100%";
        lightbox.style.height = "100%";
        lightbox.style.background =
            "rgba(0,0,0,0.9)";
        lightbox.style.display = "flex";
        lightbox.style.justifyContent = "center";
        lightbox.style.alignItems = "center";
        lightbox.style.zIndex = "99999";

        const image =
            document.createElement("img");

        image.src = img.src;
        image.style.maxWidth = "90%";
        image.style.maxHeight = "90%";
        image.style.borderRadius = "15px";

        lightbox.appendChild(image);

        document.body.appendChild(lightbox);

        lightbox.addEventListener("click", () => {
            lightbox.remove();
        });

    });

});

/* ==========================
   WATER FLOW EFFECT
========================== */

const waves =
    document.querySelectorAll(".wave");

let waveOffset = 0;

function animateWater() {

    waveOffset += 0.3;

    waves.forEach((wave, index) => {

        const speed = (index + 1) * 0.3;

        wave.style.transform =
            `translateX(${Math.sin(
                waveOffset * 0.02 * speed
            ) * 50}px)`;

    });

    requestAnimationFrame(animateWater);
}

animateWater();

/* ==========================
   BUBBLE EFFECT
========================== */

function createBubble() {

    const bubble =
        document.createElement("div");

    bubble.classList.add("bubble");

    const size =
        Math.random() * 25 + 5;

    bubble.style.width =
        size + "px";

    bubble.style.height =
        size + "px";

    bubble.style.left =
        Math.random() * window.innerWidth + "px";

    bubble.style.animationDuration =
        Math.random() * 8 + 5 + "s";

    document.body.appendChild(bubble);

    setTimeout(() => {
        bubble.remove();
    }, 12000);

}

setInterval(createBubble, 500);

/* ==========================
   SMOOTH SCROLL
========================== */

document.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        const target =
            document.querySelector(
                this.getAttribute("href")
            );

        target.scrollIntoView({
            behavior: "smooth"
        });

    });

});

/* ==========================
   DESTINATION CARD EFFECT
========================== */

const cards =
    document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform =
            "translateY(-10px) scale(1.03)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "translateY(0px) scale(1)";

    });

});

/* ==========================
   RANDOM OCEAN GLOW
========================== */

setInterval(() => {

    document.body.style.boxShadow =
        `inset 0 0 ${
            Math.random() * 80
        }px rgba(0,212,255,0.08)`;

}, 3000);