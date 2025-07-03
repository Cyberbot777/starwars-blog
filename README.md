# Star Wars Blog React Project

A sleek, dark-themed Star Wars Blog built with React and the SWAPI (Star Wars API).

This project was built to demonstrate mastery of React, API integration, dynamic routing, and reusable components — following modern best practices.

---

## 🔗 Live Demo (Frontend)

[View the deployed project](https://starwars-blog-lyart.vercel.app/)

---

## Features

- Fetches data from the **Star Wars API (SWAPI)**:
  - Characters (People)
  - Planets
  - Vehicles
- Displays each category on its own **dedicated page** with grid layouts
- Responsive **card components** with:
  - Static placeholder images
  - "Learn more" links for full details  
  - Heart button (♥) to favorite or unfavorite items
- Dynamic **Details Page**:
  - Fetches full info for Characters, Planets, or Vehicles
  - Displays unique data per category  
- Favorites Page:
  - Shows all favorited items across categories
  - Allows removing favorites by clicking the Heart button
- Clean, responsive dark theme with hover effects
- Fully functional **React Router** navigation

---

## Tech Stack

- React (Vite)
- TypeScript
- Tailwind CSS
- SWAPI (Star Wars API)
- React Router

---

## Getting Started

Clone the repo and run the project locally.

### Folder Structure

```
project-root/
├── src/
│   ├── components/       ← Reusable components (Navbar, CharacterCard, PageWrapper)
│   ├── context/          ← FavoritesContext (global state)
│   ├── pages/            ← Pages for People, Planets, Vehicles, Favorites, Details, Home
│   ├── App.tsx           ← Main app routing
│   └── main.tsx          ← Entry point
├── public/               ← Static assets (images, logo)
├── package.json          ← Project config
└── tailwind.config.js    ← Tailwind setup
```

### Install Dependencies

```bash
npm install
```

### Run the Project

```bash
npm run dev
```

- Frontend: http://localhost:5173

---

## Assignment Objectives Covered

- Fetch external API data and display it in a React app
- Use **React Router** for navigation and detail pages
- Build reusable components with dynamic props
- Use React Context for global Favorites state
- Use `useEffect` and `useState` for API data fetching
- Structure project for clarity and scalability
- Deliver a clean, user-friendly interface

---

## Learning Outcomes

- Use a REST API in a modern React project
- Build scalable page structures with reusable components
- Write clean, flexible components with fallback logic
- Handle multiple dynamic routes with React Router
- Manage global state cleanly with React Context
- Develop production-quality UI with Tailwind CSS

---

## Author

Built by [@Cyberbot777](https://github.com/Cyberbot777)
