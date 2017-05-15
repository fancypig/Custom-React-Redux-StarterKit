import React, {Component} from 'react';
import {Link} from "react-router";
import ReactDOM from 'react-dom';
import FontAwesome from "react-fontawesome"
import {browserHistory} from 'react-router';
import promise from 'es6-promise'
import 'isomorphic-fetch';
promise.polyfill();

export default class First extends Component{

  constructor(){
    super()
    this.state ={
      userName: '',
      pwd: '',
      buttonDisabled:true,
      renderErr:false,
    }
  }
  componentWillMount(){
    return fetch('http://127.0.0.1:8080/hello',{
      method:'GET',
      mode:'no-cors',
      headers:{
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Accept':'application/json',
        'Content-Type':'application/json',
      },
    })
    .then((response)=>{
      console.log(response)
      return response.json()
    })
    .then((responseJson)=>{
      console.log(responseJson)
    })
    .catch((error)=>{
      console.log(error)
    })
  }
  changeUsername(content){
    let text = content.target.value
    this.setState({userName:text})
    if (text.trim().length > 0 && this.state.pwd.trim().length > 0){
      this.setState({buttonDisabled:false})
    }
    else{
      this.setState({buttonDisabled:true})
    }
  }
  changePwd(content){
    let text = content.target.value
    this.setState({pwd:text})

    if (text.trim().length > 0 && this.state.userName.trim().length > 0){
      this.setState({buttonDisabled:false})
    }
    else{
      this.setState({buttonDisabled:true})
    }
  }
  mouseEnter(){
    if (this.state.buttonDisabled){
      this.setState({renderErr:true})
    }
  }
  mouseLeave(){
    if (this.state.buttonDisabled){
      this.setState({renderErr:false})
    }
  }
  renderError(){
    if (this.state.renderErr){
      let errMessage = ''
      if (this.state.userName.trim().length === 0){
        errMessage = '账号不能为空'
      }
      else if(this.state.pwd.trim().length === 0){
        errMessage = '密码不能为空'
      }
      
      return(
        <div className='animated fadeIn' id = 'errContainer'>
          <p style={{marginLeft:'5px', marginRight:'5px', }}>{errMessage}</p>
        </div>
      )
    }
  }
  render(){
    return(
      <div id='container'>
        <div className = 'animated slideInDown' id = 'topBar'>Template</div>

        <div className = 'animated slideInUp' id='loginDialog'>
                  {this.renderError()}

          <div id='headBar'>登陆界面</div>

          <div id='inputs'>
            <input className = 'loginInput'
            onChange = {this.changeUsername.bind(this)} type='text' placeholder='用户名'/>
            <input className = 'loginInput' 
            onChange = {this.changePwd.bind(this)} type='password' placeholder='密码'/>
          </div>

          <button style={{
            backgroundColor: this.state.buttonDisabled ? '#000':'#a5a5a5',
            cursor: this.state.buttonDisabled ? "not-allowed" : 'pointer'}}
            onMouseEnter={this.mouseEnter.bind(this)}
            onMouseLeave={this.mouseLeave.bind(this)}>确定</button>
          <Link id ='signupLink' to='signup'>注册</Link>
        </div>

      </div>
    );
  }
}
