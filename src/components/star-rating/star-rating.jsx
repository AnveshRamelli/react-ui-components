import { useState, useCallback } from "react";
import "./star-rating.css";
import Tooltip from "../tooltip/tooltip";

const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [ratingHover, setRatingHover] = useState(0);

  const stars = useCallback(
    () => Array.from({ length: 5 }, (_, index) => index + 1),
    []
  );
  return (
    <Tooltip text='Please leave a rating'>
      <div className="star-rating-container">
        {stars().map((star) => {
          return (
            <span
              key={star}
              className={
                star <= rating || star <= ratingHover ? "star active" : "star"
              }
              onClick={() => setRating(star)}
              onMouseEnter={() => setRatingHover(star)}
              onMouseLeave={() => setRatingHover(rating)}
            >
              ★
            </span>
          );
        })}
      </div>
    </Tooltip>
  );
};

export default StarRating;
