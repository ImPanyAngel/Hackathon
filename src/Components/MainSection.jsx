import logo from '../assets/logo.png';
import title from '../assets/CojectLogo.png';


function MainSection() {

    return(
        <div class="main-body">
    <img src="possible-image">
    <div class="first-panel">
        <div class="first-panel-text">
            <div class="info">
                <div class="text">All Opportunities</div>
            <div class="info">
                <div class="text">100 posts</div>
        </div>
        <div class="filter">
            <label for="sort">Sort results by:</label>
            <select id="sort">
                <option>Latest</option>
            </select>
        </div>
        <div class="second-panel">
            <div class="heading-text"><h2>Recommendations</h2></div>
            <div class="post1">
                <h2>Help with Sustainability Drone</h2>
                <p class="courses">Computer Science, Software Engineering, Electrical Engineering</p>
                <p class="skills">Python, C++, MATLAB/Simulink</p>
                <p><strong>Degree required:</strong> All grades</p>
                <p><strong>Duration:</strong> 1 year</p>
                <p class="Date Posted">Deadline: November 1st, 2024</p>
                <button>Project Description</button>
                <button>Add to your project-list</button>
            </div>
            <div class="post2">
                <h2>Pioneering </h2>
                <p class="courses">Computer Science, Software Engineering, Electrical Engineering</p>
                <p><strong>Degree required:</strong> All grades</p>
                <p><strong>Duration:</strong> 1 year</p>
                <p class="Date Posted">Deadline: November 1st, 2024</p>
                <button>Project Description</button>
                <button>Add to your project-list</button>
           </div>
            <div class="post3">
                <h2>Pioneering </h2>
                <p class="courses">Computer Science, Software Engineering, Electrical Engineering</p>
                <p><strong>Degree required:</strong> All grades</p>
                <p><strong>Duration:</strong> 1 year</p>
                <p class="Date Posted">Deadline: November 1st, 2024</p>
                <button>Project Description</button>
                <button>Add to your project-list</button>
            </div>
            <div class="third-panel">

        </div>
    );
}

export default Header;
