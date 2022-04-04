import React from 'react';
import './Review.css';

const Review = (props) => {
    const { name, img, body, rating } = props.review;
    return (
        <div className='revier-cart'>
            <img src={img} alt="" />
            <h4>{name}</h4>
            <p>{body}</p>
            <h5>Rating: {rating}</h5>
        </div>
    );
};

export default Review;