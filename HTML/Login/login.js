const SUPABASE_URL = "https://tdrelswytmscpnkxmcgw.supabase.co";

const SUPABASE_KEY = "sb_publishable_t09l4fnt9ZGfnsc5bzxSdA_s64P1y_q";


    const showSignup =
    document.getElementById("showSignup");

const showLogin =
    document.getElementById("showLogin");

const loginSection =
    document.getElementById("loginSection");

const signupSection =
    document.getElementById("signupSection");

const loginForm =
    document.getElementById("loginForm");

const signupForm =
    document.getElementById("signupForm");

const message =
    document.getElementById("message");


// ==========================
// SHOW SIGN UP
// ==========================

showSignup.addEventListener("click", function () {

    loginSection.classList.add("hidden");

    signupSection.classList.remove("hidden");

    message.textContent = "";

});


// ==========================
// SHOW LOGIN
// ==========================

showLogin.addEventListener("click", function () {

    signupSection.classList.add("hidden");

    loginSection.classList.remove("hidden");

    message.textContent = "";

});


// ==========================
// TEST LOGIN
// ==========================

loginForm.addEventListener("submit", function (event) {

    event.preventDefault();

    message.textContent =
        "Login button is working.";

});


// ==========================
// TEST SIGN UP
// ==========================

signupForm.addEventListener("submit", function (event) {

    event.preventDefault();

    message.textContent =
        "Create Account button is working.";

});
