import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onBookAppointment: () => void;
}

const Header: React.FC<HeaderProps> = ({ onBookAppointment }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Collections', href: '#collections' },
    { name: 'Sur-Mesure', href: '#philosophy' },
    { name: 'Atelier', href: '#philosophy' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="group">
          <h1 className={`font-serif text-2xl md:text-3xl tracking-widest uppercase transition-colors duration-300 ${isScrolled ? 'text-gray-900' : 'text-gray-900 md:text-white md:text-shadow'}`}>
            Agnès Herveau
          </h1>
          <span className={`block text-[10px] md:text-xs tracking-[0.3em] text-center mt-1 uppercase ${isScrolled ? 'text-brand-gold' : 'text-brand-gold md:text-white/80'}`}>
            Couture Mariage
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm uppercase tracking-widest hover:text-brand-gold transition-colors duration-300 ${
                isScrolled ? 'text-gray-600' : 'text-white/90'
              }`}
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={onBookAppointment}
            className={`px-6 py-2 border transition-all duration-300 text-sm uppercase tracking-widest ${
              isScrolled
                ? 'border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white'
                : 'border-white text-white hover:bg-white hover:text-gray-900'
            }`}
          >
            Prendre Rendez-vous
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden p-2 ${isScrolled ? 'text-gray-900' : 'text-gray-900'}`} // Always dark on mobile unless we change bg
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-brand-cream z-40 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ top: '0' }}
      >
        <div className="flex flex-col h-full justify-center items-center space-y-8 p-8">
            <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="absolute top-6 right-6 text-gray-800"
            >
                <X size={32} />
            </button>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-serif text-3xl text-gray-800 hover:text-brand-gold italic"
            >
              {link.name}
            </a>
          ))}
           <button
            onClick={() => {
                onBookAppointment();
                setIsMobileMenuOpen(false);
            }}
            className="mt-8 px-8 py-3 border border-gray-800 text-gray-800 uppercase tracking-widest hover:bg-gray-800 hover:text-white transition-colors"
          >
            Prendre Rendez-vous
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;