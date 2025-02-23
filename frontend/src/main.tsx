import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./index.css";
import App from "./App.tsx";

/**
 * Entry point for the React application.
 *
 * This file initializes the root of the React app using `createRoot`,
 * applies `StrictMode` for highlighting potential issues in development,
 * and wraps the app with `BrowserRouter` for client-side routing.
 *
 * How to modify:
 * - If server-side rendering (SSR) is required, replace `createRoot` with `hydrateRoot`.
 * - If routing is unnecessary, remove `BrowserRouter` and update `App` accordingly.
 * - If strict mode causes issues, remove `<StrictMode>` (not recommended).
 */

// Ensure that the root element exists before rendering
const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error(
    "Root element not found. Ensure there is a `<div id='root'></div>` in your HTML.",
  );
}

// Initialize the root and render the application
createRoot(rootElement).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
