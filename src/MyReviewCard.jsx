import React, { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import { useNavigation } from "react-router";

const MyReviewCard = ({ review }) => {
  const [service, setService] = useState({});
  useEffect(() => {
    fetch(`http://localhost:3000/services/${review.reviewFor}`)
      .then((res) => res.json())
      .then((data) => {
        setService(data);
      });
  }, [review.reviewFor]);
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
      <div className="card bg-info card-lg shadow-sm">
        <div className="card-body">
          <div className="flex items-center gap-4">
            <div className="avatar">
              <div className="w-16 rounded">
                <img
                  src={review.userImage}
                  alt="Tailwind-CSS-Avatar-component"
                />
              </div>
            </div>
            <h2 className="card-title">{review.userName}</h2>
          </div>
          <Rating
            style={{ maxWidth: 180 }}
            value={review.ratingStar}
            readOnly
          />
          <p>{review.reviewText}</p>
          <div className="justify-end card-actions">
            <p className="font-semibold">
              Review Added Date: {review.reviewDate}
            </p>
          </div>
          <p className="font-semibold">Service Title: {service?.serviceTitle}</p>
        </div>
      </div>
    </div>
  );
};

export default MyReviewCard;
