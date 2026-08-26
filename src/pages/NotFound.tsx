import { Link } from 'react-router-dom';
import ForestHero from '../components/ForestHero';

export default function NotFound() {
  return (
    <div className="min-h-screen">
      <ForestHero title="Page Not Found" subtitle="404" />
      <section className="py-16 md:py-24 px-6 text-center">
        <p className="text-cream-dim text-base sm:text-lg mb-8">
          The page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="inline-block text-white cursor-pointer px-8 py-3 rounded-full font-sans font-bold hover:scale-105 transition-transform duration-200 bg-cta-green"
        >
          Back to Home
        </Link>
      </section>
    </div>
  );
}
