# Course-Application
A fullstack application using Spring Boot (for the backend REST API) and React.js (for the frontend) involved designing and developing both the server-side and client-side components.

# 📚 Course-Application

A full-stack web application built with **React JS** and **Spring Boot** to manage courses. Users can add, view, and delete courses. JWT-based authentication is being implemented for secure access.

---

## 🚀 Features

- ✅ View all courses
- ✅ Add a new course
- ✅ Delete existing courses
- 📦 Axios for frontend-backend communication

---

## 🧱 Tech Stack

### 🔹 Frontend:
- React JS
- React Router DOM
- Axios
- Reactstrap (Bootstrap for React)
- React Toastify (notifications)

### 🔸 Backend:
- Spring Boot
- Spring web
- Spring Rest
- Maven (dependency management)

---

## 🖥️ Screenshots

> Coming soon...

---

## 🛠️ Setup Instructions

### 📦 Backend (Spring Boot)
1. Open the backend in any IDE (e.g., IntelliJ, Eclipse).
2. Make sure Java 17+ and Maven are installed.
3. Configure `application.properties` for your DB 
4. Run the application:

```bash
mvn spring-boot:run


# 🛠️ Setup Instructions

### 🧑‍💻 Prerequisites:
- Node.js (v18+)
- npm or yarn
- Backend server running at `http://localhost:8081`

### ▶️ Start the React App:

```bash
cd course-app
npm install
npm start


### 🔧 Backend (Spring Boot)
- `GET /courses`: Get all courses
- `POST /courses`: Add a new course
- `DELETE /courses/{id}`: Delete a course by ID

### 🎨 Frontend (React)
- Display list of courses
- Add a new course using a form
- Delete course using a button
- Toast notifications (success/failure)
- Responsive design using Bootstrap (via Reactstrap)

const base_url = "http://localhost:8081";
export default base_url;

