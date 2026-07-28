import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from './Icon';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMoreDropdownOpen(false);
  }, [location]);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/sponsors', label: 'Sponsors' },
    { to: '/competitions', label: 'Competitions' },
    { to: '/#team', label: 'Team' },
  ];

  const moreLinks = [
    { to: '/winners/2025-2026', label: '2025–2026 Winners' },
    { to: '/winners/2024-2025', label: '2024–2025 Winners' },
    { to: '/winners/oec-2025', label: 'OEC 2025 Winners' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-[9000] transition-all duration-300 ${
          scrolled ? 'backdrop-forest border-b border-forest' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="font-display italic text-sunlight text-2xl md:text-3xl font-black relative">
            <span className="relative" style={{
              textShadow: '2px 2px 0px rgba(0,0,0,0.3), -1px -1px 0px rgba(200,232,122,0.3)'
            }}>
              WEC
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="font-sans font-semibold text-sm text-cream hover:text-sunlight transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sunlight group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}

            <div className="relative">
              <button
                onClick={() => setMoreDropdownOpen(!moreDropdownOpen)}
                className="font-sans font-semibold text-sm text-cream hover:text-sunlight transition-colors duration-200 flex items-center gap-1"
              >
                More
                <span className={`transform transition-transform duration-200 ${moreDropdownOpen ? 'rotate-180' : ''}`}>
                  <Icon name="chevronDown" className="w-3.5 h-3.5" />
                </span>
              </button>

              <AnimatePresence>
                {moreDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full mt-2 right-0 backdrop-forest border-forest rounded-lg py-2 min-w-[200px]"
                  >
                    {moreLinks.map((link) => (
                      <Link
                        key={link.to}
                        to={link.to}
                        className="block px-4 py-2 font-sans text-sm text-cream hover:text-sunlight hover:bg-forest-mid transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <a
            href="https://forms.office.com/Pages/ResponsePage.aspx?id=TaaTrQ2tzU6y_eU84Vllvojv0C3AKvxMnZrNlCc3fx9URDdYS1FaN0lFMDM2UklUNkRVS1ZVSTVPVy4u"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:block bg-sunlight text-forest-dark px-6 py-2.5 rounded-full font-sans font-bold text-sm hover:scale-105 transition-transform duration-200"
          >
            Register Now
          </a>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-sunlight"
            aria-label="Toggle mobile menu"
          >
            {mobileOpen ? <Icon name="close" className="w-7 h-7" /> : <Icon name="menu" className="w-7 h-7" />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[8999] bg-forest-dark lg:hidden pt-20"
          >
            <div className="flex flex-col items-center justify-center gap-8 h-full">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="font-sans font-bold text-3xl text-cream hover:text-sunlight transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}

              <div className="border-t border-moss-dark w-3/4 my-4"></div>

              {moreLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="font-sans font-semibold text-xl text-cream hover:text-sunlight transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}

              <a
                href="https://forms.office.com/Pages/ResponsePage.aspx?id=TaaTrQ2tzU6y_eU84Vllvojv0C3AKvxMnZrNlCc3fx9URDdYS1FaN0lFMDM2UklUNkRVS1ZVSTVPVy4u"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-sunlight text-forest-dark px-8 py-3 rounded-full font-sans font-bold text-lg mt-4"
              >
                Register Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
