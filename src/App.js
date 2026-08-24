import React, { useState, useEffect } from 'react';
import { FloatButton, BackTop } from 'antd';
import { MessageOutlined, ArrowUpOutlined } from '@ant-design/icons';
import Navbar from './components/Navbar';
import HeroSection from './sections/HeroSection';
import StatsSection from './sections/StatsSection';
import ServicesSection from './sections/ServicesSection';
import AboutSection from './sections/AboutSection';
import TestimonialsSection from './sections/TestimonialsSection';
import CtaSection from './sections/CtaSection';
import Footer from './sections/Footer';
import './App.css';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-dental-cream overflow-x-hidden">
      <Navbar scrolled={scrolled} />
      
      <main>
        <HeroSection />
        <StatsSection />
        <ServicesSection />
        <AboutSection />
        <TestimonialsSection />
        <CtaSection />
      </main>
      
      <Footer />
      
      <FloatButton
        icon={<MessageOutlined />}
        type="primary"
        style={{
          right: 24,
          bottom: 80,
          width: 56,
          height: 56,
          backgroundColor: '#14b8a6',
        }}
        tooltip="چت آنلاین"
      />
      
      <BackTop>
        <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center shadow-lg hover:bg-primary-dark transition-colors">
          <ArrowUpOutlined className="text-lg" />
        </div>
      </BackTop>
    </div>
  );
}

export default App;