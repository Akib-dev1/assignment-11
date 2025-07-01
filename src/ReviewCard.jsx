import React from "react";
import { Rating } from "@smastrom/react-rating";

const ReviewCard = ({ review }) => {
  return (
    <div>
      <div className="card max-w-96 h-full bg-[#FFFFFF] card-lg shadow-lg text-[#242A37]">
        <div className="card-body">
          <div className="flex items-center gap-4">
            <div className="avatar">
              <div className="w-16 rounded">
                <img src={review.userImage} alt="User Image" />
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
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
