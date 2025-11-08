import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Camera, Film, Sparkles, TrendingUp, Users, Megaphone } from 'lucide-react';
import './Services.css';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const services = [
    {
      icon: <Camera size={36} />,
      title: 'Professional Shooting',
      description: 'High-quality video capture with professional equipment and expert cinematographers'
    },
    {
      icon: <Film size={36} />,
      title: 'Advanced Editing',
      description: 'Cinema-grade editing with color grading, transitions, and visual effects'
    },
    {
      icon: <Sparkles size={36} />,
      title: 'Creative Direction',
      description: 'Expert guidance on concepts, themes, and storytelling for maximum impact'
    },
    {
      icon: <TrendingUp size={36} />,
      title: 'Trend Analysis',
      description: 'Stay ahead with trending formats, sounds, and viral content strategies'
    },
    {
      icon: <Users size={36} />,
      title: 'Brand Collaborations',
      description: 'Connect with brands and monetize your content with our partnership network'
    },
    {
      icon: <Megaphone size={36} />,
      title: 'Social Media Growth',
      description: 'Proven strategies to grow your followers and boost engagement rates'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99] as [number, number, number, number]
      }
    }
  };

  return (
    <section id="services" className="services">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">
            Our <span>Services</span>
          </h2>
          <div className="red-separator"></div>
        </motion.div>

        <motion.div
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              variants={itemVariants}
            >
              <div className="service-icon-wrapper">
                <div className="service-icon">
                  {service.icon}
                </div>
                <div className="service-accent-line"></div>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
