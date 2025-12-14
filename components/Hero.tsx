import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onBookAppointment: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBookAppointment }) => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="https://lh3.googleusercontent.com/sitesv/AAzXCkfP6pJH4VjYiPC3_Hy0F3ZIkco4SQmzej40h65r8JrPbd4dF4zyUVSehPZXkV_smvrmKeH6-ULVmTV4FZN4a2a0IVvpAmevw5jvpaaSvNz-VWq5W4W8wL0H_OD_nsqCICeprOXKfatG43xBB0CTWIHvV3bdSK0je9t6S1M0odqqxXQxpMvmIAUbcFbqQdIL2NK889DQJCwdxQHdzskWzH0cEUztbqOVRqyN=w1280"
          alt="Robe de mariée iconique Agnès Herveau"
          className="w-full h-full object-cover object-center"
        />
        {/* Elegant Overlay Gradient */}
        <div className="absolute inset-0 bg-black/20 md:bg-black/10 bg-gradient-to-b from-black/30 via-transparent to-black/30"></div>
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center text-center px-4">
        <div className="max-w-4xl mx-auto text-white">
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight drop-shadow-lg fade-in-up">
            L'Élégance du Sur-Mesure.<br />
            <span className="italic font-light">Votre Robe, Notre Art.</span>
          </h2>
          
          <p className="text-lg md:text-xl tracking-wide font-light mb-10 text-white/90 drop-shadow-md fade-in-up delay-100">
            Créations de haute couture pour un jour unique.
          </p>
          
          <div className="fade-in-up delay-200">
            <button
              onClick={onBookAppointment}
              className="group inline-flex items-center gap-3 bg-white/90 hover:bg-white text-gray-900 px-8 py-4 uppercase tracking-widest text-sm font-medium transition-all duration-300 transform hover:scale-105"
            >
              Prendre Rendez-vous
              <ArrowRight size={16} className="text-brand-gold group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white/70 hidden md:block">
        <span className="text-xs uppercase tracking-widest">Découvrir</span>
      </div>
    </section>
  );
};

export default Hero;