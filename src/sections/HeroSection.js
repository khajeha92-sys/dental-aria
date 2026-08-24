import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from 'antd';
import { CalendarOutlined, PlayCircleOutlined, ArrowDownOutlined } from '@ant-design/icons';

const HeroSection = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const teeth = [];
    const toothCount = 15;
    
    for (let i = 0; i < toothCount; i++) {
      teeth.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 30 + 15,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
        opacity: Math.random() * 0.15 + 0.05,
      });
    }
    
    let animationId;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      teeth.forEach((tooth) => {
        tooth.x += tooth.speedX;
        tooth.y += tooth.speedY;
        tooth.rotation += tooth.rotationSpeed;
        
        if (tooth.x < -50) tooth.x = canvas.width + 50;
        if (tooth.x > canvas.width + 50) tooth.x = -50;
        if (tooth.y < -50) tooth.y = canvas.height + 50;
        if (tooth.y > canvas.height + 50) tooth.y = -50;
        
        ctx.save();
        ctx.translate(tooth.x, tooth.y);
        ctx.rotate(tooth.rotation);
        ctx.globalAlpha = tooth.opacity;
        
        ctx.beginPath();
        ctx.fillStyle = '#14b8a6';
        ctx.moveTo(0, -tooth.size * 0.8);
        ctx.bezierCurveTo(
          -tooth.size * 0.5, -tooth.size * 0.8,
          -tooth.size * 0.6, -tooth.size * 0.3,
          -tooth.size * 0.4, 0
        );
        ctx.bezierCurveTo(
          -tooth.size * 0.3, tooth.size * 0.3,
          -tooth.size * 0.2, tooth.size * 0.8,
          0, tooth.size * 0.8
        );
        ctx.bezierCurveTo(
          tooth.size * 0.2, tooth.size * 0.8,
          tooth.size * 0.3, tooth.size * 0.3,
          tooth.size * 0.4, 0
        );
        ctx.bezierCurveTo(
          tooth.size * 0.6, -tooth.size * 0.3,
          tooth.size * 0.5, -tooth.size * 0.8,
          0, -tooth.size * 0.8
        );
        ctx.fill();
        ctx.restore();
      });
      
      animationId = requestAnimationFrame(animate);
    };
    
    animate();
    
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      ref={containerRef}
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-dental-warm via-white to-dental-cream"
    >
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
      />
      
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      
      <motion.div 
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
        style={{ y, opacity }}
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-right order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
                ✨ با بیش از ۱۵ سال تجربه درخشان
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-6"
            >
              <span className="text-gray-800">لبخند</span>{' '}
              <span className="gradient-text">رویایی</span>{' '}
              <span className="text-gray-800">شما</span>
              <br />
              <span className="text-gray-800">شروع می‌شود</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-gray-600 text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
            >
              در کلینیک دندانپزشکی آریا، با بهره‌گیری از پیشرفته‌ترین تکنولوژی‌ها و تیم متخصص، 
              بهترین خدمات دندانپزشکی را با بالاترین کیفیت ارائه می‌دهیم.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button 
                type="primary" 
                size="large"
                icon={<CalendarOutlined />}
                className="h-14 px-8 text-base font-bold rounded-full bg-primary hover:bg-primary-dark border-0 shadow-lg shadow-primary/30"
              >
                نوبت دهی آنلاین
              </Button>
              
              <Button 
                size="large"
                icon={<PlayCircleOutlined />}
                className="h-14 px-8 text-base font-bold rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white"
              >
                مشاهده ویدیو
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="mt-12 flex items-center gap-6 justify-center lg:justify-start"
            >
              <div className="flex -space-x-3 space-x-reverse">
                {[1,2,3,4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                    <img 
                      src={`https://i.pravatar.cc/100?img=${i + 10}`} 
                      alt="Patient" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="text-right">
                <div className="flex items-center gap-1">
                  {[1,2,3,4,5].map((i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-gray-500 mt-1">بیش از ۲۰۰۰ بیمار راضی</p>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            className="relative order-1 lg:order-2"
            style={{
              x: mousePos.x,
              y: mousePos.y,
            }}
            transition={{ type: "spring", stiffness: 50, damping: 20 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative perspective-1000"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <div className="aspect-[4/5] bg-gradient-to-b from-gray-100 to-gray-200 relative">
                  <img 
                    src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&h=750&fit=crop&crop=face"
                    alt="Beautiful Smile"
                    className="w-full h-full object-cover"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
                  
                  <motion.div
                    className="absolute bottom-0 left-0 right-0"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent blur-xl" />
                      
                      <motion.div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-8 bg-white/40 blur-xl rounded-full"
                        animate={{ 
                          opacity: [0.3, 0.8, 0.3],
                          scale: [1, 1.2, 1]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </div>
                  </motion.div>
                </div>
                
                <motion.div
                  className="absolute -left-4 top-1/4 glass-card p-4 shadow-xl"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-gray-800">۹۸٪</p>
                      <p className="text-xs text-gray-500">رضایت بیماران</p>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div
                  className="absolute -right-4 bottom-1/4 glass-card p-4 shadow-xl"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-gray-800">+۱۵ سال</p>
                      <p className="text-xs text-gray-500">تجربه درخشان</p>
                    </div>
                  </div>
                </motion.div>
              </div>
              
              <div className="absolute -inset-4 border-2 border-primary/20 rounded-[2rem] -z-10" />
              <div className="absolute -inset-8 border border-primary/10 rounded-[2.5rem] -z-10" />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
      
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-10 h-10 rounded-full border-2 border-primary/30 flex items-center justify-center">
          <ArrowDownOutlined className="text-primary" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;