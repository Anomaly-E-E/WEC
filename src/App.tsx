import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Nav from './components/Nav';
import Footer from './components/Footer';
import IntroOverlay from './components/IntroOverlay';
import Home from './pages/Home';
import About from './pages/About';
import Competitions from './pages/Competitions';
import Sponsors from './pages/Sponsors';
import Team from './pages/Team';
import Winners from './pages/Winners';
import './styles/globals.css';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/competitions" element={<Competitions />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/team" element={<Team />} />
        <Route path="/winners/:year" element={<Winners />} />
        <Route path="/winners/2025-2026" element={<Winners />} />
        <Route path="/winners/2024-2025" element={<Winners />} />
        <Route path="/winners/oec-2025" element={<Winners />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <IntroOverlay />
      <Nav />
      <AnimatedRoutes />
      <Footer />
    </Router>
  );
}

export default App;
