import React from 'react';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     states:{
      user: '',
      age:0,
      weight:0,
      height:0,
      gender:'',
      
      }
    };
    this.submit =this.submit.bind(this);
    this.onChange =this.onChange.bind(this);
    this.calculate =this.calculate.bind(this);
    this.renderInfo =this.renderInfo.bind(this);

  
  }



  onChange(e){
    
      var states= this.state.states;
      var name = e.target.name;
      var value = e.target.value;
      states[name] = value;
    this.setState(
      {states}
    )

   
  }

calculate(){
  this.props.calculate(this.state.states)
}

renderInfo(){
  this.props.renderInfo(this.state.states.user)
}




  submit(){
    this.props.submit(this.state.states)
  }

  

  
  render() {
    
    return (<div>
      
      Enter your NAME: <input name = "user" value={this.state.user} onChange={this.onChange}/> <br></br>
      <h4>FILL IN YOUR INFO :</h4> 
      Enter YOUR AGE: <input name="age" value={this.state.age}  onChange={this.onChange}/> <br></br><br></br><br></br>
      Enter YOUR WEIGHT: <input name="weight" value={this.state.weight} onChange={this.onChange}/> <br></br><br></br><br></br>     
      Enter YOUR HEIGHT: <input name= "height" value={this.state.height} onChange={this.onChange}/> <br></br><br></br><br></br>     
      Enter YOUR GENDER: <input name="gender" value={this.state.gender} onChange={this.onChange}/> <br></br><br></br><br></br>    

      <button onClick={this.calculate}> CALCULATE </button>
      <button onClick={this.submit}> SAVE </button>
      <button onClick={this.renderInfo}> HISTORY </button>


    </div>) 
  }
}

export default Signup;