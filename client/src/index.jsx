import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Form from './components/Form.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      message: "hello world from react"
    }
    this.getRecipe = this.getRecipe.bind(this);

  }

  getRecipe(e) {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
    console.log(recipeName);
  }


  render () {
    return (<div>
      <h1>{this.state.message}</h1>
      <Form getRecipe = {this.getRecipe}/>
      </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));