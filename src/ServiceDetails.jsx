import React, { use, useEffect, useState } from "react";
import { Link, useLoaderData, useNavigation } from "react-router";
import { Rating } from "@smastrom/react-rating";
import Swal from "sweetalert2";
import "@smastrom/react-rating/style.css";
import { AuthContext } from "./AuthProvidor";
import axios from "axios";
import ReviewCard from "./ReviewCard";

const ServiceDetails = () => {
  const [rating, setRating] = useState(0);
  const { user } = use(AuthContext);
  const serviceData = useLoaderData();
  const navigation = useNavigation();
  const today = new Date().toISOString().split("T")[0];
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/reviews/for/${serviceData._id}`)
      .then((response) => response.json())
      .then((data) => {
        setReviews(data);
      });
  }, [serviceData._id,reviews]);

  const handleClick = () => {
    if (user) {
      document.getElementById("my_modal_3").showModal();
    } else {
      Swal.fire({
        icon: "error",
        title: "Login Required",
        text: "You need to login to add a review.",
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const reviewText = event.target.review.value;
    const ratingStar = rating;
    const reviewFor = serviceData._id;
    const userImage = user?.photoURL;
    const userName = user?.displayName;
    const userEmail = user?.email;
    const reviewData = {
      reviewText,
      userEmail,
      ratingStar,
      reviewFor,
      userImage,
      userName,
      reviewDate: today,
    };
    axios
      .post("http://localhost:3000/reviews", reviewData)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            title: "Review Added Successfully!",
            icon: "success",
            draggable: true,
          });
          event.target.reset();
          setRating(0);
          document.getElementById("my_modal_3").close();
        }
      })
      .catch((error) => {
        Swal.fire({
          title: "Error Adding Review. Error Code: " + error.response.status,
          icon: "error",
          text: "Something went wrong!",
        });
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
    <div className="w-11/12 mx-auto py-10 min-h-screen">
      <div className="card bg-[#257459] text-white w-full">
        <div className="card-body">
          <h2 className="card-title">
            Service Title:{" "}
            <span className="font-normal">{serviceData.serviceTitle}</span>
          </h2>
          <p className="text-base font-medium">
            Description:{" "}
            <span className="font-normal">
              {serviceData.serviceDescription}
            </span>
          </p>
          <p className="text-base font-medium">
            Company Name:{" "}
            <span className="font-normal">{serviceData.companyName}</span>
          </p>
          <p className="text-base font-medium">
            Company Website:{" "}
            <span className="font-normal">{serviceData.companyWebsite}</span>
          </p>
          <p className="text-base font-medium">
            Category:{" "}
            <span className="font-normal">{serviceData.serviceCategory}</span>
          </p>
          <p className="text-base font-medium">
            Price:{" "}
            <span className="font-normal">{serviceData.servicePrice} $</span>
          </p>
          <p className="text-base font-medium">
            Total Reviews: <span className="font-normal">{reviews.length}</span>
          </p>
          <div className="card-actions justify-end">
            <Link to="/services" className="btn btn-primary">
              Back to services
            </Link>
            <button
              className="btn btn-warning btn-outline"
              onClick={handleClick}
            >
              Add Review
            </button>
            <dialog id="my_modal_3" className="modal">
              <div className="modal-box text-warning bg-[#257459]">
                <form method="dialog">
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                </form>
                <h3 className="font-bold text-lg">Write a Review</h3>
                <p className="py-4 text-base">
                  Write your review about this service here. Your feedback is
                  valuable!
                </p>
                <form method="dialog" onSubmit={handleSubmit}>
                  <textarea
                    className="textarea text-black w-full"
                    placeholder="Review Box"
                    name="review"
                    required
                  ></textarea>
                  <Rating
                    className="mt-4"
                    style={{ maxWidth: 180 }}
                    value={rating}
                    onChange={setRating}
                  />
                  <input
                    type="submit"
                    value="Add Review"
                    className="btn btn-warning mt-4"
                  />
                </form>
              </div>
            </dialog>
          </div>
        </div>
      </div>
      {(reviews.length > 0) && (
        <>
          <h1 className="text-3xl mt-8 font-bold text-center text-[#257459]">
            Reviews For {serviceData.serviceTitle}
          </h1>
          <div className="my-8 w-full gap-5 grid grid-cols-3 max-md:grid-cols-1">
            {reviews.map((review) => (
              <ReviewCard key={review._id} review={review} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ServiceDetails;
