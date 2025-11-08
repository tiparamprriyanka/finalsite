// import { motion } from 'framer-motion';
// import { useInView } from 'framer-motion';
// import { useRef } from 'react';
// import { Check } from 'lucide-react';
// import './Pricing.css';

// const Pricing = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: '-100px' });

//   const plans = [
//     {
//       name: 'Starter',
//       price: '₹999',
//       period: 'per reel',
//       popular: false,
//       features: [
//         '10-minute delivery',
//         'Professional editing',
//         'HD quality',
//         'Basic transitions',
//         '1 revision'
//       ]
//     },
//     {
//       name: 'Pro',
//       price: '₹1,999',
//       period: 'per reel',
//       popular: true,
//       features: [
//         '10-minute delivery',
//         'Expert editing',
//         '4K quality',
//         'Advanced effects',
//         '3 revisions',
//         'Music & captions'
//       ]
//     },
//     {
//       name: 'Premium',
//       price: '₹3,499',
//       period: 'per reel',
//       popular: false,
//       features: [
//         '5-minute delivery',
//         'Premium editing',
//         '4K quality',
//         'Custom effects',
//         'Unlimited revisions',
//         'Music & captions',
//         'Priority support'
//       ]
//     }
//   ];

//   return (
//     <section id="pricing" className="pricing">
//       <div className="container">
//         <motion.div
//           ref={ref}
//           initial={{ opacity: 0, y: 50 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.8 }}
//         >
//           <h2 className="section-title">
//             Best <span>Sellers</span>
//           </h2>
//           <div className="red-separator"></div>
//         </motion.div>

//         <div className="pricing-grid">
//           {plans.map((plan, index) => (
//             <motion.div
//               key={index}
//               className={`pricing-card ${plan.popular ? 'popular' : ''}`}
//               initial={{ opacity: 0, y: 50 }}
//               animate={isInView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.6, delay: index * 0.2 }}
//             >
//               {plan.popular && <div className="popular-badge">Most Popular</div>}

//               <h3>{plan.name}</h3>
//               <div className="price">
//                 <span className="amount">{plan.price}</span>
//                 <span className="period">/{plan.period}</span>
//               </div>

//               <ul className="features-list">
//                 {plan.features.map((feature, idx) => (
//                   <li key={idx}>
//                     <Check size={20} />
//                     <span>{feature}</span>
//                   </li>
//                 ))}
//               </ul>

//               <button
//                 className="btn-primary"
//                 onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
//               >
//                 Get Started
//               </button>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Pricing;


import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";
import "./Pricing.css";

const Pricing = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const plans = [
    {
      title: "Hourly Plan",
      subtitle: "FAST, FLEXIBLE, AND IMPACTFUL",
      description:
        "Perfect for people who want a single, fast, high quality reel.",
      oldPrice: "₹2,399",
      newPrice: "₹1,999",
      features: [
        "1 Hour Shoot",
        "1 Edited Reel Delivered",
        "1 Reel Maker Onsite",
        "Shot on Latest iPhones",
        "Watermark Included",
      ],
      buttonText: "Book Your Session",
    },
    {
      title: "Half Day Plan",
      subtitle: "Built for Events",
      description:
        "Quick, high quality coverage for events and social media delivered fast.",
      oldPrice: "₹5,999",
      newPrice: "₹4,999",
      features: [
        "Up to 3 Hours Shoot",
        "3 Edited Reels Delivered",
        "1 Reel Maker Onsite",
        "Raw Footage Access",
        "Shot on Latest iPhones",
        "Watermark Included",
      ],
      buttonText: "Book Your Session",
    },
  ];

  return (
    <section id="pricing" className="pricing-section">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="pricing-header"
      >
        <h2 className="pricing-title">Best Sellers</h2>
      </motion.div>

      <div className="pricing-container">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            className="pricing-card"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: index * 0.2 }}
          >
            <h3 className="plan-title">{plan.title}</h3>
            <p className="plan-subtitle">{plan.subtitle}</p>
            <p className="plan-desc">{plan.description}</p>

            <div className="price-box">
              <span className="old-price">WAS {plan.oldPrice}</span>
              <h2 className="new-price">{plan.newPrice}</h2>
            </div>

            <div className="divider"></div>

            <ul className="features">
              {plan.features.map((feature, i) => (
                <li key={i}>
                  <Check size={18} />
                  {feature}
                </li>
              ))}
            </ul>

            <motion.button
              className="book-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {plan.buttonText} →
            </motion.button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
