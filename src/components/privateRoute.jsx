import React from 'react';
import { Redirect, Route, BrowserRouter as Router, } from 'react-router-dom';

class PrivateRoute extends React.Component {
    
    render() {
        const Component = this.props.component;
        
        return (
            this.props.exact ?
            <Route exact path={this.props.path} render={props => (
                (localStorage.getItem('user') === null) ? <Redirect to="/" /> : <Component {...props} />
            )} />
            :
            <Route path={this.props.path} render={props => (
                (localStorage.getItem('user') === null) ? <Redirect to="/" /> : <Component {...props} />
            )} />
        );
    }
}

export default PrivateRoute;
