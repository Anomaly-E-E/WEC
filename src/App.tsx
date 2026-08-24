import { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Nav from './components/Nav';
import Footer from './components/Footer';
import IntroOverlay from './components/IntroOverlay';
import Home from './pages/Home';
import { ThemeProvider } from './context/ThemeContext';
import './styles/globals.css';

const About = lazy(() => import('./pages/About'));
const Competitions = lazy(() => import('./pages/Competitions'));
const Sponsors = lazy(() => import('./pages/Sponsors'));
const Winners = lazy(() => import('./pages/Winners'));
const RegistrationComingSoon = lazy(() => import('./pages/RegistrationComingSoon'));

function AnimatedRoutes() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={null}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/competitions" element={<Competitions />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/winners/:year" element={<Winners />} />
          <Route path="/register" element={<RegistrationComingSoon />} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
}

function App() {
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }
    window.scrollTo(0, 0);
    const retry = setTimeout(() => window.scrollTo(0, 0), 150);
    return () => clearTimeout(retry);
  }, []);

  return (
    <ThemeProvider>
      <Router>
        <IntroOverlay />
        <Nav />
        <AnimatedRoutes />
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
