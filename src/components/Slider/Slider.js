
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation"
import "swiper/css/pagination"

import "./Slider.css";

import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';


SwiperCore.use([Navigation, Pagination, Autoplay]);

const Slider = ({
  slides,
  onSlideChange = () => { },
  pagination,
  navigation,
  backgroundColor,
  className,
  slidesPerView,
  spaceBetween
}) => {
  const swiperRef = useRef(null)

  return (
    <div
      onMouseEnter={() => swiperRef.current.swiper.autoplay.stop()}
      onMouseLeave={() => swiperRef.current.swiper.autoplay.start()}
    >
      <Swiper
        ref={swiperRef}
        onSlideChange={onSlideChange}
        autoplay={{ delay: 5000 }}
        pagination={pagination ? { clickable: true } : false}
        navigation={navigation ? true : false}
        speed={1000}
        spaceBetween={spaceBetween ? spaceBetween : 50}
        slidesPerView={slidesPerView ? slidesPerView : 1}
        className="mySwiper"
        style={backgroundColor ? { backgroundColor: backgroundColor } : {}}
      >
        {slides.map((slide, index) => {
          return (
            <SwiperSlide key={index}>
              {slide.renderItem()}
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default Slider;

// // Core modules imports are same as usual
// import { Navigation, Pagination, Autoplay,EffectCube } from 'swiper';
// // Direct React component imports
// // import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';

// import { Swiper, SwiperSlide } from "swiper/react";

// // import 'swiper/swiper-bundle.css'

// import Review from '../Review/Review';



// export default () => {
//   return (
//     <Swiper
//       dir="rtl"
//       navigation={true}
//       pagination={{
//         clickable: true,
//       }}
//       modules={[Navigation, Pagination]}
//       className="mySwiper"
//     >
//       <SwiperSlide>
//         <Review></Review>
//       </SwiperSlide>
//       <SwiperSlide>
//         <Review></Review>
//       </SwiperSlide>
//       <SwiperSlide>
//         <Review></Review>
//       </SwiperSlide>
//       {/* <SwiperSlide>
//         <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
//       </SwiperSlide>
//       <SwiperSlide>
//         <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
//       </SwiperSlide>
//       <SwiperSlide>
//         <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
//       </SwiperSlide> */}
//     </Swiper>
//   );
// };