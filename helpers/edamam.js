const request = require('request');
const config = require('../config.js');

let getRecipeByIngredientName = (ingredient,gotRecipe) => {

  let options = {
    url: `https://api.edamam.com/search`,
    qs: {
    	q: ingredient,
    	app_key:config.TOKEN,
    	app_id: 'e1ed05f5',
    	diet: 'low-carb',
    	health: 'gluten-free'
    }
   
  };

  //get request using request module
  request.get(options,function(error, result, body){
    if(error){
      console.log('could not get the recipe',error);
    } else {
      gotRecipe(body);
      console.log('got recipe');
    }
  });

}