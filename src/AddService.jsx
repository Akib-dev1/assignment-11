import React from "react";

const AddService = () => {
  return (
    <div className="w-11/12 mx-auto py-10 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-10 text-[#257459]">
        Add Your Services Here
      </h1>
      <div className="bg-[#002B36] p-10 rounded-lg shadow-lg">
        <form>
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
                />

                <label className="label">Service Title</label>
                <input
                  type="text"
                  className="input w-full mb-2"
                  placeholder="Service Title"
                  required
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
                />

                <label className="label">Company Website</label>
                <input
                  type="text"
                  className="input w-full mb-2"
                  placeholder="Company Website URL"
                  required
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
                ></textarea>

                <label className="label">Service Category</label>
                <select
                  defaultValue={"1"}
                  className="select w-full mb-2"
                  required
                >
                  <option value="1" disabled>
                    Select Category
                  </option>
                  <option value="web-development">Web Development</option>
                  <option value="graphic-design">Graphic Design</option>
                  <option value="digital-marketing">Digital Marketing</option>
                  <option value="content-writing">Content Writing</option>
                </select>
                <label className="label">Service Price</label>
                <input
                  type="number"
                  className="input w-full mb-2"
                  placeholder="Service Price"
                  required
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
