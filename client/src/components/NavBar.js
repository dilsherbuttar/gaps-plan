import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Login from './Login.js'


class NavBar extends React.Component {

	constructor(props){
		super();
			
	}


	render(){

	     const { classes } = this.props;
		return (
			
			<div className= "root" >
		      <AppBar position="static" color="default">
		        <Toolbar>
		          <Typography variant="title" color="inherit">
		            Recipes
		          </Typography>
		          <Login />
		        </Toolbar>
		      </AppBar>
		    </div>

		)
	}
	
}

export default NavBar;