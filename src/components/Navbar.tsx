import React from 'react';
import { Menu, X, Gamepad2 } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { user, logout } = useAuth();

  return (
    <nav className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Gamepad2 className="h-8 w-8 text-purple-500" />
            <span className="ml-2 text-xl font-bold">GameStudio</span>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <a href="#" className="hover:text-purple-400">Jogos</a>
              <a href="#" className="hover:text-purple-400">Projetos</a>
              <a href="#" className="hover:text-purple-400">Sobre</a>
              {user ? (
                <div className="flex items-center space-x-4">
                  <span>Welcome, {user.username}!</span>
                  <button
                    onClick={logout}
                    className="bg-purple-600 px-4 py-2 rounded-md hover:bg-purple-700"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <a href="#" className="bg-purple-600 px-4 py-2 rounded-md hover:bg-purple-700">
                  Login
                </a>
              )}
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block hover:text-purple-400 py-2">Jogos</a>
            <a href="#" className="block hover:text-purple-400 py-2">Projetos</a>
            <a href="#" className="block hover:text-purple-400 py-2">Sobre</a>
            {user ? (
              <>
                <span className="block py-2">Ola, {user.username}!</span>
                <button
                  onClick={logout}
                  className="w-full text-left bg-purple-600 px-4 py-2 rounded-md hover:bg-purple-700"
                >
                  Logout
                </button>
              </>
            ) : (
              <a href="#" className="block bg-purple-600 px-4 py-2 rounded-md hover:bg-purple-700">
                Login
              </a>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}