import React, { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import { useNavigation } from "react-router";
import axios from "axios";
import Swal from "sweetalert2";

const MyReviewCard = ({ review }) => {
  const modalId = `modal-${review._id}`;
  const initialReview = review;
  const [reviews, setReviews] = useState(initialReview);

  useEffect(() => {
    setReviews(review);
  }, [review]);

  const [service, setService] = useState({});
  useEffect(() => {
    fetch(`https://b11a11-server-side-akib-dev1.vercel.app/services/${reviews.reviewFor}`)
      .then((res) => res.json())
      .then((data) => {
        setService(data);
      });
  }, [reviews.reviewFor]);

  const [rating, setRating] = useState(0);

  const handleSubmit = (e, id) => {
    e.preventDefault();
    const reviewText = e.target.review.value;
    const ratingStar = rating;
    const reviewUpdate = {
      reviewText,
      ratingStar,
    };
    axios
      .put(`https://b11a11-server-side-akib-dev1.vercel.app/reviews/${id}`, reviewUpdate,{ withCredentials: true })
      .then((res) => {
        if (res.data.modifiedCount) {
          setRating(0);
          e.target.reset();
          Swal.fire({
            title: "Review Updated Successfully!",
            icon: "success",
            draggable: true,
          });
          document.getElementById(modalId).close();
        }
      })
      .catch((error) => {
        document.getElementById(modalId).close();
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Failed to update review. Please try again.",
        });
      });
  };

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
        axios.delete(`https://b11a11-server-side-akib-dev1.vercel.app/reviews/${id}`, { withCredentials: true }).then((res) => {
          if (res.data.deletedCount) {
            Swal.fire({
              title: "Deleted!",
              text: "Your review has been deleted.",
              icon: "success",
            });
          }
        })
        .catch((error) => {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Failed to delete review. Please try again.",
          });
        });
      }
    });
  };



  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-bars loading-xl mx-auto"></span>
      </div>
    );
  }
  return (
    <div>
      {service.serviceTitle && (
        <div className="card bg-info card-lg shadow-sm">
          <div className="card-body">
            <div className="flex items-center gap-4">
              <div className="avatar">
                <div className="w-16 rounded">
                  <img
                    src={reviews.userImage}
                    alt="Tailwind-CSS-Avatar-component"
                  />
                </div>
              </div>
              <h2 className="card-title">{reviews.userName}</h2>
            </div>
            <Rating
              style={{ maxWidth: 180 }}
              value={reviews.ratingStar}
              readOnly
            />
            <p>{reviews.reviewText}</p>
            <div className="justify-end card-actions">
              <p className="font-semibold">
                Review Added Date: {reviews.reviewDate}
              </p>
              <button
                className="btn btn-error"
                onClick={() => handleDelete(reviews._id)}
              >
                Delete
              </button>
              <button
                className="btn btn-warning"
                onClick={() => {
                  document.getElementById(modalId).showModal();
                }}
              >
                Update
              </button>
              <dialog id={modalId} className="modal">
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
                  <form
                    method="dialog"
                    onSubmit={(e) => handleSubmit(e, reviews._id)}
                  >
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
                      value="Update Review"
                      className="btn btn-warning mt-4"
                    />
                  </form>
                </div>
              </dialog>
            </div>
            <hr className="mt-4" />
            <p className="font-semibold">
              Service Title: {service?.serviceTitle}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyReviewCard;
