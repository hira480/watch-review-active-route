import React from 'react';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Reviews.css';

const Reviews = () => {
    return (
        <div className='reviews-route'>
            <h2>This is Full Review</h2>
            <ReviewItem></ReviewItem>
        </div>
    );
};

export default Reviews;