import { Component} from 'react';
import "./index.css"
import { IoMdAddCircleOutline } from "react-icons/io";
import {Link} from "react-router-dom"


class HomePage extends Component {
    render() {
        return (
            <div className='setNav'>
<nav className="navbar">
                <div>
                    <img className='unisLogo' src="https://i.ibb.co/M1bskM5/Please-send-me-038a1331-e7f2-4eb9-8e7f-89cb6b96fa80-1.png" alt="Unis Technosoft Logo"/>
                </div>
            <ul className="navbar-list">
                <li className="navbar-item">
                    <Link to="/">
                    <p className="navbar-link">What is What</p>
                    </Link>
                    <Link to="/add-blog">
                    <IoMdAddCircleOutline size={30} color="#007bff"/>
                    </Link>
                </li>
                <li className="navbar-item">
                    <Link to="how-to-learn">
                    <p className="navbar-link">How to Learn</p>
                    </Link>
                </li>
                <li className="navbar-item">
                    <p className="navbar-link">Tech Around the World</p>
                </li>
            </ul>
        </nav>
            </div>
        );
}
}

export default HomePage;