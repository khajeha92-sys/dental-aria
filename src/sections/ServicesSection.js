import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, Tag } from 'antd';
import { 
  ExperimentOutlined, 
  MedicineBoxOutlined, 
  ScanOutlined,
  SmileOutlined,
  ToolOutlined,
  HeartOutlined,
  ArrowLeftOutlined
} from '@ant-design/icons';

const ServicesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const services = [
    {
      icon: <ExperimentOutlined className="text-4xl" />,
      title: 'ایمپلنت دندان',
      description: 'با استفاده از پیشرفته‌ترین تکنولوژی‌های روز دنیا، ایمپلنت‌هایی با دوام و طبیعی ارائه می‌دهیم.',
      color: 'from-primary to-primary-dark',
      bgColor: 'bg-primary/5',
      borderColor: 'border-primary/20',
      tag: 'پرفروش‌ترین',
      tagColor: 'success',
    },
    {
      icon: <SmileOutlined className="text-4xl" />,
      title: 'اصلاح طرح لبخند',
      description: 'طراحی لبخند اختصاصی با توجه به فرم صورت و ویژگی‌های منحصر به فرد شما.',
      color: 'from-secondary to-secondary-dark',
      bgColor: 'bg-secondary/5',
      borderColor: 'border-secondary/20',
      tag: 'محبوب',
      tagColor: 'processing',
    },
    {
      icon: <ScanOutlined className="text-4xl" />,
      title: 'رادیولوژی دیجیتال',
      description: 'تصویربرداری پیشرفته با حداقل اشعه برای تشخیص دقیق‌تر و سریع‌تر.',
      color: 'from-amber-400 to-amber-600',
      bgColor: 'bg-amber-50',
      borderColor: 'border-amber-200',
      tag: 'جدید',
      tagColor: 'warning',
    },
    {
      icon: <MedicineBoxOutlined className="text-4xl" />,
      title: 'جراحی فک و صورت',
      description: 'جراحی‌های تخصصی با تجهیزات مدرن و تیم پزشکی مجرب و متبحر.',
      color: 'from-rose-400 to-rose-600',
      bgColor: 'bg-rose-50',
      borderColor: 'border-rose-200',
      tag: 'تخصصی',
      tagColor: 'error',
    },
    {
      icon: <ToolOutlined className="text-4xl" />,
      title: 'ارتودنسی نامرئی',
      description: 'اصلاح نامرتبی دندان‌ها با استفاده از الاینرهای شفاف و نامرئی.',
      color: 'from-violet-400 to-violet-600',
      bgColor: 'bg-violet-50',
      borderColor: 'border-violet-200',
      tag: 'محبوب',
      tagColor: 'processing',
    },
    {
      icon: <HeartOutlined className="text-4xl" />,
      title: 'دندانپزشکی زیبایی',
      description: 'ونیر، لمینت و سفید کردن دندان برای داشتن لبخندی درخشان و زیبا.',
      color: 'from-pink-400 to-pink-600',
      bgColor: 'bg-pink-50',
      borderColor: 'border-pink-200',
      tag: 'پرفروش‌ترین',
      tagColor: 'success',
    },
  ];

  return (
    <section id="services" className="section-padding bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            خدمات ما
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-800 mb-4">
            همه چیز برای <span className="gradient-text">لبخند</span> شما
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            مجموعه کامل خدمات دندانپزشکی با استفاده از جدیدترین تکنولوژی‌ها و تجهیزات پیشرفته
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Card
                className={`h-full border-2 ${service.borderColor} ${service.bgColor} hover:shadow-xl transition-all duration-500 group cursor-pointer overflow-hidden`}
                bodyStyle={{ padding: '28px' }}
              >
                <div className="flex flex-col h-full">
                  <motion.div 
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} text-white flex items-center justify-center mb-5 shadow-lg`}
                    animate={hoveredIndex === index ? { rotate: [0, -10, 10, 0], scale: 1.1 } : {}}
                    transition={{ duration: 0.5 }}
                  >
                    {service.icon}
                  </motion.div>
                  
                  <Tag color={service.tagColor} className="self-start mb-3 rounded-full px-3 py-0.5 text-xs font-semibold">
                    {service.tag}
                  </Tag>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-500 text-sm leading-relaxed flex-grow mb-4">
                    {service.description}
                  </p>
                  
                  <motion.div 
                    className="flex items-center gap-2 text-primary font-semibold text-sm"
                    animate={hoveredIndex === index ? { x: -5 } : { x: 0 }}
                  >
                    <span>مشاهده جزئیات</span>
                    <ArrowLeftOutlined className="group-hover:-translate-x-1 transition-transform" />
                  </motion.div>
                </div>
                
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`} />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;