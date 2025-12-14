import React from 'react';
import { Instagram, Facebook, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-charcoal text-white/80 pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16 border-b border-white/10 pb-16">
          
          {/* Brand Column */}
          <div className="text-center md:text-left">
            <h4 className="font-serif text-2xl text-white mb-6">Agnès Herveau</h4>
            <p className="text-sm font-light leading-relaxed mb-6 max-w-xs mx-auto md:mx-0">
              Créatrice de robes de mariée sur mesure. L'excellence de l'artisanat français pour le plus beau jour de votre vie.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              <a href="#" className="hover:text-brand-gold transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-brand-gold transition-colors"><Facebook size={20} /></a>
            </div>
          </div>

          {/* Contact Column */}
          <div className="text-center md:text-left">
            <h5 className="uppercase text-xs tracking-[0.2em] text-brand-gold mb-8">Contact & Atelier</h5>
            <ul className="space-y-4 text-sm font-light">
              <li className="flex flex-col md:flex-row items-center md:items-start gap-3">
                <MapPin size={16} className="text-white/50 shrink-0 mt-1" />
                <span>
                  12 Rue de la Paix<br />
                  75002 Paris, France<br />
                  <span className="italic text-white/40 text-xs mt-1 block">Sur rendez-vous uniquement</span>
                </span>
              </li>
              <li className="flex flex-col md:flex-row items-center md:items-start gap-3">
                <Phone size={16} className="text-white/50 shrink-0 mt-1" />
                <a href="tel:+33123456789" className="hover:text-white transition-colors">+33 1 23 45 67 89</a>
              </li>
              <li className="flex flex-col md:flex-row items-center md:items-start gap-3">
                <Mail size={16} className="text-white/50 shrink-0 mt-1" />
                <a href="mailto:contact@agnesherveau.com" className="hover:text-white transition-colors">contact@agnesherveau.com</a>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="text-center md:text-left">
            <h5 className="uppercase text-xs tracking-[0.2em] text-brand-gold mb-8">Newsletter</h5>
            <p className="text-sm font-light mb-4">
              Recevez nos inspirations et invitations aux ventes privées.
            </p>
            <form className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Votre adresse email" 
                className="bg-white/5 border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-brand-gold focus:bg-white/10 transition-colors text-white placeholder-white/30"
              />
              <button 
                type="submit"
                className="bg-brand-gold text-white px-4 py-3 text-xs uppercase tracking-widest hover:bg-white hover:text-brand-charcoal transition-colors font-bold"
              >
                S'inscrire
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs font-light text-white/30">
          <p>&copy; {new Date().getFullYear()} Agnès Herveau Couture. Tous droits réservés.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Mentions Légales</a>
            <a href="#" className="hover:text-white transition-colors">Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;