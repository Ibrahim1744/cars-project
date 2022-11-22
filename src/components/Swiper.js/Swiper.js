import React from "react";
import "./swiper.css";
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

const SwiperHome = () => {
  return (
    <>
      <div className="swiper1">
        <div className="swiper-content container">
          <div className="swiper-header">
  <h1>Why should you choose Rotana Star car rental?</h1>
          <p>
            For the most distinctive cars at competitive prices, we offer you
            the best professional service in Dubai.
          </p>
          <p>
            Our luxury car fleet is reliable, in perfect condition, and most
            importantly fairly priced. We believe that everyone should have the
            chance to live the fantasy of being rich and extravagant when they
            visit Dubai. We can bet you that, with no compromise on quality, you
            will not find a better price at any other Dubai car rental agency.
          </p>
          <p>
          <span> Are you ready for the Star experience?</span>  Live the dream: Rent your
            luxury car online?
          </p>
          <p>
            Make unforgettable memories during your trip to Dubai by booking
            your luxury Rotana Star vehicle today at Rotanastar.ae New cars and
            new promotions are constantly updated so make sure to check the
            website regularly for the best deals.
          </p>
          <p>It’s simple to book:</p>
          <p>1. Select your desired car from the list</p>
          <p>2. Add to cart</p>
          <p>3. Fill the details with special requests</p>
          <p>4. Pay</p>
          <p>5. Receive a booking confirmation</p>
          <p>6. Get 24/7 assistance by phone or WhatsApp</p>
          </div>
          <div className="cars-swiper">
        <Swiper
      spaceBetween={20}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><img src="https://www.rotanastar.ae/wp-content/uploads/2021/05/main-10-300x250.png" alt="" /></SwiperSlide>
      <SwiperSlide><img src="https://www.rotanastar.ae/wp-content/uploads/2021/05/main-09-300x250.png" alt="" /></SwiperSlide>
      <SwiperSlide><img src="https://www.rotanastar.ae/wp-content/uploads/2021/05/main-08-300x250.png" alt="" /></SwiperSlide>
      <SwiperSlide><img src="https://www.rotanastar.ae/wp-content/uploads/2021/05/main-03-1-300x250.png" alt="" /></SwiperSlide>
      <SwiperSlide><img src="https://www.rotanastar.ae/wp-content/uploads/2021/05/main-04-300x250.png" alt="" /></SwiperSlide>
      <SwiperSlide><img src="https://www.rotanastar.ae/wp-content/uploads/2021/05/main-07-300x250.png" alt="" /></SwiperSlide>
      <SwiperSlide><img src="https://www.rotanastar.ae/wp-content/uploads/2021/05/main-06-300x250.png" alt="" /></SwiperSlide>
    </Swiper>
        </div>
        </div>
        
      </div>
    </>
  );
};

export default SwiperHome;
