import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { SmileOutlined, UserOutlined, TrophyOutlined, ClockCircleOutlined } from '@ant-design/icons';

const AnimatedCounter = ({ end, duration = 2, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  useEffect(() => {
    if (!isInView) return;
    
    let startTime = null;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [isInView, end, duration]);
  
  return <span ref={ref}>{count.toLocaleString('fa-IR')}{suffix}</span>;
};

const StatsSection = () => {
  const stats = [
    {
      icon: <SmileOutlined className="text-3xl" />,
      value: 98,
      suffix: '%',
      label: 'رضایت بیماران',
      color: 'from-primary to-primary-dark',
      bgColor: 'bg-primary/10',
      textColor: 'text-primary',
    },
    {
      icon: <UserOutlined className="text-3xl" />,
      value: 650,
      suffix: '+',
      label: 'بیمار ماهانه',
      color: 'from-secondary to-secondary-dark',
      bgColor: 'bg-secondary/10',
      textColor: 'text-secondary',
    },
    {
      icon: <TrophyOutlined className="text-3xl" />,
      value: 2000,
      suffix: '+',
      label: 'عملکرد موفق',
      color: 'from-amber-400 to-amber-600',
      bgColor: 'bg-amber-100',
      textColor: 'text-amber-600',
    },
    {
      icon: <ClockCircleOutlined className="text-3xl" />,
      value: 15,
      suffix: '+',
      label: 'سال تجربه',
      color: 'from-rose-400 to-rose-600',
      bgColor: 'bg-rose-100',
      textColor: 'text-rose-600',
    },
  ];

  return (
    <section className="relative py-16 -mt-20 z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass-card p-6 lg:p-8 text-center group cursor-default"
            >
              <div className={`w-14 h-14 ${stat.bgColor} ${stat.textColor} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {stat.icon}
              </div>
              
              <h3 className={`text-3xl lg:text-4xl font-black mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </h3>
              
              <p className="text-gray-500 text-sm font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;