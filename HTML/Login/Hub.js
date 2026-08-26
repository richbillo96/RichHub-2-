const showSignup = document.getElementById("showSignup");
const showLogin = document.getElementById("showLogin");

const loginSection = document.getElementById("loginSection");
const signupSection = document.getElementById("signupSection");

showSignup.addEventListener("click", function () {
    loginSection.classList.add("hidden");
    signupSection.classList.remove("hidden");
});

showLogin.addEventListener("click", function () {
    signupSection.classList.add("hidden");
    loginSection.classList.remove("hidden");
});
