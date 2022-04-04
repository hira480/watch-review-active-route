import React from 'react';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';
import './ReviewItem.css';

const ReviewItem = () => {
    const [reviews] = useReviews();
    return (
        <div className='review-container'>
            {
                reviews.map(review => <Review
                    key={review.id}
                    review={review}
                ></Review>)
            }
        </div>
    );
};

export default ReviewItem;