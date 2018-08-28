import React from 'react';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import Button from '@material-ui/core/Button';
const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});

const findE = (e) => console.log(e.target.value)

const Form = (props) => (
	<div>
		<form onSubmit = {props.getRecipe} >
		 <MuiThemeProvider theme={theme}>
	        <TextField
	          name = "recipeName"
	          label="Search Recipes"
	          id="mui-theme-provider-input"
	          
	        />
	      </MuiThemeProvider>
		 
		 <Button >Search</Button>
		</form>
	</div>

);

export default Form;