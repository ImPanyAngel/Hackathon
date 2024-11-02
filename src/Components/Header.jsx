import logo from '../assets/logo.png';

function Header() {

    return(
        <div className="header-container">
            <div className="header-title">
                <img className="logo" src={logo} alt='logo'/>
                <p className="title">Project Finder</p>
            </div>
            <div className='header-button-container'>
                <button className='post-button'>+ Post</button>
                <button className='login-button'>Login</button>
            </div>
        </div>
    );
}

export default Header;
