import React from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
const ServiceCard = ({ service }) => {
  return (
    <div>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 1 }}
        className="card cursor-pointer bg-[#94D2BD] w-full shadow-sm"
      >
        <div className="card-body">
          <h2 className="card-title">{service.serviceTitle}</h2>
          <p>{service.serviceDescription}</p>
          <p className="font-bold text-lg">
            Price:{" "}
            <span className="font-semibold">{service.servicePrice}$</span>
          </p>
          <Link to={`/servicedetails/${service._id}`} className="btn btn-info">
            View Details
          </Link>
        </div>
        <figure>
          <img
            src={service.serviceImage}
            className="w-full h-64 object-cover"
            alt="Shoes"
          />
        </figure>
      </motion.div>
    </div>
  );
};

export default ServiceCard;
