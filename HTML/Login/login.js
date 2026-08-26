alert("hub.js is working!");

// ===============================
// RICHHUB SUPABASE CONFIG
// ===============================

const SUPABASE_URL =
    "https://tdrelswytmscpnkxmcgw.supabase.co";

const SUPABASE_KEY =
    "YOUR_PUBLISHABLE_KEY";

const supabaseClient =
    window.supabase.createClient(
        SUPABASE_URL,
        SUPABASE_KEY
    );


// ===============================
// PAGE ELEMENTS
// ===============================

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


// ===============================
// SWITCH TO SIGN UP
// ===============================

showSignup.addEventListener("click", function () {

    loginSection.classList.add("hidden");

    signupSection.classList.remove("hidden");

    message.textContent = "";

});


// ===============================
// SWITCH TO LOGIN
// ===============================

showLogin.addEventListener("click", function () {

    signupSection.classList.add("hidden");

    loginSection.classList.remove("hidden");

    message.textContent = "";

});


// ===============================
// CREATE ACCOUNT
// ===============================

signupForm.addEventListener("submit", async function (event) {

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
        "Creating your account...";


    try {

        const { data, error } =
            await supabaseClient.auth.signUp({
                email: email,
                password: password,
                options: {
                    data: {
                        full_name: name
                    }
                }
            });


        if (error) {
            throw error;
        }


        message.textContent =
            "Account created successfully! Check your email if confirmation is required.";

        signupForm.reset();


    } catch (error) {

        console.error(error);

        message.textContent =
            error.message;

    }

});


// ===============================
// LOGIN
// ===============================

loginForm.addEventListener("submit", async function (event) {

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
        "Logging in...";


    try {

        const { data, error } =
            await supabaseClient.auth.signInWithPassword({
                email: email,
                password: password
            });


        if (error) {
            throw error;
        }


        message.textContent =
            "Login successful!";


        // Go to Dashboard
        setTimeout(function () {

            window.location.href =
                "../Dashboard/dashboard.html";

        }, 500);


    } catch (error) {

        console.error(error);

        message.textContent =
            error.message;

    }

});
