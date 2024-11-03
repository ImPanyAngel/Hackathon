import PropTypes from 'prop-types';

function Project({ course, date_uploaded, post_description, skills, student }) {
    return(
        <div className="project-item-container">
            <h3>{course}</h3>
            <p><strong>Date Uploaded:</strong> {date_uploaded}</p>
            <p><strong>Post Description:</strong> {post_description}</p>
            <p><strong>Skills:</strong> {skills}</p>
            <p><strong>Student Email:</strong> {student}</p>
            <button>Email</button>
        </div>
    );
}

Project.propTypes = {
    course: PropTypes.string.isRequired,
    date_uploaded: PropTypes.string.isRequired,
    post_description: PropTypes.string.isRequired,
    skills: PropTypes.string.isRequired,
    student: PropTypes.number.isRequired
};

export default Project;
