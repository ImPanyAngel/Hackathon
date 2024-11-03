
function MainSection() {

    return(
        <div className="main-body">
    <img src="possible-image" />
    <div className="first-panel">
        <div className="first-panel-text">
            <div className="info">
                <div className="text">All Opportunities</div>
            <div className="info">
                <div className="text">100 posts</div>
        </div>
        <div className="filter">
            <label>Sort results by:</label>
            <select id="sort">
                <option>Latest</option>
            </select>
        </div>
        <div className="second-panel">
            <div className="heading-text"><h2>Recommendations</h2></div>
            <div className="post1">
                <h2>Help with Sustainability Drone</h2>
                <p className="courses">Computer Science, Software Engineering, Electrical Engineering</p>
                <p className="skills">Python, C++, MATLAB/Simulink</p>
                <p><strong>Degree required:</strong> All grades</p>
                <p><strong>Duration:</strong> 1 year</p>
                <p className="Date Posted">Deadline: November 1st, 2024</p>
                <button>Project Description</button>
                <button>Add to your project-list</button>
            </div>
            <div className="post2">
                <h2>Pioneering </h2>
                <p className="courses">Computer Science, Software Engineering, Electrical Engineering</p>
                <p><strong>Degree required:</strong> All grades</p>
                <p><strong>Duration:</strong> 1 year</p>
                <p className="Date Posted">Deadline: November 1st, 2024</p>
                <button>Project Description</button>
                <button>Add to your project-list</button>
           </div>
            <div className="post3">
                <h2>Pioneering </h2>
                <p className="courses">Computer Science, Software Engineering, Electrical Engineering</p>
                <p><strong>Degree required:</strong> All grades</p>
                <p><strong>Duration:</strong> 1 year</p>
                <p className="Date Posted">Deadline: November 1st, 2024</p>
                <button>Project Description</button>
                <button>Add to your project-list</button>
            </div>
        </div>
        </div>
        </div>
        </div>
        </div>

    );
}

export default MainSection;
