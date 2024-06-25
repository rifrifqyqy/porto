import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/projectPage";
import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import TestingPage from "./pages/testingPage";
import GalleryPorto from "./pages/galleryPorto";
function App() {
  const location = useLocation();
  return (
    <>
      <AnimatePresence mode="wait" initial="hidden">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects/:id" element={<ProjectPage />} />
          <Route path="/project-details" element={<ProjectPage />} />
          <Route path="/testing" element={<TestingPage />} />
          <Route path="/gallery" element={<GalleryPorto />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
