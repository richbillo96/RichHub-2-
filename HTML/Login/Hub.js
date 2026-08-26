
const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");

const showSignupButton = document.getElementById("showSignup");
const showLoginButton = document.getElementById("showLogin");

const message = document.getElementById("message");


/* SHOW SIGN UP */

showSignupButton.addEventListener("click", function () {

    loginForm.classList.add("hidden");

    signupForm.classList.remove("hidden");

    message.textContent = "";

});


/* SHOW LOGIN */

showLoginButton.addEventListener("click", function () {

    signupForm.classList.add("hidden");

    loginForm.classList.remove("hidden");

    message.textContent = "";

});


/* LOGIN */

document.getElementById("login").addEventListener(
    "submit",
    function (event) {

        event.preventDefault();

        const email =
            document.getElementById("loginEmail").value;

        const password =
            document.getElementById("loginPassword").value;


        if (!email || !password) {

            message.textContent =
                "Please enter your email and password.";

            return;
        }


        message.textContent =
            "Login system will be connected to Supabase next.";

    }
);


/* SIGN UP */

document.getElementById("signup").addEventListener(
    "submit",
    function (event) {

        event.preventDefault();

        const name =
            document.getElementById("signupName").value;

        const email =
            document.getElementById("signupEmail").value;

        const password =
            document.getElementById("signupPassword").value;


        if (!name || !email || !password) {

            message.textContent =
                "Please fill in all fields.";

            return;
        }


        if (password.length < 6) {

            message.textContent =
                "Password must be at least 6 characters.";

            return;
        }


        message.textContent =
            "Account system will be connected to Supabase next.";

    }
);
