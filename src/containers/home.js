import React, {Component} from 'react';
import {Link} from "react-router";

export default class Home extends Component{
  render(){
    return(
      <div>
        <h1> Hello World </h1>
        {this.props.children}
      </div>
    );
  }
}
