import React from "react";
import { use } from "react";
import { AuthContext } from "./AuthProvidor";
import axios from "axios";
import Swal from "sweetalert2";

const AddService = () => {
  const { user } = use(AuthContext);
  const handelSubmit = (event) => {
    event.preventDefault();
    const serviceImage = event.target.serviceImage.value;
    const serviceTitle = event.target.serviceTitle.value;
    const companyName = event.target.companyName.value;
    const companyWebsite = event.target.companyWebsite.value;
    const serviceDescription = event.target.serviceDescription.value;
    const serviceCategory = event.target.serviceCategory.value;
    const servicePrice = event.target.servicePrice.value;
    const today = new Date().toISOString().split("T")[0];
    const serviceData = {
      serviceImage,
      serviceTitle,
      companyName,
      companyWebsite,
      serviceDescription,
      serviceCategory,
      servicePrice,
      addedDate: today,
      userEmail: user?.email,
    };
    axios
      .post("https://b11a11-server-side-akib-dev1.vercel.app/services", serviceData, { withCredentials: true })
      .then((response) => {
        if (response.data.insertedId) {
          Swal.fire({
            title: "Service Added Successfully!",
            icon: "success",
            draggable: true,
          });
          event.target.reset();
        }
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: `Oops...${error.response.status}`,
          text: "Failed to add service. Please try again.",
        });
      });
  };
  return (
    <div className="w-11/12 mx-auto py-10 min-h-screen">
      <title>ServView - Add Service</title>
      <h1 className="text-4xl font-bold text-center mb-10 text-[#257459]">
        Add Your Services Here
      </h1>
      <div className="bg-[#002B36] p-10 rounded-lg shadow-lg">
        <form onSubmit={handelSubmit}>
          <div className="collapse collapse-arrow bg-base-100 border border-base-300 mb-4">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title font-semibold">Service Details</div>
            <div className="collapse-content text-sm">
              <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                <label className="label">Service Image</label>
                <input
                  type="text"
                  className="input w-full mb-2"
                  placeholder="Image URL"
                  required
                  name="serviceImage"
                />

                <label className="label">Service Title</label>
                <input
                  type="text"
                  className="input w-full mb-2"
                  placeholder="Service Title"
                  required
                  name="serviceTitle"
                />
              </fieldset>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-100 border border-base-300 mb-4">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title font-semibold">Company Details</div>
            <div className="collapse-content text-sm">
              <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                <label className="label">Company Name</label>
                <input
                  type="text"
                  className="input w-full mb-2"
                  placeholder="Company Name"
                  required
                  name="companyName"
                />

                <label className="label">Company Website</label>
                <input
                  type="text"
                  className="input w-full mb-2"
                  placeholder="Company Website URL"
                  required
                  name="companyWebsite"
                />
              </fieldset>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-100 border border-base-300 mb-4">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title font-semibold">Service Info</div>
            <div className="collapse-content text-sm">
              <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                <label className="label">Service Description</label>
                <textarea
                  className="textarea w-full mb-2"
                  placeholder="Describe your service"
                  required
                  name="serviceDescription"
                ></textarea>

                <label className="label">Service Category</label>
                <select
                  defaultValue={"1"}
                  className="select w-full mb-2"
                  required
                  name="serviceCategory"
                >
                  <option value="1" disabled>
                    Select Category
                  </option>
                  <option value="Web-Development">Web Development</option>
                  <option value="Graphic-Design">Graphic Design</option>
                  <option value="Digital-Marketing">Digital Marketing</option>
                  <option value="Content-Writing">Content Writing</option>
                </select>
                <label className="label">Service Price</label>
                <input
                  type="number"
                  className="input w-full mb-2 no-spinner"
                  placeholder="Service Price"
                  required
                  name="servicePrice"
                />
              </fieldset>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <input
              type="submit"
              value="Add Service"
              className="btn btn-success mt-4"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddService;
