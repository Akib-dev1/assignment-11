import React, { useEffect, useState } from "react";
import { useNavigation } from "react-router";
import ServiceAllCards from "./ServiceAllCards";

const Services = () => {
  const [services, setServices] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [filteredServices, setFilteredServices] = useState([]);
  useEffect(() => {
    const searchQuery = searchTerm;
    if (!searchQuery) {
      return;
    }
    const searchService = services.filter(
      (service) =>
        service.serviceTitle
          ?.toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
        service.serviceCategory
          ?.toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
        service.companyName?.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredServices(searchService);
  }, [searchTerm, services]);
  const handleSortChange = (e) => {
    const option = e.target.value;
    setSortOption(option);

    let sorted = [...filteredServices];
    if (option === "price-low") {
      sorted.sort((a, b) => a.servicePrice - b.servicePrice);
    } else if (option === "price-high") {
      sorted.sort((a, b) => b.servicePrice - a.servicePrice);
    } else if (option === "category") {
      sorted.sort((a, b) => a.serviceCategory.localeCompare(b.serviceCategory));
    }
    setFilteredServices(sorted);
  };
  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    fetch(
      `https://b11a11-server-side-akib-dev1.vercel.app/services/category/${selectedCategory}`
    )
      .then((response) => response.json())
      .then((data) => {
        setFilteredServices(data);
      });
  };
  useEffect(() => {
    fetch("https://b11a11-server-side-akib-dev1.vercel.app/services")
      .then((response) => response.json())
      .then((data) => {
        setServices(data);
        setFilteredServices(data);
      });
  }, []);
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-bars loading-xl mx-auto"></span>
      </div>
    );
  }
  return (
    <div className="md:w-9/12 w-11/12 mx-auto py-10 min-h-screen">
      <title>SerView - All Services</title>
      <div className="flex justify-center mb-4">
        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            type="search"
            value={searchTerm}
            required
            placeholder="Search"
            name="search"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </label>
      </div>
      <div className="flex max-md:flex-col justify-between md:items-center mb-4">
        <div className="flex items-center gap-4">
          <p className="md:w-full">Filter By Category: </p>
          <select
            defaultValue="1"
            className="select max-w-32 md:min-w-46"
            onChange={handleCategoryChange}
          >
            <option disabled={true} value={"1"}>
              Select Category
            </option>
            <option value="Web-Development">Web-Development</option>
            <option value="Graphic-Design">Graphic-Design</option>
            <option value="Content-Writing">Content-Writing</option>
            <option value="Digital-Marketing">Digital-Marketing</option>
          </select>
        </div>
        <div className="flex items-center gap-2 mt-4">
          <p className="md:w-full">Sort By: </p>
          <select
            value={sortOption}
            className="select w-32 md:min-w-42"
            onChange={handleSortChange}
          >
            <option disabled={true} value="">Select</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="category">Category (A–Z)</option>
          </select>
        </div>
      </div>
      <h1 className="text-4xl font-bold text-center mb-10 text-[#28283C]">
        All Services
      </h1>

      {filteredServices.length === 0 ? (
        <p className="text-center font-semibold text-4xl">No services found.</p>
      ) : (
        <div className="grid grid-cols-3 max-md:grid-cols-1 gap-8">
          {filteredServices.map((service) => (
            <ServiceAllCards key={service._id} service={service} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Services;
