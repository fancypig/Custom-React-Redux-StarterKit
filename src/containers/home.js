import React, {Component} from 'react';
import {Link} from "react-router";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'
import {selectUser} from '../actions/index'
import Menu from 'react-motion-menu'
var BurgerMenu = require('react-burger-menu').pushRotate;

class Home extends Component{
  constructor(props){
    super(props);
    this.state = {
      isOpen: false,
    }
    this.showSettings = this.showSettings.bind(this)
  }
  showSettings(event) {
    event.preventDefault();
  }
  handleOnOpen(name){
    this.setState({[name] : {isOpen:true}});
  }
  handleOnClose(name){
    this.setState({[name] : {isOpen:false}});
  }
  renderList() {
      return this.props.users.map((user) => {
          return (
              <li
                  key={user.id}
                  onClick={() => this.props.selectUser(user)}
              >
                  {user.first} {user.last}
              </li>
          );
      });
  }


  renderMenu(){
    return(
      <div style = {{position: 'fixed'}}>
        <Menu
          direction = "horizontal"
          distance = {80}
          onOpen = {this.handleOnOpen.bind(this)}
          onClose = {this.handleOnClose.bind(this)}
          width = {50}
          height = {50}
          y = {20}
          x = {50}
          customStyle = {{
            color: "#FFF",
            textAlign: "center",
            lineHeight: '50px',
            backgroundColor: '#16A085',
            border: 'solid 1px #16A085',
            borderRadius: '10px'
          }}
          style = {{position: 'absolute', top: '0px', left: '100px'}}
          >
          <div><i className = {this.state.isOpen ? "fa fa-times" : "fa fa-bars"}> </i></div>
          <div><i className = 'fa fa-home'></i></div>
          <div><i className = 'fa fa-heart'></i></div>
        </Menu>
      </div>
    )
  }
  render(){
    return(
      <div id="outer-container" >
        <BurgerMenu outerContainerId={ "outer-container" } isOpen={this.state.isOpen} pageWrapId={ "page-wrap" } styles = {style}>
          <a id="home" style = {style.menuItem} className="menu-item" href="/">Home</a>
          <a id="about" style = {style.menuItem} className="menu-item" href="/second">About</a>
          <a id="contact" style = {style.menuItem} className="menu-item" href="/contact">Contact</a>
          <a style = {style.menuItem} onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
        </BurgerMenu>
        <div id="page-wrap">
          <h1 style={{margin:'0'}}>Hello World</h1>
          {this.props.children}
        </div>
      </div>
    );
  }
}
const style = {
  menuItem:{
    color:'#fffce1',
    textDecoration: 'none',
  },
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    left: '36px',
    top: '36px'
  },
  bmBurgerBars: {
    background: '#373a47'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenu: {
    background: '#373a47',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  },
  links:{
    color:"#fff"
  },
}
function mapStateToProps(state) {
    return {
        users: state.users
    };
}
function matchDispatchToProps(dispatch){
    return bindActionCreators({selectUser: selectUser}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Home);
