fetch("http://localhost:5000/api/complaints/my", {
  headers: { Authorization: "Bearer " + localStorage.getItem("token") }
})
  .then(r => r.json())
  .then(data => {
    document.getElementById("complaints").innerHTML =
      data.map(c => `<div class="glass">${c.title}</div>`).join("");
  });
