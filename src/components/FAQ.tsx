import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Plus, Minus } from 'lucide-react';
import './FAQ.css';

const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How fast can you really deliver a reel?',
      answer: 'We deliver professionally edited reels in just 10 minutes! Our team of expert editors works in real-time to ensure you get high-quality content at lightning speed.'
    },
    {
      question: 'What equipment do you use for shooting?',
      answer: 'We use the latest iPhone models for shooting, ensuring professional 4K quality with advanced stabilization and cinematic effects. Our equipment delivers cinema-grade results every time.'
    },
    {
      question: 'How many revisions do I get?',
      answer: 'The number of revisions depends on your chosen plan. Starter includes 1 revision, Pro includes 3 revisions, and Premium offers unlimited revisions until you\'re 100% satisfied.'
    },
    {
      question: 'Can you handle multiple reels for an event?',
      answer: 'Absolutely! We specialize in event coverage and can deliver multiple reels throughout your event. Contact us to discuss bulk packages and special event rates.'
    },
    {
      question: 'Do you provide music and captions?',
      answer: 'Yes! Our Pro and Premium plans include trending music selection and professional captions. We stay updated with the latest trends to maximize your engagement.'
    },
    {
      question: 'What types of events do you cover?',
      answer: 'We cover all types of events including weddings, birthdays, corporate events, product launches, fashion shows, and more. No event is too big or too small for ReelsOnGo!'
    }
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">
            Frequently Asked <span>Questions</span>
          </h2>
          <div className="red-separator"></div>
        </motion.div>

        <div className="faq-container">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div
                className="faq-question"
                onClick={() => toggleAccordion(index)}
              >
                <h3>{faq.question}</h3>
                <div className="faq-icon">
                  {activeIndex === index ? <Minus size={24} /> : <Plus size={24} />}
                </div>
              </div>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    className="faq-answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
