import logo from '../assets/logo.png';
import title from '../assets/CojectLogo.png';

function Header() {

    return(
        <div className="header-container">
            <div className="header-title">
                <img className="logo" src={logo} alt='logo'/>
                <img className='title' src={title} alt='title' />
            </div>
            <div className='header-button-container'>
                <button className='post-button'>+ Post</button>
                <button className='login-button'>Login</button>
            </div>
        </div>
    );
}

export default Header;
