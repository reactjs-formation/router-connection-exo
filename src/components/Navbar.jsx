
import React from 'react';
import { Link } from "react-router-dom";
import Menu from './Menu';

class Navbar extends React.Component {

    render() {
        console.log('render Navbar', localStorage.getItem('user'))

        const isConnected = (localStorage.getItem('user') !== null)

        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to="/">Home</Link>    
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <Menu>
                            {isConnected ? 
                                <Link to="/logout">Déconnexion</Link>
                                : 
                                <Link to="/login">Connexion</Link>
                            }
                            {isConnected && <Link to="/dashboard">Dashboard</Link>}
                            {isConnected && <Link to="/topics">Topics</Link> }
                        </Menu>
                    </ul>
                </div>
            </nav>
          );
    }
}

export default Navbar;






