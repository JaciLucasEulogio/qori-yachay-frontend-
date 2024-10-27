import React from 'react';
import { ChevronUp, Facebook, Twitter, Instagram, Mail } from 'lucide-react';
import { Linkedin } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-r from-purple-900 to-blue-900 text-white">
      {/* Botón Scroll to Top */}
      <div className="flex justify-center">
        <button 
          onClick={scrollToTop}
          className="bg-white text-purple-900 rounded-full p-3 -mt-6 shadow-lg hover:scale-110 transition-transform duration-300"
          aria-label="Volver arriba"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Grid Principal */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Columna 1 - Logo y Descripción */}
          <div className="space-y-4">
            <img src="https://i.ibb.co/mqxh7jg/Sin-t-tulo-7500-x-1563-px.png" alt="Logo" className="w-24 h-24" />
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              QoriYachay
            </h3>
            <p className="text-gray-300">
              Transformamos la forma en la que aprendes.
            </p>
          </div>

          {/* Columna 2 - Links Rápidos */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {[
                { name: 'Inicio', url: '/' },
                { name: 'Obtén tu ruta', url: '/form' },
                { name: 'Resultados', url: '/results' },
                { name: 'Sobre Nosotros', url: '/team' }
              ].map(({ name, url }) => (
                <li key={name}>
                  <a 
                    href={url} 
                    className="text-gray-300 hover:text-white hover:underline transition-colors duration-300"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3 - Soporte */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Soporte</h4>
            <ul className="space-y-2">
              {['FAQ', 'Contacto', 'Ayuda', 'Términos'].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-white hover:underline transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 4 - Newsletter */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Newsletter</h4>
            <div className="flex flex-col space-y-3">
              <input 
                type="email" 
                placeholder="Tu email"
                className="bg-purple-800/50 border border-purple-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
              />
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-lg hover:opacity-90 transition-opacity duration-300">
                Suscribirse
              </button>
            </div>
          </div>
        </div>

        {/* Redes Sociales */}
        <div className="flex justify-center space-x-6 mb-8">
          {[
            { Icon: Facebook, label: 'Facebook' },
            { Icon: Twitter, label: 'Twitter' },
            { Icon: Instagram, label: 'Instagram' },
            { Icon: Linkedin, label: 'LinkedIn' }
          ].map(({ Icon, label }) => (
            <a
              key={label}
              href="#"
              className="text-gray-400 hover:text-white transform hover:scale-110 transition-all duration-300"
              aria-label={label}
            >
              <Icon className="w-6 h-6" />
            </a>
          ))}
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-purple-800/50 pt-8">
          {/* Copyright y Links Legales */}
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>© {new Date().getFullYear()} SeedMinds. Todos los derechos reservados.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              {['Privacidad', 'Términos', 'Cookies'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
