import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='blogs'>
            <h2>Welcome to My Blog</h2>
            <div className='blog'>
                <h2>What is Context API?</h2>
                <p>Context API is the way by which we can share data from root to child without props drilling. Basically context is most powerful to avoid props drilling. We can directly sent data through context without sharing the same data of any other components or child. It avoid the complexity to sharing data.</p>
            </div>
            <div className='blog blog2'>
                <h2>What is Semantic Tag?</h2>
                <p>Semantic tag is called those HTML tags which can describe their value with their name. They can describe their purpose and content inside them. header , footer, article is the example of semantic tag. We can easily understand the name and the purpose of those tags. Semantic tag decrease the complexity of code.</p>
            </div>
        </div>
    );
};

export default Blogs;