import React, {Component} from 'react';
import {Link} from "react-router";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'
import {selectUser} from '../actions/index'
import UserDetails from './user-detail';
import Menu from 'react-motion-menu'

class Home extends Component{
  constructor(props){
    super(props);
    this.state = {
      isOpen: false,
    }
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
          style = {{position: 'absolute', top: '10px'}}
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
      <div>
      {this.renderMenu()}

        <h1>Hello world</h1>
        {this.props.children}
        {this.renderList()}
        <UserDetails/>
      </div>
    );
  }
}
const style = {
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
