import React from 'react';

class Info extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 0,
      weight:0,
      height:0,
      gender:''
    };
  
  }

  

  render() {
    //console.log('render',this)
    return (<div>
      <h4>FILL IN YOUR INFO :</h4>
      Enter YOUR AGE: <input value={this.state.age} /> <br></br>
      Enter YOUR WEIGHT: <input value={this.state.weight} /> <br></br>      
      Enter YOUR HEIGHT: <input value={this.state.height} /> <br></br>     
      Enter YOUR GENDER: <input value={this.state.gender} /> <br></br>     

      <button > GO </button>
    </div>) 
  }
}

export default Info;