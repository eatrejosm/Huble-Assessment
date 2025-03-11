# Customer Review Module

Welcome to the **Customer Review Module**! This project is a responsive, mobile-first interface for managing customer reviews. It features a dynamic review display, input validation for submitting new reviews, and scalable state management using React, Vite, TailwindCSS, and ShadCN.

---

## 🚀 Features

- **Dynamic Reviews**: Reviews are displayed dynamically, fetched from an external JSON file (or RESTful API).
- **Form Validation**: Ensures accurate and user-friendly inputs for new reviews.
- **Responsive Design**: Built for mobile-first users and scales seamlessly across devices.
- **Lightweight State Management**: React hooks power the dynamic data flow with performance in mind.
- **Accessibility Compliance**: Designed to meet WCAG AA standards for a polished, inclusive experience.

Optional:

- **RESTful API Integration**: JSON file is replaceable with a scalable API solution.

---

## 🛠️ Tech Stack

- **Frontend**:
  - React with Vite for blazing-fast builds and development.
  - TailwindCSS for clean, customizable styling.
  - ShadCN/UI for elegant, prebuilt components.

- **Backend**:
  - Node.js with Express.js for API functionality.
  - JSON file as a lightweight mock database (extendable to a RESTful API).

---

## 📖 Installation Guide

Follow these steps to get the project up and running:

### Prerequisites

- Node.js (v20+ recommended)
- npm
- A modern web browser

### Frontend Setup

#### Navigate to the frontend directory

```bash
cd frontend
```

#### Install dependencies

```bash
npm install
```

#### Run the development server

```bash
npm run dev
```

#### Open your browser and navigate to

```bash
http://localhost:5173
```

### Backend Setup

#### Navigate to the server directory

```bash
cd backend
```

#### Install dependences

```bash
npm install
```

#### Start the backend server

```bash
node server.js
```

#### The backend will run on

```bash
http://localhost:5000
```


## 🚦 Usage

### 1. View dynamic reviews fetched from the JSON file or RESTful API

### 2. Submit new reviews using the form

### 3. Enjoy the responsive and accessible user interface

## 📋 Evaluation Criteria

### 1. Code Quality: Modular, readable, and well-commented code structure

### 2. Responsiveness: Optimized for mobile-first design and scales on all devices

### 3. Accessibility: Meets WCAG AA compliance

- **Semantic HTML**: Proper use of `<header>`, `<main>`, `<button>`, and `<form>` for better screen reader support.  
- **Keyboard Navigation**: All interactive elements are accessible via keyboard navigation.  
- **High Contrast Design**: Text and UI elements meet WCAG's contrast ratio requirements (4.5:1 for text, 3:1 for large text).  
- **ARIA Support**: ARIA attributes (`aria-label`, `aria-live`, `aria-describedby`) enhance assistive technology compatibility.  
- **Focus Management**: Ensures correct focus handling for smooth navigation, even in dynamic content updates.  
- **Error Messaging**: Clear, accessible error validation using `aria-describedby` for form inputs.  

### 4. Modern Practices: Adopts hooks, lightweight state management, and best practices in React

## 🤝 Contributing

#### Want to contribute? Feel free to submit pull requests or raise issues! Feedback is always welcome

## ✨ Future Enhancements

#### Pagination: Implement lazy loading or infinite scroll for better performance

#### Authentication: Add login/logout functionality for secure access to review management

#### Testing: Introduce unit and integration tests (e.g., Jest, React Testing Library)

## 💡 Inspiration & Credits

#### Special thanks to the React, Vite, TailwindCSS, and ShadCN communities for their outstanding resources

You can copy and paste this content into your `README.md` file. Let me know if you'd like further adjustments or additional sections!
