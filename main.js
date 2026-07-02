/*==================================================
WOIX Premium Website
Main JavaScript
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*==========================
      Sticky Header
    ==========================*/

    const header = document.querySelector(".header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

    });


    /*==========================
  Mobile Menu
==========================*/

const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");
const overlay = document.querySelector(".overlay");
const closeMenu = document.querySelector(".mobile-close");

if(menuToggle && mobileMenu){

    menuToggle.addEventListener("click",()=>{

        mobileMenu.classList.add("active");
        overlay.classList.add("active");

    });

}

if(closeMenu){

    closeMenu.addEventListener("click",()=>{

        mobileMenu.classList.remove("active");
        overlay.classList.remove("active");

    });

}

if(overlay){

    overlay.addEventListener("click",()=>{

        mobileMenu.classList.remove("active");
        overlay.classList.remove("active");

    });

}

    /*==========================
      Close Mobile Menu
    ==========================*/

    document.querySelectorAll(".mobile-menu a").forEach(link=>{

    link.addEventListener("click",()=>{

        mobileMenu.classList.remove("active");
        overlay.classList.remove("active");

    });

});

    /*==========================
      Smooth Scroll
    ==========================*/

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                e.preventDefault();

                target.scrollIntoView({

                    behavior: "smooth",
                    block: "start"

                });

            }

        });

    });


    /*==========================
      Scroll Animation
    ==========================*/

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {

        threshold: 0.15

    });

    document.querySelectorAll(".reveal").forEach(section => {

        observer.observe(section);

    });

});