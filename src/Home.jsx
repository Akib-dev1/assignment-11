import React, { use } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import ServiceCard from "./ServiceCard";
const Home = ({ limitedServices }) => {
  const services=use(limitedServices);
  return (
    <div className="w-11/12 mx-auto">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="p-10">
          <div
            className="hero min-h-110 bg-[url('./assets/hero1.gif')]"
          >
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Discover Trusted Services</h1>
                <p className="mb-5">
                  Read real reviews, compare ratings, and choose the best with confidence.
                </p>
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="p-10">
          <div
            className="hero min-h-110 bg-[url('./assets/hero2.gif')]"
          >
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Your Voice Matters</h1>
                <p className="mb-5">
                  Share your experience and help others find the services they deserve.
                </p>
                <button className="btn btn-primary">Write a Review</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="p-10">
          <div
            className="hero min-h-110 bg-[url('./assets/hero3.gif')]"
          >
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Find. Review. Decide.</h1>
                <p className="mb-5">
                  Simplify your search with honest feedback from real users.
                </p>
                <button className="btn btn-primary">Explore Now</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <h1 className="text-4xl font-bold text-center my-10 text-[#257459]">
        Our Services
      </h1>
      <div className="grid grid-cols-2 my-10 max-md:grid-cols-1 gap-5">
        {
          services.map(service=><ServiceCard key={service._id} service={service} />)
        }
      </div>
    </div>
  );
};

export default Home;
