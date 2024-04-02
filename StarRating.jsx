import { useState } from "react";

const StarRating = () => {
  const [rating, setRating] = useState(0);

  const handleRating = (value) => {
    setRating(value);
  };

  return (
    <div className="star-rating">
      <p>Donnez une note a Itachi :</p>
      {[...Array(5)].map((_, index) => (
        <span
          key={index}
          style={{ cursor: "pointer" }}
          onClick={() => handleRating(index + 1)}
        >
          {index < rating ? "★" : "☆"}
        </span>
      ))}
      <p>
        {rating === 0 ? "Aucun vote" : `Vous avez donne ${rating} etoiles.`}
      </p>
    </div>
  );
};

export default StarRating;
