import React, { use, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/grid";
import { Autoplay, Grid, Pagination, Navigation } from "swiper/modules";
import ServiceCard from "./ServiceCard";
import { motion } from "motion/react";
import CountUp from "react-countup";
import ReviewCard from "./ReviewCard";
const Home = ({ limitedServices, partners }) => {
  const services = use(limitedServices);
  const partnersData = use(partners);
  const [reviewsCount, setReviewsCount] = useState(0);
  const [reviews, setReviews] = useState([]);
  const [usersCount, setUsersCount] = useState(0);
  const [servicesCount, setServicesCount] = useState(0);
  useEffect(() => {
    fetch("https://b11a11-server-side-akib-dev1.vercel.app/services")
      .then((res) => res.json())
      .then((data) => {
        setServicesCount(data.length);
      });

    fetch("https://b11a11-server-side-akib-dev1.vercel.app/users")
      .then((res) => res.json())
      .then((data) => {
        setUsersCount(data.length);
      });

    fetch("https://b11a11-server-side-akib-dev1.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviewsCount(data.length);
        setReviews(data);
      });
  }, [servicesCount, usersCount, reviewsCount]);
  return (
    <div className="w-11/12 md:w-9/12 mx-auto">
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
        <SwiperSlide className="p-14">
          <div className="hero min-h-110 bg-[url(https://i.ibb.co/YBWLKHxg/image.png)]">
            <div className="hero-overlay"></div>
            <div className="hero-content md:justify-self-start text-neutral-content md:p-32">
              <div className="max-w-3xl">
                <h1 className="mb-5 text-xl md:text-5xl font-bold max-md:text-center">
                  Discover Trusted Services
                </h1>
                <p className="mb-5 max-md:text-center">
                  Read real reviews, compare ratings, and choose the best with
                  confidence.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="p-14">
          <div className="hero min-h-110 bg-[url(https://i.ibb.co/219VPzw7/image.png)]">
            <div className="hero-overlay"></div>
            <div className="hero-content md:justify-self-start text-neutral-content md:p-32">
              <div className="max-w-3xl">
                <h1 className="mb-5 text-xl md:text-5xl font-bold max-md:text-center">
                  Your Voice Matters
                </h1>
                <p className="mb-5 max-md:text-center">
                  Share your experience and help others find the services they
                  deserve.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="p-14">
          <div className="hero min-h-110 bg-[url(https://i.ibb.co/H3x0StT/image.png)]">
            <div className="hero-overlay"></div>
            <div className="hero-content md:justify-self-start text-neutral-content md:p-32">
              <div className="max-w-3xl">
                <h1 className="mb-5 text-xl md:text-5xl font-bold max-md:text-center">
                  Find. Review. Decide.
                </h1>
                <p className="mb-5 max-md:text-center">
                  Simplify your search with honest feedback from real users.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <h1 className="text-4xl font-bold text-center mt-10 mb-4 text-[#242B3A]">
        Featured Services
      </h1>
      <p className="text-[#656B76] text-center text-sm sm:text-base">
        Highlighted services handpicked for quality and great user reviews.
      </p>
      <div className="grid grid-cols-4 max-xl:grid-cols-2 my-10 max-md:grid-cols-1 gap-8">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
      <div className="my-10">
        <h1 className="text-3xl font-bold mb-4 text-center text-[#242B3A]">
          Meet Our Partners
        </h1>
        <p className="text-[#656B76] text-center text-sm sm:text-base">
          Trusted collaborators who help us deliver quality services and grow
          our community.
        </p>
        <div className="grid grid-cols-4 max-xl:grid-cols-2 gap-10 my-10 max-md:grid-cols-1">
          {partnersData.map((partner, index) => (
            <div key={index} className="card bg-base-100 max-w-96 shadow-sm">
              <div className="card-body">
                <div className="flex items-center gap-4">
                  <div className="avatar">
                    <div className="w-24 rounded">
                      <img src={partner.logo} />
                    </div>
                  </div>
                  <h2 className="card-title text-[#242B3A]">{partner.name}</h2>
                </div>
                <p className="text-base text-[#656B76]">
                  {partner.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <h1 className="text-3xl font-bold text-center text-[#242B3A]">
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
                <CountUp end={reviewsCount} duration={3} />
              </div>
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
              <div className="stat-title">Total Users</div>
              <div className="stat-value text-secondary">
                <CountUp end={usersCount} duration={3} />
              </div>
            </div>

            <div className="stat bg-base-300">
              <div className="stat-value">
                <CountUp end={servicesCount} duration={3} />
              </div>
              <div className="stat-title">Total Services</div>
            </div>
          </div>
        </div>
        <h1 className="text-3xl font-bold text-center text-[#242B3A]">
          Why Choose Us
        </h1>
        <div className="flex items-center my-10 gap-10 justify-center flex-wrap">
          <div className="card card-border bg-[#FFFFFF] shadow-lg text-[#242B3A] w-96">
            <div className="card-body">
              <h2 className="card-title">Trusted by Thousands</h2>
              <p className="text-justify text-[#656B76]">
                We’ve earned the trust of thousands of happy customers through
                consistent, high-quality service. Our strong track record speaks
                for itself — whether you're a new user or a returning client,
                you can count on us to deliver every time.
              </p>
            </div>
          </div>
          <div className="card card-border bg-[#FFFFFF] shadow-lg text-[#242B3A] w-96">
            <div className="card-body">
              <h2 className="card-title">Affordable Pricing</h2>
              <p className="text-justify text-[#656B76]">
                We believe great service shouldn't break the bank. That’s why we
                offer competitive pricing that gives you the best value without
                compromising on quality. Whether you're on a tight budget or
                looking for premium options, we’ve got something for everyone.
              </p>
            </div>
          </div>
          <div className="card card-border bg-[#FFFFFF] shadow-lg text-[#242B3A] w-96">
            <div className="card-body">
              <h2 className="card-title">Fast & On-Time</h2>
              <p className="text-justify text-[#656B76]">
                We understand the importance of deadlines, which is why
                punctuality is at the heart of what we do. Our team is committed
                to delivering your service quickly and efficiently — always on
                time, without sacrificing quality.
              </p>
            </div>
          </div>
        </div>
        <div className="">
          <h1 className="text-3xl font-bold text-center text-[#242B3A] mb-8">
            FAQ
          </h1>
          <div className="collapse collapse-arrow mb-4 bg-base-100 border border-base-300">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title font-semibold">
              How do I create an account?
            </div>
            <div className="collapse-content text-sm">
              Click the "Register" button in the top right corner and follow the
              registration process.
            </div>
          </div>
          <div className="collapse collapse-arrow mb-4 bg-base-100 border border-base-300">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title font-semibold">
              How do I see my services?
            </div>
            <div className="collapse-content text-sm">
              Click on "My Services" in your account dashboard to view all your
              active services.
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-100 border border-base-300">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title font-semibold">
              How do I update my reviews?
            </div>
            <div className="collapse-content text-sm">
              Go to ""My Reviews" in your account dashboard, select the review
              you want to update, and click "Edit". Make your changes and save.
            </div>
          </div>
        </div>
        <div className="my-10">
          <h1 className="text-3xl font-bold text-center text-[#242B3A] mb-8">
            Recent Reviews
          </h1>
          <div className="grid grid-cols-3 max-xl:grid-cols-2 gap-8 my-10 max-md:grid-cols-1">
            {[...reviews].reverse().slice(0, 6).map((review) => (
              <ReviewCard key={review._id} review={review} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
