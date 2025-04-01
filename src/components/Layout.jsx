import DarkModeToggle from './DarkModeToggle';
import { Link } from 'react-router-dom';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white font-sans transition-colors duration-300">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-700">
        <Link to="/" className="text-xl font-bold text-brand-blue dark:text-brand-blue-light">
          🧠 Policy Editor
        </Link>
        <DarkModeToggle />
      </header>

      {/* Main Content */}
      <main className="p-4">{children}</main>

      {/* Footer (optional) */}
      {/* 
      <footer className="text-center text-sm text-gray-500 dark:text-gray-400 p-4 border-t border-gray-200 dark:border-gray-700">
        &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
      </footer> 
      */}
    </div>
  );
}
