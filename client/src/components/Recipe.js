import React from 'react';
import app_key from '../../../config.js';
require("babel-core/register");
require("babel-polyfill");


class Recipe extends React.Component {
	constructor(props){
		super();
		this.state = {
			activeRecipe: [],
			ingredients: []
		}
		
	}

	async componentDidMount(){

		const title = this.props.location.state.recipe;
		const request = await fetch (`https://api.edamam.com/search?q=${title}&app_id=e1ed05f5&app_key=${app_key.TOKEN}`)

		const response = await request.json();
		// console.log(response.hits[0].recipe);
		this.setState({
		   activeRecipe: response.hits[0].recipe,
		   ingredients: response.hits[0].recipe.ingredientLines
		})
	}

	render(){
		console.log('single recipe',this.state.activeRecipe);
		const recipe = this.state.activeRecipe;
		const ingredients = this.state.ingredients
		
		return(


			<div>
			 <h1>{recipe.label}</h1>
			 <img src = {recipe.image} />
			 <ol>
				 { ingredients.map((ingredient) => {
				 	return <li key = {ingredient}>{ingredient}</li>
				 })}
			 </ol>
			 <div>
			  Find instructions: 
			   <a href={recipe.url}>
			     here
			   </a>
			 </div>
			 
			 <div>
			 	{`Source- ${recipe.source}`}
			 </div>

			</div>

			)
	}

} 

export default Recipe;