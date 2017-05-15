import React, {Component} from 'react';
import {Link} from "react-router";
import FontAwesome from "react-fontawesome"
export default class Projects extends Component{
  constructor(){
    super()
    this.state={
      buttonDisabled: true,
      showPassword: 'password',
      pwdStrength:'弱',
      pwd: '',
      confirmPwd: '',
      userName: '',
      errorMessage: '',
      renderErr: false,
    }
  }
  hasLowerCase(str) {
    return str.toUpperCase() != str;
  }
  hasUpperCase(str) {
    return str.toLowerCase() != str;
  }
  hasNumber(myString) {
    return /\d/.test(myString);
  }
  hasSymbol(str){
    return !/^[a-zA-Z0-9]+$/.test(str)
  }
  pwdChange(content){
    let text = content.target.value;
    this.setState({pwd: text})

    if (text.length < 8){
      this.setState({pwdStrength:'弱'})
      this.setState({buttonDisabled:true})
      return
    }

    let strength = 0;
    if (this.hasLowerCase(text))
      strength += 1
    if (this.hasUpperCase(text))
      strength += 1
    if (this.hasSymbol(text))
      strength += 1
    if (this.hasNumber(text))
      strength += 1

    let value = '弱'
    switch (strength)
    {
      case 1: value = '弱';break;
      case 2: value = '弱';break;
      case 3: value = '中';break;
      case 4: value = '高';break;
    }
    this.setState({pwdStrength: value}, ()=>{
      if (text === this.state.confirmPwd && this.state.pwdStrength !== '弱' && this.state.userName.trim().length > 0){
        this.setState({buttonDisabled:false})
      }
      else{
        this.setState({buttonDisabled:true})
      }
    })
  }
  confirmPwdChange(content){
    let text = content.target.value
    this.setState({confirmPwd: text})
    if (text === this.state.pwd && this.state.pwdStrength !== '弱' && this.state.userName.trim().length > 0){
      this.setState({buttonDisabled:false})
    }
    else{
      this.setState({buttonDisabled:true})
    }
  }
  userNameChange(content){
    this.setState({userName:content.target.value})
    if (content.target.value.trim().length === 0){
      this.setState({buttonDisabled:true})
    }
    else if (this.state.confirmPwd === this.state.pwd && this.state.pwdStrength !== '弱'){
      this.setState({buttonDisabled:false})
    }
  }
  mouseEnter(){
    if(this.state.buttonDisabled){
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
      if (this.state.pwd.length < 8){
        errMessage = '密码不能少于8位'
      }
      else if(this.state.pwd !== this.state.confirmPwd){
        errMessage = '请输入相同密码'
      }
      else if(this.state.userName.trim().length === 0){
        errMessage = '用户名不能为空'
      }
      else{
        errMessage = '密码必须包括大写字母，小写字母，数字和标志其中三项'
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
          <div className = 'animated slideInUp' id='signupDialog'>
                      {this.renderError()}

            <div id='headBar'>注册界面</div>

            <div id='inputs'>
              <input className = 'loginInput' onChange = {this.userNameChange.bind(this)} type='text' placeholder='用户名'/>
              <div style={{display:'flex',width:'65%', paddingLeft:0}}>
                <input style={{width:'100%'}} onChange = {this.pwdChange.bind(this)}
                  className = 'loginInput'  type={this.state.showPassword} placeholder='密码'
                />
                <FontAwesome
                  name = 'eye'
                  style={{marginLeft:'15px', marginTop:'40px', color: this.state.showPassword ==='text'? '#2991d1' : '#000', cursor:'pointer'}}
                  onClick={()=>{
                    if (this.state.showPassword === 'text'){
                      this.setState({showPassword: 'password'})
                    }
                    else{
                      this.setState({showPassword: 'text'})
                    }
                  }}
                />
              </div>

              <div style={{display:'flex', alignItems:'center', width:'65%', height:'30px', marginTop:'20px'}}>
                <p style={{marginRight:'5px'}}>密码强度:</p>
                <div style={{
                  marginLeft:0,
                  marginRight:0,
                  height:'30px',
                  width:this.state.pwdStrength === '弱'?'30%':this.state.pwdStrength === '中'? '45%' : '60%',
                  backgroundColor:this.state.pwdStrength === '弱'?'#e56f67':this.state.pwdStrength === '中'? '#e0e08b' : '#8be0a3',
                  }}></div>
                <p style={{marginLeft:'5px'}}>{this.state.pwdStrength}</p>
              </div>

              <input className = 'loginInput'  style={{marginTop:'20px'}} 
              onChange = {this.confirmPwdChange.bind(this)}
              type={this.state.showPassword} placeholder='确认密码'/>
            </div>

            <div id='buttonGroup' style={{display:'flex', justifyContent:'space-between'}}>
              <button style= {{
                cursor: this.state.buttonDisabled ? 'not-allowed' : 'pointer', 
                backgroundColor:this.state.buttonDisabled ? '#000':'#a5a5a5'}}
                onMouseEnter={this.mouseEnter.bind(this)} 
                onMouseLeave={this.mouseLeave.bind(this)} className='signupButton'>确定注册</button>
              <Link className='signupButton' to='/'>返回登陆</Link>
            </div>
          </div>
        </div>
      );
    }
  }
