import { useState, useEffect } from 'react';
import Project from './Project';

import sectionImage1 from '../assets/sectionImage1.jpg';
import sectionImage2 from '../assets/sectionImage2.jpg';
import sectionImage3 from '../assets/sectionImage3.jpg';
import sectionImage4 from '../assets/sectionImage4.jpg';

function ProjectColumn() {
    const [selectedOption, setSelectedOption] = useState('default');
    const [posts, setPosts] = useState([]);
    const [sortedPosts, setSortedPosts] = useState([]);
    const [recommendations, setRecommendations] = useState([]);
    const [imageIndex, setImageIndex] = useState(0);

    const images = [sectionImage1, sectionImage2, sectionImage3, sectionImage4];

    // Cycle through images every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval); // Clear interval on component unmount
    }, [images.length]);

    // Fetch posts
    useEffect(() => {
        fetch("http://127.0.0.1:5000/getPosts")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => setPosts(data))
            .catch((error) => console.error("Error fetching posts:", error));
    }, []);

    // Fetch recommendations
    useEffect(() => {
        fetch("http://127.0.0.1:5000/getRecommendations")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => setRecommendations(data))
            .catch((error) => console.error("Error fetching recommendations:", error));
    }, []);

    // Sort posts based on selected option
    useEffect(() => {
        let sortedData = [...posts];
        if (selectedOption === "newest") {
            sortedData.sort((a, b) => new Date(b.date_uploaded) - new Date(a.date_uploaded));
        } else if (selectedOption === "oldest") {
            sortedData.sort((a, b) => new Date(a.date_uploaded) - new Date(b.date_uploaded));
        }
        setSortedPosts(sortedData);
    }, [selectedOption, posts]);

    return (
        <div className="project-container">
            <div className="image-container">
                <img src={images[imageIndex]} alt="Section" />
            </div>
            <div className='information-section'>
                <p className='projects-text'>All Projects</p>
                <div className='number-of-projects'>
                    <p className='number-text'>100</p>
                    <p className='below-number-text'>Projects</p>
                </div>
                <div className='sort-section'>
                    <label htmlFor="sort-options">Sort By:</label>
                    <select id="sort-options" value={selectedOption} onChange={(event) => setSelectedOption(event.target.value)}>
                        <option value="default">Default</option>
                        <option value="newest">Newest</option>
                        <option value="oldest">Oldest</option>
                    </select>
                </div>
            </div>
            <div className='recommendation-section'>
                <p className="project-section-title"> Recommendations</p>
                {recommendations.map((recommendation) => (
                    <div key={recommendation.post_ID} className='recommendation'>
                        <h3>{recommendation.course}</h3>
                        <p><strong>Date Uploaded:</strong> {recommendation.date_uploaded}</p>
                        <p><strong>Post Description:</strong> {recommendation.post_description}</p>
                        <p><strong>Skills:</strong> {recommendation.skills}</p>
                    </div>
                ))}
            </div>
            <div className='project-section'>
                <p className="project-section-title"> More Projects </p>
                {sortedPosts.map((post) => (
                    <Project key={post.post_ID} course={post.course} date_uploaded={post.date_uploaded} post_description={post.post_description} skills={post.skills} student={post.email}/>
                ))}
            </div>
        </div>
    );
}

export default ProjectColumn;
