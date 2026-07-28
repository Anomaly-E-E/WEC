import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-forest-dark border-t border-forest mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-display italic text-sunlight text-3xl font-black mb-4">WEC</h3>
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
              <Link to="/team" className="text-cream-dim hover:text-sunlight transition-colors text-sm">
                Team
              </Link>
              <a
                href="https://forms.office.com/Pages/ResponsePage.aspx?id=TaaTrQ2tzU6y_eU84Vllvojv0C3AKvxMnZrNlCc3fx9URDdYS1FaN0lFMDM2UklUNkRVS1ZVSTVPVy4u"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sunlight hover:text-gold transition-colors text-sm font-semibold"
              >
                Register
              </a>
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
                <span className="text-lg">📷</span> Instagram
              </a>
              <a
                href="https://www.facebook.com/UES.WEC/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream-dim hover:text-sunlight transition-colors text-sm flex items-center gap-2"
              >
                <span className="text-lg">👍</span> Facebook
              </a>
              <a
                href="https://ca.linkedin.com/company/western-engineering-competition"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream-dim hover:text-sunlight transition-colors text-sm flex items-center gap-2"
              >
                <span className="text-lg">💼</span> LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-moss-dark pt-8 text-center">
          <p className="text-cream-dim text-sm">
            © 2026 Western Engineering Competition · All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
