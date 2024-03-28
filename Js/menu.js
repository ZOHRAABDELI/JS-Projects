const menu = [
    {
        id: 1,
        title: "Buttermilk Pancakes",
        category: "breakfast",
        price: 250,
        img: "Img/menu-item.jpeg",
        desc: ` Light and fluffy with a hint of tang, our buttermilk pancakes are a delightful way to begin your breakfast adventure. `,
    },
    {
        id: 2,
        title: "Hrira",
        category: "lunch",
        price: 400,
        img: "Img/7rira.jpg",
        desc: ` Algerian spiced tomato & chickpea soup , perfect as a starter or light meal. `,
    },
    {
        id: 3,
        title: "Baklawa",
        category: "breakfast",
        price: 300,
        img: "Img/ba9lawa.jpg",
        desc: `Flaky pastry layered with nuts, sweetened with syrup, and often flavored with spices. A classic dessert.`,
    },
    {
        id: 4,
        title: "Bourak",
        category: "Dinner",
        price: 100,
        img: "Img/Bourak.jpg",
        desc: `A crispy Algerian pastry filled with savory goodness. Choose from classic fillings like
         spiced meat and onions, or explore vegetarian options with spinach and cheese. Perfect as an appetizer or a light meal. `,
    },
    {
        id: 5,
        title: "Mekrot",
        category: "breakfast",
        price: 150,
        img: "Img/mekrout.jpg",
        desc: `Diamond-shaped cookies with a semolina dough and a sweet filling. Traditionally filled with dates and nuts, 
        these pastries are fried or baked and then soaked in a fragrant syrup. `,
    },
    {
        id: 6,
        title: "9alb louz",
        category: "breakfast",
        price: 60,
        img: "Img/9alb louz.jpg",
        desc: `A heavenly Algerian dessert made with semolina, almonds, and orange blossom water. This rich and satisfying treat is soaked
         in a fragrant syrup, making it perfect for those who love a bit of sweetness.`,
    },
    {
        id: 7,
        title: "Gratin",
        category: "lunch",
        price: 350,
        img: "Img/gratin.jpg",
        desc: `A baked delight featuring layers of creamy goodness. Choose from classic options like potato gratin or explore seasonal vegetable gratins. 
        Topped with a golden brown, cheesy crust, this dish is pure comfort food. `,
    },
    {
        id: 8,
        title: "Rachta",
        category: "lunch",
        price: 800,
        img: "Img/rachta.jpg",
        desc: `Algerian comfort food at its finest. Thin, hand-cut noodles are simmered in a flavorful broth, often accompanied by chicken, vegetables like turnips or courgettes,
         and chickpeas (optional). Perfect for a satisfying and heartwarming meal. `,
    },
    {
        id: 9,
        title: "Salad",
        category: "Dinner",
        price: 150,
        img: "Img/download.jpg",
        desc: ` colorful and refreshing salad combining chopped tomatoes, peppers, cucumbers, onions, and olives. Sometimes it includes hard-boiled eggs, anchovies, and fresh herbs for an extra flavor punch. Dressed
         with a simple vinaigrette, it's a perfect light starter or side dish.`,
    },
    ,
    {
        id: 10,
        title: "Hrira",
        category: "Dinner",
        price:400,
        img: "Img/7rira.jpg",
        desc: `Algerian spiced tomato & chickpea soup , perfect as a starter or light meal. `,
    },
];

const sectionCenter = document.querySelector('.section-center')
const container = document.querySelector('.btn-container')
window.addEventListener('DOMContentLoaded', function () {
    displayMenuItems(menu);
    displayMenuBtns();


});




function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {
        return `<article class="menu-item">
        <img src="${item.img}" class ="photo" alt="${item.title}">
        <div class="item-info">
            <header>
                <h4>${item.title}</h4>
                <h4 class="price">${item.price}DA</h4>
            </header>
            <p class="item-text">
            ${item.desc}
            </p>

        </div>
    </article>
`;
    });
    displayMenu = displayMenu.join('');
    sectionCenter.innerHTML = displayMenu;
}
//end of function

function displayMenuBtns() {

    const categories = menu.reduce(function (values, item) {
        if (!values.includes(item.category)) {
            values.push(item.category);
        }
        return values;
    }, ['all']);
    const categoryBtns = categories.map(function (category) {
        return ` <button class="filter-btn" type="button" data-id=${category}>${category}</button>`
    }).join("");
    container.innerHTML = categoryBtns;
    const filterBtns = document.querySelectorAll('.filter-btn')
    filterBtns.forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            const category = e.currentTarget.dataset.id;
            const menuCategory = menu.filter(function (menuItem) {

                if (menuItem.category === category) {
                    return menuItem;
                }
            });
            if (category === 'all') {
                displayMenuItems(menu);
            }
            else {
                displayMenuItems(menuCategory)
            }
        });
    });
}