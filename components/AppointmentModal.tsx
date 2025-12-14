import React from 'react';
import { X } from 'lucide-react';

interface AppointmentModalProps {
  onClose: () => void;
}

const AppointmentModal: React.FC<AppointmentModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>
      <div className="bg-white w-full max-w-lg relative z-10 shadow-2xl p-8 md:p-12 animate-fade-in-up">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-900 transition-colors"
        >
          <X size={24} />
        </button>
        
        <div className="text-center mb-8">
          <h3 className="font-serif text-3xl text-gray-900 mb-2">Prendre Rendez-vous</h3>
          <p className="text-gray-500 text-sm font-light">
            Venez nous rencontrer à l'atelier pour discuter de votre robe de rêve.
          </p>
        </div>

        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Merci ! Nous vous recontacterons sous 24h.'); onClose(); }}>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs uppercase tracking-wider text-gray-500 mb-1">Prénom</label>
              <input type="text" required className="w-full border-b border-gray-300 py-2 focus:border-brand-gold focus:outline-none transition-colors" />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-wider text-gray-500 mb-1">Nom</label>
              <input type="text" required className="w-full border-b border-gray-300 py-2 focus:border-brand-gold focus:outline-none transition-colors" />
            </div>
          </div>
          
          <div>
            <label className="block text-xs uppercase tracking-wider text-gray-500 mb-1">Email</label>
            <input type="email" required className="w-full border-b border-gray-300 py-2 focus:border-brand-gold focus:outline-none transition-colors" />
          </div>
          
          <div>
            <label className="block text-xs uppercase tracking-wider text-gray-500 mb-1">Date de mariage (estimée)</label>
            <input type="date" className="w-full border-b border-gray-300 py-2 text-gray-700 focus:border-brand-gold focus:outline-none transition-colors" />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-gray-500 mb-1">Message</label>
            <textarea rows={3} className="w-full border-b border-gray-300 py-2 focus:border-brand-gold focus:outline-none transition-colors resize-none"></textarea>
          </div>

          <button 
            type="submit"
            className="w-full bg-brand-charcoal text-white py-4 uppercase tracking-widest text-xs font-bold hover:bg-brand-gold transition-colors mt-4"
          >
            Envoyer la demande
          </button>
        </form>
      </div>
    </div>
  );
};

export default AppointmentModal;