import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      message: "hello world from react"
    }

  }


  render () {
    return (<div>
      <h1>{this.state.message}</h1>
      </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));