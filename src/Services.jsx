import React, { useEffect, useState } from "react";
import { useNavigation } from "react-router";
import ServiceAllCards from "./ServiceAllCards";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/services")
      .then((response) => response.json())
      .then((data) => {
        setServices(data);
      });
  }, [services]);
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-bars loading-xl mx-auto"></span>
      </div>
    );
  }
  return (
    <div className="w-11/12 mx-auto py-10 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-10 text-[#257459]">
        All Services
      </h1>
      <div className="grid grid-cols-3 max-md:grid-cols-1 gap-8">
        {services.map((service) => (
          <ServiceAllCards key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
