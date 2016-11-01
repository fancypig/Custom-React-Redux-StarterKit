import React, {Component} from 'react'
import Home from './home'
import First from '../components/first_component'
import Second from '../components/second_component'
import {Router, Route,IndexRoute, hashHistory} from "react-router"

export default class App extends Component{
  render(){

    return(
      <Router history={hashHistory}>
        <Route path="/" component={Home}>
          <IndexRoute component={First}/>
          <Route path="/second(/:param)" component={Second}>
          </Route>
        </Route>
      </Router>
    );
  }
}
