import React, {Component} from 'react';
class Home extends Component{
  constructor(props){
    super(props);
    this.state = {
    }
  }
  render(){
    return(
      <div style = {{height:'100%'}}>
        <div id='bgDiv'/>
        {this.props.children}
      </div>
    );
  }
}


export default Home;
