fetch("http://localhost:5000/api/admin/users", {
  headers: { Authorization: "Bearer " + localStorage.getItem("token") }
})
  .then(r => r.json())
  .then(users => {
    document.getElementById("users").innerHTML =
      users.map(u => `<div class="glass">${u.email}</div>`).join("");
  });
