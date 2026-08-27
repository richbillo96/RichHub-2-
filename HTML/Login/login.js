const SUPABASE_URL = "https://unxkcbeksmrcslyitilu.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_WWq_kvVFxV_KUkLyRf_muQ_Dl-hgFIk";

const supabaseClient = supabase.createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);

const loginForm = document.getElementById("loginForm");
const message = document.getElementById("message");

loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  message.textContent = "Logging in...";

  const { data, error } = await supabaseClient.auth.signInWithPassword({
    email,
    password
  });

  if (error) {
    message.textContent = error.message;
    return;
  }

  if (!data.user) {
    message.textContent = "Login failed. Please try again.";
    return;
  }

  window.location.href = "../dashboard/dashboard.html";
});
