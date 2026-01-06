# 🏛️ Smart Governance App

A full-stack **Smart Governance Complaint Management System** that enables citizens to register complaints, track their status, and allows government officers and admins to manage, resolve, and monitor issues efficiently.

This project demonstrates **real-world backend & frontend integration**, **role-based access control**, and **modern web development practices**.

---

## 📌 Features

### 👤 Citizen
- Secure registration & login
- Submit complaints with:
  - Title
  - Description
  - Priority (Low / Medium / High)
  - Category
  - Image upload (optional)
- View submitted complaints
- Track complaint status
- View complaint history

### 🧑‍💼 Officer
- Officer login
- View assigned complaints
- Update complaint status
- Track complaint progress

### 🛡️ Admin
- Admin dashboard
- View all users
- Update user roles (Citizen / Officer / Admin)
- Enable / Disable user accounts
- View system statistics

---

## 🧰 Tech Stack

### Frontend
- HTML5
- CSS3 (Glassmorphism UI)
- Vanilla JavaScript

### Backend
- Node.js
- Express.js
- Sequelize ORM
- MySQL
- JWT Authentication
- Multer (Image Upload)

---


---

## 🔐 Authentication & Authorization

- JWT-based authentication
- Role-based access control:
  - Citizen
  - Officer
  - Admin
- Protected routes using middleware

---

## 🗃️ Database Design

### Complaint Model
- id
- title
- description
- status
- priority
- citizen_id
- department_id
- created_at
- updated_at

### User Model
- id
- name
- email
- password
- role
- status

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/Aditya-Kumar4/Smart_Governance_App.git
cd Smart_Governance_App


## 🗂️ Project Structure

