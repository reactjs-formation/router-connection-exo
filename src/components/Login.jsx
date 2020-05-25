import MD5 from 'crypto-js/md5';
import React from 'react';
import { Redirect } from 'react-router-dom';
import Navbar from './Navbar';
import DATA from '../config';


class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            errors: {
                email: null,
                password: null
            },
            redirectSuccesConnection: false
        }

        console.log('constructor login', this.props.location.pathname, (localStorage.getItem('user') !== null, this.state.redirectSuccesConnection))
        if (this.props.location.pathname === '/logout') {
            localStorage.clear();
            this.props.reRender();
        }
    }

    hChange = (e) => {
        e.preventDefault()
        
        let state = {};
        state[e.target.id] = e.target.value;
        this.setState(state)
    }

    hClick = (e) => {
        e.preventDefault();

        const {email,password} = this.state;
        if (email === DATA.email && password === DATA.password) {
            console.log('Connecté ok')
            localStorage.setItem('user', JSON.stringify({ 
                email: email, 
                token: MD5(email+DATA.secretKey).toString() 
            }));
            let state = {
                redirectSuccesConnection: true
            }
            this.props.reRender();
            this.setState(state);
        } else {
            console.log('Echec de connexion')
        }
    }
  
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        {(localStorage.getItem('user') !== null || this.state.redirectSuccesConnection) && <Redirect to='/dashboard'/>}
                        <div className="row justify-content-center p-5">
                            <div className="col-5">
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="email">Login</label>
                                        <input onChange={this.hChange} type="email" className="form-control" id="email" placeholder="email@exemple.fr" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <input onChange={this.hChange} className="form-control" type="password" id="password" />
                                    </div>
                                    <div className="text-center">
                                        <button onClick={this.hClick}>Connecter</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
