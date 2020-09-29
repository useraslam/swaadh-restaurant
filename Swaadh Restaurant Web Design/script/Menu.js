
const menu = [
    {
        id: 1,
        title: "Kofta Kabab MeatBalls",
        catagory: "QuickByte",
        price: 15.99,
        img: "./Images/menu/appetizing-kofta-kebab-meatballs-with-sauce-and-to-P3HJWR8.jpg",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Excepturi modi at ducimus numquam similiq  Distinctioquaerat!"
    },
    {
        id: 2,
        title: "Baked Chicken Wings",
        catagory: "Starter",
        price: 22.99,
        img: "./Images/menu/baked-chicken-wings-in-the-asian-style-on-plate-PTSCVJZ.jpg",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Excepturi modi at ducimus numquam similiq  Distinctioquaerat!"
    },
    {
        id: 3,
        title: "Baked Fish Salmon",
        catagory: "Starter",
        price: 26.99,
        img: "./Images/menu/baked-fish-salmon-garnished-with-broccoli-and-toma-PJHL4PN.jpg",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Excepturi modi at ducimus numquam similiq  Distinctioquaerat!"
    },
    {
        id: 4,
        title: "Salmon Fillet and Boiled Potatoes",
        catagory: "Starter",
        price: 29.00,
        img: "./Images/menu/baked-salmon-fillet-and-boiled-potatoes-PQM56TD.jpg",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Excepturi modi at ducimus numquam similiq  Distinctioquaerat!"
    },
    {
        id: 5,
        title: "Burger with Beef Patty",
        catagory: "QuickByte",
        price: 5.50,
        img: "./Images/menu/burger-with-beef-patty-lettuce-onion-tomato-ketchu-PZ3JE45.jpg",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Excepturi modi at ducimus numquam similiq  Distinctioquaerat!"
    },
    {
        id: 6,
        title: "Cherry Poppy Seed Cake",
        catagory: "Dessert",
        price: 6.00,
        img: "./Images/menu/cherry-poppy-seed-cake-dusted-with-powdered-sugar--PEQK7T2.jpg",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Excepturi modi at ducimus numquam similiq  Distinctioquaerat!"
    },
    {
        id: 7,
        title: "Chicken Skewers with Slices of Apples",
        catagory: "Starter",
        price: 24.75,
        img: "./Images/menu/chicken-skewers-with-slices-of-apples-and-chili-P5PSCMX.jpg",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Excepturi modi at ducimus numquam similiq  Distinctioquaerat!"
    },
    {
        id: 8,
        title: "Choclate Fondant Cupcake With Strawberries",
        catagory: "Dessert",
        price: 15.99,
        img: "./Images/menu/chocolate-fondant-cupcake-with-strawberries-and-po-PRRG8VW.jpg",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Excepturi modi at ducimus numquam similiq  Distinctioquaerat!"
    },
    {
        id: 9,
        title: "home made Strudel with Chicken and Mushrooms",
        catagory: "QuickByte",
        price: 32.75,
        img: "./Images/menu/homemade-strudel-with-chicken-mushrooms-cheese-and-PQHSVSJ.jpg",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Excepturi modi at ducimus numquam similiq  Distinctioquaerat!"
    },
    {
        id: 10,
        title: "Juicy Delicious Meat Cutlet",
        catagory: "QuickByte",
        price: 24.50,
        img: "./Images/menu/juicy-delicious-meat-cutlets-in-pan-on-a-wooden-ta-PCZPL3U.jpg",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Excepturi modi at ducimus numquam similiq  Distinctioquaerat!"
    },
    {
        id: 11,
        title: "Tropical Cocktail with Passion Fruit",
        catagory: "Cocktails",
        price: 18.25,
        img: "./Images/menu/tropical-cocktail-with-passion-fruit-lime-and-mint-PQDEHZU.jpg",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Excepturi modi at ducimus numquam similiq  Distinctioquaerat!"
    },
    {
        id: 12,
        title: "Yogurt Parfait with Blackberries and Mint",
        catagory: "Cocktails",
        price: 22.00,
        img: "./Images/menu/yogurt-parfait-with-blackberry-and-mint-PZ9CR4R.jpg",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Excepturi modi at ducimus numquam similiq  Distinctioquaerat!"
    },
];

const sectionCenter = document.querySelector(".section-center");
const container = document.querySelector(".btn-container");

// load items 
window.addEventListener("DOMContentLoaded", function () {
    displayMenuItems(menu);
    displayMenuButtons();
});




function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {
        return `<article class="menu-item">
        <img src=${item.img} class="photo" alt="${item.title}">
        <div class="item-info">
            <header>
                <h4>${item.title}</h4>
                <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">${item.desc}</p>
            <div class=”star-rating”>
                <i class="fa fa-star checked"></i>
                <i class="fa fa-star checked"></i>
                <i class="fa fa-star checked" ></i>
                <i class="fa fa-star checked"></i>
                <i class="fa fa-star unchecked" ></i>
        </div>
    </article>`
    });
    displayMenu = displayMenu.join("");
    sectionCenter.innerHTML = displayMenu;
}

function displayMenuButtons() {
    displayMenuItems(menu);
    const categories = menu.reduce(function (values, item) {
        if (!values.includes(item.catagory)) {
            values.push(item.catagory);
        }
        return values
    }, ["All"]
    );
    const categoryBtns = categories.map(function (category) {
        return `<button class="filter-btn" type="button"
                    data-id=${category}>${category}</button>`
    }).join("");


    container.innerHTML = categoryBtns;
    const filterBtns = container.querySelectorAll(".filter-btn");
    // filter items
    filterBtns.forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            const category = e.currentTarget.dataset.id;
            const menuCategory = menu.filter(function (menuItem) {
                if (menuItem.catagory === category) {
                    return menuItem;
                }
            });
            if (category === 'All') {
                displayMenuItems(menu);
            }
            else {
                displayMenuItems(menuCategory);
            }
        });
    });

}




















