import { useState } from 'react';

import logo from '../assets/logo.png';
import title from '../assets/CojectLogo.png';
import closeIcon from '../assets/close-icon.png';

function Header() {
    const [isPopupVisible, setIsPopupVisible] = useState(false);

    const togglePopup = () => {
        setIsPopupVisible(!isPopupVisible);
    };

    return(
        <div className="header-container">
            <div className="header-title">
                <img className="logo" src={logo} alt='logo'/>
                <img className='title' src={title} alt='title' />
            </div>
            <div className='header-button-container'>
                <button className='post-button' onClick={togglePopup}>+ Post</button>
                <button className='login-button'>Login</button>
            </div>

            {isPopupVisible && (
                <div className="popup-overlay">
                    <div className="popup">
                        <div className='close-container'>
                            <img className='close-popup' onClick={togglePopup} src={closeIcon} alt='close'/>
                        </div>
                        <p className='popup-title'>Add a new post</p>
                        <input className="popup-input" type='text' placeholder='Enter project title' />
                        <input className="popup-input" type='text' placeholder='Enter your course' />
                        <input className="popup-input" type='text' placeholder='Enter skills required (separated by ",")' />
                        <input className="popup-input" type='text' placeholder='Enter project description' />
                        <button className="confirm-popup-btn" onClick={togglePopup}>Confirm</button>
                    </div>
                </div>
            )}

        </div>
    );
}

export default Header;
