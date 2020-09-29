


// xxxxxxxxxxxxxx Set date xxxxxxxxxxxxxxxxxxxxx
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();



// xxxxxxxxxxxxxx Toggle xxxxxxxxxxxxxxxxxx
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener('click', function () {
    links.classList.toggle("show-links");
});

const navbar = document.getElementById('nav');
const scrolltoTop = document.querySelector(".scrolltop-link");
// xxxxxxxxxxxxxx Fixed Navbar xxxxxxxxxxxxxxxxxx
window.addEventListener('scroll', function () {
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
    if (scrollHeight > navHeight) {
        navbar.classList.add("fixed-nav");
    }
    else {
        navbar.classList.remove("fixed-nav");
    }

    if (scrollHeight > 500) {
        scrolltoTop.classList.add("show-link");
    }
    else {
        scrolltoTop.classList.remove("show-link");
    }

});

// xxxxxxxxxxxxxx Smooth Scrolls xxxxxxxxxxxxxxxxxx
const scrolLinks = document.querySelectorAll(".scroll-link");

scrolLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
        // prevent default html scroll
        e.preventDefault();

        //Navigate to  a specific path
        const id = e.currentTarget.getAttribute("href").slice(1);
        // console.log(id);
        const element = document.getElementById(id);
        // calculate the heights nad fixing navbar according to sections 
        const navHeight = navbar.getBoundingClientRect().height;
        const LinksHight = links.getBoundingClientRect().height;
        const fiexedNav = navbar.classList.contains("fixed-nav");
        let position = element.offsetTop - navHeight;

        window.scrollTo({
            left: 0,
            top: position,
        });
        links.classList.remove("show-links");
    });
});


// star rating
document.getElementById(element).addEventListener("click", function () {

    //statement for function

});

var cls = document.getElementById(id_of_element).className;
var list = ["one", "two", "three", "four", "five"];
list.forEach(function (element) {
    document.getElementById(element).addEventListener('click', function () {
        var cls = document.getElementById(element).className;
        if (cls.includes("unchecked")) {
            document.getElementById(element).classList.remove("unchecked");
            document.getElementById(element).classList.add("checked");
        }
        else {
            document.getElementById(element).classList.remove("checked");
            document.getElementById(element).classList.add("unchecked");
        }
    });
});



































