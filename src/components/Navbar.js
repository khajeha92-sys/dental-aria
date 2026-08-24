import React, { useState } from 'react';
import { Menu, Drawer, Button } from 'antd';
import { MenuOutlined, PhoneOutlined, CalendarOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';

const Navbar = ({ scrolled }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const menuItems = [
    { key: 'home', label: 'صفحه اصلی' },
    { key: 'services', label: 'خدمات' },
    { key: 'about', label: 'درباره ما' },
    { key: 'doctors', label: 'پزشکان' },
    { key: 'blog', label: 'وبلاگ' },
    { key: 'contact', label: 'تماس با ما' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-lg py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <motion.div 
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center shadow-lg">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C8.5 2 6 4.5 6 8C6 11.5 8 16 12 22C16 16 18 11.5 18 8C18 4.5 15.5 2 12 2Z" 
                      fill="white" stroke="white" strokeWidth="1.5"/>
                <path d="M12 6C10.5 6 9.5 7 9.5 8.5C9.5 10 10.5 11 12 11C13.5 11 14.5 10 14.5 8.5C14.5 7 13.5 6 12 6Z" 
                      fill="#14b8a6"/>
              </svg>
            </div>
            <div className="hidden sm:block">
              <h1 className={`text-xl font-bold transition-colors duration-300 ${
                scrolled ? 'text-gray-800' : 'text-gray-800'
              }`}>
                دندانپزشکی <span className="text-primary">آریا</span>
              </h1>
              <p className={`text-xs transition-colors duration-300 ${
                scrolled ? 'text-gray-500' : 'text-gray-500'
              }`}>
                لبخند رویایی شما
              </p>
            </div>
          </motion.div>

          <nav className="hidden lg:flex items-center gap-1">
            {menuItems.map((item) => (
              <motion.a
                key={item.key}
                href={`#${item.key}`}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  scrolled 
                    ? 'text-gray-700 hover:text-primary hover:bg-primary/10' 
                    : 'text-gray-700 hover:text-primary hover:bg-white/50'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <motion.a
              href="tel:02112345678"
              className="hidden md:flex items-center gap-2 text-primary hover:text-primary-dark transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              <PhoneOutlined className="text-lg" />
              <span className="text-sm font-semibold">۰۲۱-۱۲۳۴۵۶۷۸</span>
            </motion.a>
            
            <motion.button
              className="hidden sm:flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-primary-dark transition-colors shadow-lg shadow-primary/30"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <CalendarOutlined />
              نوبت دهی آنلاین
            </motion.button>

            <Button
              type="text"
              icon={<MenuOutlined className="text-xl" />}
              onClick={() => setDrawerOpen(true)}
              className="lg:hidden"/>
          </div>
        </div>
      </div>

      <Drawer
        title={
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C8.5 2 6 4.5 6 8C6 11.5 8 16 12 22C16 16 18 11.5 18 8C18 4.5 15.5 2 12 2Z" fill="white"/>
              </svg>
            </div>
            <span className="font-bold text-lg">دندانپزشکی آریا</span>
          </div>
        }
        placement="right"
        onClose={() => setDrawerOpen(false)}
        open={drawerOpen}
        width={300}
      >
        <Menu
          mode="vertical"
          items={menuItems}
          className="border-0"
          onClick={() => setDrawerOpen(false)}
        />
        <div className="mt-6 space-y-3">
          <Button type="primary" block size="large" icon={<CalendarOutlined />} className="rounded-full">
            نوبت دهی آنلاین
          </Button>
          <Button block size="large" icon={<PhoneOutlined />} className="rounded-full">
            ۰۲۱-۱۲۳۴۵۶۷۸
          </Button>
        </div>
      </Drawer>
    </motion.header>
  );
};

export default Navbar;