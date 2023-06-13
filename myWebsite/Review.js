import React, { useState } from 'react';

function Review() {
  const [reviews, setReviews] = useState([]);
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState(0);

  const handleReviewSubmit = (e) => {
    e.preventDefault();

    setReviews(prevReviews => [
      ...prevReviews,
      { text: reviewText, rating: rating }
    ]);

    setReviewText("");
    setRating(0);
  };

  return (
    <>
      <form onSubmit={handleReviewSubmit}>
        <label>
          Review:
          <input type="text" value={reviewText} onChange={e => setReviewText(e.target.value)} />
        </label>
        <label>
          Rating:
          <input type="number" min="1" max="5" value={rating} onChange={e => setRating(e.target.value)} />
        </label>
        <input type="submit" value="Submit" />
      </form>

      <div>
        {reviews.map((review, index) => (
          <div key={index}>
            <p>{review.text}</p>
            <p>{'⭐'.repeat(review.rating)}</p>
          </div>
        ))}
      </div>
    </>
  );
}   

export default Review;
