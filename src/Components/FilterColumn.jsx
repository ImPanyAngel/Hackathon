import { useState, useEffect } from 'react';
import searchIcon from '../assets/search-icon.png';

function FilterColumn() {
  const [courses, setCourses] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    // Fetch courses data
    fetch("http://127.0.0.1:5000/getCourse")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json(); // Parse JSON data
      })
      .then((data) => setCourses(data)) // Set parsed data to state
      .catch((error) => console.error("Error fetching courses:", error));

    // Fetch skills data
    fetch("http://127.0.0.1:5000/getSkills")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json(); // Parse JSON data
      })
      .then((data) => {
        // Extract individual skills from each entry and add to a set to ensure uniqueness
        const uniqueSkills = new Set();
        data.forEach((item) => {
          item.skills.split(", ").forEach((skill) => uniqueSkills.add(skill.trim()));
        });
        setSkills(Array.from(uniqueSkills)); // Convert Set to array for unique skills
      })
      .catch((error) => console.error("Error fetching skills:", error));
  }, []);

  return (
    <div className="filter-container">
      <div className="search-container">
        <input className="search-input" placeholder="Search..." />
        <button className="search-button">
          <img className="search-button-img" src={searchIcon} alt="search" />
        </button>
      </div>
      <div className="courses-container">
        <p className="section-title">Courses...</p>
        <div className="checkbox-list">
          {courses.map((course, index) => (
            <label key={index} className="checkbox-item">
              {course.course}
              <input type="checkbox" value={course.course} />
            </label>
          ))}
        </div>
      </div>
      <div className="skills-container">
        <p className="section-title">Skills...</p>
        <div className="checkbox-list">
          {skills.map((skill, index) => (
            <label key={index} className="checkbox-item">
              {skill}
              <input type="checkbox" value={skill} />
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FilterColumn;
