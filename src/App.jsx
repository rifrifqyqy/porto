import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/projectPage";
import { AnimatePresence, motion } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
function App() {
  const location = useLocation();
  return (
    <>
      <AnimatePresence mode="wait" initial="hidden">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/project-details" element={<ProjectPage />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
