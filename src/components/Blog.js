import React from 'react';
import './blog.css';
import img1 from '../assets/img-1.jpg'
import img2 from '../assets/img-2.jpeg'
const Card = ({ imgSrc, title, content }) => (
    <div className="cards">
        <div className="imgBx">
            <img src={imgSrc} alt={title} />
        </div>
        <div className="content">
            <h2 >{title}</h2>
            <p>{content}</p>
        </div>
    </div>
);

const Blog = () => (
    <div className="containerrr">
        <Card 
            imgSrc={img1}
            title="Artificial Intelligence" 
            content="Artificial Intelligence (AI) is revolutionizing various industries, from healthcare to finance, by enabling machines to learn from data and make decisions."
        />
        <Card 
            imgSrc={img2}
            title="Web Development" 
            content="Web Development is the art and science of creating and maintaining websites. ."
        />
        <Card 
            imgSrc={img1}
            title="AI in Everyday Life" 
            content="AI applications have become a part of daily life, from voice assistants like Siri and Alexa to personalized recommendations on streaming platforms. "
        />
    </div>  
);

export default Blog;