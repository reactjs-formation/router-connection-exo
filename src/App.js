import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import Topic from './components/Topic';
import Navbar from './components/Navbar';
import PrivateRoute from './components/privateRoute';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      reRender: false
    }
  }

  reRender = () => {
    this.setState({
      reRender: true
    })
  }
  
  render() {
    return (
      <div className="wrapper">
        <Router>
          <div className="header container">
            <div className="row">
              <div className="col-12">
                <Navbar />
              </div>
            </div>
          </div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login"  render={props => <Login {...props} reRender={this.reRender} />} />
            <Route exact path="/logout" render={props => <Login {...props} reRender={this.reRender} />} />
            <PrivateRoute path="/dashboard" component={Dashboard} />
            <PrivateRoute exact={true} path="/topics" component={Topic} />
            <PrivateRoute exact={true} path="/topics/:id" component={Topic} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
