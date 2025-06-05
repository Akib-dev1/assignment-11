import axios from "axios";
import React from "react";
import { useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";

const MyserviceUpdate = () => {
  const data = useLoaderData();
  const navigate=useNavigate();
  const handelSubmit = (event,id) => {
    event.preventDefault();
    const serviceImage = event.target.serviceImage.value;
    const serviceTitle = event.target.serviceTitle.value;
    const companyName = event.target.companyName.value;
    const companyWebsite = event.target.companyWebsite.value;
    const serviceDescription = event.target.serviceDescription.value;
    const serviceCategory = event.target.serviceCategory.value;
    const servicePrice = event.target.servicePrice.value;
    const serviceData = {
      serviceImage,
      serviceTitle,
      companyName,
      companyWebsite,
      serviceDescription,
      serviceCategory,
      servicePrice,
    };
    axios.put(
      `http://localhost:3000/services/${id}`,
      serviceData
    ).then((res) => {
      if (res.data.modifiedCount) {
        navigate("/myservices");
        Swal.fire({
          title: "Service Updated Successfully!",
          icon: "success",
          draggable: true,
        });
      }
    });
  };
  return (
    <div className="w-11/12 mx-auto min-h-screen my-10">
      <div className="bg-[#002B36] p-10 rounded-lg shadow-lg">
        <form onSubmit={(event) => handelSubmit(event, data._id)}>
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
                  defaultValue={data.serviceImage}
                  name="serviceImage"
                />

                <label className="label">Service Title</label>
                <input
                  type="text"
                  className="input w-full mb-2"
                  placeholder="Service Title"
                  required
                  defaultValue={data.serviceTitle}
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
                  defaultValue={data.companyName}
                  required
                  name="companyName"
                />

                <label className="label">Company Website</label>
                <input
                  type="text"
                  className="input w-full mb-2"
                  placeholder="Company Website URL"
                  required
                  defaultValue={data.companyWebsite}
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
                  defaultValue={data.serviceDescription}
                  name="serviceDescription"
                ></textarea>

                <label className="label">Service Category</label>
                <select
                  defaultValue={data.serviceCategory}
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
                  defaultValue={data.servicePrice}
                  name="servicePrice"
                />
              </fieldset>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <input
              type="submit"
              value="Update Service"
              className="btn btn-success mt-4"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default MyserviceUpdate;
