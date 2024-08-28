import React from 'react';
import './index.css'; 

const SideNavbar = () => {
    return (
        <div className="side-navbar">
            <ul className="side-navbar-list">
                <li className='side-navbar-item '>
                    <p className="side-navbar-link"> 1. Full Stack </p>
                </li>
                <li className='side-navbar-item '>
                    <p className="side-navbar-link"> 2. Frontend </p>
                </li>
                <li className='side-navbar-item'>
                    <p className="side-navbar-link"> 3.  Backend </p>
                </li>
                <li className='side-navbar-item'>
                    <p className="side-navbar-link"> 4. Database </p>
                </li>
                <li className='side-navbar-item'>
                    <p className="side-navbar-link"> 5. Testing </p>
                </li>
                <li className='side-navbar-item'>
                    <p className="side-navbar-link"> 6. BA </p>
                </li>
                <li className='side-navbar-item'>
                    <p className="side-navbar-link"> 7. Devops </p>
                </li>
                <li className='side-navbar-item'>
                    <p className="side-navbar-link"> 8. Python Development </p>
                </li>
                <li className='side-navbar-item'>
                    <p className="side-navbar-link"> 9. Java Development </p>
                </li>
            </ul>
        </div>
    );
};

export default SideNavbar;
