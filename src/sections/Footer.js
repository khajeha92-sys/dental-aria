import React from 'react';
import { motion } from 'framer-motion';
import { 
  InstagramOutlined, 
  PhoneOutlined,
  EnvironmentOutlined,
  ClockCircleOutlined,
  MailOutlined
} from '@ant-design/icons';

const Footer = () => {
  const quickLinks = [
    { label: 'صفحه اصلی', href: '#home' },
    { label: 'خدمات', href: '#services' },
    { label: 'درباره ما', href: '#about' },
    { label: 'پزشکان', href: '#doctors' },
    { label: 'وبلاگ', href: '#blog' },
    { label: 'تماس با ما', href: '#contact' },
  ];

  const services = [
    'ایمپلنت دندان',
    'ارتودنسی',
    'لمینت و ونیر',
    'جراحی فک',
    'دندانپزشکی زیبایی',
    'درمان ریشه',
  ];

  return (
    <footer className="bg-dental-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C8.5 2 6 4.5 6 8C6 11.5 8 16 12 22C16 16 18 11.5 18 8C18 4.5 15.5 2 12 2Z" fill="white"/>
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-lg">دندانپزشکی آریا</h3>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              با بیش از ۱۵ سال تجربه درخشان در ارائه خدمات دندانپزشکی با کیفیت جهانی.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <InstagramOutlined />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-bold text-lg mb-4">دسترسی سریع</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-primary transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-bold text-lg mb-4">خدمات ما</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index} className="text-gray-400 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-bold text-lg mb-4">اطلاعات تماس</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <PhoneOutlined className="text-primary" />
                ۰۲۱-۱۲۳۴۵۶۷۸
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <MailOutlined className="text-primary" />
                info@aria-dental.ir
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <EnvironmentOutlined className="text-primary" />
                تهران، خیابان ولیعصر، برج میلاد
              </li><li className="flex items-center gap-3 text-gray-400 text-sm">
                <ClockCircleOutlined className="text-primary" />
                شنبه تا پنجشنبه ۹ صبح تا ۹ شب
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            تمامی حقوق محفوظ است © ۱۴۰۳ دندانپزشکی آریا
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;