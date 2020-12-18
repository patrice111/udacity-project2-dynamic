//Create Menu Links
const navMenu = document.querySelectorAll("header");
const navList = document.getElementById("nav-list");
const items = ["Home", "Products", "Featured", "Best Sellers", "Contact"];

items.forEach((item, i) => {
  const link = document.createElement("a");
  link.innerText = item;
  link.classList.add("nav-link");
  link.setAttribute("id", `nav-${i + 1}`);
  link.href = `#section${i + 1}`;
  navList.appendChild(link);
});

//Create Responsive Menu
const menu = document.querySelector(".menu");
const navOpen = document.querySelector(".hamburger");
const navClose = document.querySelector(".close");
const navBar = document.querySelector(".nav");

const navLeft = menu.getBoundingClientRect().left;

navOpen.addEventListener("click", () => {
    if (navLeft < 0) {
        menu.classList.add("show");
        document.body.classList.add("show");
        navBar.classList.add("show");
    }
});

navClose.addEventListener("click", () => {
    if (navLeft < 0) {
        menu.classList.remove("show");
        document.body.classList.remove("show");
        navBar.classList.remove("show");
    }
});

//Nav

const navHeight = navBar.getBoundingClientRect().height;
window.addEventListener("scroll", () => {
    const scrollHeight = window.pageYOffset;
    if (scrollHeight > navHeight) {
        navBar.classList.add("fix-nav");
    } else {
        navBar.classList.remove("fix-nav");
    }
});

//Scroll

const scrollL = [...document.querySelectorAll("nav-link")];
scrollL.map((link) => {
    if (!link) return;
    scrollL.addEventListener("click", (e) => {
        e.preventDefault();

        const id = e.scrollLink.getAttribute("href").slice(1);

        const element = document.getElementById(id);
        const fixNav = navBar.classList.contains("fix-nav");
        let position = element.offsetTop - navHeight;

        window.scrollTo({
            top: position,
            left: 0,
        });

        navBar.classList.remove("show");
        menu.classList.remove("show");
        document.body.classList.remove("show");
    });
});

//Change navigation style on scroll
let sectionList = document.querySelectorAll('section');
const scrolling = () => {
    sectionList.forEach(section => {
        const elementPos = Math.floor(section.getBoundingClientRect().top);
        console.log('elementPos: ', elementPos);
        if (elementPos < 300 && elementPos > -300) {
            section.classList.add('nav-link');
        } else {
            section.classList.remove('nav-link');
        }
    });
};
window.addEventListener('scroll', scrolling);


//Top Button
const mybutton = document.getElementById("myBtn");

// Once user scrolls down 10px from top show button
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

//Once clicked button scrolls to top
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


