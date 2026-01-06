const API = "http://localhost:5000/api/auth";

async function login() {
  const emailEl = document.getElementById('email');
  const passwordEl = document.getElementById('password');
  try {
    const res = await fetch(`${API}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: emailEl.value,
        password: passwordEl.value
      })
    });

    if (!res.ok) {
      const errorData = await res.json();
      alert(`Login failed: ${errorData.message || 'Unknown error'}`);
      return;
    }

    const data = await res.json();
    localStorage.setItem("token", data.token);

    if (data.role === "ADMIN") location.href = "admin-dashboard.html";
    else if (data.role === "OFFICER") location.href = "officer-dashboard.html";
    else location.href = "citizen-dashboard.html";
  } catch (error) {
    alert("Login failed: Unable to connect to server. Please check if the server is running.");
    console.error("Login error:", error);
  }
}

async function register() {
  const nameEl = document.getElementById('name');
  const emailEl = document.getElementById('email');
  const passwordEl = document.getElementById('password');
  const roleEl = document.getElementById('role');
  try {
    const res = await fetch(`${API}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: nameEl.value,
        email: emailEl.value,
        password: passwordEl.value,
        role: roleEl.value
      })
    });

    if (!res.ok) {
      const errorData = await res.json();
      alert(`Registration failed: ${errorData.message || 'Unknown error'}`);
      return;
    }

    alert("Registration successful! Please log in.");
    location.href = "login.html";
  } catch (error) {
    alert("Registration failed: Unable to connect to server. Please check if the server is running.");
    console.error("Registration error:", error);
  }
}
