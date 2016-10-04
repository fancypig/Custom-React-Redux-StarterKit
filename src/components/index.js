import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image } from 'react-native';


export default class ToolBar extends Component{
  navigateBack(){
    if (this.props.route.index > 0) {
      this.props.navigator.pop();
      this.props.route.index -= 1;
    }
  }
  render(){
    return(
      <TouchableOpacity onPress = {this.navigateBack.bind(this)}>
      <View style = {styles.toolbar}>
          <Image source = {require('../images/up-arrow.png')} style = {styles.upArrow} onPress = {this.navigateBack.bind(this)}/>
      </View>
      </TouchableOpacity>

    );
  }
}
const styles = StyleSheet.create({
  toolbar:{
    marginTop:20,
    height: 30,
    backgroundColor: '#2D2B57',
    alignItems: 'center'
  },
  upArrow:{
    width:30,
    height:30,
  }
});
