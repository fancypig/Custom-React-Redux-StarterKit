import React, {Component} from 'react';
import {Link} from "react-router";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'
import {selectUser} from '../actions/index'
import UserDetails from './user-detail';


class Home extends Component{
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
  render(){
    return(
      <div>
        <h1> Hello World </h1>
        {this.props.children}
        {this.renderList()}
        <UserDetails/>
      </div>
    );
  }
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
