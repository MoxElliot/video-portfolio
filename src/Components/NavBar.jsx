import React from 'react';
import { Link } from 'react-scroll';

const NavBar = () => {
    return (
        <div className='navbar' id='navbar'>
            <h1>NavBar</h1>
            <ul>
                <li>
                    <Link
                        activeClass="active" 
                        to="about-me" 
                        spy={true} 
                        smooth={true} 
                        duration={500}
                    >
                        About Me
                    </Link>
                </li>
                <li>
                    <Link
                        activeClass="active" 
                        to="video-section" 
                        spy={true} 
                        smooth={true} 
                        duration={500}
                    >
                        Videos
                    </Link>
                </li>
                <li>
                    <Link
                        activeClass="active" 
                        to="statistics" 
                        spy={true} 
                        smooth={true} 
                        duration={500}
                    >
                        Statistics
                    </Link>
                </li>
                <li>
                    <Link
                        activeClass="active" 
                        to="contact-me" 
                        spy={true} 
                        smooth={true} 
                        duration={500}
                    >
                        Contact Me
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default NavBar