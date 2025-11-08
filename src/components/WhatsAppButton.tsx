import { MessageCircle } from 'lucide-react';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  const handleClick = () => {
    window.open('https://wa.me/917416167851', '_blank');
  };

  return (
    <div className="whatsapp-button" onClick={handleClick}>
      <MessageCircle size={28} />
    </div>
  );
};

export default WhatsAppButton;
