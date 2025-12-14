import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Collections from './components/Collections';
import Footer from './components/Footer';
import AppointmentModal from './components/AppointmentModal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Effect to handle body scroll locking when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isModalOpen]);

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-stone-200 selection:text-brand-charcoal">
      <Header onBookAppointment={openModal} />
      <main className="flex-grow">
        <Hero onBookAppointment={openModal} />
        <Philosophy />
        <Collections />
      </main>
      <Footer />
      
      {/* Simple Modal Overlay for Appointment */}
      {isModalOpen && <AppointmentModal onClose={closeModal} />}
    </div>
  );
}