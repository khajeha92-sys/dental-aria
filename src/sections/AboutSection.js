import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircleOutlined } from '@ant-design/icons';
import { Button } from 'antd';

const AboutSection = () => {
  const features = [
    'تجهیزات پیشرفته و مدرن',
    'تیم پزشکی مجرب و متخصص',
    'محیطی آرام و راحت',
    'قیمت‌های منصفانه و شفاف',
    'پذیرش بیمه‌های تکمیلی',
    'مشاوره رایگان قبل درمان',
  ];

  return (
    <section id="about" className="section-padding bg-dental-warm relative overflow-hidden">
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&h=500&fit=crop"
                alt="Dental Clinic"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </div>
            
            {/* Floating Card */}
            <motion.div 
              className="absolute -bottom-6 -right-6 glass-card p-6 shadow-xl max-w-xs"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  15+
                </div>
                <div>
                  <p className="font-bold text-gray-800">سال تجربه</p>
                  <p className="text-sm text-gray-500">در خدمت سلامت دهان و دندان</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              درباره ما
            </span>
            
            <h2 className="text-3xl sm:text-4xl font-black text-gray-800 mb-6">
              تفاوت ما در <span className="gradient-text">کیفیت</span> است
            </h2>
            
            <p className="text-gray-600 leading-relaxed mb-8">
              کلینیک دندانپزشکی آریا با بیش از ۱۵ سال تجربه، یکی از برترین مراکز دندانپزشکی در تهران است. 
              ما با بهره‌گیری از پیشرفته‌ترین تجهیزات و تکنولوژی‌های روز دنیا، خدماتی با کیفیت جهانی ارائه می‌دهیم.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircleOutlined className="text-primary text-lg flex-shrink-0" />
                  <span className="text-gray-700 text-sm font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>

            <Button type="primary" size="large" className="h-12 px-8 rounded-full font-semibold">
              بیشتر بدانید
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;