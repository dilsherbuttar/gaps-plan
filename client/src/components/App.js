import React from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Form from './Form.js';
import Recipes from './Recipes.js';
import Login from './Login.js';
import NavBar from './NavBar.js';
import app_key from '../../../config.js'


require("babel-core/register");
require("babel-polyfill");

class App extends React.Component {
  constructor(props){
    super();
    this.state = {
      recipes: []
    }
    this.getRecipe = this.getRecipe.bind(this)
  }
  
  async componentDidMount(){
    const api_call = await fetch (`https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=''&app_id=e1ed05f5&app_key=${app_key.TOKEN}&health=vegan`)
    
    const data = await api_call.json();
    this.setState({
      recipes:data.hits
    });
  }
 

  async getRecipe(e){
    e.preventDefault();
    const recipeName = e.target.elements.recipeName.value;
    const api_call = await fetch (`https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=${recipeName}&app_id=e1ed05f5&app_key=${app_key.TOKEN}&health=vegan`)
    console.log(recipeName)
    const data = await api_call.json();
    this.setState({
      recipes:data.hits
    });
    console.log(this.state.recipes)
  }


  render () {
    return (
      <MuiThemeProvider>
        <div>
          <NavBar />
          <Form getRecipe = {this.getRecipe}/>
          <Recipes recipes = {this.state.recipes}/>
        </div>
      </MuiThemeProvider>  
     )
  }

}

export default App;