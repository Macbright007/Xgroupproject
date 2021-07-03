import React from 'react'
import { Link } from 'react-router-dom'
import full from '../images/full.png'

const Navbar = () =>    {
        return (

            <nav className="container-fluid navbar navbar-expand-lg">
            <div className='container main-nav'>
                <Link className="navbar-brand" to="/"><img src={full} alt='Xgroup.inc' /></Link>
                <span className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </span>
                <div className="collapse navbar-collapse justify-content-end" id="navbarText">
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about"><li>About Us</li></Link> 
                        </li>
                        <li className="nav-item">
                            <Link to="/services"><li>Services</li></Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/contact"><li>Contact Us</li></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        )
    }
    
    export default Navbar;

    //styled components css