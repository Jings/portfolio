import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Experience from "./pages/Exprerience";
import Hero from "./pages/Hero";
import NotFound from "./pages/NotFound";
import Work from "./pages/Work";

function App() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Hero />} />
          <Route path="about" element={<About />} />
          <Route path="work" element={<Work />} />
          <Route path="technologies" element={<Experience />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;
