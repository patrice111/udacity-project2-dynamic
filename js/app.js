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
(function() {
  const scrollspys = document.querySelectorAll(".scrollspy");
  const linksScrolls = document.querySelector(".nav-list");
  const linksHeight = linksScrolls.offsetHeight;
  const allLinks = linksScrolls.querySelectorAll("a");
  function scrollspy() {
    scrollspys.forEach(current => {
      let _ = current;
      let currentElementOffset = _.offsetTop;
      let scrollPosition =
        document.documentElement.scrollTop || document.body.scrollTop;
      if (currentElementOffset <= scrollPosition + linksHeight) {
        allLinks.forEach(currentLink => {
          currentLink.classList.remove("active");
        });
        const currentID = current.getAttribute("id");
        document
          .querySelector(`a[href="#${currentID}"]`)
          .classList.add("active");
      }
    });
  }
  window.addEventListener("scroll", scrollspy);
})();


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


