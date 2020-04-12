import React from "react";

import ReviewPost from "./ReviewPost";
import "./Reviews.scss";

const Reviews = () => {
  return (
    <div className="pt-4">
      <h4>2 reviews for Elegant Sofa</h4>
      <div className="pb-3">
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star"></span>
      </div>
      <div className="pb-3">
        <ReviewPost
          stars={4}
          author="John Doe"
          date="16 Aug, 2016"
          title="Excellent"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
          incidunt, molestias amet aperiam eaque placeat obcaecati temporibus
          modi, debitis, a aspernatur fugit voluptatum commodi quod.
        </ReviewPost>
      </div>
      <div className="pb-3">
        <ReviewPost
          stars={3}
          author="Chris Taylor"
          date="25 Oct, 2016"
          title="Good"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nesciunt
          est, rerum doloribus natus quas? Veniam harum dolorem reiciendis vitae
          inventore quaerat ex mollitia at.
        </ReviewPost>
      </div>
    </div>
  );
};

export default Reviews;
