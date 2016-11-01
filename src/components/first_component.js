import React, {Component} from 'react';
import {Link} from "react-router";
import styles from '../style.css'

export default class First extends Component{

  render(){
    const Styles = {
      h1Style:{
        marginTop: "10px"
      }
    }
    return(
      <div  className = {styles.first}>
        <h1 style = {Styles.h1Style}> I was told to save the world</h1>
        <Link to = "second/param-example"> secondHome </Link>

      </div>
    );
  }
}
