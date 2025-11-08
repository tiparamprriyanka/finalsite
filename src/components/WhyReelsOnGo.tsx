import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Zap, Video, Scissors, Smartphone } from 'lucide-react';
import './WhyReelsOnGo.css';

const WhyReelsOnGo = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const features = [
    {
      icon: <Zap size={40} />,
      title: 'Lightning Fast Delivery',
      description: 'Get your professionally edited reels delivered in just 10 minutes'
    },
    {
      icon: <Video size={40} />,
      title: 'Professional Quality',
      description: 'Cinema-grade production quality with every single reel we create'
    },
    {
      icon: <Scissors size={40} />,
      title: 'Expert Editing',
      description: 'Our team of expert editors bring your vision to life flawlessly'
    },
    {
      icon: <Smartphone size={40} />,
      title: 'Shot on iPhone',
      description: 'Premium quality content captured using latest iPhone technology'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <section className="why-reelsongo">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">
            Why Choose <span>ReelsOnGo</span>
          </h2>
          <div className="red-separator"></div>
        </motion.div>

        <motion.div
          className="features-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card"
              variants={itemVariants}
            >
              <div className="feature-icon">
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyReelsOnGo;
