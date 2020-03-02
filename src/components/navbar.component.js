import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import './components.css';

// NAVBAR Component
export default class Navbar extends Component {
    render(){
        return(
           <nav className="navbar navbar-light navbar-expand-lg">
                <Link to="/" className="navbar-brand">
                    <FontAwesomeIcon id="dumbbell" icon={faDumbbell}/>
                </Link>
                {/* The className 'collpase' works, whereas collapse */}
                <div className="collpase navbar-collapse">  
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/" className="nav-link">Exercises</Link> 
                        </li>
                        <li className="navbar-item">
                            <Link to="/create" className="nav-link">Log Exercise</Link> 
                        </li>
                        <li className="navbar-item">
                            <Link to="/user" className="nav-link">Create User</Link> 
                        </li>
                    </ul>
                </div>
            </nav>
        );
    };
};

