import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    eventType: '',
    eventDate: '',
    eventLocation: ''
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name || !formData.mobile || !formData.eventType || !formData.eventDate || !formData.eventLocation) {
      alert('Please fill in all fields');
      return;
    }

    const message = `New ReelsOnGo Enquiry%0AName: ${formData.name}%0AMobile: ${formData.mobile}%0AEvent Type: ${formData.eventType}%0AEvent Date: ${formData.eventDate}%0AEvent Location: ${formData.eventLocation}`;

    const whatsappURL = `https://wa.me/917416167851?text=${message}`;

    window.open(whatsappURL, '_blank');

    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);

    setFormData({
      name: '',
      mobile: '',
      eventType: '',
      eventDate: '',
      eventLocation: ''
    });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">
            Get In <span>Touch</span>
          </h2>
          <div className="red-separator"></div>
        </motion.div>

        <motion.div
          className="contact-form-wrapper"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="tel"
                name="mobile"
                placeholder="Mobile Number"
                value={formData.mobile}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <select
                name="eventType"
                value={formData.eventType}
                onChange={handleChange}
                required
              >
                <option value="">Select Event Type</option>
                <option value="Wedding">Wedding</option>
                <option value="Birthday">Birthday</option>
                <option value="Corporate">Corporate Event</option>
                <option value="Product Launch">Product Launch</option>
                <option value="Fashion Show">Fashion Show</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <input
                type="date"
                name="eventDate"
                placeholder="Event Date"
                value={formData.eventDate}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                name="eventLocation"
                placeholder="Event Location"
                value={formData.eventLocation}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="btn-primary">
              <Send size={40} style={{ marginRight: '10px' }} />
             Lets Connect
            </button>

            {showSuccess && (
              <div className="success-message">
                Message sent via WhatsApp!
              </div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
