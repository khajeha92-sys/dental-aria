import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, Rate, Avatar } from 'antd';
import { MessageOutlined, RightOutlined, LeftOutlined } from '@ant-design/icons';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'سارا محمدی',
      role: 'بیمار ارتودنسی',
      avatar: 'https://i.pravatar.cc/150?img=5',
      rating: 5,
      text: 'تجربه فوق‌العاده‌ای داشتم. دکتر بسیار حرفه‌ای و دقیق بودند. نتیجه ارتودنسی من عالی شد و حالا لبخندم را دوست دارم!',
    },
    {
      name: 'علی رضایی',
      role: 'بیمار ایمپلنت',
      avatar: 'https://i.pravatar.cc/150?img=11',
      rating: 5,
      text: 'پس از سال‌ها مشکل دندان، بالاخره توانستم با خیال راحت غذا بخورم. کیفیت ایمپلنت عالی است و هیچ‌گونه دردی نداشتم.',
    },
    {
      name: 'مریم کریمی',
      role: 'بیمار زیبایی',
      avatar: 'https://i.pravatar.cc/150?img=9',
      rating: 5,
      text: 'لمینت دندان‌هایم را در این کلینیک انجام دادم. نتیجه فراتر از انتظارم بود. محیط بسیار تمیز و پرسنل بسیار مهربان.',
    },
  ];

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-dental-cream to-white opacity-50" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            نظرات بیماران
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-800">
            آن‌ها درباره ما <span className="gradient-text">چه می‌گویند</span>
          </h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="glass-card shadow-xl border-0">
                <div className="text-center py-8">
                  <MessageOutlined className="text-5xl text-primary/20 mb-6" />
                  
                  <p className="text-xl text-gray-700 leading-relaxed mb-8 max-w-2xl mx-auto">
                    "{testimonials[currentIndex].text}"
                  </p>
                  
                  <Rate 
                    disabled 
                    defaultValue={testimonials[currentIndex].rating} 
                    className="mb-6"
                  />
                  
                  <div className="flex items-center justify-center gap-4">
                    <Avatar 
                      size={64} 
                      src={testimonials[currentIndex].avatar}
                      className="border-4 border-primary/20"
                    />
                    <div className="text-right">
                      <h4 className="font-bold text-gray-800">{testimonials[currentIndex].name}</h4>
                      <p className="text-sm text-gray-500">{testimonials[currentIndex].role}</p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-4 mt-8">
            <button 
              onClick={prev}
              className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
            >
              <RightOutlined /></button>
            <button 
              onClick={next}
              className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
            >
              <LeftOutlined />
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? 'bg-primary w-8' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;