import { useState, useEffect } from 'react';
import Project from './Project';

import sectionImage from '../assets/RedBlockUoLlogo.jpg';

function ProjectColumn() {
    const [selectedOption, setSelectedOption] = useState('default');
    const [posts, setPosts] = useState([]);
    const [sortedPosts, setSortedPosts] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:5000/getPosts")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json(); // Parse JSON data
            })
            .then((data) => setPosts(data)) // Set parsed data to state
            .catch((error) => console.error("Error fetching posts:", error));
    }, []);

    useEffect(() => {
        // Sort posts based on the selected option
        let sortedData = [...posts];
        if (selectedOption === "newest") {
            sortedData.sort((a, b) => new Date(b.date_uploaded) - new Date(a.date_uploaded));
        } else if (selectedOption === "oldest") {
            sortedData.sort((a, b) => new Date(a.date_uploaded) - new Date(b.date_uploaded));
        }
        setSortedPosts(sortedData);
    }, [selectedOption, posts]);


    return(
        <div className="project-container">
            <div className="image-container">
                <img src={sectionImage} alt='image' />
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
            <div className='project-section'>
                {sortedPosts.map((post) => (
                    <Project key={post.post_ID} course={post.course} date_uploaded={post.date_uploaded} post_description={post.post_description} skills={post.skills} student={post.student}/>
                ))}
            </div>
        </div>
    );
}

export default ProjectColumn;
