import React, { useContext } from 'react';
import logo from '../../images/logos/Group 1329.png'
import { UserContext } from '../../App';
import './Navbar.css'
import { useHistory } from 'react-router-dom';

const Navbar = () => {
    const [user, setUser] = useContext(UserContext)
    const history = useHistory()
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
                <a onClick={() => history.push('/')} className="navbar-brand" href="#"><img src={logo} alt="" /></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" onClick={() => history.push('/')} href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Donation</a>
                        </li>
                        <li onClick={()=>history.push('/events')} className="nav-item active">
                            <a className="nav-link" href="#">Events</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Blog</a>
                        </li>
                        {
                            user.name
                                ?
                                <li style={{ fontWeight: 'bold' }} className="nav-item active">
                                    <a className="nav-link" href="#">{user.name}</a>
                                </li>
                                :
                                <>
                                    <li className="nav-item active">
                                        <button className="nav-link btn btn-primary">Register</button>
                                    </li>
                                    <li className="nav-item active">
                                        <button onClick={() => history.push('/admin')} className="nav-link btn btn-secondary">Admin</button>
                                    </li>
                                </>
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
