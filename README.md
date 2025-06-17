
# 📚 Course-Application

A full-stack web application built using **Spring Boot** (backend REST API) and **React.js** (frontend) to manage courses. Users can **add**, **view**, and **delete** courses. 

---

## 🚀 Features

- ✅ View all courses
- ✅ Add a new course
- ✅ Delete existing courses
- ✅ Toast notifications (success/failure)
- 📦 Axios for frontend-backend communication

---

## 🧱 Tech Stack

### 🔹 Frontend
- React.js
- React Router DOM
- Axios
- Reactstrap (Bootstrap for React)
- React Toastify

### 🔸 Backend
- Spring Boot
- Spring Web
- Spring REST
- MySQL
- Maven (for dependency management)

---

## 📸 Screenshots

> Coming soon...

---

## 🛠️ Setup Instructions

### 📌 Prerequisites

- Java 17 or later
- Maven
- Node.js (v18+)
- npm or yarn
- MySQL or any supported relational database (if using DB)
- IDE (e.g., IntelliJ, Eclipse for backend | VS Code for frontend)

---

## 🔧 Backend Setup (Spring Boot)

1. Clone the project.
2. Navigate to the backend folder.
3. Open it in your preferred IDE (Eclipse/IntelliJ).
4. Ensure Java 17+ and Maven are configured.
5. Configure your `application.properties` with the correct database and port if needed.
6. Run the application:

```bash
mvn spring-boot:run
```

### ➤ API Endpoints

| Method | Endpoint            | Description              |
|--------|---------------------|--------------------------|
| GET    | `/courses`          | Fetch all courses        |
| POST   | `/courses`          | Add a new course         |
| DELETE | `/courses/{id}`     | Delete a course by ID    |

---

## 🎨 Frontend Setup (React.js)

1. Navigate to the frontend project directory (e.g., `cd course-app`).
2. Install dependencies:

```bash
npm install
```

3. Start the frontend server:

```bash
npm start
```

> Make sure the backend is running on `http://localhost:8081`

---

### 📦 Axios Configuration

In your `base_url.js` file:

```js
const base_url = "http://localhost:8081";
export default base_url;
```

---

## ✅ Functionality Overview

- Display a list of all courses
- Add a new course through a form
- Delete a course with a button click
- Display toast messages for success or failure
- Responsive UI using Reactstrap (Bootstrap)

---
