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


  render () {
    return (<div>
      <h1> HEALTH WATCHER</h1>
      <Signup/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));