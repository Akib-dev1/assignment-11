import React, { use, useEffect, useState } from "react";
import { AuthContext } from "./AuthProvidor";
import MyReviewCard from "./MyReviewCard";
import { useNavigation } from "react-router";

const MyReviews = () => {
  const { user } = use(AuthContext);
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch(`https://b11a11-server-side-akib-dev1.vercel.app/reviews/forUser/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, [user?.email, reviews]);
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-bars loading-xl mx-auto"></span>
      </div>
    );
  }
  return (
    <div className="w-11/12 mx-auto py-10 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8 text-[#257459]">
        My Reviews
      </h1>
      <div className="grid grid-cols-1 gap-6">
        {reviews.map((review) => (
          <MyReviewCard key={review._id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default MyReviews;
