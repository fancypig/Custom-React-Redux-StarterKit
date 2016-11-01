import React, {Component} from 'react';
import {Link} from "react-router";
import styles from '../style.css'

export default class First extends Component{

  render(){
    const Styles = {
      marginTop: "100px"
    }
    return(
      <div  className={styles.first}>
        <h1 style={Styles}> I was told to save the world</h1>
        <Link to="second/param-example"> secondHome </Link>

      </div>
    );
  }
}
