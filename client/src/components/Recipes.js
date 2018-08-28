import React from 'react';
import { Link } from "react-router-dom";


const Recipes = (props) => (
	<div>

	 { props.recipes.map((recipe) => {
        return (
          <div key = {recipe.recipe.uri} >
            <img src = {recipe.recipe.image} alt = {recipe.recipe.label}/>
             <div className="recipe__text">
                <h5 className="recipes__title">
                  { recipe.recipe.label.length < 20 ? `${recipe.recipe.label}` : `${recipe.recipe.label.substring(0, 25)}...` }
                </h5>
                <p className="recipes__subtitle">Publisher: <span>
                  { recipe.recipe.source }
                </span></p>
              </div>
              <button className="recipe_buttons">
                <Link to={{
                  pathname: `/recipe/${recipe.recipe.label}`,
                  state: { recipe: recipe.recipe.label }
                }}>View Recipe</Link>
              </button>
          </div>
        );
      })}

	</div>
)


export default Recipes;