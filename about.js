// select elements

let showBtn = document.querySelector(".input-btn");
let hideBtn = document.querySelector(".hide")
let inputPage = document.querySelector(".input-page");
let header = document.querySelector(".header");
let info = document.querySelector(".info");
let aboutPage = document.querySelector(".about-page");

// create function

showBtn.addEventListener("click", function () {
    inputPage.classList.add("show-input-page");
    if (inputPage.classList.contains("show-input-page")) {
        header.style.display = "none";
        info.style.display = "none";
        aboutPage.style.display = "none";
    }
})

// create function 
hideBtn.addEventListener("click", function () {
    inputPage.classList.remove("show-input-page");
    header.style.display = "block";
    info.style.display = "block";
    aboutPage.style.display = "block";
});

//// create a sidebar for tab and phone


const menu = document.querySelector(".menu");
const sideBar = document.querySelector("ul");


menu.addEventListener("click", function () {
    sideBar.classList.toggle("open");
    if (sideBar.classList.contains("open")) {
        menu.classList.add("close")
    } else {
        menu.classList.remove("close")
    }
});

// creat an function can hide side bar if user scroll down

window.addEventListener("scroll", function () {
    if (document.documentElement, scrollY > 0.1) {
        sideBar.classList.remove("open");
        menu.classList.remove("close");
    };
});
//  slider section for brands 
// select elements
const slides = document.querySelectorAll(".brands-item");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

// add value to counter 
let counter = 0;

// functions and conditions 
slides.forEach(function (slide, index) {
    slide.style.left = `${index * 100}%`;
});

next.addEventListener("click", function () {
    counter ++;
    getItem()
});
prev.addEventListener("click", function () {
    counter--;
    getItem()
});


function getItem() {
    slides.forEach(function (slide) {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
    if (counter > slides.length - 2) {
        return counter = 0;
    };
};
