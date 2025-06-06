import React from "react";
import { Link } from "react-router";

const ServiceAllCards = ({ service }) => {
  return (
    <div>
      <div className="card bg-[#94D2BD] w-full shadow-sm">
        <figure className="px-10 pt-10">
          <img src={service.serviceImage} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{service.serviceTitle}</h2>
          <p>{service.serviceDescription}</p>
          <p className="text-xl font-bold text-[#257459]">
            Price: ${service.servicePrice}
          </p>
          <p className="text-sm text-gray-600">
            Category: {service.serviceCategory}
          </p>
          <div className="card-actions">
            <Link
              to={`/servicedetails/${service._id}`}
              className="btn btn-primary"
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
