import Icon from './Icon';
import { useTheme } from '../context/useTheme';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center gap-0.5 border border-white/25 rounded-full p-1">
      <button
        onClick={() => setTheme('light')}
        aria-label="Light mode"
        className={`p-1.5 rounded-full transition-colors duration-200 ${
          theme === 'light' ? 'bg-sunlight text-forest-black' : 'text-white/60 hover:text-white'
        }`}
      >
        <Icon name="sun" className="w-4 h-4" />
      </button>
      <button
        onClick={() => setTheme('dark')}
        aria-label="Dark mode"
        className={`p-1.5 rounded-full transition-colors duration-200 ${
          theme === 'dark' ? 'bg-sunlight text-forest-black' : 'text-white/60 hover:text-white'
        }`}
      >
        <Icon name="moon" className="w-4 h-4" />
      </button>
    </div>
  );
}
