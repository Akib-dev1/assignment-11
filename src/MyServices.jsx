import React, { use, useEffect, useState } from "react";
import { AuthContext } from "./AuthProvidor";
import { Link, useNavigation } from "react-router";
import axios from "axios";
import Swal from "sweetalert2";
import TableRow from "./TableRow";

const MyServices = () => {
  const { user } = use(AuthContext);
  const navigation = useNavigation();
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch(`https://b11a11-server-side-akib-dev1.vercel.app/services/userEmail/${user?.email}`)
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
        axios.delete(`https://b11a11-server-side-akib-dev1.vercel.app/services/${id}`, { withCredentials: true }).then((res) => {
          if (res.data.deletedCount) {
            Swal.fire({
              title: "Service Deleted Successfully!",
              icon: "success",
              draggable: true,
            });
          }
        })
        .catch((error) => {
          Swal.fire({
            icon: "error",
            title: `Oops...${error.response.status}`,
            text: "Failed to delete service. Please try again.",
          });
        });
      }
    });
  };
  if (navigation.state === "loading") {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-bars loading-xl mx-auto"></span>
      </div>
    );
  }
  return (
    <div className="w-11/12 md:w-9/12 mx-auto min-h-screen my-10">
      <title>ServView - My Services</title>
      <h1 className="text-3xl font-bold mb-8 dark:text-white text-center text-[#242B3A]">
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
        <h1 className="text-3xl font-bold text-center text-[#242B3A]">
          No Services Found
        </h1>
      )}
    </div>
  );
};

export default MyServices;
