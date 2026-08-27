import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";
const SUPABASE_URL = "https://unxkcbeksmrcslyitilu.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_WWq_kvVFxV_KUkLyRf_muQ_Dl-hgFIk";

const supabase = createClient(
SUPABASE_URL,
SUPABASE_ANON_KEY
);

// ============================
// SIGN UP
// ============================

const signupForm = document.getElementById("signupForm");

if (signupForm) {

signupForm.addEventListener("submit", async (event) => {

event.preventDefault();

const name = document.getElementById("signupName").value;
const email = document.getElementById("signupEmail").value;
const password = document.getElementById("signupPassword").value;

const message = document.getElementById("signupMessage");

message.textContent = "Creating account...";

const { error } = await supabase.auth.signUp({

  email: email,

  password: password,

  options: {
    data: {
      full_name: name
    }
  }

});

if (error) {

  message.textContent = error.message;

} else {

  message.textContent =
    "Account created successfully. You can now log in.";

  signupForm.reset();

}

});

}

// ============================
// LOGIN
// ============================

const loginForm = document.getElementById("loginForm");

if (loginForm) {

loginForm.addEventListener("submit", async (event) => {

event.preventDefault();

const email = document.getElementById("loginEmail").value;
const password = document.getElementById("loginPassword").value;

const message = document.getElementById("loginMessage");

message.textContent = "Logging in...";

const { error } = await supabase.auth.signInWithPassword({

  email: email,

  password: password

});

if (error) {

  message.textContent = error.message;

} else {

  window.location.href = "store.html";

}

});

}

// ============================
// LOGOUT
// ============================

const logoutButton = document.getElementById("logoutButton");

if (logoutButton) {

logoutButton.addEventListener("click", async () => {

await supabase.auth.signOut();

window.location.href = "index.html";

});

  }