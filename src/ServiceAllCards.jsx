import React from "react";
import { Link } from "react-router";

const ServiceAllCards = ({ service }) => {
  return (
    <div>
      <div className="card bg-[#FFFFFF] h-full w-full shadow-lg hover:shadow-2xl transition duration-300">
        <figure className="px-10 pt-10">
          <img
            src={service.serviceImage}
            alt="Shoes"
            className="rounded-xl h-64"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-[#28283C]">{service.serviceTitle}</h2>
          <p className="text-[#74788D] text-base">{service.serviceDescription}</p>
          <p className="text-sm text-[#74788D]">
            Category: {service.serviceCategory}
          </p>
          <p className="text-xl font-bold text-[#28283C]">
            Price: ${service.servicePrice}
          </p>

          <div className="card-actions">
            <Link
              to={`/servicedetails/${service._id}`}
              className="btn bg-[#EBECED] text-[#28283C] hover:bg-[#FF008A] hover:text-white transition duration-300"
            >
              See Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceAllCards;
