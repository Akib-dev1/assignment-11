import React, { use, useEffect, useState } from "react";
import { AuthContext } from "./AuthProvidor";
import { Link } from "react-router";
import axios from "axios";
import Swal from "sweetalert2";

const MyServices = () => {
  const { user } = use(AuthContext);
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/services/userEmail/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, [user?.email, services]);

    const handleDelete = (id) => {
        axios.delete(`http://localhost:3000/services/${id}`)
        .then((res) => {
            if (res.data.deletedCount) {
                Swal.fire({
                    title: "Service Deleted Successfully!",
                    icon: "success",
                    draggable: true,
                });
            }
        })
    }
  return (
    <div className="w-11/12 mx-auto min-h-screen my-10">
      <h1 className="text-3xl font-bold mb-8 text-center text-[#257459]">
        My Services
      </h1>
      {services.length > 0 ? (
        <>
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <th>S/l No.</th>
                  <th>Service Title</th>
                  <th>Service Category</th>
                  <th>Company Name</th>
                  <th>Company Website</th>
                  <th>Service Price</th>
                  <th>Service Added Date</th>
                  <th>Update</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {services.map((service, index) => (
                  <tr key={service._id}>
                    <td className="font-semibold">{index + 1}</td>
                    <td className="font-semibold">{service.serviceTitle}</td>
                    <td className="font-semibold">{service.serviceCategory}</td>
                    <td className="font-semibold">{service.companyName}</td>
                    <td className="font-semibold"><a href={service.companyWebsite} target="_blank" rel="noopener noreferrer">{service.companyWebsite}</a></td>
                    <td className="font-semibold">{service.servicePrice} $</td>
                    <td className="font-semibold">{service.addedDate}</td>
                    <td>
                      <Link to={`/myservices/update/${service._id}`} className="btn btn-warning">Update</Link>
                    </td>
                    <td>
                      <button className="btn btn-secondary" onClick={() => handleDelete(service._id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <h1 className="text-3xl font-bold text-center text-[#257459]">
          No Services Found
        </h1>
      )}
    </div>
  );
};

export default MyServices;
