import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <>
//         <HomePage />
//       </>
//     ),
//   },
//   {
//     path: "/projects",
//     element: (
//       <>
//         <ProjectPage />
//       </>
//     ),
//   },
//   {
//     path: "/project-details",
//     element: (
//       <>
//         <ProjectPage />
//       </>
//     ),
//   },
// ]);
// function scrollToTarget(id) {
//   const element = document.getElementById(id);
//   if (element) {
//     element.scrollIntoView({ behavior: "smooth" });
//   }
// }

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
