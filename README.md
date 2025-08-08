# 🚀 ServView - Service Listing Platform

Welcome to **ServView**, a full-featured service listing platform built with React, Firebase, Express, and MongoDB. This project offers full CRUD functionality, user authentication, filtering, and a fully dynamic UI with search and review features.

🔗 **Live Site**: [assignment-11-akib-dev1.netlify.app](https://assignment-11-akib-dev1.netlify.app)

---

## 📸 Screenshot
![ServView Screenshot](https://i.ibb.co.com/WJ3g8SN/image.png)

---

## 🧩 Features Overview

### 🔐 Authentication
- Email & Password-based Login/Register
- Google Login
- Toast/SweetAlert feedback
- JWT Authentication with secured API access

### 🧭 Navigation
- **Navbar** dynamically updates based on login status
- **Protected Routes**: Add Service, My Services, and My Reviews
- **Footer**: Consistent branding and helpful links

---

## 🏠 Home Page Sections
- **Banner**: Image carousel with meaningful captions
- **Featured Services**: Shows 6 latest services (MongoDB `limit()` used)
- **Meet Our Partners**: Static partner info section
- **Extra Sections**: Two custom-designed meaningful sections
- **Animations**: Smooth motion using Framer Motion

---

## 📄 Pages & Routes

### 🔍 All Services Page
- Lists all available services
- **Search** functionality by title, category, or company name
- **Filter** by service category via dropdown

### 🧾 Service Details Page
- Detailed info with user reviews
- Add review (text + rating) if logged in

### ➕ Add Service Page
- Authenticated users can add a service
- Automatically stores date and user email

### 🛠️ My Services Page
- Shows services created by the logged-in user
- Update & delete functionality using modals

### 💬 My Reviews Page
- Shows user's reviews
- Edit and delete options
- Service title is read-only during updates

---

## 🧠 Additional Features
- 🔄 Dynamic Page Titles (based on routes)
- 🧭 404 Not Found Page
- ⏳ Loading Spinner on data fetch
- 🔔 Toast/SweetAlert for all actions
- 📈 CountUp animations for Users, Reviews, and Services

---

## 📦 Tech Stack

| Technology     | Description                          |
|----------------|--------------------------------------|
| React          | Frontend UI framework                |
| React Router   | Route-based navigation               |
| Firebase       | Authentication                       |
| Express.js     | Backend server/API                   |
| MongoDB        | NoSQL database                       |
| Tailwind CSS   | Modern utility-first CSS             |
| Axios          | API requests                         |
| React CountUp  | Counter animation                    |
| Lottie React   | Animations                           |
| React Toastify & SweetAlert | Notifications           |
| JWT            | Token-based route protection         |

---

## 🛡️ Security
- JWT stored in cookies
- Secured `POST`, `PATCH`, and `DELETE` routes
- Unauthorized users get proper access error

---
