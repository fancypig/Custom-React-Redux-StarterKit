import React, {Component} from 'react'
import Home from '../components/home'
import SecondHome from '../components/secondHome'
import {Router, Route,IndexRoute, hashHistory} from "react-router"

export default class App extends Component{
  render(){
    return(
      <Router history = {hashHistory}>
        <Route path = "/" component = {Home}>

        </Route>
        <Route path= "/second" component = {SecondHome}>

        </Route>
      </Router>
    );
  }
}
