import React, {Component} from 'react'
import Home from './home'
import Login from '../components/Login'
import Signup from '../components/Signup'
import {Router, Route,IndexRoute, browserHistory} from "react-router"

export default class App extends Component{
  render(){

    return(
      <Router history = {browserHistory}>
        <Route path = "/" component = {Home}>
          <IndexRoute component = {Login}/>
          <Route path= "/signup" component = {Signup}>
          </Route>
        </Route>
      </Router>
    );
  }
}
