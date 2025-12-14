import React from 'react';
import { Sparkles, PenTool, Heart } from 'lucide-react';

const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="py-24 md:py-32 bg-brand-cream relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-gold/50 to-transparent"></div>
      
      <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
        <span className="block text-brand-gold text-xs font-bold tracking-[0.3em] uppercase mb-6">
          Notre Philosophie
        </span>
        
        <h2 className="font-serif text-3xl md:text-5xl text-gray-800 mb-10 leading-snug">
          "Chaque robe est une pièce unique, façonnée à la main dans notre atelier français."
        </h2>
        
        <p className="text-gray-600 leading-loose text-lg md:text-xl font-light mb-16 mx-auto max-w-2xl">
          Nous ne créons pas seulement une robe, nous donnons vie à votre vision. L'alliance des matières nobles, d'un savoir-faire traditionnel et d'une écoute attentive pour sublimer votre silhouette.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-8 border-t border-gray-200">
            <div className="flex flex-col items-center">
                <div className="mb-4 p-4 bg-white rounded-full shadow-sm text-brand-gold">
                    <PenTool size={24} strokeWidth={1} />
                </div>
                <h3 className="font-serif text-lg text-gray-800 mb-2">Sur-Mesure</h3>
                <p className="text-sm text-gray-500">Patronage exclusif selon vos mesures.</p>
            </div>
            <div className="flex flex-col items-center">
                <div className="mb-4 p-4 bg-white rounded-full shadow-sm text-brand-gold">
                    <Sparkles size={24} strokeWidth={1} />
                </div>
                <h3 className="font-serif text-lg text-gray-800 mb-2">Savoir-Faire</h3>
                <p className="text-sm text-gray-500">Dentelles de Calais et soies précieuses.</p>
            </div>
            <div className="flex flex-col items-center">
                <div className="mb-4 p-4 bg-white rounded-full shadow-sm text-brand-gold">
                    <Heart size={24} strokeWidth={1} />
                </div>
                <h3 className="font-serif text-lg text-gray-800 mb-2">Passion</h3>
                <p className="text-sm text-gray-500">Un accompagnement dédié jusqu'au jour J.</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;