import React from 'react';
import './Home.css';
import img from '../../img/img.jpg';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';
import ReviewItem from '../ReviewItem/ReviewItem';

const Home = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div className='home-container'>
            <div className='interface'>
                <div className="text-container">
                    <h2>HIRA Time Zone</h2>
                    <p>Wrist Watch is not only a watch but also it contain our personality and choice. In today’s world mobile phone is an alternative way to watch time but Wrist Watch is always represent our personality. A branded Wrist Watch is always helpful for increase your confidence level and give you a cool style.</p>
                    <button className='demo-btn'>Live Demo</button>
                </div>
                <div className="img-container">
                    <img src={img} alt="" />
                </div>
            </div>
            <h1>Customer Reviews</h1>
            <div className='review-container'>
                {
                    reviews.map(review => <Review
                        key={review.id}
                        review={review}
                    ></Review>)
                }

                {/* <ReviewItem></ReviewItem> */}
            </div>
            <button className='demo-btn'>See More Reviews</button>
        </div>
    );
};

export default Home;