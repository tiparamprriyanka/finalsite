import { useRef } from 'react';
import Slider from 'react-slick';
import { Quote } from 'lucide-react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Testimonials.css';

const Testimonials = () => {
  const sliderRef = useRef(null);

  const testimonials = [
    {
      text: "ReelsOnGo transformed my content game! The quality is outstanding and the 10-minute delivery is unbelievable. Highly recommended!",
      name: "Priya Sharma",
      role: "Fashion Influencer",
      // image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      text: "Best decision ever! Their team is incredibly professional and the reels they create are absolutely cinema-grade. Worth every penny.",
      name: "Rahul Verma",
      role: "Food Blogger",
      // image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      text: "I was skeptical about the 10-minute promise, but they delivered! The editing is top-notch and customer service is excellent.",
      name: "Ananya Iyer",
      role: "Travel Vlogger",
      // image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      text: "ReelsOnGo is a game-changer! My engagement has doubled since I started using their service. Simply the best in the business!",
      name: "Arjun Malhotra",
      role: "Fitness Coach",
      // image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      text: "Professional, fast, and creative. ReelsOnGo has helped me grow my brand exponentially. I can't imagine working with anyone else.",
      name: "Sneha Kapoor",
      role: "Lifestyle Creator",
      // image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      text: "The quality and speed are unmatched. ReelsOnGo has become an essential part of my content creation workflow. Five stars!",
      name: "Vikram Singh",
      role: "Tech Reviewer",
      // image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150"
    }
  ];

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section id="testimonials" className="testimonial">
      <div className="container">
        <h2 className="section-title">
          What Our <span>Clients Say</span>
        </h2>
        <div className="red-separator"></div>

        <div className="testimonial-slider-container">
          <Slider ref={sliderRef} {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-slide">
                <div className="testimonial_box-top">
                  <div className="testimonial_box-icon">
                    <Quote />
                  </div>
                  <div className="testimonial_box-text">
                    <p>{testimonial.text}</p>
                  </div>
                  {/* <div className="testimonial_box-img">
                    <img src={testimonial.image} alt={testimonial.name} />
                  </div> */}
                  <div className="testimonial_box-name">
                    <h4>{testimonial.name}</h4>
                  </div>
                  <div className="testimonial_box-job">
                    <p>{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
