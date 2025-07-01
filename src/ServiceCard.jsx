import React from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
const ServiceCard = ({ service }) => {
  return (
    <div>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 1 }}
        className="card cursor-pointer bg-[#FFFFFF] h-full w-full shadow-lg hover:shadow-2xl transition duration-300"
      >
        <div className="card-body">
          <h2 className="card-title text-[#28283C]">{service.serviceTitle}</h2>
          <p className="text-[#74788D]">{service.serviceDescription}</p>
          <p className="font-bold text-lg text-[#28283C]">
            Price:{" "}
            <span className="font-semibold">{service.servicePrice}$</span>
          </p>
          <Link to={`/servicedetails/${service._id}`} className="btn bg-[#EBECED] text-[#28283C] hover:bg-[#FF008A] hover:text-white transition duration-300">
            See Details
          </Link>
        </div>
        <figure>
          <img
            src={service.serviceImage}
            className="w-full h-42 object-cover"
            alt="Shoes"
          />
        </figure>
      </motion.div>
    </div>
  );
};

export default ServiceCard;
