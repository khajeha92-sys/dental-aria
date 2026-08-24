import React from 'react';
import { motion } from 'framer-motion';
import { Button, Input } from 'antd';
import { PhoneOutlined, SendOutlined } from '@ant-design/icons';

const CtaSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-dark" />
      
      {/* Decorative Circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
              لبخند رویایی‌تان را شروع کنید
            </h2>
            <p className="text-white/80 text-lg mb-8">
              همین امروز با ما تماس بگیرید یا فرم زیر را پر کنید تا مشاوران ما در اسرع وقت با شما تماس بگیرند.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="large"
                icon={<PhoneOutlined />}
                className="h-14 px-8 bg-white text-primary font-bold rounded-full hover:bg-gray-100 border-0"
              >
                ۰۲۱-۱۲۳۴۵۶۷۸
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">
                درخواست مشاوره رایگان
              </h3>
              
              <div className="space-y-4">
                <Input 
                  placeholder="نام و نام خانوادگی" 
                  size="large"
                  className="h-12 rounded-xl"
                />
                <Input 
                  placeholder="شماره موبایل" 
                  size="large"
                  className="h-12 rounded-xl"
                />
                <Input.TextArea 
                  placeholder="توضیحات (اختیاری)" 
                  rows={3}
                  className="rounded-xl"
                />
                
                <Button 
                  type="primary" 
                  size="large"
                  block
                  icon={<SendOutlined />}
                  className="h-14 rounded-xl bg-primary hover:bg-primary-dark font-bold text-base"
                >
                  ارسال درخواست
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;