/*==================================================
WOIX Premium Website
Main JavaScript
==================================================*/

document.addEventListener("DOMContentLoaded", () => {
    /*==========================
Premium Loader
==========================*/

const loader = document.querySelector(".page-loader");

window.addEventListener("load",()=>{

    setTimeout(()=>{

        loader.classList.add("hide");

        document.body.classList.add("hero-loaded");

    },800);

});

    /*==========================
      Sticky Header
    ==========================*/

    const header = document.querySelector(".header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 30) {
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
Premium Scroll Animation
==========================*/

const observer = new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

observer.unobserve(entry.target);

}

});

},

{

threshold:.15,

rootMargin:"0px 0px -80px 0px"

}

);

document.querySelectorAll(

".reveal,.reveal-left,.reveal-right,.reveal-scale"

)

.forEach(el=>observer.observe(el));

    document.querySelectorAll(".reveal").forEach(section => {

        observer.observe(section);

    });

});
/*=========================================
BACK TO TOP
=========================================*/

const backTop = document.querySelector(".back-top");

if(backTop){

    window.addEventListener("scroll",()=>{

        if(window.scrollY>500){

            backTop.classList.add("show");

        }else{

            backTop.classList.remove("show");

        }

    });

    backTop.addEventListener("click",()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

}
/*=========================================
SCROLL PROGRESS
=========================================*/

const progress = document.querySelector(".scroll-progress");

if(progress){

    window.addEventListener("scroll",()=>{

        const total =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

        const current = window.scrollY;

        progress.style.width = (current / total) * 100 + "%";

    });

}