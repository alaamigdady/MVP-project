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




  renderInfo(user) {
    //console.log('got here');
    $.get("/info", function(data) {

      
    })
    .done(data => {
      this.setState({
        data: data,
        user:user
      });
      
    });  
    
  }




  


  calculate(data){
    
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
    
    $.ajax({
      type:'POST',
      data:{user:data.user,age:data.age,gender:data.gender,weight:data.weight,height:data.height,total:data.total,intake:this.state.total},
      url:'/info' ,
      success:function(data){
       // alert('success')
       
      },
      error:function(){
        alert('error')
      }
    })
  }


  


  


render(){
  if(!this.state.data){
    return (<div>
      <h1> HEALTH WATCHER</h1>
      <Signup submit={this.submit.bind(this)} calculate={this.calculate.bind(this)} renderInfo={this.renderInfo.bind(this)}/>
      <br></br> <br></br>
      YOUR DAILY INTAKE IS: {this.state.total}




    </div>)

  }
  else{
    //console.log(this.state.data)
    var info = this.state.data.filter((user) => user.user === this.state.user )
    console.log(info)
   var x=9+7
   return( <div> {info.map((obj)=>
    <h3> name :{obj.user}, weight: {obj.weight}, age: {obj.age}</h3>)}
   
       </div>)
  
  

}
}

}

ReactDOM.render(<App />, document.getElementById('app'));