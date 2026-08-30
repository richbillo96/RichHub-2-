




/* =========================
   RICHHUB MAIN JAVASCRIPT
========================= */


/* GET STARTED */

function getStarted() {

    alert(
        "Welcome to RichHub! 🚀\n\n" +
        "The account system will be connected next."
    );

}


/* LOGIN */

function login() {

    alert(
        "RichHub Login\n\n" +
        "The secure login system will be added next."
    );

}


/* HOW IT WORKS */

function showHowItWorks() {

    alert(
        "How RichHub Works 🚀\n\n" +
        "1. Create your account\n" +
        "2. Create your store\n" +
        "3. Add products\n" +
        "4. Start selling\n" +
        "5. Manage everything from your dashboard"
    );

}


/* PRODUCTS */

function viewProducts() {

    document
        .getElementById("products")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* MOBILE MENU */

function toggleMenu() {

    const nav = document.querySelector(".nav-links");

    if (nav.style.display === "flex") {

        nav.style.display = "none";

    } else {

        nav.style.display = "flex";

        nav.style.flexDirection = "column";

        nav.style.position = "absolute";

        nav.style.top = "75px";

        nav.style.left = "0";

        nav.style.width = "100%";

        nav.style.padding = "25px";

        nav.style.background = "#08080d";

    }

}


/* SIMPLE SCROLL ANIMATION */

const observer =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(
                (entry) => {

                    if (entry.isIntersecting) {

                        entry.target.style.opacity = "1";

                        entry.target.style.transform =
                            "translateY(0)";

                    }

                }
            );

        },
        {
            threshold: 0.15
        }
    );


document
    .querySelectorAll(
        ".feature-card, .product-card, .pricing-card"
    )
    .forEach(
        (element) => {

            element.style.opacity = "0";

            element.style.transform =
                "translateY(25px)";

            element.style.transition =
                "opacity 0.6s ease, transform 0.6s ease";

            observer.observe(element);

        }
    );
