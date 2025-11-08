import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  // const stats = [
  //   { number: '5000+', label: 'Reels Created' },
  //   { number: '98%', label: 'Client Satisfaction' },
  //   { number: '24/7', label: 'Support' }
  // ];

  return (
    <section id="home" className="hero">
      <div className="hero-video-bg">
        <div className="hero-overlay"></div>
      </div>

      <div className="container">
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="hero-title"
          >
            The Fastest Professional<br />
            <span>Reel Service</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="hero-subtitle"
          >
            We Shoot • Edit • Deliver Reels in 10 Minutes
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="hero-buttons"
          >
            <button
              className="btn-primary"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Book Now
            </button>
            <button
              className="btn-outline"
              onClick={() => window.open('https://wa.me/917416167851?text=I%20want%20to%20become%20a%20creator', '_blank')}
            >
              Become a Creator
            </button>
          </motion.div>

          {/* <div className="hero-stats">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1, ease: 'easeOut' }}
                className="stat-badge"
              >
                <h3>{stat.number}</h3>
                <p>{stat.label}</p>
              </motion.div>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
