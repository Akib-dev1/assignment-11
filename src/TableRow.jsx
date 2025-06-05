import React from "react";
import { Link } from "react-router";
import MyserviceUpdate from "./MyserviceUpdate";

const TableRow = ({ service, index, handleDelete }) => {
  const modalId = `modal-${service._id}`;
  const closeModal=()=>{
      document.getElementById(modalId).close();
    }
  return (
    
    <tr key={service._id}>
      <td className="font-semibold">{index + 1}</td>
      <td className="font-semibold">{service.serviceTitle}</td>
      <td className="font-semibold">{service.serviceCategory}</td>
      <td className="font-semibold">{service.companyName}</td>
      <td className="font-semibold">
        <a
          href={service.companyWebsite}
          target="_blank"
          rel="noopener noreferrer"
        >
          {service.companyWebsite}
        </a>
      </td>
      <td className="font-semibold">{service.servicePrice} $</td>
      <td className="font-semibold">{service.addedDate}</td>
      <td>
        <button
          className="btn btn-warning"
          onClick={() => document.getElementById(modalId).showModal()}
        >
          Update
        </button>
        <dialog id={modalId} className="modal">
          <div className="modal-box">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <h3 className="font-bold text-lg">Update Panel</h3>
            {<MyserviceUpdate service={service} closeModal={closeModal} />}
          </div>
        </dialog>
      </td>
      <td>
        <button
          className="btn btn-secondary"
          onClick={() => handleDelete(service._id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
