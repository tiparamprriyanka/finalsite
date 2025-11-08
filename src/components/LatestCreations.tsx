// import { motion } from 'framer-motion';
// import { useInView } from 'framer-motion';
// import { useRef } from 'react';
// import { Instagram } from 'lucide-react';
// import './LatestCreations.css';

// const LatestCreations = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: '-100px' });

//   return (
//     <section className="latest-creations">
//       <div className="container">
//         <motion.div
//           ref={ref}
//           initial={{ opacity: 0, y: 50 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.8 }}
//         >
//           <h2 className="section-title">
//             Our Latest <span>Creations</span>
//           </h2>
//           <div className="red-separator"></div>

//           <div className="instagram-feed-placeholder">
//             <div className="instagram-grid">
//               {[1, 2, 3, 4, 5, 6].map((item) => (
//                 <div key={item} className="instagram-item">
//                   <div className="instagram-overlay">
//                     <Instagram size={40} />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="instagram-button-container">
//             <button
//               className="btn-primary"
//               onClick={() => window.open('https://instagram.com', '_blank')}
//             >
//               <Instagram size={20} style={{ marginRight: '10px' }} />
//               View on Instagram
//             </button>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default LatestCreations;



import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Local videos (from src/assets)
import video1 from "../assets/reel1.mp4";
import video2 from "../assets/reel2.mp4";
import video3 from "../assets/reel3.mp4";
import video4 from "../assets/reel4.mp4";
import video5 from "../assets/reel5.mp4";

import './LatestCreations.css';

interface VideoItem {
  id: number;
  src: string;
}

const LatestCreations: React.FC = () => {
  const videos: VideoItem[] = [
    { id: 1, src: video1 },
    { id: 2, src: video2 },
    { id: 3, src: video3 },
    { id: 4, src: video4 },
    { id: 5, src: video5 }
  ];

  return (
    <section className="latest-creations-section" id="latest-creations">
      <h2 className="latest-title">Our Latest Creations</h2>
      <p className="latest-subtitle">
        Experience the magic of our professional reel creation
      </p>

      <div className="slider-wrap">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={3}
          spaceBetween={28}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 16 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 28 },
          }}
          className="latest-swiper"
        >
          {videos.map((video) => (
            <SwiperSlide key={video.id} className="video-slide">
              <video
                src={video.src}
                muted
                loop
                autoPlay
                playsInline
                className="video-item"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default LatestCreations;
