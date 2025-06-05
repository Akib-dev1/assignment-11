import React, { use, useEffect, useState } from "react";
import { AuthContext } from "./AuthProvidor";
import { Link } from "react-router";
import axios from "axios";
import Swal from "sweetalert2";
import TableRow from "./TableRow";

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
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:3000/services/${id}`).then((res) => {
          if (res.data.deletedCount) {
            Swal.fire({
              title: "Service Deleted Successfully!",
              icon: "success",
              draggable: true,
            });
          }
        });
      }
    });
  };
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
                  <TableRow
                    key={service._id}
                    service={service}
                    index={index}
                    handleDelete={handleDelete}
                  />
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
