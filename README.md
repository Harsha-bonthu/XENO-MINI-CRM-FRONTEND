# MINI-CRM Client

This is the frontend application for the MINI-CRM platform, built with React and Vite. It provides a modern, responsive UI for managing campaigns, audiences, and interacting with AI-powered features.

---

## 📁 Project Structure


client/
├── public/                # Static assets (e.g., vite.svg)
├── src/
│   ├── assets/            # Images, icons, etc.
│   ├── components/        # Reusable React components (e.g., Rule.jsx)
│   ├── controllers/       # Client-side logic/controllers (e.g., audienceController.js)
│   ├── pages/             # Page-level components (e.g., AudienceBuilderPage.jsx)
│   ├── App.jsx            # Main app component
│   ├── main.jsx           # Entry point
│   └── index.css          # Global styles
├── index.html             # HTML template
├── package.json           # Frontend dependencies
├── vite.config.js         # Vite config
└── eslint.config.js       # Linting config


---

## 🏗 Architecture Diagram


┌──────────────────────────────┐
│        User Browser         │
└─────────────┬────────────────┘
              │
              ▼
      ┌──────────────────────┐
      │      Frontend        │
      │   (React + Vite)     │
      └─────────┬────────────┘
                │ REST API Calls (fetch/axios)
                ▼
      ┌──────────────────────┐
      │      Backend         │
      │ (Node.js + Express)  │
      └──────────────────────┘


- *Frontend:* React SPA, handles UI/UX, state management, and API communication.
- *Backend:* Exposes REST APIs for all business logic and data operations.

---

## 🚀 Local Setup Instructions

1. *Navigate to the client directory:*
   sh
   cd client
   

2. *Install dependencies:*
   sh
   npm install
   

3. *Start the development server:*
   sh
   npm run dev
   

4. *Access the app:*
   - Open your browser at http://localhost:5173 (or the port shown in the terminal).

---

## 🤖 AI Tools & Tech Stack

- *React:* Component-based UI library
- *Vite:* Fast build tool and dev server
- *CSS Modules:* Scoped styling for components
- *ESLint:* Linting and code quality
- *API Integration:* Communicates with backend AI endpoints for features like audience suggestions, campaign optimization, etc.
- *Other:* Modern JavaScript (ES6+), functional components, hooks

---

## ⚠ Known Limitations & Assumptions

- Assumes backend server is running and accessible at the configured API URL.
- No offline support or PWA features.
- Minimal input validation and error handling in UI.
- AI features require backend support; not all features may be available if backend/AI is not running.
- Not optimized for legacy browsers.

---

For questions or contributions, please open an issue or pull request.
