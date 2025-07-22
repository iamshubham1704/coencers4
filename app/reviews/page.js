"use client"
import React, { useState } from 'react';
import './reviews.css';

const initialReviews = [
  {
    name: 'Mehak Modi (Influencer)',
    stars: 5,
    text: 'Coencers helped me to land deal with fixderma.',
  },
  {
    name: 'Zeber (Company)',
    stars: 4,
    text: 'Very Nice experience working with Coencers. We got a boost in number of clients and sales.',
  },
  {
    name: 'Sakasham Batra (Influencer)',
    stars: 5,
    text: 'Helped me to deal with Avvatar India',
  },
];

const Reviews = () => {
  const [reviews, setReviews] = useState(initialReviews);
  const [newReview, setNewReview] = useState('');
  const [newStars, setNewStars] = useState(0);

  const handlePost = () => {
    if (newReview && newStars > 0) {
      setReviews([
        ...reviews,
        { name: 'Anonymous User', stars: newStars, text: newReview },
      ]);
      setNewReview('');
      setNewStars(0);
    }
  };

  return (
    <div className="reviews-page">
      <h1 className="reviews-title">
        What <span>People</span> Say
      </h1>

      <div className="reviews-list">
        {reviews.map((review, index) => (
          <div className="review-card" key={index}>
            <strong>{review.name}</strong>
            <div className="stars">
              {'★'.repeat(review.stars)}{'☆'.repeat(5 - review.stars)}
            </div>
            <p>{review.text}</p>
          </div>
        ))}
      </div>

      <div className="review-form">
        <textarea
          placeholder="Write a Review....."
          value={newReview}
          onChange={(e) => setNewReview(e.target.value)}
        />
        <div className="stars-input">
          {[1, 2, 3, 4, 5].map((n) => (
            <span
              key={n}
              onClick={() => setNewStars(n)}
              className={newStars >= n ? 'star selected' : 'star'}
            >
              ★
            </span>
          ))}
        </div>
        <button onClick={handlePost}>Post</button>
      </div>
    </div>
  );
};

export default Reviews;
