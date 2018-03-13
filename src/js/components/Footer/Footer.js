import React, { Component } from 'react';

import './Footer.css';


export default class Footer extends Component{
	render(){
		return(<div>
				<input type="radio" name="filter" value="All" />All
				<input type="radio" name="filter" value="Active" />Active
				<input type="radio" name="filter" value="Completed" />Completed
			</div>)
	}
}