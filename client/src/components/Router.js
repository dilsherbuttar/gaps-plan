import React from 'react';
import { BrowserRouter, Switch, Route, browserHistory} from 'react-router-dom';

import App from "./App.js";
import Recipe from "./Recipe.js";

const Router = () => (
	  
		<BrowserRouter history={browserHistory}>
		  <Switch>
			<Route path = "/" component= {App} exact />
			<Route path = "/recipe/:uri" component= {Recipe}/>
		  </Switch>
		</BrowserRouter>
	 
);

export default Router;