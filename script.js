/* ==============================
   MOBILE MENU
================================ */

const menuButton =
    document.getElementById("menuButton");

const navigation =
    document.getElementById("navigation");


menuButton.addEventListener("click", function () {

    navigation.classList.toggle("show");

});


/* CLOSE MOBILE MENU */

const navigationLinks =
    document.querySelectorAll("#navigation a");


navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navigation.classList.remove("show");

    });

});


/* ==============================
   PRODUCT FILTER
================================ */

const categoryButtons =
    document.querySelectorAll(".category");

const products =
    document.querySelectorAll(".product");

const searchInput =
    document.getElementById("search");

const noProducts =
    document.getElementById("noProducts");


let selectedCategory = "all";


function filterProducts() {

    const searchText =
        searchInput.value
        .toLowerCase()
        .trim();

    let visibleProducts = 0;


    products.forEach(function (product) {

        const category =
            product.dataset.category;

        const name =
            product.dataset.name.toLowerCase();

        const content =
            product.textContent.toLowerCase();


        const categoryMatch =
            selectedCategory === "all" ||
            category === selectedCategory;


        const searchMatch =
            searchText === "" ||
            name.includes(searchText) ||
            content.includes(searchText);


        if (
            categoryMatch &&
            searchMatch
        ) {

            product.style.display = "";

            visibleProducts++;

        } else {

            product.style.display = "none";

        }

    });


    if (visibleProducts === 0) {

        noProducts.style.display =
            "block";

    } else {

        noProducts.style.display =
            "none";

    }

}


/* CATEGORY BUTTONS */

categoryButtons.forEach(function (button) {

    button.addEventListener(
        "click",
        function () {

            categoryButtons.forEach(
                function (btn) {

                    btn.classList.remove(
                        "active"
                    );

                }
            );


            button.classList.add("active");


            selectedCategory =
                button.dataset.category;


            filterProducts();


            document
                .getElementById("shop")
                .scrollIntoView({
                    behavior: "smooth"
                });

        }
    );

});


/* SEARCH */

searchInput.addEventListener(
    "input",
    filterProducts
);


/* ==============================
   FOOTER YEAR
================================ */

document.getElementById("year")
    .textContent =
    new Date().getFullYear();