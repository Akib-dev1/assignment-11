import React from "react";
import { Link } from "react-router";

const ServiceCard = ({ service }) => {
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-sm">
        <figure>
          <img
            src={service.serviceImage}
            className="w-64 h-40 object-cover"
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{service.serviceTitle}</h2>
          <p className="text-base text-gray-600 max-w-72">{service.serviceDescription}</p>
          <p className="font-bold text-lg">Price: <span className="font-semibold">{service.servicePrice}$</span></p>
          <div className="card-actions justify-end">
            <Link to={`/servicedetails/${service._id}`} className="btn btn-primary">View Details</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
