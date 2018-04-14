import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Signup from './components/signup.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total:0
    }
   
  }


  calculate(data){
    //console.log(data)
    if(data.gender==='male'){
      var x = (10*data.weight)+(6.25 * data.height) - (5*data.age) + 5; 
    }
    else if (data.gender === 'female'){
      var x = (10*data.weight)+(6.25 * data.height) - (5*data.age) - 161; 
    }
    this.setState({
      total: x
    })

  }


  submit(data){
    console.log(data)
    $.ajax({
      type:'POST',
      data:{user:data.user,age:data.age,gender:data.gender,weight:data.weight,height:data.height,total:data.total,intake:this.state.total},
      url:'/info' ,
      success:function(data){
        alert('success')
       // console.log(data)
      },
      erroe:function(){
        alert('error')
      }
    })
  }


  render () {
    return (<div>
      <h1> HEALTH WATCHER</h1>
      <Signup submit={this.submit.bind(this)} calculate={this.calculate.bind(this)}/>
      <br></br> <br></br>
      YOUR DAILY INTAKE IS: {this.state.total}


    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));