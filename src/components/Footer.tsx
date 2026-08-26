import { Link } from 'react-router-dom';
import Icon from './Icon';

export default function Footer() {
  return (
    <footer className="bg-forest-dark border-t border-forest mt-16 md:mt-24">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-9 md:gap-12 mb-9 md:mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/wec-robot-green.png" alt="" className="h-8 w-auto" />
              <h3 className="font-display italic text-sunlight text-3xl font-black">WEC</h3>
            </div>
            <p className="text-cream-dim text-sm leading-relaxed">
              Western Engineering Competition<br />
              London, Ontario<br />
              Western University
            </p>
          </div>

          <div>
            <h4 className="font-sans font-bold text-cream text-lg mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-cream-dim hover:text-sunlight transition-colors text-sm">
                Home
              </Link>
              <Link to="/about" className="text-cream-dim hover:text-sunlight transition-colors text-sm">
                About
              </Link>
              <Link to="/competitions" className="text-cream-dim hover:text-sunlight transition-colors text-sm">
                Competitions
              </Link>
              <Link to="/sponsors" className="text-cream-dim hover:text-sunlight transition-colors text-sm">
                Sponsors
              </Link>
              <Link to="/#team" className="text-cream-dim hover:text-sunlight transition-colors text-sm">
                Team
              </Link>
              <Link
                to="/register"
                className="text-sunlight hover:text-gold transition-colors text-sm font-semibold"
              >
                Register
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-sans font-bold text-cream text-lg mb-4">Connect</h4>
            <div className="flex flex-col gap-3">
              <a
                href="https://www.instagram.com/ues_wec/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream-dim hover:text-sunlight transition-colors text-sm flex items-center gap-2"
              >
                <Icon name="instagram" className="w-5 h-5" /> Instagram
              </a>
              <a
                href="https://ca.linkedin.com/company/western-engineering-competition"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream-dim hover:text-sunlight transition-colors text-sm flex items-center gap-2"
              >
                <Icon name="linkedin" className="w-5 h-5" /> LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-moss-dark pt-8 flex flex-col items-center gap-3">
          <a
            href="https://www.instagram.com/ues_wec/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans font-bold text-sm tracking-[0.2em] text-olive hover:text-sunlight transition-colors"
          >
            @UES_WEC
          </a>
          <p className="text-cream-dim text-sm">
            © 2026 Western Engineering Competition · All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
