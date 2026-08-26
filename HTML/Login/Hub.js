const SUPABASE_URL = "https://tdrelswytmscpnkxmcgw.supabase.co";
const SUPABASE_KEY = "YOUR_PUBLISHABLE_KEY";

     const loginSection =
    document.getElementById("loginSection");

const signupSection =
    document.getElementById("signupSection");

const showSignup =
    document.getElementById("showSignup");

const showLogin =
    document.getElementById("showLogin");

const loginForm =
    document.getElementById("loginForm");

const signupForm =
    document.getElementById("signupForm");

const message =
    document.getElementById("message");


/* SHOW SIGN UP */

showSignup.addEventListener("click", function () {

    loginSection.classList.add("hidden");

    signupSection.classList.remove("hidden");

    message.textContent = "";

});


/* SHOW LOGIN */

showLogin.addEventListener("click", function () {

    signupSection.classList.add("hidden");

    loginSection.classList.remove("hidden");

    message.textContent = "";

});


/* LOGIN */

loginForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const email =
        document.getElementById("loginEmail").value.trim();

    const password =
        document.getElementById("loginPassword").value;


    if (!email || !password) {

        message.textContent =
            "Please enter your email and password.";

        return;
    }


    message.textContent =
        "Connecting to RichHub...";

});


/* SIGN UP */

signupForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name =
        document.getElementById("signupName").value.trim();

    const email =
        document.getElementById("signupEmail").value.trim();

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
        "Creating your RichHub account...";

});
