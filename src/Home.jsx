import React, { use } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import ServiceCard from "./ServiceCard";
import { motion } from "motion/react";
import CountUp from "react-countup";
const Home = ({ limitedServices, partners }) => {
  const services = use(limitedServices);
  const partnersData = use(partners);
  return (
    <div className="w-11/12 mx-auto">
      <title>ServView - Home</title>
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
          <div className="hero min-h-110 bg-[url('./assets/hero1.gif')]">
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">
                  Discover Trusted Services
                </h1>
                <p className="mb-5">
                  Read real reviews, compare ratings, and choose the best with
                  confidence.
                </p>
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="p-10">
          <div className="hero min-h-110 bg-[url('./assets/hero2.gif')]">
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Your Voice Matters</h1>
                <p className="mb-5">
                  Share your experience and help others find the services they
                  deserve.
                </p>
                <button className="btn btn-primary">Write a Review</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="p-10">
          <div className="hero min-h-110 bg-[url('./assets/hero3.gif')]">
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">
                  Find. Review. Decide.
                </h1>
                <p className="mb-5">
                  Simplify your search with honest feedback from real users.
                </p>
                <button className="btn btn-primary">Explore Now</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <motion.h1
        animate={{
          color: [
            "#FF0000",
            "#FF7F00",
            "#FFFF00",
            "#00FF00",
            "#0000FF",
            "#4B0082",
            "#8B00FF",
          ],
          scale: [1, 1.05, 1],
          transition: {
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
          },
        }}
        className="text-4xl font-bold text-center my-10 text-[#257459]"
      >
        Featured Services
      </motion.h1>
      <div className="grid grid-cols-3 my-10 max-md:grid-cols-1 gap-8">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
      <div className="my-10">
        <h1 className="text-3xl font-bold text-center text-[#257459]">
          Meet Our Partners
        </h1>
        <div className="grid grid-cols-3 gap-10 my-10 max-md:grid-cols-1">
          {partnersData.map((partner, index) => (
            <div key={index} className="card bg-accent w-full shadow-sm">
              <figure>
                <img src={partner.logo} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{partner.name}</h2>
                <p>{partner.description}</p>
              </div>
            </div>
          ))}
        </div>
        <h1 className="text-3xl font-bold text-center text-[#257459]">
          Our Achievements
        </h1>
        <div className="flex justify-center my-10">
          <div className="stats shadow">
            <div className="stat bg-base-300">
              <div className="stat-figure text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-8 w-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  ></path>
                </svg>
              </div>
              <div className="stat-title">Total Page Reviews</div>
              <div className="stat-value text-primary">
                <CountUp end={25600} duration={3} />
              </div>
              <div className="stat-desc">21% more than last month</div>
            </div>

            <div className="stat bg-base-300">
              <div className="stat-figure text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-8 w-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
                </svg>
              </div>
              <div className="stat-title">Page Views</div>
              <div className="stat-value text-secondary">
                <CountUp end={2600000} duration={3} />
              </div>
              <div className="stat-desc">21% more than last month</div>
            </div>

            <div className="stat bg-base-300">
              <div className="stat-value">
                <CountUp end={86} duration={3} />%
              </div>
              <div className="stat-title">Services done</div>
              <div className="stat-desc text-secondary">
                31 services remaining
              </div>
            </div>
          </div>
        </div>
        <h1 className="text-3xl font-bold text-center text-[#257459]">
          Why Choose Us
        </h1>
        <div className="flex items-center my-10 gap-10 justify-center flex-wrap">
          <div className="card card-border bg-info w-96">
            <div className="card-body">
              <h2 className="card-title">Trusted by Thousands</h2>
              <p className="text-justify">
                We’ve earned the trust of thousands of happy customers through consistent, high-quality service. Our strong track record speaks for itself — whether you're a new user or a returning client, you can count on us to deliver every time.
              </p>
            </div>
          </div>
          <div className="card card-border bg-info w-96">
            <div className="card-body">
              <h2 className="card-title">Affordable Pricing</h2>
              <p className="text-justify">
                We believe great service shouldn't break the bank. That’s why we offer competitive pricing that gives you the best value without compromising on quality. Whether you're on a tight budget or looking for premium options, we’ve got something for everyone.
              </p>
            </div>
          </div>
          <div className="card card-border bg-info w-96">
            <div className="card-body">
              <h2 className="card-title">Fast & On-Time</h2>
              <p className="text-justify">
                We understand the importance of deadlines, which is why punctuality is at the heart of what we do. Our team is committed to delivering your service quickly and efficiently — always on time, without sacrificing quality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
