const API = "http://localhost:5000/api/complaints";

async function submitComplaint() {
  const formData = new FormData();

  formData.append("title", document.getElementById("title").value);
  formData.append("description", document.getElementById("description").value);
  formData.append("priority", document.getElementById("priority").value);
  formData.append("location", document.getElementById("address").value);
  formData.append(
    "departmentId",
    getDepartmentId(document.getElementById("category").value)
  );

  const image = document.getElementById("image").files[0];
  if (image) formData.append("image", image);

  try {
    const res = await fetch(API, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      },
      body: formData
    });

    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.message);
    }

    alert("Complaint submitted successfully!");
    document.getElementById("complaintForm").reset();
    loadMyComplaints();

  } catch (err) {
    alert(err.message);
  }
}

async function loadMyComplaints() {
  try {
    const res = await fetch(API, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    });

    if (!res.ok) {
      throw new Error("Failed to load complaints");
    }

    const complaints = await res.json();

    const container = document.getElementById("myComplaints");
    container.innerHTML = "";

    if (!Array.isArray(complaints)) {
      return;
    }

    complaints.forEach(c => {
      const div = document.createElement("div");
      div.className = "complaint-card";
      div.innerHTML = `
        <h3>${c.title}</h3>
        <p>${c.description}</p>
        <p>Status: <b>${c.status}</b></p>
        <p>Department: ${c.Department?.department_name || "-"}</p>
      `;
      container.appendChild(div);
    });

  } catch (err) {
    console.error(err.message);
  }
}

function getDepartmentId(name) {
  const map = {
    "Road Damage": 1,
    "Water Supply": 2,
    "Electricity": 3,
    "Garbage": 4,
    "Public Safety": 5,
    "Other": 6
  };
  return map[name] || 6;
}

document.addEventListener("DOMContentLoaded", loadMyComplaints);
