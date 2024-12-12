import React, { useState } from 'react';
import { AuthProvider } from './contexts/AuthContext';
import { Navbar } from './components/Navbar';
import { LoginForm, RegisterForm } from './components/AuthForms';
import { Gamepad2, Trophy, Users, Code } from 'lucide-react';

function App() {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <AuthProvider>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        
        <main>
          {/* Hero Section */}
          <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-6">
                     Crie, jogue, inove
                  </h1>
                  <p className="text-xl mb-8">
                  Junte-se à nossa comunidade de jogos e explore projetos incríveis criados por desenvolvedores apaixonados.
                  </p>
                  <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    Explorar jogos
                  </button>
                </div>
                <div className="hidden md:flex justify-center">
                  <Gamepad2 className="w-64 h-64 text-white/80" />
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <Trophy className="w-12 h-12 text-purple-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Top Games</h3>
                  <p className="text-gray-600">
                  Descubra nossa coleção de jogos de alta qualidade criados por desenvolvedores talentosos.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <Users className="w-12 h-12 text-purple-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Community</h3>
                  <p className="text-gray-600">
                  Conecte-se com outros jogadores e desenvolvedores em nossa comunidade em crescimento.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <Code className="w-12 h-12 text-purple-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Projects</h3>
                  <p className="text-gray-600">
                  Explore projetos inovadores e contribua para o desenvolvimento de código aberto.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Auth Section */}
          <section className="py-16 bg-white">
            <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex justify-center mb-8">
                  <div className="space-x-4">
                    <button
                      className={`px-4 py-2 ${
                        showLogin
                          ? 'text-purple-600 border-b-2 border-purple-600'
                          : 'text-gray-500'
                      }`}
                      onClick={() => setShowLogin(true)}
                    >
                      Login
                    </button>
                    <button
                      className={`px-4 py-2 ${
                        !showLogin
                          ? 'text-purple-600 border-b-2 border-purple-600'
                          : 'text-gray-500'
                      }`}
                      onClick={() => setShowLogin(false)}
                    >
                      Register
                    </button>
                  </div>
                </div>
                {showLogin ? <LoginForm /> : <RegisterForm />}
              </div>
            </div>
          </section>
        </main>

        <footer className="bg-gray-900 text-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-4">About Us</h4>
                <p className="text-gray-400">
                Somos apaixonados por criar experiências de jogo incríveis e promover uma comunidade de desenvolvedores.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white">Jogs</a></li>
                  <li><a href="#" className="hover:text-white">Projetos</a></li>
                  <li><a href="#" className="hover:text-white">Comunidade</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Contact</h4>
                <p className="text-gray-400">
                  Email: contact@gamestudio.com<br />
                  Follow us on social media
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </AuthProvider>
  );
}

export default App;