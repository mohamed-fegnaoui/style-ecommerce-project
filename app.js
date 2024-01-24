// select elements

let showBtn = document.querySelector(".input-btn");
let hideBtn = document.querySelector(".hide")
let inputPage = document.querySelector(".input-page");
let header = document.querySelector(".header");
let info = document.querySelector(".info");
let shopPage = document.querySelector(".shop-page");

// create function

showBtn.addEventListener("click", function () {
    inputPage.classList.add("show-input-page");
    if (inputPage.classList.contains("show-input-page")) {
        header.style.display = "none";
        info.style.display = "none";
        shopPage.style.display = "none";
    }
})

// create function 
hideBtn.addEventListener("click", function () {
    inputPage.classList.remove("show-input-page");
    header.style.display = "block";
    info.style.display = "block";
    shopPage.style.display = "block";
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
//  creat an  object contain all choises

const choises = [
    {
        id: 1,
        img: "imgs/shop_01.jpg",
        title: "Oupidatat non",
        size: "M/L/X/XL",
        icons: `<span class="icons"><i class="fa-solid fa-star active"></i><i class="fa-solid fa-star active"></i><i class="fa-solid fa-star active"></i><i
        class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></span>`,
        price: 250.00,
        category: "Women",
    },
    {
        id: 2,
        img: "imgs/shop_02.jpg",
        title: "Oupidatat non",
        size: "M/L/X/XL",
        icons: `<span class="icons"><i class="fa-solid fa-star active"></i><i class="fa-solid fa-star active"></i><i class="fa-solid fa-star active"></i><i
        class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></span>`,
        price: 250.00,
        category: "Women",
    },
    {
        id: 3,
        img: "imgs/shop_03.jpg",
        title: "Oupidatat non",
        size: "M/L/X/XL",
        icons: `<span class="icons"><i class="fa-solid fa-star active"></i><i class="fa-solid fa-star active"></i><i class="fa-solid fa-star active"></i><i
        class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></span>`,
        price: 250.00,
        category: "Women",
    },
    {
        id: 4,
        img: "imgs/shop_04.jpg",
        title: "Oupidatat non",
        size: "M/L/X/XL",
        icons: `<span class="icons"><i class="fa-solid fa-star active"></i><i class="fa-solid fa-star active"></i><i class="fa-solid fa-star active"></i><i
        class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></span>`,
        price: 250.00,
        category: "Men",
    },
    {
        id: 5,
        img: "imgs/shop_05.jpg",
        title: "Oupidatat non",
        size: "M/L/X/XL",
        icons: `<span class="icons"><i class="fa-solid fa-star active"></i><i class="fa-solid fa-star active"></i><i class="fa-solid fa-star active"></i><i
        class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></span>`,
        price: 250.00,
        category: "Men",
    },
    {
        id: 6,
        img: "imgs/shop_06.jpg",
        title: "Oupidatat non",
        size: "M/L/X/XL",
        icons: `<span class="icons"><i class="fa-solid fa-star active"></i><i class="fa-solid fa-star active"></i><i class="fa-solid fa-star active"></i><i
        class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></span>`,
        price: 250.00,
        category: "Women",
    },
    {
        id: 7,
        img: "imgs/shop_07.jpg",
        title: "Oupidatat non",
        size: "M/L/X/XL",
        icons: `<span class="icons"><i class="fa-solid fa-star active"></i><i class="fa-solid fa-star active"></i><i class="fa-solid fa-star active"></i><i
        class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></span>`,
        price: 250.00,
        category: "Men",
    },
    {
        id: 8,
        img: "imgs/shop_08.jpg",
        title: "Oupidatat non",
        size: "M/L/X/XL",
        icons: `<span class="icons"><i class="fa-solid fa-star active"></i><i class="fa-solid fa-star active"></i><i class="fa-solid fa-star active"></i><i
        class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></span>`,
        price: 250.00,
        category: "Women",
    },
    {
        id: 9,
        img: "imgs/shop_09.jpg",
        title: "Oupidatat non",
        size: "M/L/X/XL",
        icons: `<span class="icons"><i class="fa-solid fa-star active"></i><i class="fa-solid fa-star active"></i><i class="fa-solid fa-star active"></i><i
        class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></span>`,
        price: 250.00,
        category: "Women",
    },
    {
        id: 10,
        img: "imgs/shop_10.jpg",
        title: "Oupidatat non",
        size: "M/L/X/XL",
        icons: `<span class="icons"><i class="fa-solid fa-star active"></i><i class="fa-solid fa-star active"></i><i class="fa-solid fa-star active"></i><i
        class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></span>`,
        price: 250.00,
        category: "Women",
    },
    {
        id: 11,
        img: "imgs/shop_11.jpg",
        title: "Oupidatat non",
        size: "M/L/X/XL",
        icons: `<i class="fa-solid fa-star active"></i><i class="fa-solid fa-star active"></i><i class="fa-solid fa-star active"></i><i
        class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>`,
        price: 250.00,
        category: "Women",
    },
];

// add event to window

window.addEventListener("DOMContentLoaded", function () {
    getDataFrom(choises);
});

// select elements 
const sectionItems = document.querySelector(".section-items");
const btns = document.querySelectorAll(".btn-section");

// creat function

btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        let category = e.currentTarget.dataset.id;
        let menuCategory = choises.filter(function (menuItem) {
            if (menuItem.category === category) {
                return menuItem;
            };
        });
        if (category === "All") {
            getDataFrom(choises);
        } else {
            getDataFrom(menuCategory);
        }
    })
})

function getDataFrom(menuChoises) {
    let displayMenu = menuChoises.map(function (item) {
        return `  <div class="item">
                <img src="${item.img}" alt="">
                <div class="content">
                    <h2 class="title">${item.title}</h2>
                    <h2 class="size">${item.price}</h2>
                    <span class="icons">${item.icons}</span>
                    <p class="price txt-c">${item.price}</p>
                </div>
            </div>`
    });
    displayMenu = displayMenu.join("");
    sectionItems.innerHTML = displayMenu;
};

// select elements

const btnNumbers = document.querySelectorAll(".btn-number");

btnNumbers.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const category = e.currentTarget.dataset.id;
        const menuCategory = choises.filter(function (menuItem) {
            if (menuItem.category === category) {
                return menuItem;
            };
        });
        if (category === "All") {
            getDataFrom(choises);
        } else {
            getDataFrom(menuCategory);
        };
    });
}); 

// functions and condition  for slider section 
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



























